(function () {
  var TEXT = window.WEDDING_TEXT;
  var LANGS = window.WEDDING_LANGS;

  var app = document.getElementById('app');
  var landing = document.getElementById('landing');
  var scene = document.getElementById('scene');
  var letter = document.getElementById('letter');
  var envBtn = document.getElementById('envBtn');
  var backBtn = document.getElementById('backBtn');
  var langButtons = Array.prototype.slice.call(document.querySelectorAll('.lang-btn'));
  var programList = document.getElementById('programList');
  var routeList = document.getElementById('routeList');
  var programTpl = document.getElementById('programTpl');
  var routeTpl = document.getElementById('routeTpl');

  var NEUTRAL_TITLE = document.title;
  var ZOOM_MS = 1000;
  var OPEN_MS = 2450;

  var state = { stage: 'lang', lang: null };
  var timers = [];

  function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }

  function lookup(t, path) {
    return path.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, t);
  }

  function setStage(stage) {
    state.stage = stage;
    app.className = 'app stage-' + stage;
    landing.hidden = !(stage === 'lang' || stage === 'zoom');
    scene.hidden = !(stage === 'envelope' || stage === 'opening');
    letter.hidden = stage !== 'letter';
  }

  function applyLanguage(code) {
    var t = TEXT[code];
    document.documentElement.lang = code;
    document.title = t.pageTitle;
    app.style.setProperty('--scene-bg', LANGS[code].bg);

    document.querySelectorAll('[data-t]').forEach(function (el) {
      el.textContent = lookup(t, el.getAttribute('data-t'));
    });
    envBtn.setAttribute('aria-label', t.hint);
    backBtn.setAttribute('aria-label', t.back);
    document.querySelector('.overview-map').setAttribute('aria-label', t.mapAlt);

    programList.textContent = '';
    t.program.forEach(function (p) {
      var node = programTpl.content.cloneNode(true);
      var chip = node.querySelector('.chip');
      chip.textContent = p.time;
      chip.style.background = p.chip;
      node.querySelector('.program-title').textContent = p.title;
      programList.appendChild(node);
    });

    routeList.textContent = '';
    t.routes.forEach(function (r) {
      var node = routeTpl.content.cloneNode(true);
      node.querySelector('.route-swatch').style.background = r.color;
      node.querySelector('.route-title').textContent = r.title;
      node.querySelector('.route-meta').textContent = r.meta;
      var ol = node.querySelector('.route-steps');
      r.steps.forEach(function (s) {
        var li = document.createElement('li');
        li.textContent = s;
        ol.appendChild(li);
      });
      var frame = node.querySelector('iframe');
      frame.src = r.embed;
      frame.title = t.mapFrameTitle + ' — ' + r.title;
      var link = node.querySelector('.map-btn');
      link.href = r.url;
      node.querySelector('.map-btn-label').textContent = t.mapsButton;
      routeList.appendChild(node);
    });
  }

  function pick(code) {
    if (state.stage !== 'lang' || !TEXT[code]) return;
    state.lang = code;
    applyLanguage(code);
    langButtons.forEach(function (b) {
      b.classList.add(b.getAttribute('data-lang') === code ? 'is-zooming' : 'is-fading');
    });
    setStage('zoom');
    later(function () {
      setStage('envelope');
      envBtn.focus({ preventScroll: true });
    }, ZOOM_MS);
  }

  function openEnvelope() {
    if (state.stage !== 'envelope') return;
    setStage('opening');
    later(function () {
      setStage('letter');
      window.scrollTo(0, 0);
    }, OPEN_MS);
  }

  function goBack() {
    clearTimers();
    state.lang = null;
    langButtons.forEach(function (b) { b.classList.remove('is-zooming', 'is-fading'); });
    document.documentElement.lang = 'hr';
    document.title = NEUTRAL_TITLE;
    setStage('lang');
    window.scrollTo(0, 0);
  }

  langButtons.forEach(function (b) {
    b.addEventListener('click', function () { pick(b.getAttribute('data-lang')); });
  });
  envBtn.addEventListener('click', openEnvelope);
  backBtn.addEventListener('click', goBack);
})();
