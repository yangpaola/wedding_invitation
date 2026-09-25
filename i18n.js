// All guest-facing copy, one block per language. Each language is shown on its own.
(function () {
  var HOTEL = 'Park Boutique Hotel, Jurja Habdelića 6, 42000 Varaždin';

  function routeLink(origin, hl) {
    return 'https://www.google.com/maps/dir/?api=1'
      + '&origin=' + encodeURIComponent(origin)
      + '&destination=' + encodeURIComponent(HOTEL)
      + '&travelmode=driving&hl=' + hl;
  }
  function routeEmbed(origin, hl) {
    return 'https://maps.google.com/maps?output=embed'
      + '&saddr=' + encodeURIComponent(origin)
      + '&daddr=' + encodeURIComponent(HOTEL)
      + '&dirflg=d&hl=' + hl;
  }

  var PINK = '#F6D5DA';
  var GREEN = '#D7E6D2';
  var ROUTE_PINK = '#D48A99';
  var ROUTE_GREEN = '#6F9B72';

  window.WEDDING_LANGS = {
    hr: { bg: '#E4E9EC' },
    en: { bg: '#D5E4D1' },
    ko: { bg: '#EDE5D8' }
  };

  window.WEDDING_TEXT = {
    hr: {
      pageTitle: 'Paola & Geonmo · Svadbena večera',
      eyebrow: 'Svadbena večera',
      hint: 'Dodirnite omotnicu',
      back: 'Natrag na odabir jezika',
      brideLabel: 'Mladenka', bride: 'Paola',
      groomLabel: 'Mladoženja', groom: 'Geonmo',
      coupleShort: 'Paola & Geonmo',
      intro: 'Pozivamo vas na večeru povodom našeg vjenčanja.',
      dateLabel: 'Datum', dateBig: '06 · 02 · 2027', dateLine: 'subota',
      timeLabel: 'Dolazak', timeBig: '18:00', timeLine: 'piće dobrodošlice i zalogajčići',
      venueLabel: 'Mjesto proslave',
      venueName: 'Park Boutique Hotel',
      venueAddress: 'Jurja Habdelića 6, 42000 Varaždin',
      venueNote: 'U parku Vatroslava Jagića, u centru grada',
      programTitle: 'Program večeri',
      program: [
        { time: '18:00', chip: GREEN, title: 'Piće dobrodošlice i zalogajčići' },
        { time: 'Zatim', chip: PINK, title: 'Svadbena večera i zabava' }
      ],
      routesTitle: 'Kako doći',
      mapAlt: 'Karta: ruta od Zagreba autocestom A4 i ruta od Preloga preko Čakovca do Varaždina',
      map: { zagreb: 'Zagreb', varazdin: 'Varaždin', cakovec: 'Čakovec', prelog: 'Prelog', drava: 'Drava' },
      mapsButton: 'Otvori u Google kartama',
      mapFrameTitle: 'Google karta rute',
      routes: [
        { title: 'Iz Zagreba', meta: 'oko 90 km · 1–1,5 h', color: ROUTE_PINK,
          url: routeLink('Zagreb, Croatia', 'hr'), embed: routeEmbed('Zagreb, Croatia', 'hr'), steps: [
          'Autocestom A4 do izlaza Varaždin (naplata cestarine).',
          'Zatim pratite oznake za centar grada.'
        ] },
        { title: 'Iz Preloga', meta: 'oko 30 km · 35 min', color: ROUTE_GREEN,
          url: routeLink('Prelog, Croatia', 'hr'), embed: routeEmbed('Prelog, Croatia', 'hr'), steps: [
          'Vozite prema Čakovcu, pa preko Drave do Varaždina.',
          'U Varaždinu pratite oznake za centar grada.'
        ] }
      ],
      closing: 'Veselimo se vašem dolasku.'
    },

    en: {
      pageTitle: 'Paola & Geonmo · Wedding Dinner',
      eyebrow: 'Wedding Dinner',
      hint: 'Tap to open',
      back: 'Back to language selection',
      brideLabel: 'Bride', bride: 'Paola',
      groomLabel: 'Groom', groom: 'Geonmo',
      coupleShort: 'Paola & Geonmo',
      intro: 'Please join us for dinner to celebrate our wedding.',
      dateLabel: 'Date', dateBig: '06 · 02 · 2027', dateLine: 'Saturday',
      timeLabel: 'Arrival', timeBig: '6:00 pm', timeLine: 'Welcome drinks & finger food',
      venueLabel: 'Venue',
      venueName: 'Park Boutique Hotel',
      venueAddress: 'Jurja Habdelića 6, 42000 Varaždin',
      venueNote: 'In Vatroslav Jagić Park, in the city centre',
      programTitle: 'The evening',
      program: [
        { time: '6:00 pm', chip: GREEN, title: 'Welcome drinks and finger food' },
        { time: 'Then', chip: PINK, title: 'Wedding dinner and party' }
      ],
      routesTitle: 'Getting there',
      mapAlt: 'Map: route from Zagreb on the A4 motorway and route from Prelog via Čakovec to Varaždin',
      map: { zagreb: 'Zagreb', varazdin: 'Varaždin', cakovec: 'Čakovec', prelog: 'Prelog', drava: 'Drava' },
      mapsButton: 'Open in Google Maps',
      mapFrameTitle: 'Google map of the route',
      routes: [
        { title: 'From Zagreb', meta: 'approx. 90 km · 1–1.5 h', color: ROUTE_PINK,
          url: routeLink('Zagreb, Croatia', 'en'), embed: routeEmbed('Zagreb, Croatia', 'en'), steps: [
          'Take the A4 motorway to the Varaždin exit (toll road).',
          'Follow the signs for the city centre.'
        ] },
        { title: 'From Prelog', meta: 'approx. 30 km · 35 min', color: ROUTE_GREEN,
          url: routeLink('Prelog, Croatia', 'en'), embed: routeEmbed('Prelog, Croatia', 'en'), steps: [
          'Drive towards Čakovec, then cross the Drava to Varaždin.',
          'Follow the signs for the city centre.'
        ] }
      ],
      closing: 'We look forward to seeing you.'
    },

    ko: {
      pageTitle: '파올라 & 양건모 · 결혼 축하 만찬',
      eyebrow: '결혼 축하 만찬',
      hint: '봉투를 눌러주세요',
      back: '언어 선택으로 돌아가기',
      brideLabel: '신부', bride: '파올라',
      groomLabel: '신랑', groom: '양건모',
      coupleShort: '파올라 & 양건모',
      intro: '저희 결혼을 축하하는 저녁 식사에 초대합니다.',
      dateLabel: '날짜', dateBig: '06 · 02 · 2027', dateLine: '토요일',
      timeLabel: '도착', timeBig: '오후 6시', timeLine: '환영 음료와 핑거푸드',
      venueLabel: '장소',
      venueName: '파크 부티크 호텔',
      venueAddress: '바라주딘, 유라이 합델리치 거리 6',
      venueNote: '바라주딘 시내, 바트로슬라브 야기치 공원 안',
      programTitle: '저녁 일정',
      program: [
        { time: '오후 6시', chip: GREEN, title: '환영 음료와 핑거푸드' },
        { time: '이어서', chip: PINK, title: '결혼 축하 만찬과 파티' }
      ],
      routesTitle: '오시는 길',
      mapAlt: '지도: 자그레브에서 A4 고속도로로 오는 경로와 프렐로그에서 차코베츠를 거쳐 바라주딘으로 오는 경로',
      map: { zagreb: '자그레브', varazdin: '바라주딘', cakovec: '차코베츠', prelog: '프렐로그', drava: '드라바강' },
      mapsButton: '구글 지도에서 경로 보기',
      mapFrameTitle: '경로 지도',
      routes: [
        { title: '자그레브에서', meta: '약 90km · 1시간~1시간 30분', color: ROUTE_PINK,
          url: routeLink('Zagreb, Croatia', 'ko'), embed: routeEmbed('Zagreb, Croatia', 'ko'), steps: [
          'A4 고속도로를 타고 바라주딘 출구로 나옵니다 (유료 도로).',
          '시내 중심 방향 표지판을 따라오세요.'
        ] },
        { title: '프렐로그에서', meta: '약 30km · 35분', color: ROUTE_GREEN,
          url: routeLink('Prelog, Croatia', 'ko'), embed: routeEmbed('Prelog, Croatia', 'ko'), steps: [
          '차코베츠 방면으로 가다가 드라바강을 건너 바라주딘으로 옵니다.',
          '시내 중심 방향 표지판을 따라오세요.'
        ] }
      ],
      closing: '그날 뵙겠습니다.'
    }
  };
})();
