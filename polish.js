(() => {
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const de = () => root.lang === 'de';
  if (root.classList.contains('intro-pending')) {
    const intro = document.createElement('div');
    intro.className = 'mts-intro';
    intro.setAttribute('role', 'dialog');
    intro.setAttribute('aria-modal', 'true');
    intro.setAttribute('aria-label', de() ? 'Willkommen bei MTS' : 'Welcome to MTS');
    intro.innerHTML = `<div class="mts-intro-center"><img src="assets/mts-logo.png?v=20261007-blue" alt="MTS"><p>HAMBURG · WORLDWIDE</p><svg viewBox="0 0 480 95" aria-hidden="true"><path d="M25 65 Q130 -25 240 45 Q360 110 455 20 M80 80 Q140 25 240 45 Q310 -25 410 70"/><circle cx="240" cy="45" r="5"/><circle cx="25" cy="65" r="3"/><circle cx="455" cy="20" r="3"/><circle cx="80" cy="80" r="3"/><circle cx="410" cy="70" r="3"/></svg><div class="mts-intro-progress"><i></i></div></div><button class="mts-intro-skip" type="button">${de() ? 'Intro überspringen' : 'Skip intro'} ↗</button>`;
    document.body.append(intro);
    intro.querySelector('.mts-intro-progress i').style.animationDuration = Math.max(0, 4000 - (performance.now() - (window.mtsIntroStarted || 0))) + 'ms';
    const content = [...document.body.children].filter(el => el !== intro && !['SCRIPT','STYLE'].includes(el.tagName));
    const inertBefore = content.map(el => el.inert);
    content.forEach(el => el.inert = true);
    let dismissed = false;
    const previousFocus = document.activeElement;
    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      root.classList.remove('intro-pending');
      intro.classList.add('is-leaving');
      content.forEach((el,i) => el.inert = inertBefore[i]);
      if (intro.contains(document.activeElement)) {
        if (previousFocus && previousFocus !== document.body) previousFocus.focus();
        else document.querySelector('.mts-navbar-brand')?.focus({preventScroll:true});
      }
      setTimeout(() => intro.remove(), 450);
    };
    intro.querySelector('button').addEventListener('click', dismiss);
    intro.addEventListener('keydown', event => {
      if (event.key === 'Escape') dismiss();
      if (event.key === 'Tab') {event.preventDefault();intro.querySelector('button').focus();}
    });
    intro.querySelector('button').focus({preventScroll:true});
    setTimeout(dismiss, Math.max(0, 4000 - (performance.now() - (window.mtsIntroStarted || 0))));
    reduced.addEventListener('change', () => {if(reduced.matches) dismiss();});
  }
  const explorer = document.querySelector('.mts-explorer');
  if (!explorer) return;
  const modes = {
    sea:{path:'M280 75 Q390 110 471 224 M280 75 Q175 12 109 93',title:['Sea freight. Worldwide reach.','Seefracht. Weltweit verbunden.'],copy:['Container and consolidated cargo, coordinated from Hamburg to worldwide destinations.','Container und Sammelgut, von Hamburg zu weltweiten Zielen koordiniert.'],link:['Explore sea freight','Seefracht entdecken'],href:'seafreight.html'},
    air:{path:'M280 75 Q385 5 438 97 M280 75 Q140 -10 109 93',title:['Air freight. Time matters.','Luftfracht. Zeit zählt.'],copy:['Air cargo planning for urgent shipments and international connections.','Luftfrachtplanung für dringende Sendungen und internationale Verbindungen.'],link:['Explore air freight','Luftfracht entdecken'],href:'air-freight.html'},
    road:{path:'M280 75 Q292 95 310 107 M280 75 Q250 86 262 115',title:['Road freight. Closer connections.','Straßentransport. Direkte Verbindungen.'],copy:['Container drayage and long-haul transport across Germany and Europe.','Containertransporte und Fernverkehr in Deutschland und Europa.'],link:['Explore road freight','Straßentransport entdecken'],href:'road-transport.html'}
  };
  let selected = 'sea';
  const buttons = [...explorer.querySelectorAll('[data-route]')];
  const render = (animate = false) => {
    const mode = modes[selected];const lang = de() ? 1 : 0;
    buttons.forEach(button => {button.setAttribute('aria-pressed',String(button.dataset.route === selected));button.textContent = ({sea:['Sea','See'],air:['Air','Luft'],road:['Road','Straße']})[button.dataset.route][lang];});
    explorer.querySelector('.mts-route').setAttribute('d',mode.path);
    explorer.querySelector('.mts-route-info strong').textContent = mode.title[lang];
    explorer.querySelector('.mts-route-info p').textContent = mode.copy[lang];
    const link = explorer.querySelector('.mts-route-info a');link.href = mode.href;link.textContent = mode.link[lang] + ' ↗';
    explorer.querySelector('h2').textContent = de() ? 'Entdecken Sie Ihre Verbindung.' : 'Explore your connection.';
    explorer.querySelector('.mts-explorer-intro').textContent = de() ? 'Wählen Sie einen Transportweg. Entdecken Sie die Möglichkeiten.' : 'Choose a transport mode. Discover the possibilities.';
    explorer.querySelector('.mts-explorer-head>span').textContent = de() ? 'ROUTEN ENTDECKEN' : 'ROUTE EXPLORER';
    explorer.querySelector('.mts-explorer-status span').textContent = de() ? 'VON HAMBURG' : 'FROM HAMBURG';
    if (animate && !reduced.matches) {const map=explorer.querySelector('.mts-route-map');map.classList.remove('is-changing');void map.offsetWidth;map.classList.add('is-changing');}
  };
  buttons.forEach(button => button.addEventListener('click', () => {selected = button.dataset.route;render(true);}));
  new MutationObserver(() => render()).observe(root,{attributes:true,attributeFilter:['lang']});
  render();
})();
