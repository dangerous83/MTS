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
  const initScroll = () => {
    const targets = [...document.querySelectorAll('main .hm-reveal, main > section:not(:first-child):not(.hm-members):not(:has(.hm-reveal)), .site-footer-cta, .site-footer-grid > div')];
    // Existing home classes remain visible; one observer owns the new entries.
    document.querySelectorAll('.hm-reveal').forEach(el => el.classList.add('is-visible'));
    targets.forEach(el => {
      el.classList.add('mts-scroll-reveal');
      if (el.matches('.hm-service, .site-footer-grid > div')) {
        el.style.setProperty('--reveal-delay', (Array.from(el.parentElement.children).indexOf(el) % 4) * 90 + 'ms');
      }
    });
    let observer;
    const syncMotion = () => {
      observer?.disconnect();
      root.classList.toggle('has-scroll-motion', !reduced.matches && 'IntersectionObserver' in window);
      if (reduced.matches || !('IntersectionObserver' in window)) {
        targets.forEach(el => el.classList.add('is-inview'));
        return;
      }
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-inview');
        observer.unobserve(entry.target);
      }), {threshold:0.08, rootMargin:'0px 0px -24px 0px'});
      targets.filter(el => !el.classList.contains('is-inview')).forEach(el => observer.observe(el));
    };
    syncMotion();
    reduced.addEventListener('change', syncMotion);
    const progress = document.createElement('div');
    progress.className = 'mts-reading-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
    const hero = document.querySelector('.hm-hero');
    let frame = 0;
    const update = () => {
      frame = 0;
      const range = document.documentElement.scrollHeight - innerHeight;
      progress.style.setProperty('--reading-progress', range > 0 ? Math.min(1,Math.max(0,scrollY / range)) : 0);
      if (hero) hero.style.setProperty('--hero-drift', (!reduced.matches ? Math.min(60,Math.max(0,scrollY * .09)) : 0) + 'px');
    };
    const requestUpdate = () => {if (!frame && !document.hidden) frame=requestAnimationFrame(update);};
    window.addEventListener('scroll',requestUpdate,{passive:true});
    window.addEventListener('resize',requestUpdate,{passive:true});
    window.addEventListener('pageshow',requestUpdate);
    document.addEventListener('visibilitychange',requestUpdate);
    reduced.addEventListener('change',requestUpdate);
    update();
  };
  if (document.readyState !== 'complete') document.addEventListener('DOMContentLoaded',initScroll,{once:true});
  else initScroll();
  const explorer = document.querySelector('.mts-explorer');
  if (!explorer) return;
  const map = explorer.querySelector('.mts-route-map');
  const svg = map.querySelector('svg');
  const ns = 'http://www.w3.org/2000/svg';
  // Generalized connection sketches; these are not sailing schedules or live tracking.
  const modes = {
    sea:{color:'#83d5ff',icon:'<path d="M-7 2l2 5h10l2-5zM-4 2v-5h8v5M-2-3v-3h4v3M-7 9q3-2 7 0q3-2 7 0"/>',title:['Sea freight. Worldwide reach.','Seefracht. Weltweit verbunden.'],copy:['Container and consolidated cargo, coordinated from Hamburg to worldwide destinations.','Container und Sammelgut, von Hamburg zu weltweiten Zielen koordiniert.'],link:['Explore sea freight','Seefracht entdecken'],href:'seafreight.html',regions:[
      {name:['Americas','Amerika'],point:[169,112],path:'M295 93 Q242 48 169 112'},
      {name:['Gulf','Golfregion'],point:[353,137],path:'M295 93 Q274 98 272 133 Q294 127 310 132 Q319 152 327 160 Q348 171 358 151 Q359 142 353 137'},
      {name:['Asia','Asien'],point:[436,174],path:'M295 93 Q274 98 272 133 Q294 127 310 132 Q319 152 327 160 Q370 207 416 184 Q430 179 436 174'}]},
    air:{color:'#ffd58a',icon:'<path d="M0-8l2 6 6 4v2l-6-2v4l2 2v1L0 8l-4 1V8l2-2V2l-6 2V2l6-4z"/>',title:['Air freight. Time matters.','Luftfracht. Zeit zählt.'],copy:['Air cargo planning for urgent shipments and international connections.','Luftfrachtplanung für dringende Sendungen und internationale Verbindungen.'],link:['Explore air freight','Luftfracht entdecken'],href:'air-freight.html',regions:[
      {name:['Americas','Amerika'],point:[169,112],path:'M295 93 Q237 27 169 112'},
      {name:['Gulf','Golfregion'],point:[353,137],path:'M295 93 Q350 80 353 137'},
      {name:['Asia','Asien'],point:[436,174],path:'M295 93 Q430 48 436 174'}]},
    road:{color:'#9cebd5',icon:'<path d="M-8-4h10v9H-8zM2-1h4l2 3v3H2M6-1v3h2"/><circle cx="-5" cy="6" r="1.8"/><circle cx="5" cy="6" r="1.8"/>',title:['Road freight. Closer connections.','Straßentransport. Direkte Verbindungen.'],copy:['Container drayage and long-haul transport across Germany and Europe.','Containertransporte und Fernverkehr in Deutschland und Europa.'],link:['Explore road freight','Straßentransport entdecken'],href:'road-transport.html',regions:[
      {name:['Western Europe','Westeuropa'],point:[283.5,100],path:'M295 93 Q288 94 287 98 Q285 100 283.5 100'},
      {name:['Central Europe','Mitteleuropa'],point:[301.5,95.3],path:'M295 93 Q298 97 301.5 95.3'},
      {name:['Southern Europe','Südeuropa'],point:[274.4,112.3],path:'M295 93 Q288 94 287 98 Q281 102 281 107 Q277 109 274.4 112.3'}]}
  };
  const make = (tag, attrs={}, text='') => {
    const el=document.createElementNS(ns,tag);
    Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,String(v)));
    if(text) el.textContent=text;
    return el;
  };
  const traveler = make('g',{'class':'mts-route-traveler'});
  traveler.innerHTML='<circle r="10"/><g class="mts-traveler-icon" fill="none" stroke="#effaff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></g>';
  svg.append(traveler);
  const travelPath=make('path');
  const destinations=document.createElement('div');destinations.className='mts-map-destinations';
  destinations.setAttribute('role','group');
  for(let i=0;i<3;i++) {const button=document.createElement('button');button.type='button';button.dataset.destination=i;destinations.append(button);}
  map.after(destinations);
  const journey=document.createElement('div');journey.className='mts-route-journey';
  journey.innerHTML='<span></span><button class="mts-route-replay" type="button"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 5a5 5 0 1 1-1 5M3 1v4h4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg><span></span></button>';
  explorer.querySelector('.mts-route-choices').before(journey);
  let selected='sea',destination=0,animation=0,elapsed=0,lastTime=0,visible=true;
  const placeTraveler = fraction => {
    const length=travelPath.getTotalLength();
    const point=travelPath.getPointAtLength(length*fraction);
    const next=travelPath.getPointAtLength(Math.min(length,length*fraction+1));
    const angle=selected==='air' ? Math.atan2(next.y-point.y,next.x-point.x)*180/Math.PI+90 : 0;
    traveler.setAttribute('transform',`translate(${point.x} ${point.y}) scale(${selected==='road'?.19:1})`);
    traveler.querySelector('.mts-traveler-icon').setAttribute('transform',`rotate(${angle})`);
  };
  const step=time=>{
    if(lastTime) elapsed+=Math.min(64,time-lastTime);
    lastTime=time;
    const phase=(elapsed%10000)/8200;
    placeTraveler(Math.min(.998,phase));
    animation=requestAnimationFrame(step);
  };
  const syncTraveler=()=>{
    cancelAnimationFrame(animation);animation=0;lastTime=0;
    const active=visible&&!document.hidden&&!reduced.matches;
    traveler.classList.toggle('is-active',active);
    if(active) animation=requestAnimationFrame(step);
  };
  const restart=()=>{elapsed=0;lastTime=0;placeTraveler(0);syncTraveler();};
  if('IntersectionObserver' in window) new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;syncTraveler();}).observe(explorer);
  document.addEventListener('visibilitychange',syncTraveler);
  reduced.addEventListener('change',syncTraveler);
  journey.querySelector('button').addEventListener('click',restart);
  let pointerFrame=0,pointerX=70,pointerY=15;
  if(matchMedia('(hover:hover) and (pointer:fine)').matches){
    explorer.addEventListener('pointermove',event=>{
      if(reduced.matches)return;
      const bounds=explorer.getBoundingClientRect();pointerX=(event.clientX-bounds.left)/bounds.width*100;pointerY=(event.clientY-bounds.top)/bounds.height*100;
      if(!pointerFrame)pointerFrame=requestAnimationFrame(()=>{pointerFrame=0;explorer.style.setProperty('--glass-x',pointerX+'%');explorer.style.setProperty('--glass-y',pointerY+'%');});
    },{passive:true});
    explorer.addEventListener('pointerleave',()=>{cancelAnimationFrame(pointerFrame);pointerFrame=0;explorer.style.setProperty('--glass-x','70%');explorer.style.setProperty('--glass-y','15%');});
  }
  const buttons=[...explorer.querySelectorAll('[data-route]')];
  const regionButtons=[...destinations.querySelectorAll('button')];
  const render=(animate=false)=>{
    const mode=modes[selected],lang=de()?1:0,road=selected==='road',region=mode.regions[destination];
    explorer.style.setProperty('--route-color',mode.color);
    map.classList.toggle('is-europe',road);
    svg.setAttribute('viewBox',road?'259 74 70 65':'0 0 560 320');
    buttons.forEach(button=>{button.setAttribute('aria-pressed',String(button.dataset.route===selected));button.textContent=({sea:['Sea','See'],air:['Air','Luft'],road:['Road','Straße']})[button.dataset.route][lang];});
    regionButtons.forEach((button,i)=>{button.textContent=mode.regions[i].name[lang];button.setAttribute('aria-pressed',String(i===destination));});
    destinations.setAttribute('aria-label',de()?'Zielregion auswählen':'Choose destination region');
    const guides=svg.querySelector('.mts-map-guides');guides.replaceChildren();
    const nodes=svg.querySelector('.mts-map-nodes');nodes.replaceChildren();
    mode.regions.forEach((item,i)=>{
      guides.append(make('path',{d:item.path}));
      nodes.append(make('circle',{cx:item.point[0],cy:item.point[1],r:road?.75:3,'class':i===destination?'is-selected':''}));
      if(i===destination){
        nodes.append(make('circle',{cx:item.point[0],cy:item.point[1],r:road?1.65:7,'class':'mts-map-end-ring'}));
        const label=road?['PARIS','WARSAW','MADRID'][i]:['AMERICAS','GULF','ASIA'][i];
        nodes.append(make('text',{x:item.point[0]+(road?2:8),y:item.point[1]-(road?2:8),'font-size':road?2.7:11},label));
      }
    });
    const countryLabels=road?[[276,99,'FRANCE'],[296,100,'GERMANY'],[310,103,'POLAND'],[277,118,'SPAIN'],[305,123,'ITALY']]:[];
    countryLabels.forEach(([x,y,t])=>nodes.append(make('text',{x,y,'font-size':2.2,'class':'mts-map-country-label'},t)));
    svg.querySelector('.mts-route').setAttribute('d',region.path);travelPath.setAttribute('d',region.path);
    traveler.querySelector('.mts-traveler-icon').innerHTML=mode.icon;
    const rect=svg.querySelector('.mts-hub-plate');Object.entries(road?{x:288,y:84,width:18,height:5,rx:.7}:{x:251,y:56,width:88,height:22,rx:4}).forEach(([k,v])=>rect.setAttribute(k,v));
    const hubLabel=svg.querySelector('.mts-hub-label');hubLabel.setAttribute('x',road?'297':'295');hubLabel.setAttribute('y',road?'87.5':'71');hubLabel.setAttribute('font-size',road?'2.7':'11');
    svg.querySelector('.mts-hub-line').setAttribute('d',road?'M295 91V89':'M295 87V78');
    svg.querySelector('.mts-route-hub').setAttribute('r',road?'1':'4');svg.querySelector('.mts-route-ring').setAttribute('r',road?'2.4':'11');
    journey.querySelector(':scope > span').textContent='Hamburg → '+region.name[lang];journey.querySelector('button span').textContent=de()?'Erneut abspielen':'Replay route';journey.querySelector('button').disabled=reduced.matches;
    const names={sea:['Sea freight','Seefracht'],air:['Air freight','Luftfracht'],road:['European road network','Europäisches Straßennetz']};
    map.querySelector('.mts-map-caption b').textContent=names[selected][lang];map.querySelector('.mts-map-caption small').textContent=de()?'Beispielhafte Verbindungen':'Illustrative connections';
    explorer.querySelector('.mts-route-info strong').textContent=mode.title[lang];explorer.querySelector('.mts-route-info p').textContent=mode.copy[lang];
    const link=explorer.querySelector('.mts-route-info a');link.href=mode.href;link.textContent=mode.link[lang]+' ↗';
    explorer.querySelector('h2').textContent=de()?'Entdecken Sie Ihre Verbindung.':'Explore your connection.';
    explorer.querySelector('.mts-explorer-intro').textContent=de()?'Wählen Sie einen Transportweg und eine Zielregion.':'Choose a transport mode and destination region.';
    explorer.querySelector('.mts-explorer-head>span').textContent=de()?'GLOBALES FRACHTNETZ':'GLOBAL FREIGHT NETWORK';
    explorer.querySelector('.mts-explorer-status span').textContent=de()?'VON HAMBURG':'FROM HAMBURG';
    if(animate&&!reduced.matches){map.classList.remove('is-changing');void map.offsetWidth;map.classList.add('is-changing');}
    restart();
  };
  buttons.forEach(button=>button.addEventListener('click',()=>{selected=button.dataset.route;destination=0;render(true);}));
  regionButtons.forEach((button,i)=>button.addEventListener('click',()=>{destination=i;render(true);}));
  new MutationObserver(()=>render()).observe(root,{attributes:true,attributeFilter:['lang']});
  reduced.addEventListener('change',()=>render());
  render();
})();
