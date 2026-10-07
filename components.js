(function () {
  const themeKey = 'mts-color-theme';
  const langKey = 'mts-lang';

  // Full EN/DE translation dictionary. HTML is allowed in values.
  const T = {
    en: {
      "ft.cta.k": "Your next shipment",
      "ft.cta.h": "Let’s connect your next destination.",
      "ft.network.k": "Connected from Hamburg",
      "ft.network.p": "Sea, air and road — coordinated from Hamburg to worldwide destinations.",
      "ft.network.badge": "Hamburg · Germany",
      "ft.contact.k": "Let’s talk logistics",
      "fr.overview": "Overview",
      "fr.solutions": "Cargo options",
      "fr.planning": "Plan your shipment",
      "fr.quote": "Request a quote",
      "fr.glance": "At a glance",
      "fr.optionsK": "Built around your cargo",
      "fr.optionsH": "A solution for every shipment.",
      "fr.planningK": "Start with the essentials",
      "fr.planningH": "A clear brief.<br>A better transport plan.",
      "fr.ctaK": "Your next shipment",
      "fr.ctaH": "Let’s plan the journey.",
      "fr.ctaP": "Send the details to our Hamburg team to discuss your transport requirements.",
      "fr.call": "Call our team",
      "fr.related": "Explore more services",
      "fr.back": "All services",
      "fr.step.0.t": "Tell us about the cargo",
      "fr.step.0.p": "Share dimensions, weight and any handling needs.",
      "fr.step.1.t": "Set the route",
      "fr.step.1.p": "Provide collection and delivery locations.",
      "fr.step.2.t": "Confirm the timing",
      "fr.step.2.p": "Tell us your preferred dates and deadline.",
      "sf.name": "Seafreight",
      "sf.category": "International freight / Ocean",
      "sf.headline": "Sea freight.<br>Global connections.",
      "sf.hero": "From container loads to complex cargo, ocean transport planned around your shipment.",
      "sf.introTitle": "A worldwide network.<br>A personal approach.",
      "sf.intro": "As an NVOCC with its own equipment, MTS works with shipping lines and forwarding networks worldwide. Containerized, conventional and project cargo are coordinated around your requirements, with regular sailings and competitive pricing.",
      "sf.fact.0.k": "Operating model",
      "sf.fact.0.v": "NVOCC",
      "sf.fact.1.k": "Equipment",
      "sf.fact.1.v": "Own equipment",
      "sf.fact.2.k": "Reach",
      "sf.fact.2.v": "Worldwide network",
      "sf.svc.0.t": "Full-container shipments",
      "sf.svc.0.p": "FCL capacity for cargo requiring a dedicated container.",
      "sf.svc.1.t": "Shared-container shipments",
      "sf.svc.1.p": "LCL options when your cargo does not fill a container.",
      "sf.svc.2.t": "RoRo transport",
      "sf.svc.2.p": "Ocean transport for vehicles and rolling equipment.",
      "sf.svc.3.t": "Break-bulk shipments",
      "sf.svc.3.p": "Conventional cargo carried outside standard container loading.",
      "sf.svc.4.t": "Heavy & oversized cargo",
      "sf.svc.4.p": "Shipping options for high, heavy and out-of-gauge freight.",
      "sf.svc.5.t": "Project shipments",
      "sf.svc.5.p": "Coordinated ocean transport for complex project loads.",
      "af.name": "Air Freight",
      "af.category": "International freight / Air",
      "af.headline": "Air freight.<br>Time matters.",
      "af.hero": "Global air cargo connections for shipments that need to move quickly.",
      "af.introTitle": "Speed, with the details<br>taken care of.",
      "af.intro": "MTS connects with airlines and freight forwarders worldwide to coordinate time-sensitive cargo. Routing, capacity and handling are planned together, supporting a smooth supply chain from collection through delivery.",
      "af.fact.0.k": "Connections",
      "af.fact.0.v": "Global carrier network",
      "af.fact.1.k": "Clearance",
      "af.fact.1.v": "European airports",
      "af.fact.2.k": "Capacity options",
      "af.fact.2.v": "Scheduled & charter",
      "af.svc.0.t": "General air cargo",
      "af.svc.0.p": "Worldwide air freight options for your shipment.",
      "af.svc.1.t": "Express handling",
      "af.svc.1.p": "Expedited clearance with pickup and delivery arrangements.",
      "af.svc.2.t": "Airport customs support",
      "af.svc.2.p": "Import and export clearance at airports across Europe.",
      "af.svc.3.t": "Partial-load charters",
      "af.svc.3.p": "Chartered capacity for part-load air shipments.",
      "af.svc.4.t": "Dedicated aircraft charters",
      "af.svc.4.p": "Whole-aircraft options, including specialist heavy-cargo aircraft.",
      "rt.name": "Road Freight",
      "rt.category": "Ground transport / Port drayage & international",
      "rt.headline": "Road freight.<br>From the port to the world.",
      "rt.hero": "Port drayage, short hauls and international long-haul road freight — one Hamburg team from the terminal gate to destination.",
      "rt.introTitle": "The right route.<br>The right handling.",
      "rt.intro": "MTS combines port drayage, short-haul container moves and international road freight in one service. The company's own fleet and side loader handle container positioning around Hamburg, while regular departures connect Europe with the CIS and Afghanistan. Timing, capacity and costs are matched to each shipment.",
      "rt.fact.0.k": "Scope",
      "rt.fact.0.v": "Port drayage · Europe · CIS · Afghanistan",
      "rt.fact.1.k": "Container operations",
      "rt.fact.1.v": "Own fleet",
      "rt.fact.2.k": "Placement",
      "rt.fact.2.v": "Own side loader",
      "rt.svc.0.t": "Port drayage from Hamburg",
      "rt.svc.0.p": "Container moves between the Port of Hamburg terminals, our yard and your pickup or delivery point.",
      "rt.svc.1.t": "Short-haul container transport",
      "rt.svc.1.p": "Local and regional container trucking around Hamburg, connected to onward freight.",
      "rt.svc.2.t": "Europe to CIS & Afghanistan",
      "rt.svc.2.p": "Daily departures connecting European origins with these destinations.",
      "rt.svc.3.t": "Heavy & oversized loads",
      "rt.svc.3.p": "Road transport options for heavy goods and large-volume cargo.",
      "rt.svc.4.t": "Side-loader placement",
      "rt.svc.4.p": "Container positioning using MTS’s own side loader.",
      "rt.svc.5.t": "Container round trips",
      "rt.svc.5.p": "Round-trip container movements with the company’s fleet.",
      "rt.svc.6.t": "Break-bulk movements",
      "rt.svc.6.p": "Transport arrangements for conventional, non-containerized freight.",
      "rt.svc.7.t": "Urgent & hazardous cargo",
      "rt.svc.7.p": "Discuss deadlines and handling needs with the operations team.",
      "tk.hero.k": "Ground & Terminal",
      "tk.hero.t": "Trucking",
      "tk.hero.sub": "Container drayage and short hauls out of Hamburg — connecting your shipment with the next stage of its journey.",
      "tk.hero.cta1": "Request a trucking quote",
      "tk.hero.cta2": "Explore trucking",
      "tk.intro.k": "Container trucking",
      "tk.intro.h": "The connection between port and road.",
      "tk.intro.p": "MTS coordinates container trucking and short hauls from Hamburg. Talk to our team about your pickup, delivery and onward freight requirements.",
      "tk.list.k": "Ground transport",
      "tk.list.h": "Keep your container moving.",
      "tk.l1": "Container drayage from Hamburg",
      "tk.l2": "Short-haul container transport",
      "tk.l3": "Pickup and delivery coordination",
      "tk.l4": "Connections with onward freight",
      "tk.cta.k": "Talk to our Hamburg team",
      "tk.cta.h": "Plan your container transport.",
      "tk.cta.p": "Share your pickup point, delivery location and container details so our team can help plan the next step.",
      // ==== Global chrome ====
      'top.hours': 'Mo–Fr: 9:00 – 18:00',
      'top.phone': '+49 (0)40 / 819 78 530',
      'top.email': 'info@mtsonline.de',
      'top.downloads': 'Downloads',
      'top.follow': 'Follow us',
      // Footer address
      'ft.head': 'HEAD OFFICE',
      'ft.address_full': 'Billstrasse 158<br>20539 Hamburg / Germany',
      'ft.tel_label': 'Tel.:',
      'ft.fax_label': 'Fax:',
      'ft.email_label': 'E-Mail:',
      'ft.fax': '+49 (0)40 / 819 78 355',
      // Support widget
      'sw.title': 'MTS Customer Service',
      'sw.subtitle': 'How can our Hamburg team help?',
      'sw.opt1': 'Request a shipping quote',
      'sw.opt2': 'A vehicle shipment',
      'sw.opt3': 'Customs & warehousing',
      'sw.opt4': 'Container terminal',
      'sw.opt5': 'International freight',
      'sw.cta': 'Continue to quote',
      'sw.contact': 'Or reach us directly',
      'sw.aria': 'Contact MTS customer service',
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.classic': 'Classic & Premium Cars',
      'nav.destinations': 'Destinations',
      'nav.about': 'About Us',
      'nav.news': 'News',
      'nav.contact': 'Contact',
      'nav.quote': 'Request a quote',
      'nav.premium': 'Premium Cars',
      'nav.services.all': 'All services',
      'nav.sub.trucking': 'Road freight',
      'nav.sub.sea': 'Seafreight',
      'nav.sub.air': 'Air freight',
      'nav.sub.road': 'Road freight',
      'nav.sub.rail': 'Rail transport',
      'nav.sub.car': 'Car shipping',
      'nav.sub.ind': 'Individual solutions',
      'nav.sub.cc': 'Classic cars',
      // Mega menu feature panel details + bottom bar
      'nav.mega.feat.b1': 'Fixed quote in ~2 business hours',
      'nav.mega.feat.b2': 'Single Hamburg point of contact',
      'nav.mega.feat.b3': '100+ partner forwarders worldwide',
      'nav.mega.bar.hours': 'Mo–Fr 9–18:00',
      'nav.mega.bar.phone': '+49 (0)40 / 819 78 530',
      'nav.mega.bar.email': 'info@mtsonline.de',
      'nav.mega.bar.badge': 'LIVE',
      'nav.mega.bar.reply': 'Operations desk online now · typical reply under 2h',
      'nav.mega.live.k': 'On the road right now',
      'nav.mega.live.from': 'HAMBURG',
      'nav.mega.live.to': 'WORLDWIDE',
      'nav.mega.live.ops': 'Operations desk',
      'nav.mega.live.routes': 'Partner routes',
      // Mega menu descriptions
      'nav.sub.trucking.d': 'Port drayage, short hauls &amp; international long-haul',
      'nav.sub.sea.d': 'FCL / LCL ocean freight worldwide',
      'nav.sub.air.d': 'Time-critical cargo via partner airlines',
      'nav.sub.road.d': 'Port drayage, short hauls &amp; international long-haul',
      'nav.sub.rail.d': 'Combined routes to Central Asia &amp; CIS',
      'nav.sub.car.d': '4–6 vehicles per 40&#39; HC, worldwide',
      'nav.sub.cc.d': 'Enclosed single-vehicle container shipping',
      'nav.sub.ind.d': 'Bespoke multimodal routes shaped around your file',
      'nav.col.ground': 'GROUND & TERMINAL',
      'nav.col.freight': 'INTERNATIONAL FREIGHT',
      'nav.col.vehicles': 'VEHICLES',
      'nav.mega.feat.k': 'NEED SOMETHING BESPOKE?',
      'nav.mega.feat.h': 'Individual solutions',
      'nav.mega.feat.p': 'Non-standard routes, project cargo, out-of-gauge or combined mode shipments — talk to our Hamburg desk.',
      'nav.mega.feat.cta': 'Talk to us',
      // Downloads modal
      'dl.title': 'Downloads',
      'dl.subtitle': 'Documents you may need when working with MTS. Click any card to download the PDF.',
      'dl.close': 'Close',
      'dl.adsp.title': 'ADSp — German Freight Forwarders&#39; Standard Terms &amp; Conditions',
      'dl.adsp.desc': 'The 2003 English edition of the ADSp, the standard terms under which we contract as a German freight forwarder.',
      'dl.order.title': 'MTS Transport Order Form',
      'dl.order.desc': 'Proforma invoice / Auftragformular for vehicle transport orders. Print, fill in and return with your enquiry.',
      'dl.incoterms.title': 'Incoterms® 2010 — Overview',
      'dl.incoterms.desc': 'One-page reference chart of Incoterms® 2010 clauses, transport modes and the point where risk and cost pass.',
      'dl.download': 'Download PDF',
      'dl.pages': 'pages',
      'dl.page': 'page',
      // Footer
      'ft.services': 'SERVICES',
      'ft.company': 'COMPANY',
      'ft.contact': 'GET IN TOUCH',
      'ft.customs': 'Customs warehousing',
      'ft.vehicle': 'Vehicle logistics',
      'ft.container': 'Container terminal',
      'ft.freight': 'International freight',
      'ft.classic': 'Classic & premium cars',
      'ft.address': 'Billstrasse 158<br>20539 Hamburg, Germany',
      'ft.rights': '© {year} Mangal Transport & Shipping GmbH',
      'ft.city': 'Hamburg, Germany',

      // ==== HOME (index.html) ====
      'h.hero.k1': '01 / HAMBURG LOGISTICS HUB',
      'h.hero.t1': 'Your customs, container and vehicle hub in the Port of Hamburg.',
      'h.hero.c1': 'One Hamburg team for the careful handling and worldwide movement of your cargo.',
      'h.hero.k2': '02 / VEHICLE LOGISTICS',
      'h.hero.t2': 'Careful handling for vehicles with places to go.',
      'h.hero.c2': 'Secure container loading and export coordination for everyday, classic and premium vehicles.',
      'h.hero.k3': '03 / GLOBAL FREIGHT',
      'h.hero.t3': 'Sea, air and road, out of Hamburg to the world.',
      'h.hero.c3': 'FCL, LCL and specialist services routed through our Hamburg base to destinations worldwide.',
      'h.hero.cta1': 'Request a quote',
      'h.hero.cta2': 'Explore our services',
      'h.slide.1.s': '01 / PORT OPERATIONS',
      'h.slide.1.b': 'Hamburg hub',
      'h.slide.2.s': '02 / VEHICLE LOGISTICS',
      'h.slide.2.b': 'Careful loading',
      'h.slide.3.s': '03 / GLOBAL FREIGHT',
      'h.slide.3.b': 'Worldwide routes',
      'h.members.label': 'OUR NETWORK & MEMBERSHIPS',
      'h.intro.label': 'THE MTS ADVANTAGE',
      'h.intro.title': 'Grounded in Hamburg.<br><em>Moving everywhere.</em>',
      'h.intro.p': 'From customs warehousing to vehicle loading and international freight, our team coordinates each step where the work happens. Practical expertise at the yard, clear communication across the route.',
      'h.intro.link': 'Get to know MTS',
      'h.services.label': 'WHAT WE DO',
      'h.services.title': 'Services built around<br>your shipment.',
      'h.services.link': 'View all services',
      'h.services.s1.s': '01 / ON-SITE EXPERTISE',
      'h.services.s1.h': 'Customs warehousing',
      'h.services.s1.p': 'Bonded storage, customs inspections and documentation near the port.',
      'h.services.s2.s': '02 / CAREFUL HANDLING',
      'h.services.s2.h': 'Vehicle logistics',
      'h.services.s2.p': 'Secure loading, lashing and worldwide shipping for vehicles.',
      'h.services.s3.s': '03 / PORT OPERATIONS',
      'h.services.s3.h': 'Container terminal',
      'h.services.s3.p': 'Stuffing, stripping, storage and terminal connections at our yard.',
      'h.feature.caption': 'FROM HAMBURG / TO THE WORLD',
      'h.feature.label': 'INTERNATIONAL FREIGHT',
      'h.feature.title': 'The right route for every cargo.',
      'h.feature.p': 'Sea, air, road and rail options coordinated from Hamburg. We help plan the journey around the cargo, timing and destination requirements.',
      'h.feature.sea': 'Sea freight',
      'h.feature.sea.s': 'FCL / LCL',
      'h.feature.air': 'Air freight',
      'h.feature.air.s': 'TIME CRITICAL',
      'h.feature.road': 'Road freight',
      'h.feature.road.s': 'DRAYAGE + LONG-HAUL',
      'h.proof.label': 'WHY MTS',
      'h.proof.title': 'One place to get<br>the details right.',
      'h.proof.p1': 'Own operational yard in Hamburg',
      'h.proof.p2': 'Customs inspections and handling on site',
      'h.proof.p3': 'Four to six cars per 40&#39; HC container',
      'h.proof.p4': 'Multilingual team for international trade',
      'h.lead.label': 'START A SHIPMENT',
      'h.lead.title': 'Tell us what<br>needs to move.',
      'h.lead.p': 'Customs, cars or containers: send the essentials and our Hamburg team can take it from there.',
      'h.lead.direct': 'DIRECT CONTACT',
      'h.form.h1': 'REQUEST A QUOTE',
      'h.form.h2': 'HAMBURG / WORLDWIDE',
      'h.form.service': 'Service',
      'h.form.svc.choose': 'Choose a service',
      'h.form.name': 'Your name',
      'h.form.name.ph': 'Full name',
      'h.form.email': 'Email address',
      'h.form.email.ph': 'you@company.com',
      'h.form.phone': 'Phone (optional)',
      'h.form.phone.ph': '+49 ...',
      'h.form.from': 'From',
      'h.form.from.ph': 'Origin city / port',
      'h.form.to': 'To',
      'h.form.to.ph': 'Destination city / port',
      'h.form.details': 'Shipment details',
      'h.form.details.ph': 'Cargo, vehicle, timing or special requirements',
      'h.form.consent': 'I agree that MTS may use these details to reply to my enquiry.',
      'h.form.submit': 'Prepare enquiry',
      'h.form.submit.hint': 'Opens your email app',
      'h.guide.title': 'MTS shipment guide',
      'h.guide.q': 'What are you shipping?',
      'h.guide.o1': 'Cargo for customs',
      'h.guide.o2': 'A vehicle',
      'h.guide.o3': 'A container',
      'h.guide.o4': 'Other freight',
      'h.float.wa': 'WhatsApp',
      'h.float.ask': 'Ask MTS',

      // Shared hero meta pills
      'g.meta.hamburg': 'Based in Hamburg',
      'g.meta.since': 'Since 2003',
      'g.meta.worldwide': '100+ destinations',
      'g.cta.quote': 'Request a quote',
      'g.cta.contact': 'Talk to our team',

      // ==== ABOUT (about.html) ====
      'a.hero.k': 'About MTS',
      'a.hero.t': 'International forwarders with Hamburg at our core.',
      'a.hero.sub': 'Mangal Transport &amp; Shipping GmbH is a Hamburg-based international freight forwarder since 2003 — handling customs, vehicle logistics and worldwide container shipping from Billstrasse 158, Rothenburgsort.',
      'a.hero.cta1': 'Request a quote',
      'a.hero.cta2': 'Meet our team',
      'a.intro.k': 'The MTS story',
      'a.intro.h': 'More than two decades of moving cargo out of Hamburg.',
      'a.intro.p1': '<strong>Mangal Transport &amp; Shipping GmbH</strong> — MTS — has been a Hamburg-based international freight forwarder since 2003. From our operational base at Billstrasse 158 in Rothenburgsort, a short drive from the container terminals of the Port of Hamburg, we plan, prepare and dispatch cargo to Europe, the Americas, Asia, Africa and every country of the Near and Middle East.',
      'a.intro.p2': 'Our work is practical: customs clearance for goods entering or leaving the European Union, careful loading of vehicles and machinery into containers, cross-docking and consolidation of groupage, and door-to-door coordination by road, sea and air. Whether it is a single classic car, a groupage container to Dubai or a project shipment to West Africa, the same operational team owns the file from booking to arrival.',
      'a.intro.p3': 'We work worldwide with a network of long-standing partner forwarders so that a shipment leaving our yard in Hamburg is met by people we know at the other end. That partnership model is why MTS files rarely surprise the customer at destination.',
      'a.facts.k': 'Facts about MTS',
      'a.facts.h': 'A Hamburg forwarder at a glance.',
      'a.facts.1.b': '2003',
      'a.facts.1.s': 'Year MTS was founded in Hamburg as an independent international forwarder.',
      'a.facts.2.b': '~11',
      'a.facts.2.s': 'People in the operational team, working in German, English, Turkish, Dari, Pashto and Spanish.',
      'a.facts.3.b': '4–6',
      'a.facts.3.s': 'Cars we typically load into a single 40&#39; HC container, with lashing and photo documentation.',
      'a.facts.4.b': '3',
      'a.facts.4.s': 'Modes covered end-to-end: road, sea and air, plus rail for Central Asia lanes via partners.',
      'a.facts.5.b': '3',
      'a.facts.5.s': 'Core divisions: customs &amp; warehousing, vehicle logistics, international freight.',
      'a.facts.6.b': 'LIHH',
      'a.facts.6.s': 'Member of the Logistik-Initiative Hamburg, the region&#39;s cross-industry logistics network.',
      'a.facts.7.b': 'HRB 106401',
      'a.facts.7.s': 'Registered with the District Court of Hamburg, Handelsregister B.',
      'a.facts.8.b': '20539',
      'a.facts.8.s': 'Billstrasse 158, 20539 Hamburg — yard, warehouse and office under one roof.',
      'a.div.k': 'What we do',
      'a.div.h': 'Three divisions, one operational file.',
      'a.div.sub': 'Each file at MTS runs through a single team that stays with the shipment from booking through arrival.',
      'a.div.h1': 'Customs &amp; warehousing',
      'a.div.p1': 'Export declarations, T1/T2 procedures and bonded storage. We handle non-EU cargo under customs supervision, hold it in our warehouse and re-export when the paperwork is ready.',
      'a.div.h2': 'Vehicle logistics',
      'a.div.p2': 'Multi-car loading of 4–6 vehicles into a 40&#39; HC container, careful lashing, photo documentation, RoRo bookings and single-vehicle premium shipments. We have our own container side loader and truck fleet for loadings in and around Hamburg and Bremerhaven.',
      'a.div.h3': 'International freight',
      'a.div.p3': 'FCL and LCL sea freight worldwide, road groupage into Europe, air freight and project cargo. Consolidation of LCL shipments directly from our Hamburg warehouse, in cooperation with partner forwarders.',
      'a.team.k': 'People who understand your route',
      'a.team.h': 'Speak to a team that speaks your language.',
      'a.team.c1.t': 'Customs &amp; Terminal',
      'a.team.c1.p': 'Export declarations, T1/T2 procedures, bonded storage and container release at the Port of Hamburg.',
      'a.team.c1.l': 'DE · EN · TR',
      'a.team.c2.t': 'Vehicle Logistics',
      'a.team.c2.p': 'Container loading of 4–6 cars per 40&#39; HC, RoRo bookings, single-vehicle premium shipments and export documentation.',
      'a.team.c2.l': 'DE · EN · Dari · Pashto',
      'a.team.c3.t': 'International Freight',
      'a.team.c3.p': 'FCL and LCL by sea, road groupage into Europe, air freight and project cargo to the Americas, Africa, Asia and the Middle East.',
      'a.team.c3.l': 'DE · EN · ES',
      'a.loc.k': 'Hamburg location',
      'a.loc.h': 'Billstrasse 158, 20539 Hamburg.',
      'a.loc.p': 'A dedicated operational base in Rothenburgsort, close to the Port of Hamburg&#39;s container terminals, combining customs handling, terminal work, warehouse space and global freight coordination — everything one file needs, under one roof.',
      'a.loc.det': '<strong>Address:</strong> Billstrasse 158, 20539 Hamburg, Germany<br><strong>Phone:</strong> <a href="tel:+494081978530">+49 (0)40 819 78 530</a><br><strong>Fax:</strong> +49 (0)40 819 78 355<br><strong>Email:</strong> <a href="mailto:info@mtsonline.de">info@mtsonline.de</a><br><strong>Office hours:</strong> Monday to Friday, 09:00 – 17:00 CET<br><strong>Registration:</strong> Handelsregister Hamburg, HRB 106401',
      'a.cta.k': 'Ready when you are',
      'a.cta.h': 'Ship with a Hamburg team that owns the file end-to-end.',
      'a.cta.p': 'Send us the route, cargo and timing and we&#39;ll come back with a route plan and a firm quote.',
      'a.cta.b': 'Request a quote →',

      // ==== DESTINATIONS (destinations.html) ====
      'd.hero.k': 'Destinations',
      'd.hero.t': 'Hamburg to the world&#39;s growth markets.',
      'd.hero.sub': 'Container, RoRo and groupage services from the Port of Hamburg to the Near and Middle East, Central Asia, Africa, the Americas and Asia — more than one hundred countries through our partner network.',
      'd.hero.cta1': 'Request a route plan',
      'd.hero.cta2': 'Browse regions',
      'd.intro.k': 'Where we go often',
      'd.intro.h': 'Knowledge travels with your cargo.',
      'd.intro.p1': 'From our yard at Billstrasse and the container terminals of the Port of Hamburg, MTS books, loads and dispatches shipments to more than one hundred countries. Some lanes we run week in, week out — Dubai, Iraq, Afghanistan, Angola, Nigeria — and on those we know the paperwork, the receivers and the sailing schedule by heart. Others we route through partner networks we have worked with for years, so a shipment leaving Hamburg is met by people we know at the other end.',
      'd.intro.p2': 'The panels below cover the regions we ship to most. Transit times are indicative and depend on carrier, port pair, season and customs at destination — we&#39;ll confirm a specific route and ETA in the quote.',
      'd.f.all': 'All regions',
      'd.f.me': 'Near & Middle East',
      'd.f.ca': 'Central Asia & CIS',
      'd.f.af': 'Africa',
      'd.f.am': 'Americas',
      'd.f.as': 'Asia',
      'd.r1.s': 'NEAR &amp; MIDDLE EAST',
      'd.r1.h': 'Dubai, GCC &amp; beyond',
      'd.r1.p': 'Direct and transhipment sailings from Hamburg to Jebel Ali and onward across the Gulf. Vehicles, machinery and consumer goods, with careful export documentation for GCC customs.',
      'd.r1.t': 'Sea 18–30 days',
      'd.r1.m': 'FCL · LCL · RoRo',
      'd.r2.s': 'NEAR &amp; MIDDLE EAST',
      'd.r2.h': 'Iraq, Egypt &amp; the Levant',
      'd.r2.p': 'Regular container services to Umm Qasr and Alexandria, with land forwarding onward to Baghdad, Erbil, Cairo and the Levant. Local partners handle release and delivery.',
      'd.r2.t': 'Sea 20–35 days',
      'd.r2.m': 'FCL · LCL',
      'd.r3.s': 'CENTRAL ASIA &amp; CIS',
      'd.r3.h': 'Afghanistan &amp; Central Asia',
      'd.r3.p': 'Combined sea, rail and road solutions to Afghanistan, Turkmenistan, Uzbekistan, Kazakhstan and neighbouring markets — a long-standing MTS specialisation.',
      'd.r3.t': 'Multimodal 25–45 days',
      'd.r3.m': 'Sea · Rail · Road',
      'd.r4.s': 'CENTRAL ASIA &amp; CIS',
      'd.r4.h': 'Caucasus &amp; CIS',
      'd.r4.p': 'Container and road services into the Caucasus and wider CIS, with reliable customs coordination at land borders.',
      'd.r4.t': 'Multimodal 18–35 days',
      'd.r4.m': 'Sea · Road',
      'd.r5.s': 'AFRICA',
      'd.r5.h': 'West &amp; North Africa',
      'd.r5.p': 'Established lanes for containers, vehicles and consumer goods to West and North African markets, with partner clearance at destination.',
      'd.r5.t': 'Sea 21–40 days',
      'd.r5.m': 'FCL · RoRo · LCL',
      'd.r6.s': 'AFRICA',
      'd.r6.h': 'East Africa &amp; the Horn',
      'd.r6.p': 'Container services via major East African hubs, feeding markets around the Red Sea and the East African Community.',
      'd.r6.t': 'Sea 25–45 days',
      'd.r6.m': 'FCL · LCL',
      'd.r7.s': 'AMERICAS',
      'd.r7.h': 'USA &amp; Canada',
      'd.r7.p': 'FCL, LCL and RoRo services from Hamburg and Bremerhaven to the US East Coast, Gulf and Canadian ports, with in-house export documentation.',
      'd.r7.t': 'Sea 12–20 days',
      'd.r7.m': 'FCL · LCL · RoRo',
      'd.r8.s': 'AMERICAS',
      'd.r8.h': 'South America &amp; Cuba',
      'd.r8.p': 'Tailored container and vehicle shipping to Central and South American destinations, including specialist services to Cuba.',
      'd.r8.t': 'Sea 25–40 days',
      'd.r8.m': 'FCL · LCL',
      'd.r9.s': 'ASIA',
      'd.r9.h': 'South &amp; South-East Asia',
      'd.r9.p': 'Regular container services to South Asia and South-East Asian ports, plus air freight for time-critical shipments through partner networks.',
      'd.r9.t': 'Sea 22–40 days',
      'd.r9.m': 'FCL · LCL · Air',
      'd.r10.s': 'ASIA',
      'd.r10.h': 'China &amp; the Far East',
      'd.r10.p': 'Container services from Hamburg to the main Chinese and Far East ports, with careful documentation for onward inland delivery.',
      'd.r10.t': 'Sea 30–45 days',
      'd.r10.m': 'FCL · LCL',
      'd.how.k': 'How we work',
      'd.how.h': 'Route options that fit the cargo, not the other way around.',
      'd.how.c1.t': 'FCL — full container',
      'd.how.c1.p': '20&#39; and 40&#39; standard, 40&#39; HC and open-top containers, booked with the carrier that fits the port pair and the timing.',
      'd.how.c1.l': 'Sea freight',
      'd.how.c2.t': 'LCL — groupage',
      'd.how.c2.p': 'Consolidation from our Hamburg warehouse for smaller shipments, with partner deconsolidation at destination.',
      'd.how.c2.l': 'Sea freight',
      'd.how.c3.t': 'RoRo &amp; special equipment',
      'd.how.c3.p': 'Roll-on/roll-off for cars and machinery where the destination supports it, plus flat racks and open-tops for out-of-gauge cargo.',
      'd.how.c3.l': 'Sea freight',
      'd.faq.k': 'Questions we hear often',
      'd.faq.h': 'Destination FAQs.',
      'd.faq.q1': 'Which ports do you ship out of?',
      'd.faq.a1': 'Primarily the Port of Hamburg, with Bremerhaven used for selected RoRo and container services. We handle the trucking, side-loader work and export documentation in between.',
      'd.faq.q2': 'Can you handle door-to-door?',
      'd.faq.a2': 'Yes. We coordinate pickup in Germany or neighbouring countries, container loading in Hamburg, sea freight, customs at destination and final delivery through our partner network.',
      'd.faq.q3': 'Do you ship personal effects and household goods?',
      'd.faq.a3': 'Yes — as part of our worldwide relocations service. We advise on packing, inventory and export documentation, then handle groupage or full-container shipment.',
      'd.faq.q4': 'Do you handle dangerous goods?',
      'd.faq.a4': 'Dangerous goods shipments are handled in cooperation with certified DGSA partners on a case-by-case basis. Send the UN number, class and packing group with your enquiry.',
      'd.faq.q5': 'What documents will you need from me?',
      'd.faq.a5': 'At a minimum: a commercial invoice or bill of sale, packing list, and — for vehicles — the original registration document. We&#39;ll tell you what else the destination country requires when we send the quote.',
      'd.cta.k': 'Route not listed?',
      'd.cta.h': 'If Hamburg can ship there, we can plan it.',
      'd.cta.p': 'Every country in the Near and Middle East, and most of the rest of the world through our partner network. Tell us what needs to move.',
      'd.cta.b': 'Request a quote →',

      // ==== NEWS (news.html) ====
      'n.hero.k': 'News &amp; Insights',
      'n.hero.t': 'Notes from the yard, the port and the route.',
      'n.hero.sub': 'Practical insight from the MTS operations team — container loading practice, export documentation, route updates and project stories from the Port of Hamburg.',
      'n.hero.cta1': 'Browse latest',
      'n.hero.cta2': 'Talk to the team',
      'n.intro.k': 'Latest',
      'n.intro.h': 'Shipping insight and project stories.',
      'n.intro.p': 'Practical notes from the MTS operations team — the details behind a smooth container load, the paperwork that stops a shipment at customs, the routes we watch this quarter, and the projects that made us think.',
      'n.c1.d': '2026 · September',
      'n.c1.cat': 'PROJECT REPORT',
      'n.c1.t': 'Four vehicles, one 40&#39; HC container',
      'n.c1.p': 'A practical look at multi-car container loading and why careful preparation protects both capacity and condition.',
      'n.c1.r': 'Read the story →',
      'n.c2.d': '2026 · August',
      'n.c2.cat': 'CUSTOMS',
      'n.c2.t': 'Preparing your export documentation',
      'n.c2.p': 'The essential details that help your cargo clear a smoother path from Hamburg to its destination.',
      'n.c2.r': 'Read the guide →',
      'n.c3.d': '2026 · July',
      'n.c3.cat': 'ROUTE UPDATE',
      'n.c3.t': 'Rail links from Europe into Central Asia',
      'n.c3.p': 'When rail is the useful middle ground between speed, cost and route access.',
      'n.c3.r': 'Read the update →',
      'n.c4.d': '2026 · June',
      'n.c4.cat': 'CLASSIC CARS',
      'n.c4.t': 'Shipping a collector car without a scratch',
      'n.c4.p': 'Single-vehicle containers, soft lashing, and the small habits that keep bodywork perfect from Hamburg to the destination garage.',
      'n.c4.r': 'Read the story →',
      'n.c5.d': '2026 · May',
      'n.c5.cat': 'WAREHOUSE',
      'n.c5.t': 'Groupage from the Hamburg warehouse',
      'n.c5.p': 'How LCL consolidation actually saves money — and when a full container is still the smarter call.',
      'n.c5.r': 'Read the piece →',
      'n.c6.d': '2026 · April',
      'n.c6.cat': 'SUSTAINABILITY',
      'n.c6.t': 'Small changes on the yard, real savings on the invoice',
      'n.c6.p': 'Route consolidation, side-loader use and container matching — how a busy Hamburg forwarder trims fuel and empty runs.',
      'n.c6.r': 'Read the piece →',
      'n.a1.m': '2026 · September &nbsp;·&nbsp; Project report',
      'n.a1.h': 'Four vehicles, one 40&#39; HC container.',
      'n.a1.p1': 'Multi-car container loading looks simple from the outside: four cars, one box, roll the door down. In practice, the difference between a clean arrival and a claim is measured in centimetres and in how quickly the driver, the loader and the paperwork agree.',
      'n.a1.sub': 'How MTS loads a 40&#39; HC with four cars',
      'n.a1.l1': 'Vehicle survey and fuel check before the container is booked — the wrong quarter-tank can rule out a car for a given lane.',
      'n.a1.l2': 'Wheels chocked, hand brake off, tyres deflated where the lane allows, soft straps at four corners.',
      'n.a1.l3': 'Wood and steel ramps built to keep bodywork clear of the container wall on entry and exit.',
      'n.a1.l4': 'Photo documentation of the empty container, each vehicle&#39;s state, and the final lashed load — shared with the customer.',
      'n.a1.l5': 'Export declaration prepared in parallel so the container leaves the yard the same day.',
      'n.a1.p2': 'We can fit up to six smaller cars into a 40&#39; HC. Which layout works depends on the mix — a Land Cruiser and three sedans is not the same problem as five hatchbacks — and it is always safer to send the VINs before the booking is locked in.',
      'n.a2.m': '2026 · August &nbsp;·&nbsp; Customs',
      'n.a2.h': 'Preparing your export documentation.',
      'n.a2.p1': 'Most shipments that stall at customs stall for the same reasons: a value the invoice doesn&#39;t explain, a missing packing list, or a description that doesn&#39;t match the HS code. The paperwork is not glamorous, but a good file gets read once and cleared.',
      'n.a2.sub': 'The minimum we need from you',
      'n.a2.l1': 'Commercial invoice or bill of sale, with a value the customs authority will accept.',
      'n.a2.l2': 'Packing list — one line per SKU or piece, with weights and dimensions.',
      'n.a2.l3': 'For vehicles: original registration document (Fahrzeugbrief / Fahrzeugschein), VIN and a bill of sale.',
      'n.a2.l4': 'Any country-specific certificates the destination requires — we&#39;ll flag those on the quote.',
      'n.a2.p2': 'Once the file is in, we prepare the EU export declaration, book the container and share the AWB or B/L draft for you to check before it is finalised.',
      'n.a3.m': '2026 · July &nbsp;·&nbsp; Route update',
      'n.a3.h': 'Rail links from Europe into Central Asia.',
      'n.a3.p1': 'Rail into Central Asia is not new, but the schedules and pricing have moved enough this year to make it the right answer more often. It is slower than air and faster than sea, and for the right cargo it lands at a total cost that beats both.',
      'n.a3.sub': 'When rail makes sense',
      'n.a3.l1': '<strong>Consumer goods and spare parts</strong> to Uzbekistan, Kazakhstan and Turkmenistan — sea plus onward road can be beaten on transit time.',
      'n.a3.l2': '<strong>Machinery and industrial cargo</strong> where a fixed weekly schedule is more valuable than the cheapest per-cbm rate.',
      'n.a3.l3': '<strong>Time-critical replenishment</strong> where air freight is the only alternative and volumes make it painful.',
      'n.a3.p2': 'We book through established rail partners with departures from Hamburg and Duisburg and can quote combined sea/rail or road/rail solutions depending on the destination.',
      'n.a4.m': '2026 · June &nbsp;·&nbsp; Classic cars',
      'n.a4.h': 'Shipping a collector car without a scratch.',
      'n.a4.p1': 'A restored 300SL and a used estate go into the same 40&#39; container, but they don&#39;t go in the same way. Classic and premium cars need a workflow that keeps hands, straps and tools away from the paint and the interior.',
      'n.a4.l1': 'Single-vehicle container, or shared with cars of similar value only.',
      'n.a4.l2': 'Soft lashing straps on the wheels, never on the chassis or the arches.',
      'n.a4.l3': 'Blankets and covers on bumpers, mirrors and door handles during loading.',
      'n.a4.l4': 'Photo record of every panel before and after — with timestamps — shared with the owner.',
      'n.a4.l5': 'Coordination with the receiving restorer, dealership or auction house at destination.',
      'n.a5.m': '2026 · May &nbsp;·&nbsp; Warehouse',
      'n.a5.h': 'Groupage from the Hamburg warehouse.',
      'n.a5.p1': 'LCL — less-than-container-load — is the right tool when your cargo doesn&#39;t fill a box, or when you want a monthly cadence without paying for empty space. Our warehouse in Hamburg consolidates weekly for the main lanes.',
      'n.a5.sub': 'When LCL beats FCL',
      'n.a5.l1': 'Under about 15 cbm on lanes with a regular consolidation.',
      'n.a5.l2': 'Multiple small shipments to the same destination that can be combined.',
      'n.a5.l3': 'Cargo that needs to move before the next FCL would be full.',
      'n.a5.p2': 'Above 15 cbm the maths often flips: FCL becomes cheaper per cbm and cuts a step out of handling. We&#39;ll tell you which way to go when you send us the volume and the destination.',
      'n.a6.m': '2026 · April &nbsp;·&nbsp; Sustainability',
      'n.a6.h': 'Small changes on the yard, real savings on the invoice.',
      'n.a6.p1': 'Reducing empty container movements and matching pickups on the same truck run doesn&#39;t just save fuel — it takes cost out of the file. We keep track of a small set of yard metrics and pass the savings on.',
      'n.a6.l1': 'Container side-loader use so we lift once, not twice.',
      'n.a6.l2': 'Route matching between customers loading the same week.',
      'n.a6.l3': 'Careful matching of container type to cargo so weight and volume balance.',
      'n.cta.k': 'Have a shipment in mind?',
      'n.cta.h': 'Our team is one call from the yard.',
      'n.cta.p': 'Route, cargo and timing — send the essentials and we&#39;ll come back with a plan.',
      'n.cta.b': 'Request a quote →',

      // ==== SERVICES (services.html) ====
      's.hero.k': 'Services',
      's.hero.t': 'Freight forwarding, one file at a time.',
      's.hero.sub': 'Customs warehousing, vehicle logistics, container terminal work and international freight — four practical divisions, one operational team from booking through arrival.',
      's.hero.cta1': 'Request a quote',
      's.hero.cta2': 'See all services',
      's.intro.k': 'Four practical divisions',
      's.intro.h': 'Everything a Hamburg forwarder does, under one roof.',
      's.intro.p': 'Customs warehousing, vehicle logistics, container terminal work and international freight — with one operational team that stays with the file from booking to arrival.',
      's.c1.s': '01 / ON-SITE EXPERTISE',
      's.c1.h': 'Customs warehousing',
      's.c1.p': 'Bonded storage, T1/T2 procedures, customs inspections and full export documentation near the Port of Hamburg.',
      's.c2.s': '02 / CAREFUL HANDLING',
      's.c2.h': 'Vehicle logistics',
      's.c2.p': '4–6 cars per 40&#39; HC container, lashing, photo documentation and RoRo bookings for worldwide destinations.',
      's.c3.s': '03 / PORT OPERATIONS',
      's.c3.h': 'Container terminal',
      's.c3.p': 'Stuffing, stripping, storage and terminal connections at our own yard on Billstrasse.',
      's.c4.s': '04 / GLOBAL FREIGHT',
      's.c4.h': 'International freight',
      's.c4.p': 'FCL, LCL, air and road freight coordinated end-to-end from Hamburg to worldwide destinations.',
      's.c1.f1': 'Bonded warehouse at Billstrasse 158',
      's.c1.f2': 'T1 / T2 transit procedures',
      's.c1.f3': 'Customs inspections on site',
      's.c2.f1': 'Multi-car 4–6 vehicles / 40&#39; HC',
      's.c2.f2': 'Soft lashing &amp; photo documentation',
      's.c2.f3': 'RoRo bookings worldwide',
      's.c3.f1': 'Own yard with side-loader fleet',
      's.c3.f2': 'Container storage &amp; cross-docking',
      's.c3.f3': 'Hamburg terminal connections',
      's.c4.f1': 'FCL and LCL ocean freight',
      's.c4.f2': 'Air freight for time-critical',
      's.c4.f3': 'Rail routes to Central Asia',
      's.c.cta': 'Learn more',
      's.why.k': 'Why MTS',
      's.why.h': 'One Hamburg team, one file, from booking to arrival.',
      's.why.p': 'Every shipment runs through a single operational team on Billstrasse — no handoffs between departments, no lost context when something changes mid-route.',
      's.why.1.b': '2003',
      's.why.1.s': 'Founded in Hamburg',
      's.why.2.b': '100+',
      's.why.2.s': 'Countries served',
      's.why.3.b': '6',
      's.why.3.s': 'Languages at the desk',
      's.why.4.b': 'LIHH',
      's.why.4.s': 'Logistik-Initiative Hamburg member',
      's.cta.k': 'A route in mind?',
      's.cta.h': 'Send the essentials — we&#39;ll come back with a plan.',
      's.cta.p': 'Route, cargo, timing: three lines are enough to get a conversation started with the operations team.',
      's.cta.b': 'Request a quote →',

      // ==== CONTACT (contact.html) ====
      'c.hero.k': 'YOUR HAMBURG CONNECTION',
      'c.hero.t': 'Let&#39;s move your shipment forward.',
      'c.hero.p': 'Questions about customs, vehicles or freight? Speak with a team that works where the cargo moves.',
      'c.hero.a1': 'Start an enquiry',
      'c.hero.a2': 'Call Hamburg',
      'c.hero.next': 'QUOTE, PHONE OR EMAIL',
      'c.paths.k': 'START HERE',
      'c.paths.h': 'Reach us your way.',
      'c.paths.sub': 'Choose the easiest first step. The details can follow.',
      'c.paths.p1.s': '01 / QUOTE',
      'c.paths.p1.h': 'Tell us about the shipment.',
      'c.paths.p1.p': 'Give us the route, cargo and timing to start a useful conversation.',
      'c.paths.p2.s': '02 / PHONE',
      'c.paths.p2.h': 'Speak to Hamburg.',
      'c.paths.p2.p': 'Call our team directly when a question needs a human answer.',
      'c.paths.p3.s': '03 / EMAIL',
      'c.paths.p3.h': 'Send the documents.',
      'c.paths.p3.p': 'Share the particulars you already have, and we can take it from there.',
      'c.quote.k': 'REQUEST A QUOTE',
      'c.quote.h': 'A clear starting point for the next move.',
      'c.quote.p': 'Tell us what you need to move and where it needs to go. Our Hamburg team can help shape the right route and handling plan.',
      'c.direct': 'DIRECT CONTACT',
      'c.form.legend': 'What can we help with?',
      'c.form.svc.1': 'Customs',
      'c.form.svc.2': 'Vehicles',
      'c.form.svc.3': 'Containers',
      'c.form.svc.4': 'Freight',
      'c.form.svc.5': 'Classic cars',
      'c.form.company': 'Company (optional)',
      'c.form.company.ph': 'Company',
      'c.loc.k': 'COME FIND US',
      'c.loc.h': 'At home in Hamburg.',
      'c.loc.p': 'A short drive from the container terminals of the Port of Hamburg.',
      'c.loc.addr': 'Mangal Transport &amp; Shipping GmbH<br>Billstrasse 158<br>20539 Hamburg, Germany',
      'c.loc.link': 'Open directions',

      // ==== Sub-service pages ====
      'cw.hero.k': 'Services / 01',
      'cw.hero.t': 'Customs Warehousing & Customs Handling',
      'cw.hero.sub': 'Bonded storage, T1/T2 procedures, customs inspections and full export documentation near the Port of Hamburg — handled on our own yard by one team.',
      'cw.hero.cta1': 'Request a quote',
      'cw.hero.cta2': 'What is included',
      'cw.intro.k': 'At the heart of Hamburg',
      'cw.intro.h': 'Customs control without the detour.',
      'cw.intro.p': 'Our bonded warehouse and temporary storage facilities give your cargo a practical base directly near the port. With customs inspections and container work managed on site, the handling stays transparent and efficient.',
      'cw.l1': 'Customs warehouse / bonded warehouse',
      'cw.l2': 'Temporary storage facility / Verwahrlager',
      'cw.l3': 'Customs inspections on site / Zollbeschau',
      'cw.l4': 'Container stuffing and stripping under customs supervision',
      'cw.l5': 'Customs clearance and documentation',
      'cw.l6': 'T1, export and import processing',

      'vl.hero.k': 'Services / 02',
      'vl.hero.t': 'Vehicle Logistics',
      'vl.hero.sub': 'Four to six cars per 40&#39; HC container, careful lashing, photo documentation and RoRo bookings — a long-standing MTS specialisation out of Hamburg and Bremerhaven.',
      'vl.hero.cta1': 'Get a vehicle quote',
      'vl.hero.cta2': 'How we load',
      'vl.intro.k': 'Built for every vehicle',
      'vl.intro.h': 'More vehicles, intelligently secured.',
      'vl.intro.p': 'MTS has developed a specialized approach for high-density vehicle loading. We ship four to six cars in a 40&#39; HC container with careful lashing, practical photo documentation and export coordination worldwide.',
      'vl.l1': 'Loading and unloading vehicles in containers',
      'vl.l2': 'Multi-car loading: 4-6 vehicles per 40&#39; HC',
      'vl.l3': 'Securing and professional lashing',
      'vl.l4': 'Photo documentation',
      'vl.l5': 'Worldwide export shipping',
      'vl.l6': 'Customs and export documentation',

      'ct.hero.k': 'Services / 03',
      'ct.hero.t': 'Container Terminal Hamburg',
      'ct.hero.sub': 'Stuffing, stripping, side-loader work, container storage and port handovers from our Billstrasse yard — close to the container terminals of the Port of Hamburg.',
      'ct.hero.cta1': 'Request a quote',
      'ct.hero.cta2': 'What we handle',
      'ct.intro.k': 'Own yard operations',
      'ct.intro.h': 'A practical terminal for cargo in motion.',
      'ct.intro.p': 'Our own Hamburg yard brings container work, storage and port delivery together in one controlled flow. It is the working hub behind faster decisions and dependable handovers.',
      'ct.l1': 'Container loading and unloading on our own yard',
      'ct.l2': 'Stuffing and stripping',
      'ct.l3': 'Cross-docking',
      'ct.l4': 'Container storage and buffer space',
      'ct.l5': 'Pick-up and delivery to Hamburg port terminals',
      'ct.l6': 'Flexible handling for export cargo',

      'if.hero.k': 'Services / 04',
      'if.hero.t': 'International Freight',
      'if.hero.sub': 'Sea, air, road and rail — coordinated from Hamburg to worldwide destinations. FCL, LCL, project cargo and time-critical freight, one operations team end-to-end.',
      'if.hero.cta1': 'Request a quote',
      'if.hero.cta2': 'Route options',
      'if.intro.k': 'Worldwide connections',
      'if.intro.h': 'Choose the route that serves the shipment.',
      'if.intro.p': 'Sea, air, road and rail solutions coordinated from Hamburg. We build the route around your cargo, time frame and destination requirements.',
      'if.l1': 'Sea freight: FCL and LCL',
      'if.l2': 'Air freight',
      'if.l3': 'Road transport, including dangerous goods',
      'if.l4': 'Rail transport to Central Asia and CIS',

      'cc.hero.k': 'Classic & Premium Cars',
      'cc.hero.t': 'Every mile handled with the care your vehicle deserves.',
      'cc.hero.sub': 'Enclosed single-vehicle containers, soft lashing on the wheels only, and photo documentation from pickup to delivery. Trusted by collectors, dealers and auction houses.',
      'cc.hero.cta1': 'Request a vehicle quote',
      'cc.hero.cta2': 'See the process',
      'cc.intro.k': 'Enclosed shipping',
      'cc.intro.h': 'For cars with a story.',
      'cc.intro.p': 'Whether it is a collector vehicle, a concours classic or a premium vehicle for a client abroad, MTS plans the complete journey with protective enclosed container shipping, careful documentation and expert handling from pickup to delivery.',
      'cc.proc.k': 'The process',
      'cc.proc.h': 'A clear route from collection to arrival.',
      'cc.proc.1': 'Pickup',
      'cc.proc.2': 'Inspection',
      'cc.proc.3': 'Secured loading',
      'cc.proc.4': 'Ocean shipping',
      'cc.proc.5': 'Delivery',
      'cc.std.k': 'Included as standard',
      'cc.l1': 'Enclosed container shipping',
      'cc.l2': 'Pre-loading condition report',
      'cc.l3': 'Professional lashing and securing',
      'cc.l4': 'Photo documentation',
      'cc.l5': 'Insurance support',
      'cc.l6': 'Customs and shipping documents',
      'cc.form.k': 'Private owners · collectors · dealers',
      'cc.form.h': 'Request a vehicle shipping quote.',
      'cc.form.p': 'Tell us a little about the car and your destination. Our specialists will contact you directly.',
      'cc.form.name': 'Your name',
      'cc.form.email': 'Email address',
      'cc.form.make': 'Vehicle make & model',
      'cc.form.year': 'Year of manufacture',
      'cc.form.value': 'Estimated value',
      'cc.form.dest': 'Destination',
      'cc.form.msg': 'Tell us about your shipment',
      'cc.form.submit': 'Request a Quote',

      // ==== PREMIUM CARS (premium-cars.html) ====
      'pc.hero.k': 'Premium Cars',
      'pc.hero.t': 'For the car that deserves more than a sea freight booking.',
      'pc.hero.sub': 'Enclosed single-vehicle containers, soft lashing, climate-aware handling and documented photo records from pickup to delivery — tailored for dealerships, HNW owners and auction houses.',
      'pc.hero.cta1': 'Request a premium quote',
      'pc.hero.cta2': 'What makes it premium',
      'pc.intro.k': 'The MTS premium standard',
      'pc.intro.h': 'A dedicated workflow for high-value vehicles.',
      'pc.intro.p1': 'Premium cars are not just more expensive — they are harder to replace, and every small handling mistake shows. MTS runs a separate workflow for premium shipments: single-vehicle containers, white-glove loading, dedicated storage and a point of contact who knows your car by name, not booking number.',
      'pc.intro.p2': 'We work regularly with dealerships, specialist importers, auction houses and private owners moving a flagship between homes. Every shipment ends with the full file in your inbox — not just a bill of lading.',
      'pc.inc.k': 'Included as standard',
      'pc.inc.h': 'What a premium booking covers.',
      'pc.l1': 'Single-vehicle 20&#39; or 40&#39; container (no shared loads)',
      'pc.l2': 'White-glove collection with enclosed trailer where appropriate',
      'pc.l3': 'Pre-loading condition report with high-resolution photos',
      'pc.l4': 'Soft wheel-strap lashing only — no chassis contact',
      'pc.l5': 'Protective covers on bumpers, mirrors and door handles',
      'pc.l6': 'Climate-aware storage at our Hamburg warehouse',
      'pc.l7': 'Customs documentation and export declaration',
      'pc.l8': 'Marine insurance quote on request',
      'pc.l9': 'Named point of contact from quote to delivery',
      'pc.l10': 'Door-to-door delivery coordination at destination',
      'pc.proc.k': 'How it runs',
      'pc.proc.h': 'A simple, documented process.',
      'pc.proc.sub': 'Six steps from first enquiry to delivery, each one logged and shared with you.',
      'pc.proc.1.l': '01 · ENQUIRY',
      'pc.proc.1.h': 'Send us the details',
      'pc.proc.1.p': 'VIN, pickup address and destination — plus photos if you have them. We come back with a fixed quote.',
      'pc.proc.2.l': '02 · COLLECTION',
      'pc.proc.2.h': 'White-glove pickup',
      'pc.proc.2.p': 'Enclosed transport to our Hamburg yard, condition report signed on arrival.',
      'pc.proc.3.l': '03 · LOADING',
      'pc.proc.3.h': 'Single-vehicle container',
      'pc.proc.3.p': 'Soft lashing, protective covers, full photo set shared the day the container is sealed.',
      'pc.proc.4.l': '04 · CUSTOMS',
      'pc.proc.4.h': 'Export documentation',
      'pc.proc.4.p': 'EU export declaration, bill of lading and country-specific certificates handled in-house.',
      'pc.proc.5.l': '05 · SAILING',
      'pc.proc.5.h': 'Tracked passage',
      'pc.proc.5.p': 'Carrier and sailing details shared on departure, status updates on key milestones.',
      'pc.proc.6.l': '06 · DELIVERY',
      'pc.proc.6.h': 'Door-to-door handover',
      'pc.proc.6.p': 'Clearance at destination, final delivery via partner carrier, condition report countersigned.',
      'pc.who.k': 'Who this is for',
      'pc.who.h': 'Trusted by owners who care about the details.',
      'pc.who.c1.t': 'Collectors &amp; HNW owners',
      'pc.who.c1.p': 'Moving a flagship, a weekend car or part of a collection between residences or to a specialist overseas.',
      'pc.who.c2.t': 'Dealerships &amp; brokers',
      'pc.who.c2.p': 'Export shipments of new or used premium cars where handling photos and clean paperwork are part of the sale.',
      'pc.who.c3.t': 'Auction houses &amp; specialists',
      'pc.who.c3.p': 'Pre- and post-sale transport with coordinated handovers to the receiving auctioneer, restorer or dealership.',
      'pc.faq.k': 'Questions we hear often',
      'pc.faq.h': 'Premium shipping FAQs.',
      'pc.faq.q1': 'Why a single-vehicle container?',
      'pc.faq.a1': 'So the loading plan is built around your car, not around what else fits. No shared bulkheads, no shared schedule, no risk of another car&#39;s mirror brushing yours during securing.',
      'pc.faq.q2': 'What about marine insurance?',
      'pc.faq.a2': 'We can quote a dedicated marine policy on request, based on the declared value. We&#39;ll walk you through excess, cover limits and documentation before you decide.',
      'pc.faq.q3': 'Can I visit the car in your warehouse before loading?',
      'pc.faq.a3': 'Yes. Our warehouse at Billstrasse 158 is a short drive from the Port of Hamburg. Call ahead and we&#39;ll arrange a time.',
      'pc.faq.q4': 'How do I know what&#39;s happening during the passage?',
      'pc.faq.a4': 'On the day the container sails you receive the vessel name, voyage number and ETA. We proactively flag any schedule changes.',
      'pc.cta.k': 'Ready to ship?',
      'pc.cta.h': 'Let&#39;s treat your car the way you do.',
      'pc.cta.p': 'Send us the VIN, pickup and destination and our specialist desk will come back with a fixed quote.',
      'pc.cta.b': 'Request a premium quote →',
    },
    de: {
      "ft.cta.k": "Ihre nächste Sendung",
      "ft.cta.h": "Verbinden wir Ihr nächstes Ziel.",
      "ft.network.k": "Ab Hamburg vernetzt",
      "ft.network.p": "See, Luft und Straße — koordiniert ab Hamburg zu weltweiten Destinationen.",
      "ft.network.badge": "Hamburg · Deutschland",
      "ft.contact.k": "Sprechen wir über Logistik",
      "fr.overview": "Überblick",
      "fr.solutions": "Transportoptionen",
      "fr.planning": "Sendung planen",
      "fr.quote": "Angebot anfordern",
      "fr.glance": "Auf einen Blick",
      "fr.optionsK": "Passend zu Ihrer Fracht",
      "fr.optionsH": "Eine Lösung für jede Sendung.",
      "fr.planningK": "Die wichtigsten Angaben zuerst",
      "fr.planningH": "Klare Angaben.<br>Ein besserer Transportplan.",
      "fr.ctaK": "Ihre nächste Sendung",
      "fr.ctaH": "Planen wir die nächste Etappe.",
      "fr.ctaP": "Senden Sie die Details an unser Hamburger Team und besprechen Sie Ihren Transportbedarf.",
      "fr.call": "Unser Team anrufen",
      "fr.related": "Weitere Leistungen entdecken",
      "fr.back": "Alle Leistungen",
      "fr.step.0.t": "Beschreiben Sie die Fracht",
      "fr.step.0.p": "Nennen Sie Maße, Gewicht und besondere Handling-Anforderungen.",
      "fr.step.1.t": "Legen Sie die Route fest",
      "fr.step.1.p": "Teilen Sie Abhol- und Zustellorte mit.",
      "fr.step.2.t": "Stimmen Sie Termine ab",
      "fr.step.2.p": "Nennen Sie Wunschtermine und Ihre Frist.",
      "sf.name": "Seefracht",
      "sf.category": "Internationale Fracht / See",
      "sf.headline": "Seefracht.<br>Weltweit verbunden.",
      "sf.hero": "Von Containerladungen bis zu komplexer Fracht: Seetransporte passend zu Ihrer Sendung.",
      "sf.introTitle": "Ein weltweites Netzwerk.<br>Ein persönlicher Ansatz.",
      "sf.intro": "Als NVOCC mit eigenem Equipment arbeitet MTS weltweit mit Reedereien und Speditionsnetzwerken zusammen. Containerisierte, konventionelle und Projektladungen werden nach Ihren Anforderungen koordiniert — mit regelmäßigen Abfahrten und wettbewerbsfähigen Preisen.",
      "sf.fact.0.k": "Betriebsmodell",
      "sf.fact.0.v": "NVOCC",
      "sf.fact.1.k": "Equipment",
      "sf.fact.1.v": "Eigenes Equipment",
      "sf.fact.2.k": "Reichweite",
      "sf.fact.2.v": "Weltweites Netzwerk",
      "sf.svc.0.t": "Komplette Containerladungen",
      "sf.svc.0.p": "FCL-Kapazität für Fracht, die einen eigenen Container benötigt.",
      "sf.svc.1.t": "Geteilte Containerladungen",
      "sf.svc.1.p": "LCL-Optionen, wenn Ihre Fracht keinen ganzen Container füllt.",
      "sf.svc.2.t": "RoRo-Transporte",
      "sf.svc.2.p": "Seetransport für Fahrzeuge und rollende Maschinen.",
      "sf.svc.3.t": "Konventionelle Stückgüter",
      "sf.svc.3.p": "Fracht außerhalb der üblichen Containerverladung.",
      "sf.svc.4.t": "Schwere & übergroße Ladungen",
      "sf.svc.4.p": "Transportoptionen für schwere, hohe und maßüberschreitende Güter.",
      "sf.svc.5.t": "Projektverladungen",
      "sf.svc.5.p": "Koordinierte Seetransporte für komplexe Projektladungen.",
      "af.name": "Luftfracht",
      "af.category": "Internationale Fracht / Luft",
      "af.headline": "Luftfracht.<br>Wenn Zeit zählt.",
      "af.hero": "Weltweite Luftfrachtverbindungen für Sendungen, die schnell ankommen müssen.",
      "af.introTitle": "Schnelligkeit — mit Blick<br>auf jedes Detail.",
      "af.intro": "MTS ist weltweit mit Airlines und Spediteuren verbunden, um zeitkritische Fracht zu koordinieren. Route, Kapazität und Abfertigung werden gemeinsam geplant und unterstützen eine reibungslose Lieferkette von der Abholung bis zur Zustellung.",
      "af.fact.0.k": "Verbindungen",
      "af.fact.0.v": "Globales Carrier-Netzwerk",
      "af.fact.1.k": "Abfertigung",
      "af.fact.1.v": "Europäische Flughäfen",
      "af.fact.2.k": "Kapazitätsoptionen",
      "af.fact.2.v": "Linienflug & Charter",
      "af.svc.0.t": "Allgemeine Luftfrachtsendungen",
      "af.svc.0.p": "Weltweite Luftfrachtoptionen für Ihre Sendung.",
      "af.svc.1.t": "Express-Bearbeitung",
      "af.svc.1.p": "Beschleunigte Abfertigung mit organisierter Abholung und Zustellung.",
      "af.svc.2.t": "Zollservice am Flughafen",
      "af.svc.2.p": "Import- und Exportabfertigung an Flughäfen in ganz Europa.",
      "af.svc.3.t": "Charter für Teilladungen",
      "af.svc.3.p": "Gecharterte Kapazitäten für Luftfracht-Teilladungen.",
      "af.svc.4.t": "Komplette Flugzeugcharter",
      "af.svc.4.p": "Optionen für ganze Flugzeuge, auch für spezielle Schwerlastmaschinen.",
      "rt.name": "Straßengüterverkehr",
      "rt.category": "Landtransport / Hafenvor-/-nachlauf & international",
      "rt.headline": "Straßengüterverkehr.<br>Vom Hafen in die Welt.",
      "rt.hero": "Hafenvor-/-nachlauf, Nahverkehr und internationaler Fernverkehr — ein Hamburger Team vom Terminaltor bis zum Ziel.",
      "rt.introTitle": "Die passende Route.<br>Die passende Abwicklung.",
      "rt.intro": "MTS verbindet Hafenvor-/-nachlauf, Containernahverkehr und internationale Straßentransporte in einer Leistung. Eigene Flotte und Seitenlader übernehmen die Containerpositionierung rund um Hamburg, während regelmäßige Abfahrten Europa mit der GUS und Afghanistan verbinden. Zeitplan, Kapazität und Kosten werden auf jede Sendung abgestimmt.",
      "rt.fact.0.k": "Leistungsumfang",
      "rt.fact.0.v": "Hafenvor-/-nachlauf · Europa · GUS · Afghanistan",
      "rt.fact.1.k": "Containerbetrieb",
      "rt.fact.1.v": "Eigene Flotte",
      "rt.fact.2.k": "Gestellung",
      "rt.fact.2.v": "Eigener Seitenlader",
      "rt.svc.0.t": "Hafenvor-/-nachlauf ab Hamburg",
      "rt.svc.0.p": "Containerbewegungen zwischen den Hamburger Hafenterminals, unserem Yard und Ihrem Abhol- oder Zustellort.",
      "rt.svc.1.t": "Container-Nahverkehr",
      "rt.svc.1.p": "Containertransporte im Nahverkehr rund um Hamburg, angebunden an den Folgetransport.",
      "rt.svc.2.t": "Europa nach GUS & Afghanistan",
      "rt.svc.2.p": "Tägliche Abfahrten von europäischen Ausgangspunkten zu diesen Zielen.",
      "rt.svc.3.t": "Schwere & großvolumige Ladungen",
      "rt.svc.3.p": "Straßentransportoptionen für Schwergut und große Ladungen.",
      "rt.svc.4.t": "Gestellung per Seitenlader",
      "rt.svc.4.p": "Containerpositionierung mit dem eigenen Seitenlader von MTS.",
      "rt.svc.5.t": "Container-Rundläufe",
      "rt.svc.5.p": "Containerbewegungen im Rundlauf mit der unternehmenseigenen Flotte.",
      "rt.svc.6.t": "Konventionelle Fracht",
      "rt.svc.6.p": "Transportlösungen für Stückgut außerhalb von Containern.",
      "rt.svc.7.t": "Eilige Sendungen & Gefahrgut",
      "rt.svc.7.p": "Besprechen Sie Termine und Handling mit dem Operations-Team.",
      "tk.hero.k": "Landtransport & Terminal",
      "tk.hero.t": "Trucking",
      "tk.hero.sub": "Container-Nahverkehr und kurze Transportwege ab Hamburg — wir verbinden Ihre Sendung mit der nächsten Etappe.",
      "tk.hero.cta1": "Trucking-Angebot anfordern",
      "tk.hero.cta2": "Trucking entdecken",
      "tk.intro.k": "Container-Trucking",
      "tk.intro.h": "Die Verbindung zwischen Hafen und Straße.",
      "tk.intro.p": "MTS koordiniert Container-Trucking und kurze Transporte ab Hamburg. Sprechen Sie mit unserem Team über Abholung, Zustellung und die anschließende Beförderung.",
      "tk.list.k": "Landtransport",
      "tk.list.h": "Damit Ihr Container weiterkommt.",
      "tk.l1": "Container-Nahverkehr ab Hamburg",
      "tk.l2": "Containertransporte auf kurzen Strecken",
      "tk.l3": "Koordination von Abholung und Zustellung",
      "tk.l4": "Anbindung an den Weitertransport",
      "tk.cta.k": "Unser Team in Hamburg",
      "tk.cta.h": "Planen Sie Ihren Containertransport.",
      "tk.cta.p": "Teilen Sie uns Abholort, Zustellort und Containerdetails mit, damit unser Team den nächsten Schritt planen kann.",
      // ==== Global chrome ====
      'top.hours': 'Mo–Fr: 9:00 – 18:00 Uhr',
      'top.phone': '+49 (0)40 / 819 78 530',
      'top.email': 'info@mtsonline.de',
      'top.downloads': 'Downloads',
      'top.follow': 'Folgen Sie uns',
      'ft.head': 'HAUPTSITZ',
      'ft.address_full': 'Billstraße 158<br>20539 Hamburg / Deutschland',
      'ft.tel_label': 'Tel.:',
      'ft.fax_label': 'Fax:',
      'ft.email_label': 'E-Mail:',
      'ft.fax': '+49 (0)40 / 819 78 355',
      'sw.title': 'MTS Kundenservice',
      'sw.subtitle': 'Wie kann unser Hamburger Team helfen?',
      'sw.opt1': 'Transportangebot anfordern',
      'sw.opt2': 'Fahrzeugversand',
      'sw.opt3': 'Zoll & Lager',
      'sw.opt4': 'Container-Terminal',
      'sw.opt5': 'Internationale Spedition',
      'sw.cta': 'Weiter zum Angebot',
      'sw.contact': 'Oder erreichen Sie uns direkt',
      'sw.aria': 'MTS Kundenservice kontaktieren',
      'nav.home': 'Startseite',
      'nav.services': 'Leistungen',
      'nav.classic': 'Oldtimer & Premiumfahrzeuge',
      'nav.destinations': 'Destinationen',
      'nav.about': 'Über uns',
      'nav.news': 'Aktuelles',
      'nav.contact': 'Kontakt',
      'nav.quote': 'Angebot anfordern',
      'nav.premium': 'Premiumfahrzeuge',
      'nav.services.all': 'Alle Leistungen',
      'nav.sub.trucking': 'Straßengüterverkehr',
      'nav.sub.sea': 'Seefracht',
      'nav.sub.air': 'Luftfracht',
      'nav.sub.road': 'Straßengüterverkehr',
      'nav.sub.rail': 'Schienentransport',
      'nav.sub.car': 'Autoverschiffung',
      'nav.sub.ind': 'Individuelle Lösungen',
      'nav.sub.cc': 'Oldtimer',
      'nav.mega.feat.b1': 'Festangebot in ca. 2 Werkstunden',
      'nav.mega.feat.b2': 'Ein Hamburger Ansprechpartner',
      'nav.mega.feat.b3': '100+ Partnerspediteure weltweit',
      'nav.mega.bar.hours': 'Mo–Fr 9–18:00 Uhr',
      'nav.mega.bar.phone': '+49 (0)40 / 819 78 530',
      'nav.mega.bar.email': 'info@mtsonline.de',
      'nav.mega.bar.badge': 'LIVE',
      'nav.mega.bar.reply': 'Operations-Team online · Antwort meist unter 2h',
      'nav.mega.live.k': 'Gerade unterwegs',
      'nav.mega.live.from': 'HAMBURG',
      'nav.mega.live.to': 'WELTWEIT',
      'nav.mega.live.ops': 'Operations-Team',
      'nav.mega.live.routes': 'Partnerrouten',
      'nav.sub.trucking.d': 'Hafenvor-/-nachlauf, Nahverkehr &amp; internationaler Fernverkehr',
      'nav.sub.sea.d': 'FCL / LCL Seefracht weltweit',
      'nav.sub.air.d': 'Zeitkritische Luftfracht über Partner',
      'nav.sub.road.d': 'Hafenvor-/-nachlauf, Nahverkehr &amp; internationaler Fernverkehr',
      'nav.sub.rail.d': 'Kombinierte Routen nach Zentralasien &amp; GUS',
      'nav.sub.car.d': '4–6 Fahrzeuge pro 40&#39; HC, weltweit',
      'nav.sub.cc.d': 'Geschlossener Einzelfahrzeug-Containerversand',
      'nav.sub.ind.d': 'Maßgeschneiderte multimodale Routen für Ihre Akte',
      'nav.col.ground': 'STRASSE & TERMINAL',
      'nav.col.freight': 'INTERNATIONALE SPEDITION',
      'nav.col.vehicles': 'FAHRZEUGE',
      'nav.mega.feat.k': 'ETWAS SPEZIELLES?',
      'nav.mega.feat.h': 'Individuelle Lösungen',
      'nav.mega.feat.p': 'Nicht-Standard-Routen, Projektladung, übergroße Fracht oder kombinierte Verkehrsträger — sprechen Sie mit unserem Hamburger Team.',
      'nav.mega.feat.cta': 'Jetzt sprechen',
      'dl.title': 'Downloads',
      'dl.subtitle': 'Dokumente, die Sie in der Zusammenarbeit mit MTS benötigen. Klicken Sie auf eine Karte, um das PDF herunterzuladen.',
      'dl.close': 'Schließen',
      'dl.adsp.title': 'ADSp — Allgemeine Deutsche Spediteurbedingungen',
      'dl.adsp.desc': 'Die englische Fassung 2003 der ADSp — Grundlage unserer Speditionsverträge.',
      'dl.order.title': 'MTS Transportauftrag',
      'dl.order.desc': 'Auftragformular / Proforma Invoice für Fahrzeugtransporte. Ausdrucken, ausfüllen und Ihrer Anfrage beilegen.',
      'dl.incoterms.title': 'Incoterms® 2010 — Übersicht',
      'dl.incoterms.desc': 'Einseitige Übersicht der Incoterms® 2010: Klauseln, Transportarten sowie Gefahren- und Kostenübergang.',
      'dl.download': 'PDF herunterladen',
      'dl.pages': 'Seiten',
      'dl.page': 'Seite',
      'ft.services': 'LEISTUNGEN',
      'ft.company': 'UNTERNEHMEN',
      'ft.contact': 'KONTAKT',
      'ft.customs': 'Zolllager',
      'ft.vehicle': 'Fahrzeuglogistik',
      'ft.container': 'Container-Terminal',
      'ft.freight': 'Internationale Spedition',
      'ft.classic': 'Oldtimer & Premiumfahrzeuge',
      'ft.address': 'Billstraße 158<br>20539 Hamburg, Deutschland',
      'ft.rights': '© {year} Mangal Transport & Shipping GmbH',
      'ft.city': 'Hamburg, Deutschland',

      // ==== HOME ====
      'h.hero.k1': '01 / LOGISTIKZENTRUM HAMBURG',
      'h.hero.t1': 'Ihr Standort für Zoll, Container und Fahrzeuge im Hamburger Hafen.',
      'h.hero.c1': 'Ein Hamburger Team für die sorgfältige Abwicklung und den weltweiten Transport Ihrer Fracht.',
      'h.hero.k2': '02 / FAHRZEUGLOGISTIK',
      'h.hero.t2': 'Sorgfältige Verladung für Fahrzeuge mit Ziel.',
      'h.hero.c2': 'Sichere Containerbeladung und Exportabwicklung für Alltags-, Oldtimer- und Premiumfahrzeuge.',
      'h.hero.k3': '03 / GLOBALE SPEDITION',
      'h.hero.t3': 'See, Luft und Straße — aus Hamburg in die Welt.',
      'h.hero.c3': 'FCL, LCL und Spezialleistungen über unsere Hamburger Basis zu Zielorten weltweit.',
      'h.hero.cta1': 'Angebot anfordern',
      'h.hero.cta2': 'Leistungen entdecken',
      'h.slide.1.s': '01 / HAFENOPERATIONEN',
      'h.slide.1.b': 'Hub Hamburg',
      'h.slide.2.s': '02 / FAHRZEUGLOGISTIK',
      'h.slide.2.b': 'Sorgfältige Verladung',
      'h.slide.3.s': '03 / GLOBALE SPEDITION',
      'h.slide.3.b': 'Weltweite Routen',
      'h.members.label': 'UNSER NETZWERK & MITGLIEDSCHAFTEN',
      'h.intro.label': 'DER MTS VORTEIL',
      'h.intro.title': 'Verwurzelt in Hamburg.<br><em>Bewegen wir alles.</em>',
      'h.intro.p': 'Von Zolllager über Fahrzeugverladung bis zur internationalen Spedition — unser Team koordiniert jeden Schritt dort, wo die Arbeit passiert. Praktische Expertise auf dem Hof, klare Kommunikation entlang der Route.',
      'h.intro.link': 'MTS kennenlernen',
      'h.services.label': 'WAS WIR TUN',
      'h.services.title': 'Leistungen rund um<br>Ihre Sendung.',
      'h.services.link': 'Alle Leistungen ansehen',
      'h.services.s1.s': '01 / VOR-ORT-EXPERTISE',
      'h.services.s1.h': 'Zolllager',
      'h.services.s1.p': 'Zollverschluss, Zollprüfungen und Dokumentation nahe des Hafens.',
      'h.services.s2.s': '02 / SORGFÄLTIGE ABWICKLUNG',
      'h.services.s2.h': 'Fahrzeuglogistik',
      'h.services.s2.p': 'Sichere Verladung, Ladungssicherung und weltweiter Versand von Fahrzeugen.',
      'h.services.s3.s': '03 / HAFENOPERATIONEN',
      'h.services.s3.h': 'Container-Terminal',
      'h.services.s3.p': 'Beladen, Entladen, Lagerung und Terminalanbindung auf unserem Gelände.',
      'h.feature.caption': 'AUS HAMBURG / IN DIE WELT',
      'h.feature.label': 'INTERNATIONALE SPEDITION',
      'h.feature.title': 'Die richtige Route für jede Fracht.',
      'h.feature.p': 'See, Luft, Straße und Schiene — koordiniert aus Hamburg. Wir planen die Reise nach Ladung, Terminen und den Anforderungen des Ziellandes.',
      'h.feature.sea': 'Seefracht',
      'h.feature.sea.s': 'FCL / LCL',
      'h.feature.air': 'Luftfracht',
      'h.feature.air.s': 'ZEITKRITISCH',
      'h.feature.road': 'Straßengüterverkehr',
      'h.feature.road.s': 'VOR-/NACHLAUF + FERNVERKEHR',
      'h.proof.label': 'WARUM MTS',
      'h.proof.title': 'Ein Ort für alle<br>Details.',
      'h.proof.p1': 'Eigenes Betriebsgelände in Hamburg',
      'h.proof.p2': 'Zollprüfungen und Abwicklung vor Ort',
      'h.proof.p3': 'Vier bis sechs Fahrzeuge pro 40&#39; HC Container',
      'h.proof.p4': 'Mehrsprachiges Team für den internationalen Handel',
      'h.lead.label': 'SENDUNG STARTEN',
      'h.lead.title': 'Sagen Sie uns,<br>was bewegt werden soll.',
      'h.lead.p': 'Zoll, Fahrzeuge oder Container: senden Sie uns die Eckdaten und unser Hamburger Team übernimmt.',
      'h.lead.direct': 'DIREKTER KONTAKT',
      'h.form.h1': 'ANGEBOT ANFORDERN',
      'h.form.h2': 'HAMBURG / WELTWEIT',
      'h.form.service': 'Leistung',
      'h.form.svc.choose': 'Leistung wählen',
      'h.form.name': 'Ihr Name',
      'h.form.name.ph': 'Vollständiger Name',
      'h.form.email': 'E-Mail-Adresse',
      'h.form.email.ph': 'sie@firma.com',
      'h.form.phone': 'Telefon (optional)',
      'h.form.phone.ph': '+49 ...',
      'h.form.from': 'Von',
      'h.form.from.ph': 'Ausgangsort / Hafen',
      'h.form.to': 'Nach',
      'h.form.to.ph': 'Zielort / Hafen',
      'h.form.details': 'Sendungsdetails',
      'h.form.details.ph': 'Fracht, Fahrzeug, Zeitplan oder besondere Anforderungen',
      'h.form.consent': 'Ich stimme zu, dass MTS diese Angaben zur Beantwortung meiner Anfrage verwenden darf.',
      'h.form.submit': 'Anfrage vorbereiten',
      'h.form.submit.hint': 'Öffnet Ihre E-Mail-App',
      'h.guide.title': 'MTS Sendungsassistent',
      'h.guide.q': 'Was möchten Sie versenden?',
      'h.guide.o1': 'Fracht für den Zoll',
      'h.guide.o2': 'Ein Fahrzeug',
      'h.guide.o3': 'Einen Container',
      'h.guide.o4': 'Sonstige Fracht',
      'h.float.wa': 'WhatsApp',
      'h.float.ask': 'MTS fragen',

      // Shared hero meta pills
      'g.meta.hamburg': 'Standort Hamburg',
      'g.meta.since': 'Seit 2003',
      'g.meta.worldwide': '100+ Destinationen',
      'g.cta.quote': 'Angebot anfordern',
      'g.cta.contact': 'Mit uns sprechen',

      // ==== ABOUT ====
      'a.hero.k': 'Über MTS',
      'a.hero.t': 'Internationale Spedition mit Herz in Hamburg.',
      'a.hero.sub': 'Die Mangal Transport &amp; Shipping GmbH ist seit 2003 eine Hamburger internationale Spedition — Zoll, Fahrzeuglogistik und weltweiter Containerversand aus der Billstraße 158 in Rothenburgsort.',
      'a.hero.cta1': 'Angebot anfordern',
      'a.hero.cta2': 'Team kennenlernen',
      'a.intro.k': 'Die MTS Geschichte',
      'a.intro.h': 'Über zwei Jahrzehnte Fracht aus Hamburg in die Welt.',
      'a.intro.p1': 'Die <strong>Mangal Transport &amp; Shipping GmbH</strong> — MTS — ist seit 2003 eine Hamburger internationale Spedition. Von unserem Betriebsstandort in der Billstraße 158 in Rothenburgsort, wenige Minuten von den Containerterminals des Hamburger Hafens entfernt, planen, bereiten und versenden wir Fracht nach Europa, Amerika, Asien, Afrika und in alle Länder des Nahen und Mittleren Ostens.',
      'a.intro.p2': 'Unsere Arbeit ist praktisch: Zollabwicklung für Waren in die und aus der EU, sorgfältige Verladung von Fahrzeugen und Maschinen in Container, Cross-Docking und Sammelladungskonsolidierung, sowie Haus-zu-Haus-Koordination auf Straße, See und in der Luft. Ob ein einzelner Oldtimer, eine Sammelladung nach Dubai oder eine Projektsendung nach Westafrika — dasselbe Team betreut die Akte von der Buchung bis zur Ankunft.',
      'a.intro.p3': 'Wir arbeiten weltweit mit einem Netzwerk langjähriger Partnerspediteure zusammen, sodass eine Sendung aus unserem Hamburger Lager am Zielort von Menschen empfangen wird, die wir kennen. Dieses Partnerschaftsmodell ist der Grund, warum MTS-Sendungen den Kunden am Zielort selten überraschen.',
      'a.facts.k': 'Fakten über MTS',
      'a.facts.h': 'Eine Hamburger Spedition auf einen Blick.',
      'a.facts.1.b': '2003',
      'a.facts.1.s': 'Gründungsjahr von MTS als unabhängige internationale Spedition in Hamburg.',
      'a.facts.2.b': '~11',
      'a.facts.2.s': 'Mitarbeitende im operativen Team — sie sprechen Deutsch, Englisch, Türkisch, Dari, Paschtu und Spanisch.',
      'a.facts.3.b': '4–6',
      'a.facts.3.s': 'Fahrzeuge, die wir in einen 40&#39; HC Container verladen — mit Ladungssicherung und Fotodokumentation.',
      'a.facts.4.b': '3',
      'a.facts.4.s': 'Verkehrsträger End-to-End: Straße, See und Luft — plus Schiene für Zentralasien über Partner.',
      'a.facts.5.b': '3',
      'a.facts.5.s': 'Kernbereiche: Zoll &amp; Lager, Fahrzeuglogistik, internationale Spedition.',
      'a.facts.6.b': 'LIHH',
      'a.facts.6.s': 'Mitglied der Logistik-Initiative Hamburg, dem branchenübergreifenden Logistiknetzwerk der Region.',
      'a.facts.7.b': 'HRB 106401',
      'a.facts.7.s': 'Eingetragen beim Amtsgericht Hamburg, Handelsregister B.',
      'a.facts.8.b': '20539',
      'a.facts.8.s': 'Billstraße 158, 20539 Hamburg — Betriebsgelände, Lager und Büro unter einem Dach.',
      'a.div.k': 'Was wir tun',
      'a.div.h': 'Drei Bereiche, eine operative Akte.',
      'a.div.sub': 'Jede Akte bei MTS wird von einem Team betreut, das die Sendung von der Buchung bis zur Ankunft begleitet.',
      'a.div.h1': 'Zoll &amp; Lager',
      'a.div.p1': 'Ausfuhranmeldungen, T1/T2-Verfahren und Zolllagerung. Wir wickeln Nicht-EU-Ware unter zollamtlicher Überwachung ab, lagern sie in unserem Lager und exportieren sie erneut, sobald die Dokumente vorliegen.',
      'a.div.h2': 'Fahrzeuglogistik',
      'a.div.p2': 'Multi-Fahrzeugbeladung von 4–6 Fahrzeugen in einen 40&#39; HC Container, sorgfältige Ladungssicherung, Fotodokumentation, RoRo-Buchungen und Einzelfahrzeugversand für Premiumfahrzeuge. Mit eigenem Containerseitenlader und Lkw-Flotte für Verladungen in und um Hamburg und Bremerhaven.',
      'a.div.h3': 'Internationale Spedition',
      'a.div.p3': 'FCL- und LCL-Seefracht weltweit, Straßensammelladungen innerhalb Europas, Luftfracht und Projektladungen. Konsolidierung von LCL-Sendungen direkt aus unserem Hamburger Lager, in Zusammenarbeit mit Partnerspediteuren.',
      'a.team.k': 'Menschen, die Ihre Route verstehen',
      'a.team.h': 'Sprechen Sie mit einem Team, das Ihre Sprache spricht.',
      'a.team.c1.t': 'Zoll &amp; Terminal',
      'a.team.c1.p': 'Ausfuhranmeldungen, T1/T2-Verfahren, Zolllagerung und Container-Freistellung am Hamburger Hafen.',
      'a.team.c1.l': 'DE · EN · TR',
      'a.team.c2.t': 'Fahrzeuglogistik',
      'a.team.c2.p': 'Containerbeladung mit 4–6 Fahrzeugen pro 40&#39; HC, RoRo-Buchungen, Einzelfahrzeugversand und Exportdokumentation.',
      'a.team.c2.l': 'DE · EN · Dari · Paschtu',
      'a.team.c3.t': 'Internationale Spedition',
      'a.team.c3.p': 'FCL und LCL auf See, Straßensammelladungen innerhalb Europas, Luftfracht und Projektladungen nach Amerika, Afrika, Asien und in den Nahen Osten.',
      'a.team.c3.l': 'DE · EN · ES',
      'a.loc.k': 'Standort Hamburg',
      'a.loc.h': 'Billstraße 158, 20539 Hamburg.',
      'a.loc.p': 'Ein spezieller Betriebsstandort in Rothenburgsort, in unmittelbarer Nähe zu den Containerterminals des Hamburger Hafens — Zollabwicklung, Terminalarbeit, Lagerfläche und globale Speditionskoordination unter einem Dach.',
      'a.loc.det': '<strong>Adresse:</strong> Billstraße 158, 20539 Hamburg, Deutschland<br><strong>Telefon:</strong> <a href="tel:+494081978530">+49 (0)40 819 78 530</a><br><strong>Fax:</strong> +49 (0)40 819 78 355<br><strong>E-Mail:</strong> <a href="mailto:info@mtsonline.de">info@mtsonline.de</a><br><strong>Öffnungszeiten:</strong> Montag bis Freitag, 09:00 – 17:00 MEZ<br><strong>Registrierung:</strong> Handelsregister Hamburg, HRB 106401',
      'a.cta.k': 'Bereit, wenn Sie es sind',
      'a.cta.h': 'Versenden Sie mit einem Hamburger Team, das die Akte End-to-End betreut.',
      'a.cta.p': 'Senden Sie uns Route, Fracht und Zeitplan — wir melden uns mit einem Routenplan und einem festen Angebot.',
      'a.cta.b': 'Angebot anfordern →',

      // ==== DESTINATIONS ====
      'd.hero.k': 'Destinationen',
      'd.hero.t': 'Von Hamburg in die Wachstumsmärkte der Welt.',
      'd.hero.sub': 'Container-, RoRo- und Sammelladungsdienste aus dem Hamburger Hafen in den Nahen und Mittleren Osten, nach Zentralasien, Afrika, Amerika und Asien — über hundert Länder über unser Partnernetzwerk.',
      'd.hero.cta1': 'Routenplan anfragen',
      'd.hero.cta2': 'Regionen ansehen',
      'd.intro.k': 'Wohin wir oft fahren',
      'd.intro.h': 'Wissen reist mit Ihrer Fracht.',
      'd.intro.p1': 'Von unserem Gelände in der Billstraße und den Containerterminals des Hamburger Hafens aus bucht, verlädt und versendet MTS Sendungen in über hundert Länder. Manche Routen fahren wir Woche für Woche — Dubai, Irak, Afghanistan, Angola, Nigeria — und dort kennen wir die Dokumente, die Empfänger und die Fahrpläne auswendig. Andere Sendungen routen wir über Partnernetzwerke, mit denen wir seit Jahren zusammenarbeiten, sodass eine Sendung aus Hamburg am Zielort von Menschen empfangen wird, die wir kennen.',
      'd.intro.p2': 'Die Panels unten zeigen die Regionen, in die wir am häufigsten versenden. Die Transitzeiten sind Richtwerte und hängen von Reederei, Hafenpaar, Saison und Zoll am Zielort ab — die genaue Route und ETA bestätigen wir im Angebot.',
      'd.f.all': 'Alle Regionen',
      'd.f.me': 'Naher & Mittlerer Osten',
      'd.f.ca': 'Zentralasien & GUS',
      'd.f.af': 'Afrika',
      'd.f.am': 'Amerika',
      'd.f.as': 'Asien',
      'd.r1.s': 'NAHER &amp; MITTLERER OSTEN',
      'd.r1.h': 'Dubai, GKR &amp; weiter',
      'd.r1.p': 'Direkte und Umschlag-Verbindungen von Hamburg nach Jebel Ali und weiter durch den Golf. Fahrzeuge, Maschinen und Konsumgüter — mit sorgfältiger Exportdokumentation für den GKR-Zoll.',
      'd.r1.t': 'See 18–30 Tage',
      'd.r1.m': 'FCL · LCL · RoRo',
      'd.r2.s': 'NAHER &amp; MITTLERER OSTEN',
      'd.r2.h': 'Irak, Ägypten &amp; die Levante',
      'd.r2.p': 'Regelmäßige Containerdienste nach Umm Qasr und Alexandria, mit Landtransport weiter nach Bagdad, Erbil, Kairo und in die Levante. Lokale Partner übernehmen Freistellung und Zustellung.',
      'd.r2.t': 'See 20–35 Tage',
      'd.r2.m': 'FCL · LCL',
      'd.r3.s': 'ZENTRALASIEN &amp; GUS',
      'd.r3.h': 'Afghanistan &amp; Zentralasien',
      'd.r3.p': 'Kombinierte See-, Schienen- und Straßenlösungen nach Afghanistan, Turkmenistan, Usbekistan, Kasachstan und in benachbarte Märkte — eine langjährige MTS-Spezialisierung.',
      'd.r3.t': 'Multimodal 25–45 Tage',
      'd.r3.m': 'See · Schiene · Straße',
      'd.r4.s': 'ZENTRALASIEN &amp; GUS',
      'd.r4.h': 'Kaukasus &amp; GUS',
      'd.r4.p': 'Container- und Straßendienste in den Kaukasus und die weitere GUS mit zuverlässiger Zollkoordination an Landgrenzen.',
      'd.r4.t': 'Multimodal 18–35 Tage',
      'd.r4.m': 'See · Straße',
      'd.r5.s': 'AFRIKA',
      'd.r5.h': 'West- &amp; Nordafrika',
      'd.r5.p': 'Etablierte Routen für Container, Fahrzeuge und Konsumgüter in west- und nordafrikanische Märkte, mit Partnerabfertigung am Zielort.',
      'd.r5.t': 'See 21–40 Tage',
      'd.r5.m': 'FCL · RoRo · LCL',
      'd.r6.s': 'AFRIKA',
      'd.r6.h': 'Ostafrika &amp; Horn von Afrika',
      'd.r6.p': 'Containerdienste über wichtige ostafrikanische Hubs für Märkte rund um das Rote Meer und die Ostafrikanische Gemeinschaft.',
      'd.r6.t': 'See 25–45 Tage',
      'd.r6.m': 'FCL · LCL',
      'd.r7.s': 'AMERIKA',
      'd.r7.h': 'USA &amp; Kanada',
      'd.r7.p': 'FCL, LCL und RoRo aus Hamburg und Bremerhaven zur US-Ostküste, zum Golf und zu kanadischen Häfen — mit hausinterner Exportdokumentation.',
      'd.r7.t': 'See 12–20 Tage',
      'd.r7.m': 'FCL · LCL · RoRo',
      'd.r8.s': 'AMERIKA',
      'd.r8.h': 'Südamerika &amp; Kuba',
      'd.r8.p': 'Maßgeschneiderte Container- und Fahrzeugtransporte zu zentral- und südamerikanischen Zielen, inklusive Spezialdiensten nach Kuba.',
      'd.r8.t': 'See 25–40 Tage',
      'd.r8.m': 'FCL · LCL',
      'd.r9.s': 'ASIEN',
      'd.r9.h': 'Süd- &amp; Südostasien',
      'd.r9.p': 'Regelmäßige Containerdienste nach Süd- und Südostasien, zusätzlich Luftfracht für zeitkritische Sendungen über Partnernetzwerke.',
      'd.r9.t': 'See 22–40 Tage',
      'd.r9.m': 'FCL · LCL · Luft',
      'd.r10.s': 'ASIEN',
      'd.r10.h': 'China &amp; Fernost',
      'd.r10.p': 'Containerdienste aus Hamburg zu den wichtigsten Häfen Chinas und des Fernen Ostens — mit sorgfältiger Dokumentation für die Weiterlieferung im Landesinneren.',
      'd.r10.t': 'See 30–45 Tage',
      'd.r10.m': 'FCL · LCL',
      'd.how.k': 'Wie wir arbeiten',
      'd.how.h': 'Routenoptionen, die zur Fracht passen — nicht umgekehrt.',
      'd.how.c1.t': 'FCL — voller Container',
      'd.how.c1.p': '20&#39; und 40&#39; Standard, 40&#39; HC und Open-Top Container, gebucht bei der Reederei, die zu Hafenpaar und Timing passt.',
      'd.how.c1.l': 'Seefracht',
      'd.how.c2.t': 'LCL — Sammelladung',
      'd.how.c2.p': 'Konsolidierung aus unserem Hamburger Lager für kleinere Sendungen, mit Partner-Dekonsolidierung am Zielort.',
      'd.how.c2.l': 'Seefracht',
      'd.how.c3.t': 'RoRo &amp; Sonderausrüstung',
      'd.how.c3.p': 'Roll-on/Roll-off für Fahrzeuge und Maschinen, wo der Zielort es zulässt, sowie Flatracks und Open-Tops für übergroße Ladung.',
      'd.how.c3.l': 'Seefracht',
      'd.faq.k': 'Häufige Fragen',
      'd.faq.h': 'Destinations-FAQ.',
      'd.faq.q1': 'Aus welchen Häfen versenden Sie?',
      'd.faq.a1': 'Primär aus dem Hamburger Hafen, zusätzlich Bremerhaven für ausgewählte RoRo- und Containerdienste. Wir übernehmen Vor- und Nachlauf, Seitenladerarbeit und Exportdokumentation dazwischen.',
      'd.faq.q2': 'Bieten Sie Haus-zu-Haus an?',
      'd.faq.a2': 'Ja. Wir koordinieren Abholung in Deutschland oder Nachbarländern, Containerbeladung in Hamburg, Seefracht, Zoll am Zielort und die letzte Zustellung über unser Partnernetzwerk.',
      'd.faq.q3': 'Versenden Sie persönliche Gegenstände und Umzugsgut?',
      'd.faq.a3': 'Ja — im Rahmen unseres weltweiten Umzugsservices. Wir beraten zu Verpackung, Inventar und Exportdokumentation und übernehmen anschließend Sammelladung oder vollen Containerversand.',
      'd.faq.q4': 'Wickeln Sie Gefahrgut ab?',
      'd.faq.a4': 'Gefahrgutsendungen werden in Zusammenarbeit mit zertifizierten Gefahrgutbeauftragten (DGSA) im Einzelfall abgewickelt. Bitte senden Sie UN-Nummer, Klasse und Verpackungsgruppe mit Ihrer Anfrage.',
      'd.faq.q5': 'Welche Dokumente benötigen Sie von mir?',
      'd.faq.a5': 'Mindestens: eine Handelsrechnung oder ein Kaufvertrag, eine Packliste und — bei Fahrzeugen — der originale Fahrzeugbrief. Was das Zielland zusätzlich verlangt, teilen wir Ihnen mit dem Angebot mit.',
      'd.cta.k': 'Route nicht aufgeführt?',
      'd.cta.h': 'Wenn Hamburg dorthin verschicken kann, planen wir es.',
      'd.cta.p': 'Jedes Land im Nahen und Mittleren Osten und den Großteil der übrigen Welt über unser Partnernetzwerk. Sagen Sie uns, was bewegt werden soll.',
      'd.cta.b': 'Angebot anfordern →',

      // ==== NEWS ====
      'n.hero.k': 'Aktuelles &amp; Einblicke',
      'n.hero.t': 'Notizen vom Hof, aus dem Hafen und von der Route.',
      'n.hero.sub': 'Praktische Einblicke aus dem MTS-Team — Containerbeladung, Exportdokumentation, Routenupdates und Projektberichte aus dem Hamburger Hafen.',
      'n.hero.cta1': 'Aktuelles ansehen',
      'n.hero.cta2': 'Mit uns sprechen',
      'n.intro.k': 'Neueste',
      'n.intro.h': 'Speditionswissen und Projektberichte.',
      'n.intro.p': 'Praktische Notizen aus dem MTS-Team — Details hinter einer sauberen Containerbeladung, die Papiere, die eine Sendung am Zoll stoppen, die Routen, die wir dieses Quartal im Auge behalten, und die Projekte, die uns zum Nachdenken gebracht haben.',
      'n.c1.d': '2026 · September',
      'n.c1.cat': 'PROJEKTBERICHT',
      'n.c1.t': 'Vier Fahrzeuge, ein 40&#39; HC Container',
      'n.c1.p': 'Ein praktischer Blick auf Multi-Fahrzeug-Containerbeladung und warum sorgfältige Vorbereitung Kapazität und Zustand schützt.',
      'n.c1.r': 'Bericht lesen →',
      'n.c2.d': '2026 · August',
      'n.c2.cat': 'ZOLL',
      'n.c2.t': 'Ihre Exportdokumente vorbereiten',
      'n.c2.p': 'Die wesentlichen Details, die Ihrer Fracht einen reibungsloseren Weg von Hamburg zum Zielort ermöglichen.',
      'n.c2.r': 'Leitfaden lesen →',
      'n.c3.d': '2026 · Juli',
      'n.c3.cat': 'ROUTENUPDATE',
      'n.c3.t': 'Schienenverbindungen aus Europa nach Zentralasien',
      'n.c3.p': 'Wann die Schiene der nützliche Mittelweg zwischen Geschwindigkeit, Kosten und Routenzugang ist.',
      'n.c3.r': 'Update lesen →',
      'n.c4.d': '2026 · Juni',
      'n.c4.cat': 'OLDTIMER',
      'n.c4.t': 'Einen Sammlerwagen ohne Kratzer versenden',
      'n.c4.p': 'Einzelfahrzeug-Container, sanfte Ladungssicherung und die kleinen Gewohnheiten, die den Lack von Hamburg bis in die Zielgarage perfekt halten.',
      'n.c4.r': 'Bericht lesen →',
      'n.c5.d': '2026 · Mai',
      'n.c5.cat': 'LAGER',
      'n.c5.t': 'Sammelladung aus dem Hamburger Lager',
      'n.c5.p': 'Wie LCL-Konsolidierung tatsächlich Geld spart — und wann ein voller Container die klügere Wahl ist.',
      'n.c5.r': 'Beitrag lesen →',
      'n.c6.d': '2026 · April',
      'n.c6.cat': 'NACHHALTIGKEIT',
      'n.c6.t': 'Kleine Änderungen auf dem Hof, echte Einsparungen auf der Rechnung',
      'n.c6.p': 'Routenkonsolidierung, Seitenladereinsatz und Containerabgleich — wie eine geschäftige Hamburger Spedition Kraftstoff und Leerfahrten reduziert.',
      'n.c6.r': 'Beitrag lesen →',
      'n.a1.m': '2026 · September &nbsp;·&nbsp; Projektbericht',
      'n.a1.h': 'Vier Fahrzeuge, ein 40&#39; HC Container.',
      'n.a1.p1': 'Multi-Fahrzeug-Containerbeladung sieht von außen einfach aus: vier Autos, eine Box, Tür zu. In der Praxis liegt der Unterschied zwischen einer sauberen Ankunft und einem Schaden in Zentimetern — und darin, wie schnell Fahrer, Verlader und Dokumente übereinstimmen.',
      'n.a1.sub': 'So verlädt MTS einen 40&#39; HC mit vier Fahrzeugen',
      'n.a1.l1': 'Fahrzeugbegutachtung und Tankkontrolle vor der Buchung — der falsche Viertelstand kann ein Auto von einer Route ausschließen.',
      'n.a1.l2': 'Räder gesichert, Handbremse gelöst, Reifen abgelassen wo die Route es erlaubt, weiche Gurte an vier Ecken.',
      'n.a1.l3': 'Holz- und Stahlrampen, damit Karosserie und Containerwand beim Ein- und Ausfahren nicht in Berührung kommen.',
      'n.a1.l4': 'Fotodokumentation des leeren Containers, des Zustands jedes Fahrzeugs und der endgültigen Ladung — mit dem Kunden geteilt.',
      'n.a1.l5': 'Ausfuhranmeldung parallel vorbereitet, damit der Container am selben Tag den Hof verlässt.',
      'n.a1.p2': 'Wir können bis zu sechs kleinere Fahrzeuge in einen 40&#39; HC verladen. Welche Anordnung funktioniert, hängt vom Mix ab — ein Land Cruiser und drei Limousinen sind nicht dieselbe Aufgabe wie fünf Kompaktwagen. Am sichersten ist es, uns die VINs vor der Buchung zu senden.',
      'n.a2.m': '2026 · August &nbsp;·&nbsp; Zoll',
      'n.a2.h': 'Ihre Exportdokumente vorbereiten.',
      'n.a2.p1': 'Die meisten Sendungen, die am Zoll hängenbleiben, hängen aus denselben Gründen: ein Wert, den die Rechnung nicht erklärt, eine fehlende Packliste oder eine Beschreibung, die nicht zur HS-Nummer passt. Papierkram ist unglamourös, aber eine gute Akte wird einmal gelesen und freigegeben.',
      'n.a2.sub': 'Das Minimum, das wir von Ihnen brauchen',
      'n.a2.l1': 'Handelsrechnung oder Kaufvertrag mit einem Wert, den die Zollbehörde akzeptiert.',
      'n.a2.l2': 'Packliste — eine Zeile pro Artikel oder Stück, mit Gewicht und Maßen.',
      'n.a2.l3': 'Bei Fahrzeugen: originaler Fahrzeugbrief / Fahrzeugschein, VIN und ein Kaufvertrag.',
      'n.a2.l4': 'Alle länderspezifischen Zertifikate, die das Zielland verlangt — wir weisen im Angebot darauf hin.',
      'n.a2.p2': 'Sobald die Akte da ist, erstellen wir die EU-Ausfuhranmeldung, buchen den Container und schicken Ihnen den AWB- oder B/L-Entwurf zur Prüfung, bevor er finalisiert wird.',
      'n.a3.m': '2026 · Juli &nbsp;·&nbsp; Routenupdate',
      'n.a3.h': 'Schienenverbindungen aus Europa nach Zentralasien.',
      'n.a3.p1': 'Schiene nach Zentralasien ist nicht neu, aber Fahrpläne und Preise haben sich dieses Jahr genug verändert, um sie öfter zur richtigen Antwort zu machen. Sie ist langsamer als Luft und schneller als See — und für die richtige Fracht liegen die Gesamtkosten unter beiden.',
      'n.a3.sub': 'Wann Schiene Sinn ergibt',
      'n.a3.l1': '<strong>Konsumgüter und Ersatzteile</strong> nach Usbekistan, Kasachstan und Turkmenistan — See plus Weiterlauf per Straße kann bei der Transitzeit unterboten werden.',
      'n.a3.l2': '<strong>Maschinen und Industriefracht</strong>, wo ein fester Wochenfahrplan wertvoller ist als der günstigste Preis pro cbm.',
      'n.a3.l3': '<strong>Zeitkritische Nachschübe</strong>, wo Luftfracht die einzige Alternative ist und die Volumina schmerzhaft werden.',
      'n.a3.p2': 'Wir buchen über etablierte Schienenpartner mit Abfahrten aus Hamburg und Duisburg und können je nach Zielort kombinierte See-/Schienen- oder Straßen-/Schienen-Lösungen anbieten.',
      'n.a4.m': '2026 · Juni &nbsp;·&nbsp; Oldtimer',
      'n.a4.h': 'Einen Sammlerwagen ohne Kratzer versenden.',
      'n.a4.p1': 'Ein restaurierter 300SL und ein Gebrauchtkombi kommen in denselben 40&#39; Container — aber nicht auf dieselbe Weise. Oldtimer und Premiumfahrzeuge brauchen einen Ablauf, der Hände, Gurte und Werkzeuge vom Lack und Innenraum fernhält.',
      'n.a4.l1': 'Einzelfahrzeug-Container, oder nur mit Fahrzeugen gleichen Werts geteilt.',
      'n.a4.l2': 'Sanfte Sicherungsgurte nur an den Rädern, nie am Chassis oder an den Radläufen.',
      'n.a4.l3': 'Decken und Abdeckungen auf Stoßfängern, Spiegeln und Türgriffen während der Verladung.',
      'n.a4.l4': 'Fotoprotokoll jedes Panels vor und nach der Verladung — mit Zeitstempel — an den Eigentümer geteilt.',
      'n.a4.l5': 'Koordination mit dem empfangenden Restaurator, Händler oder Auktionshaus am Zielort.',
      'n.a5.m': '2026 · Mai &nbsp;·&nbsp; Lager',
      'n.a5.h': 'Sammelladung aus dem Hamburger Lager.',
      'n.a5.p1': 'LCL — Less-than-container-load — ist das richtige Werkzeug, wenn Ihre Fracht keinen Container füllt oder Sie einen monatlichen Rhythmus ohne Leerraum wollen. Unser Lager in Hamburg konsolidiert wöchentlich für die Hauptrouten.',
      'n.a5.sub': 'Wann LCL besser ist als FCL',
      'n.a5.l1': 'Unter etwa 15 cbm auf Routen mit regelmäßiger Konsolidierung.',
      'n.a5.l2': 'Mehrere kleine Sendungen zum selben Ziel, die kombiniert werden können.',
      'n.a5.l3': 'Fracht, die vor der nächsten vollen FCL bewegt werden muss.',
      'n.a5.p2': 'Ab etwa 15 cbm kippt die Rechnung oft: FCL wird pro cbm günstiger und spart einen Abfertigungsschritt. Sobald Sie uns Volumen und Ziel senden, sagen wir Ihnen, welcher Weg passt.',
      'n.a6.m': '2026 · April &nbsp;·&nbsp; Nachhaltigkeit',
      'n.a6.h': 'Kleine Änderungen auf dem Hof, echte Einsparungen auf der Rechnung.',
      'n.a6.p1': 'Leere Containerbewegungen zu reduzieren und Abholungen auf derselben Lkw-Tour zu bündeln spart nicht nur Kraftstoff — es nimmt Kosten aus der Akte. Wir behalten ein paar Hofmetriken im Blick und geben die Einsparungen weiter.',
      'n.a6.l1': 'Einsatz des Container-Seitenladers, damit wir einmal statt zweimal heben.',
      'n.a6.l2': 'Routenabgleich zwischen Kunden, die dieselbe Woche verladen.',
      'n.a6.l3': 'Sorgfältige Abstimmung von Containertyp und Fracht, damit Gewicht und Volumen ausbalanciert sind.',
      'n.cta.k': 'Sendung im Kopf?',
      'n.cta.h': 'Unser Team ist einen Anruf vom Hof entfernt.',
      'n.cta.p': 'Route, Fracht und Zeitplan — senden Sie uns die Eckdaten, wir kommen mit einem Plan zurück.',
      'n.cta.b': 'Angebot anfordern →',

      // ==== SERVICES ====
      's.hero.k': 'Leistungen',
      's.hero.t': 'Spedition — eine Akte nach der anderen.',
      's.hero.sub': 'Zolllager, Fahrzeuglogistik, Container-Terminal und internationale Spedition — vier praktische Bereiche, ein operatives Team von der Buchung bis zur Ankunft.',
      's.hero.cta1': 'Angebot anfordern',
      's.hero.cta2': 'Alle Leistungen',
      's.intro.k': 'Vier praktische Bereiche',
      's.intro.h': 'Alles, was eine Hamburger Spedition tut — unter einem Dach.',
      's.intro.p': 'Zolllager, Fahrzeuglogistik, Container-Terminal und internationale Spedition — mit einem operativen Team, das die Akte von der Buchung bis zur Ankunft begleitet.',
      's.c1.s': '01 / VOR-ORT-EXPERTISE',
      's.c1.h': 'Zolllager',
      's.c1.p': 'Zollverschluss, T1/T2-Verfahren, Zollprüfungen und vollständige Exportdokumentation nahe dem Hamburger Hafen.',
      's.c2.s': '02 / SORGFÄLTIGE ABWICKLUNG',
      's.c2.h': 'Fahrzeuglogistik',
      's.c2.p': '4–6 Fahrzeuge pro 40&#39; HC Container, Ladungssicherung, Fotodokumentation und RoRo-Buchungen zu Zielorten weltweit.',
      's.c3.s': '03 / HAFENOPERATIONEN',
      's.c3.h': 'Container-Terminal',
      's.c3.p': 'Beladen, Entladen, Lagerung und Terminalanbindung auf unserem eigenen Gelände in der Billstraße.',
      's.c4.s': '04 / GLOBALE SPEDITION',
      's.c4.h': 'Internationale Spedition',
      's.c4.p': 'FCL, LCL, Luft und Straße — End-to-End aus Hamburg zu Zielorten weltweit koordiniert.',
      's.c1.f1': 'Zolllager in der Billstraße 158',
      's.c1.f2': 'T1 / T2 Versandverfahren',
      's.c1.f3': 'Zollprüfungen vor Ort',
      's.c2.f1': 'Multi-Car 4–6 Fahrzeuge / 40&#39; HC',
      's.c2.f2': 'Sanfte Sicherung &amp; Fotodokumentation',
      's.c2.f3': 'RoRo-Buchungen weltweit',
      's.c3.f1': 'Eigenes Gelände mit Seitenlader-Flotte',
      's.c3.f2': 'Containerlagerung &amp; Cross-Docking',
      's.c3.f3': 'Anbindung Hamburger Terminals',
      's.c4.f1': 'FCL- und LCL-Seefracht',
      's.c4.f2': 'Luftfracht für zeitkritische Sendungen',
      's.c4.f3': 'Schienenrouten nach Zentralasien',
      's.c.cta': 'Mehr erfahren',
      's.why.k': 'Warum MTS',
      's.why.h': 'Ein Hamburger Team, eine Akte — von der Buchung bis zur Ankunft.',
      's.why.p': 'Jede Sendung läuft über ein operatives Team in der Billstraße — keine Übergaben zwischen Abteilungen, kein Kontextverlust, wenn sich unterwegs etwas ändert.',
      's.why.1.b': '2003',
      's.why.1.s': 'Gegründet in Hamburg',
      's.why.2.b': '100+',
      's.why.2.s': 'Länder beliefert',
      's.why.3.b': '6',
      's.why.3.s': 'Sprachen am Desk',
      's.why.4.b': 'LIHH',
      's.why.4.s': 'Mitglied Logistik-Initiative Hamburg',
      's.cta.k': 'Route im Kopf?',
      's.cta.h': 'Senden Sie die Eckdaten — wir melden uns mit einem Plan.',
      's.cta.p': 'Route, Fracht, Zeitplan: drei Zeilen reichen, um ein Gespräch mit dem operativen Team zu starten.',
      's.cta.b': 'Angebot anfordern →',

      // ==== CONTACT ====
      'c.hero.k': 'IHRE HAMBURGER VERBINDUNG',
      'c.hero.t': 'Bringen wir Ihre Sendung voran.',
      'c.hero.p': 'Fragen zu Zoll, Fahrzeugen oder Fracht? Sprechen Sie mit einem Team, das dort arbeitet, wo die Fracht bewegt wird.',
      'c.hero.a1': 'Anfrage starten',
      'c.hero.a2': 'Hamburg anrufen',
      'c.hero.next': 'ANGEBOT, TELEFON ODER E-MAIL',
      'c.paths.k': 'HIER STARTEN',
      'c.paths.h': 'Erreichen Sie uns auf Ihrem Weg.',
      'c.paths.sub': 'Wählen Sie den einfachsten ersten Schritt. Die Details folgen.',
      'c.paths.p1.s': '01 / ANGEBOT',
      'c.paths.p1.h': 'Erzählen Sie uns von der Sendung.',
      'c.paths.p1.p': 'Geben Sie uns Route, Fracht und Zeitplan für ein nützliches Gespräch.',
      'c.paths.p2.s': '02 / TELEFON',
      'c.paths.p2.h': 'Sprechen Sie mit Hamburg.',
      'c.paths.p2.p': 'Rufen Sie unser Team direkt an, wenn eine Frage eine menschliche Antwort braucht.',
      'c.paths.p3.s': '03 / E-MAIL',
      'c.paths.p3.h': 'Senden Sie die Dokumente.',
      'c.paths.p3.p': 'Teilen Sie uns die Details mit, die Sie bereits haben — wir übernehmen von dort.',
      'c.quote.k': 'ANGEBOT ANFORDERN',
      'c.quote.h': 'Ein klarer Ausgangspunkt für den nächsten Schritt.',
      'c.quote.p': 'Sagen Sie uns, was Sie versenden möchten und wohin. Unser Hamburger Team hilft bei der passenden Route und Abwicklung.',
      'c.direct': 'DIREKTER KONTAKT',
      'c.form.legend': 'Wobei können wir helfen?',
      'c.form.svc.1': 'Zoll',
      'c.form.svc.2': 'Fahrzeuge',
      'c.form.svc.3': 'Container',
      'c.form.svc.4': 'Fracht',
      'c.form.svc.5': 'Oldtimer',
      'c.form.company': 'Firma (optional)',
      'c.form.company.ph': 'Firma',
      'c.loc.k': 'BESUCHEN SIE UNS',
      'c.loc.h': 'Zu Hause in Hamburg.',
      'c.loc.p': 'Wenige Minuten von den Containerterminals des Hamburger Hafens entfernt.',
      'c.loc.addr': 'Mangal Transport &amp; Shipping GmbH<br>Billstraße 158<br>20539 Hamburg, Deutschland',
      'c.loc.link': 'Wegbeschreibung öffnen',

      // ==== Sub-service pages ====
      'cw.hero.k': 'Leistungen / 01',
      'cw.hero.t': 'Zolllager & Zollabwicklung',
      'cw.hero.sub': 'Zolllager, T1/T2-Verfahren, Zollprüfungen und vollständige Exportdokumentation nahe dem Hamburger Hafen — alles auf unserem eigenen Gelände, von einem Team betreut.',
      'cw.hero.cta1': 'Angebot anfordern',
      'cw.hero.cta2': 'Leistungen im Überblick',
      'cw.intro.k': 'Im Herzen von Hamburg',
      'cw.intro.h': 'Zollkontrolle ohne Umweg.',
      'cw.intro.p': 'Unser Zolllager und Verwahrlager geben Ihrer Fracht eine praktische Basis direkt am Hafen. Mit Zollprüfungen und Containerarbeit vor Ort bleibt die Abwicklung transparent und effizient.',
      'cw.l1': 'Zolllager / Bonded Warehouse',
      'cw.l2': 'Verwahrlager / temporäres Lager',
      'cw.l3': 'Zollbeschau vor Ort',
      'cw.l4': 'Containerbeladung und -entladung unter zollamtlicher Überwachung',
      'cw.l5': 'Zollabfertigung und Dokumentation',
      'cw.l6': 'T1, Export- und Importabwicklung',

      'vl.hero.k': 'Leistungen / 02',
      'vl.hero.t': 'Fahrzeuglogistik',
      'vl.hero.sub': 'Vier bis sechs Fahrzeuge pro 40&#39; HC Container, sorgfältige Ladungssicherung, Fotodokumentation und RoRo-Buchungen — eine langjährige MTS-Spezialisierung aus Hamburg und Bremerhaven.',
      'vl.hero.cta1': 'Fahrzeugangebot anfordern',
      'vl.hero.cta2': 'So verladen wir',
      'vl.intro.k': 'Für jedes Fahrzeug gebaut',
      'vl.intro.h': 'Mehr Fahrzeuge, intelligent gesichert.',
      'vl.intro.p': 'MTS hat einen spezialisierten Ansatz für hochdichte Fahrzeugverladung entwickelt. Wir verschiffen vier bis sechs Fahrzeuge in einem 40&#39; HC Container mit sorgfältiger Ladungssicherung, praktischer Fotodokumentation und weltweiter Exportkoordination.',
      'vl.l1': 'Beladen und Entladen von Fahrzeugen in Containern',
      'vl.l2': 'Multi-Fahrzeugbeladung: 4–6 Fahrzeuge pro 40&#39; HC',
      'vl.l3': 'Sicherung und professionelle Ladungssicherung',
      'vl.l4': 'Fotodokumentation',
      'vl.l5': 'Weltweiter Exportversand',
      'vl.l6': 'Zoll- und Exportdokumentation',

      'ct.hero.k': 'Leistungen / 03',
      'ct.hero.t': 'Container-Terminal Hamburg',
      'ct.hero.sub': 'Beladen, Entladen, Seitenladerarbeit, Containerlagerung und Hafenübergaben aus unserem Gelände in der Billstraße — in unmittelbarer Nähe zu den Containerterminals des Hamburger Hafens.',
      'ct.hero.cta1': 'Angebot anfordern',
      'ct.hero.cta2': 'Was wir abwickeln',
      'ct.intro.k': 'Betrieb auf eigenem Gelände',
      'ct.intro.h': 'Ein praktisches Terminal für Fracht in Bewegung.',
      'ct.intro.p': 'Unser eigenes Hamburger Gelände vereint Containerarbeit, Lagerung und Hafenzustellung in einem kontrollierten Ablauf. Es ist der Arbeitsknotenpunkt hinter schnelleren Entscheidungen und verlässlichen Übergaben.',
      'ct.l1': 'Containerbeladung und -entladung auf unserem Gelände',
      'ct.l2': 'Beladen und Entladen',
      'ct.l3': 'Cross-Docking',
      'ct.l4': 'Containerlagerung und Pufferfläche',
      'ct.l5': 'Abholung und Zustellung zu den Hamburger Hafenterminals',
      'ct.l6': 'Flexible Abwicklung für Exportfracht',

      'if.hero.k': 'Leistungen / 04',
      'if.hero.t': 'Internationale Spedition',
      'if.hero.sub': 'See, Luft, Straße und Schiene — aus Hamburg zu Zielorten weltweit koordiniert. FCL, LCL, Projektladung und zeitkritische Fracht, von einem Team End-to-End.',
      'if.hero.cta1': 'Angebot anfordern',
      'if.hero.cta2': 'Routenoptionen',
      'if.intro.k': 'Weltweite Verbindungen',
      'if.intro.h': 'Wählen Sie die Route, die zur Sendung passt.',
      'if.intro.p': 'See-, Luft-, Straßen- und Schienenlösungen aus Hamburg koordiniert. Wir bauen die Route rund um Ihre Fracht, Ihren Zeitrahmen und die Anforderungen des Ziels.',
      'if.l1': 'Seefracht: FCL und LCL',
      'if.l2': 'Luftfracht',
      'if.l3': 'Straßentransport, inklusive Gefahrgut',
      'if.l4': 'Schienentransport nach Zentralasien und in die GUS',

      'cc.hero.k': 'Oldtimer & Premiumfahrzeuge',
      'cc.hero.t': 'Jede Meile mit der Sorgfalt, die Ihr Fahrzeug verdient.',
      'cc.hero.sub': 'Einzelfahrzeug-Container, sanfte Ladungssicherung nur an den Rädern und Fotodokumentation von der Abholung bis zur Zustellung. Vertrauen von Sammlern, Händlern und Auktionshäusern.',
      'cc.hero.cta1': 'Fahrzeugangebot anfordern',
      'cc.hero.cta2': 'Der Ablauf',
      'cc.intro.k': 'Geschlossener Versand',
      'cc.intro.h': 'Für Fahrzeuge mit Geschichte.',
      'cc.intro.p': 'Ob Sammlerfahrzeug, Concours-Oldtimer oder Premiumfahrzeug für einen Kunden im Ausland — MTS plant die gesamte Reise mit geschütztem Containerversand, sorgfältiger Dokumentation und fachkundiger Abwicklung von der Abholung bis zur Zustellung.',
      'cc.proc.k': 'Der Ablauf',
      'cc.proc.h': 'Eine klare Route von der Abholung bis zur Ankunft.',
      'cc.proc.1': 'Abholung',
      'cc.proc.2': 'Inspektion',
      'cc.proc.3': 'Sichere Verladung',
      'cc.proc.4': 'Seetransport',
      'cc.proc.5': 'Zustellung',
      'cc.std.k': 'Standardmäßig enthalten',
      'cc.l1': 'Geschlossener Containerversand',
      'cc.l2': 'Zustandsbericht vor der Verladung',
      'cc.l3': 'Professionelle Ladungssicherung',
      'cc.l4': 'Fotodokumentation',
      'cc.l5': 'Unterstützung bei der Versicherung',
      'cc.l6': 'Zoll- und Versanddokumente',
      'cc.form.k': 'Privatbesitzer · Sammler · Händler',
      'cc.form.h': 'Fahrzeugtransport-Angebot anfordern.',
      'cc.form.p': 'Erzählen Sie uns etwas über das Fahrzeug und Ihr Ziel. Unsere Spezialisten melden sich direkt bei Ihnen.',
      'cc.form.name': 'Ihr Name',
      'cc.form.email': 'E-Mail-Adresse',
      'cc.form.make': 'Marke & Modell',
      'cc.form.year': 'Baujahr',
      'cc.form.value': 'Geschätzter Wert',
      'cc.form.dest': 'Zielort',
      'cc.form.msg': 'Erzählen Sie uns von Ihrer Sendung',
      'cc.form.submit': 'Angebot anfordern',

      // ==== PREMIUM CARS (DE) ====
      'pc.hero.k': 'Premiumfahrzeuge',
      'pc.hero.t': 'Für das Fahrzeug, das mehr verdient als eine Standard-Seefrachtbuchung.',
      'pc.hero.sub': 'Geschlossene Einzelfahrzeug-Container, sanfte Ladungssicherung, klimabewusste Abwicklung und dokumentierte Fotoprotokolle von der Abholung bis zur Zustellung — maßgeschneidert für Händler, HNW-Besitzer und Auktionshäuser.',
      'pc.hero.cta1': 'Premium-Angebot anfordern',
      'pc.hero.cta2': 'Was Premium ausmacht',
      'pc.intro.k': 'Der MTS Premium-Standard',
      'pc.intro.h': 'Ein dedizierter Ablauf für hochwertige Fahrzeuge.',
      'pc.intro.p1': 'Premiumfahrzeuge sind nicht nur teurer — sie sind schwerer zu ersetzen, und jeder kleine Handhabungsfehler fällt auf. MTS führt einen separaten Ablauf für Premium-Sendungen: Einzelfahrzeug-Container, White-Glove-Verladung, dedizierte Lagerung und einen Ansprechpartner, der Ihr Fahrzeug mit Namen kennt — nicht mit Buchungsnummer.',
      'pc.intro.p2': 'Wir arbeiten regelmäßig mit Händlern, Spezialimporteuren, Auktionshäusern und Privatbesitzern, die ein Flaggschiff zwischen Residenzen bewegen. Jede Sendung endet mit der vollständigen Akte in Ihrem Posteingang — nicht nur mit einem Konnossement.',
      'pc.inc.k': 'Standardmäßig enthalten',
      'pc.inc.h': 'Was eine Premium-Buchung umfasst.',
      'pc.l1': 'Einzelfahrzeug 20&#39; oder 40&#39; Container (keine geteilten Ladungen)',
      'pc.l2': 'White-Glove-Abholung mit geschlossenem Trailer, wo angemessen',
      'pc.l3': 'Zustandsbericht vor der Verladung mit hochauflösenden Fotos',
      'pc.l4': 'Nur sanfte Radgurt-Sicherung — kein Chassis-Kontakt',
      'pc.l5': 'Schutzabdeckungen auf Stoßfängern, Spiegeln und Türgriffen',
      'pc.l6': 'Klimabewusste Lagerung in unserem Hamburger Lager',
      'pc.l7': 'Zolldokumentation und Ausfuhranmeldung',
      'pc.l8': 'Marineversicherungsangebot auf Anfrage',
      'pc.l9': 'Benannter Ansprechpartner vom Angebot bis zur Zustellung',
      'pc.l10': 'Haus-zu-Haus-Koordination am Zielort',
      'pc.proc.k': 'So läuft es ab',
      'pc.proc.h': 'Ein einfacher, dokumentierter Ablauf.',
      'pc.proc.sub': 'Sechs Schritte von der ersten Anfrage bis zur Zustellung — jeder davon dokumentiert und mit Ihnen geteilt.',
      'pc.proc.1.l': '01 · ANFRAGE',
      'pc.proc.1.h': 'Senden Sie uns die Details',
      'pc.proc.1.p': 'FIN, Abholadresse und Zielort — plus Fotos, falls Sie welche haben. Wir melden uns mit einem festen Angebot.',
      'pc.proc.2.l': '02 · ABHOLUNG',
      'pc.proc.2.h': 'White-Glove-Abholung',
      'pc.proc.2.p': 'Geschlossener Transport zu unserem Hamburger Gelände, Zustandsbericht bei Ankunft unterschrieben.',
      'pc.proc.3.l': '03 · VERLADUNG',
      'pc.proc.3.h': 'Einzelfahrzeug-Container',
      'pc.proc.3.p': 'Sanfte Ladungssicherung, Schutzabdeckungen, vollständiges Fotoset am Tag der Containerplombierung geteilt.',
      'pc.proc.4.l': '04 · ZOLL',
      'pc.proc.4.h': 'Exportdokumentation',
      'pc.proc.4.p': 'EU-Ausfuhranmeldung, Konnossement und länderspezifische Zertifikate hausintern bearbeitet.',
      'pc.proc.5.l': '05 · SEEREISE',
      'pc.proc.5.h': 'Verfolgte Passage',
      'pc.proc.5.p': 'Reederei- und Reisedetails bei Abfahrt geteilt, Statusupdates zu wichtigen Meilensteinen.',
      'pc.proc.6.l': '06 · ZUSTELLUNG',
      'pc.proc.6.h': 'Haus-zu-Haus-Übergabe',
      'pc.proc.6.p': 'Zollabfertigung am Zielort, Endauslieferung über Partnerspediteur, Zustandsbericht gegengezeichnet.',
      'pc.who.k': 'Für wen ist das',
      'pc.who.h': 'Vertraut von Besitzern, denen die Details wichtig sind.',
      'pc.who.c1.t': 'Sammler &amp; HNW-Besitzer',
      'pc.who.c1.p': 'Bewegen eines Flaggschiffs, Wochenendfahrzeugs oder Teils einer Sammlung zwischen Residenzen oder zu einem Spezialisten im Ausland.',
      'pc.who.c2.t': 'Händler &amp; Broker',
      'pc.who.c2.p': 'Exportsendungen neuer oder gebrauchter Premiumfahrzeuge, bei denen Handhabungsfotos und saubere Papiere Teil des Verkaufs sind.',
      'pc.who.c3.t': 'Auktionshäuser &amp; Spezialisten',
      'pc.who.c3.p': 'Vor- und Nachverkaufstransport mit koordinierten Übergaben an den empfangenden Auktionator, Restaurator oder Händler.',
      'pc.faq.k': 'Häufige Fragen',
      'pc.faq.h': 'Premium-Versand FAQ.',
      'pc.faq.q1': 'Warum ein Einzelfahrzeug-Container?',
      'pc.faq.a1': 'Damit der Verladeplan rund um Ihr Fahrzeug gebaut wird — nicht rund um das, was sonst noch passt. Keine geteilten Trennwände, kein geteilter Zeitplan, kein Risiko, dass der Spiegel eines anderen Fahrzeugs Ihren bei der Sicherung streift.',
      'pc.faq.q2': 'Wie steht es mit der Marineversicherung?',
      'pc.faq.a2': 'Wir können auf Anfrage eine dedizierte Marinepolice basierend auf dem deklarierten Wert anbieten. Wir erklären Ihnen Selbstbehalt, Deckungssummen und Dokumentation, bevor Sie entscheiden.',
      'pc.faq.q3': 'Kann ich das Fahrzeug vor der Verladung in Ihrem Lager besuchen?',
      'pc.faq.a3': 'Ja. Unser Lager in der Billstraße 158 ist wenige Minuten vom Hamburger Hafen entfernt. Rufen Sie vorher an und wir vereinbaren einen Termin.',
      'pc.faq.q4': 'Wie erfahre ich, was während der Passage passiert?',
      'pc.faq.a4': 'Am Tag der Containerabfahrt erhalten Sie Schiffsname, Reisenummer und ETA. Wir melden proaktiv jede Zeitplanänderung.',
      'pc.cta.k': 'Bereit zum Versenden?',
      'pc.cta.h': 'Behandeln wir Ihr Fahrzeug so, wie Sie es tun.',
      'pc.cta.p': 'Senden Sie uns FIN, Abholort und Zielort — unsere Spezialisten melden sich mit einem festen Angebot.',
      'pc.cta.b': 'Premium-Angebot anfordern →',
    },
  };

  let currentLang = 'en';
  try {
    const saved = localStorage.getItem(langKey);
    if (saved === 'de' || saved === 'en') currentLang = saved;
    else if ((navigator.language || '').toLowerCase().startsWith('de')) currentLang = 'de';
  } catch (_) {}

  try {
    if (localStorage.getItem(themeKey) === 'dark') document.documentElement.dataset.theme = 'dark';
  } catch (_) {}

  function tr(key) {
    return (T[currentLang] && T[currentLang][key]) || (T.en[key] || key);
  }

  function applyTranslations() {
    document.documentElement.lang = currentLang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const raw = T[currentLang]?.[key];
      if (raw !== undefined) el.innerHTML = raw;
      else if (T.en[key] !== undefined) el.innerHTML = T.en[key];
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.getAttribute('data-i18n-attr').split(';').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (!attr || !key) return;
        const val = (T[currentLang] && T[currentLang][key]) || T.en[key];
        if (val !== undefined) el.setAttribute(attr, val.replace(/<[^>]+>/g, '').replace(/&amp;/g,'&').replace(/&#39;/g,"'"));
      });
    });
    document.querySelectorAll('.mts-lang-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.lang === currentLang);
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === currentLang));
    });
  }

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'de') return;
    currentLang = lang;
    try { localStorage.setItem(langKey, lang); } catch (_) {}
    applyTranslations();
    renderTopbar();
    renderFooter();
    renderDownloadsModal(true);
    renderSupport();
  }

  function renderTopbar() {
    let bar = document.querySelector('.mts-topbar');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'mts-topbar';
      document.body.insertBefore(bar, document.body.firstChild);
    }
    bar.innerHTML = `
      <div class="mts-topbar-inner">
        <div class="mts-topbar-contact">
          <span class="mts-topbar-hours"><img src="assets/icons/clock.svg" alt=""><span>${tr('top.hours')}</span></span>
          <a href="mailto:info@mtsonline.de"><img src="assets/icons/mail.svg" alt=""><span>${tr('top.email')}</span></a>
          <a href="tel:+494081978530"><img src="assets/icons/phone-call.svg" alt=""><span>${tr('top.phone')}</span></a>
        </div>
        <div class="mts-topbar-actions">
          <div class="mts-topbar-social" aria-label="${tr('top.follow')}">
            <a href="https://www.instagram.com/mts_gmbh?igshid=8u4w9e23s97k" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><img src="assets/icons/instagram.svg" alt=""></a>
            <a href="https://www.facebook.com/mtshamburg/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"><img src="assets/icons/facebook.svg" alt=""></a>
            <a href="https://www.youtube.com/channel/UCoRZqOU6EyD5YDcyQ8VnFCQ?view_as=subscriber" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube"><img src="assets/icons/youtube.svg" alt=""></a>
          </div>
          <button type="button" class="mts-topbar-downloads" data-downloads-open>
            <img src="assets/icons/file-text.svg" alt=""><span>${tr('top.downloads')}</span>
          </button>
          <div class="mts-topbar-lang" role="group" aria-label="Language">
            <button type="button" class="mts-lang-btn" data-lang="en" aria-pressed="${currentLang==='en'}" aria-label="English" title="English"><img src="assets/icons/flag-gb.svg" alt="English"></button>
            <button type="button" class="mts-lang-btn" data-lang="de" aria-pressed="${currentLang==='de'}" aria-label="Deutsch" title="Deutsch"><img src="assets/icons/flag-de.svg" alt="Deutsch"></button>
          </div>
        </div>
      </div>`;
    bar.querySelectorAll('.mts-lang-btn').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
    bar.querySelector('[data-downloads-open]').addEventListener('click', openDownloads);
    // Keep CSS variable in sync with the actual rendered height so the nav
    // underneath stays flush with the sticky topbar on every viewport size.
    const syncH = () => document.documentElement.style.setProperty('--mts-topbar-h', bar.offsetHeight + 'px');
    syncH();
    if (window.ResizeObserver) new ResizeObserver(syncH).observe(bar);
    window.addEventListener('resize', syncH);
  }

  function renderDownloadsModal(force) {
    let dlg = document.querySelector('.mts-dl-dialog');
    if (dlg && !force) return;
    if (dlg) dlg.remove();
    dlg = document.createElement('dialog');
    dlg.className = 'mts-dl-dialog';
    dlg.innerHTML = `
      <form method="dialog" class="mts-dl-inner">
        <header class="mts-dl-head">
          <div><span class="eyebrow" style="color:#377c89">MTS · PDF</span><h2>${tr('dl.title')}</h2><p>${tr('dl.subtitle')}</p></div>
          <button type="submit" class="mts-dl-close" aria-label="${tr('dl.close')}" value="close">✕</button>
        </header>
        <div class="mts-dl-grid">
          <a class="mts-dl-card" href="assets/downloads/ADSp-2003-english.pdf" download>
            <span class="mts-dl-icon"><img src="assets/icons/file-text.svg" alt=""></span>
            <span class="mts-dl-meta"><small>PDF · 12 ${tr('dl.pages')} · 50 KB</small></span>
            <h3>${tr('dl.adsp.title')}</h3>
            <p>${tr('dl.adsp.desc')}</p>
            <span class="mts-dl-cta">${tr('dl.download')}</span>
          </a>
          <a class="mts-dl-card" href="assets/downloads/MTS-transport-order-form.pdf" download>
            <span class="mts-dl-icon"><img src="assets/icons/file-text.svg" alt=""></span>
            <span class="mts-dl-meta"><small>PDF · 1 ${tr('dl.page')} · 58 KB</small></span>
            <h3>${tr('dl.order.title')}</h3>
            <p>${tr('dl.order.desc')}</p>
            <span class="mts-dl-cta">${tr('dl.download')}</span>
          </a>
          <a class="mts-dl-card" href="assets/downloads/Incoterms-2010.pdf" download>
            <span class="mts-dl-icon"><img src="assets/icons/file-text.svg" alt=""></span>
            <span class="mts-dl-meta"><small>PDF · 1 ${tr('dl.page')} · 9 KB</small></span>
            <h3>${tr('dl.incoterms.title')}</h3>
            <p>${tr('dl.incoterms.desc')}</p>
            <span class="mts-dl-cta">${tr('dl.download')}</span>
          </a>
        </div>
      </form>`;
    document.body.appendChild(dlg);
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  }

  function openDownloads() {
    const dlg = document.querySelector('.mts-dl-dialog');
    if (!dlg) return;
    if (typeof dlg.showModal === 'function') dlg.showModal();
    else dlg.setAttribute('open', '');
  }

  // Shared service destinations keep the navbar and footer in sync.
  // Trucking has merged into Road Freight — the alias is kept so old
  // bookmarks and footer slots resolve to the same page.
  const serviceRoutes = {
    trucking: 'road-transport.html',
    sea: 'seafreight.html',
    air: 'air-freight.html',
    road: 'road-transport.html',
    rail: 'international-freight.html#rail',
    car: 'vehicle-logistics.html',
    ind: 'contact.html#quote',
  };

  function renderFooter() {
    const footer = document.querySelector('[data-site-footer]');
    if (!footer) return;
    footer.className = 'site-footer';
    if (!footer.id) footer.id = 'site-footer';
    footer.innerHTML = `
      <div class="site-footer-inner">
        <div class="site-footer-cta">
          <div><span class="site-footer-kicker">${tr('ft.cta.k')}</span><h2>${tr('ft.cta.h')}</h2></div>
          <a class="site-footer-quote" href="contact.html#quote"><span>${tr('nav.quote')}</span><span aria-hidden="true">↗</span></a>
        </div>
        <div class="site-footer-grid">
          <div class="site-footer-brand">
            <a href="index.html" aria-label="MTS home"><img src="assets/mts-logo.png" alt="MTS"></a>
            <p class="site-footer-network-copy">${tr('ft.network.p')}</p>
            <div class="site-footer-network">
              <div class="site-footer-network-head"><span class="site-footer-hub-dot" aria-hidden="true"></span><span>${tr('ft.network.k')}</span></div>
              <img src="assets/footer-network.svg" class="site-footer-network-map" alt="" aria-hidden="true" loading="lazy">
              <div class="site-footer-network-caption"><span>${tr('ft.network.badge')}</span><span>${tr('g.meta.worldwide')}</span></div>
            </div>
            <div class="site-footer-modes"><span>${tr('nav.sub.sea')}</span><span>${tr('nav.sub.air')}</span><span>${tr('nav.sub.road')}</span></div>
          </div>
          <div class="site-footer-column site-footer-services">
            <strong>${tr('ft.services')}</strong>
            <a href="${serviceRoutes.road}">${tr('nav.sub.road')}</a>
            <a href="${serviceRoutes.sea}">${tr('nav.sub.sea')}</a>
            <a href="${serviceRoutes.air}">${tr('nav.sub.air')}</a>
            <a href="${serviceRoutes.rail}">${tr('nav.sub.rail')}</a>
            <a href="${serviceRoutes.car}">${tr('nav.sub.car')}</a>
            <a href="classic-cars.html">${tr('nav.classic')}</a>
            <a href="services.html">${tr('nav.services.all')}</a>
            <a href="${serviceRoutes.ind}">${tr('nav.mega.feat.h')}</a>
          </div>
          <div class="site-footer-column site-footer-contact"><strong>${tr('ft.head')}</strong><address>${tr('ft.address_full')}</address><p class="site-footer-line"><span>${tr('ft.tel_label')}</span> <a href="tel:+494081978530">+49 (0)40 / 819 78 530</a></p><p class="site-footer-line"><span>${tr('ft.fax_label')}</span> +49 (0)40 / 819 78 355</p><p class="site-footer-line"><span>${tr('ft.email_label')}</span> <a href="mailto:info@mtsonline.de">info[at]mtsonline.de</a></p><div class="site-social" aria-label="Social media"><a href="https://www.instagram.com/mts_gmbh?igshid=8u4w9e23s97k" target="_blank" rel="noopener noreferrer" aria-label="MTS on Instagram" title="Instagram"><img src="assets/icons/instagram.svg" alt=""></a><a href="https://www.facebook.com/mtshamburg/" target="_blank" rel="noopener noreferrer" aria-label="MTS on Facebook" title="Facebook"><img src="assets/icons/facebook.svg" alt=""></a><a href="https://www.youtube.com/channel/UCoRZqOU6EyD5YDcyQ8VnFCQ?view_as=subscriber" target="_blank" rel="noopener noreferrer" aria-label="MTS on YouTube" title="YouTube"><img src="assets/icons/youtube.svg" alt=""></a></div></div>
        </div>
        <div class="site-footer-bottom"><span>${tr('ft.rights').replace('{year}', new Date().getFullYear())}</span><span>${tr('ft.city')}</span></div>
      </div>`;
  }

  function renderThemeToggle() {
    const nav = document.querySelector('.hm-nav, .nav');
    const quote = nav?.querySelector('.hm-nav-cta, .quote');
    if (!nav || !quote || nav.querySelector('.site-theme-toggle')) return;
    const button = document.createElement('button');
    button.className = 'site-theme-toggle';
    button.type = 'button';
    button.innerHTML = '<img class="theme-moon" src="assets/icons/moon.svg" alt=""><img class="theme-sun" src="assets/icons/sun.svg" alt="">';
    const sync = () => {
      const dark = document.documentElement.dataset.theme === 'dark';
      button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
      button.setAttribute('aria-pressed', String(dark));
      button.title = dark ? 'Light mode' : 'Dark mode';
    };
    sync();
    button.addEventListener('click', () => {
      const dark = document.documentElement.dataset.theme !== 'dark';
      if (dark) document.documentElement.dataset.theme = 'dark';
      else delete document.documentElement.dataset.theme;
      try { localStorage.setItem(themeKey, dark ? 'dark' : 'light'); } catch (_) {}
      sync();
    });
    quote.before(button);
  }

  function renderSupport() {
    // Remove any legacy WhatsApp / floating widgets injected by the old app.js
    document.querySelectorAll('.mts-floating, .hm-float-stack .hm-whatsapp-toggle, .mts-whatsapp').forEach(el => el.remove());

    let dock = document.querySelector('.mts-support');
    if (!dock) {
      dock = document.createElement('div');
      dock.className = 'mts-support';
      document.body.appendChild(dock);
    }
    dock.innerHTML = `
      <button type="button" class="mts-support-toggle" aria-label="${tr('sw.aria')}" aria-expanded="false" aria-controls="mts-support-panel">
        <span class="mts-support-pulse" aria-hidden="true"></span>
        <span class="mts-support-pulse mts-support-pulse-2" aria-hidden="true"></span>
        <img src="assets/icons/headset.svg" alt="">
        <span class="mts-support-dot" aria-hidden="true"></span>
      </button>
      <div class="mts-support-panel" id="mts-support-panel" hidden>
        <header class="mts-support-head">
          <span class="mts-support-avatar"><img src="assets/icons/headset.svg" alt=""></span>
          <div><strong>${tr('sw.title')}</strong><small>${tr('top.hours')}</small></div>
          <button type="button" class="mts-support-close" aria-label="${tr('dl.close')}">✕</button>
        </header>
        <div class="mts-support-body">
          <p>${tr('sw.subtitle')}</p>
          <div class="mts-support-options">
            <button type="button" data-service="Quote">${tr('sw.opt1')}</button>
            <button type="button" data-service="Vehicle logistics">${tr('sw.opt2')}</button>
            <button type="button" data-service="Customs warehousing">${tr('sw.opt3')}</button>
            <button type="button" data-service="Container terminal">${tr('sw.opt4')}</button>
            <button type="button" data-service="International freight">${tr('sw.opt5')}</button>
          </div>
          <a class="mts-support-cta" href="contact.html">${tr('sw.cta')} <span aria-hidden="true">→</span></a>
          <div class="mts-support-contact">
            <span>${tr('sw.contact')}</span>
            <a href="tel:+494081978530"><img src="assets/icons/phone-call.svg" alt="">+49 (0)40 / 819 78 530</a>
            <a href="mailto:info@mtsonline.de"><img src="assets/icons/mail.svg" alt="">info@mtsonline.de</a>
          </div>
        </div>
      </div>`;
    const toggle = dock.querySelector('.mts-support-toggle');
    const panel = dock.querySelector('.mts-support-panel');
    const setOpen = (open) => {
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      dock.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', () => setOpen(panel.hidden));
    dock.querySelector('.mts-support-close').addEventListener('click', () => setOpen(false));
    dock.querySelectorAll('.mts-support-options button').forEach(btn => {
      btn.addEventListener('click', () => {
        const service = btn.dataset.service;
        const select = document.querySelector('select[name="service"]');
        if (select) {
          const opt = [...select.options].find(o => o.value === service || o.textContent === service);
          if (opt) select.value = opt.value;
        }
        const target = document.getElementById('quote') || document.querySelector('#contact-paths');
        if (target) { setOpen(false); target.scrollIntoView({behavior:'smooth', block:'start'}); }
        else { window.location.href = 'contact.html'; }
      });
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
  }

  function renderNav() {
    const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const sub = ['seafreight.html','air-freight.html','road-transport.html','trucking.html','customs-warehousing.html','vehicle-logistics.html','container-terminal.html','international-freight.html','classic-cars.html','services.html'];
    // Map dropdown items → page/anchor they open
    const svc = serviceRoutes;
    const isActive = url => url.split('#')[0] === path;
    const servicesOpen = sub.includes(path);
    const activeAttr = p => p === path ? ' class="is-current active" aria-current="page"' : '';

    // Replace whatever header markup each page shipped with a single unified
    // component, so the logo and nav never shift between pages. Legacy class
    // names are kept as aliases so existing CSS and the page-specific
    // menu-toggle handlers in home.js / app.js keep working.
    const legacy = document.querySelector('.hm-header, .nav-wrap');
    let header = document.querySelector('.mts-navbar');
    if (!header) {
      header = document.createElement('header');
      header.className = 'mts-navbar hm-header nav-wrap';
      header.setAttribute('role', 'banner');
      header.innerHTML = `
        <nav class="mts-navbar-inner hm-nav nav" aria-label="Main navigation">
          <a class="mts-navbar-brand hm-brand brand" href="index.html" aria-label="MTS home"><span class="mts-navbar-logo-box"><img src="assets/mts-logo-white.png" alt="MTS"></span></a>
          <button class="mts-navbar-toggle hm-menu-toggle menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="mts-navbar-menu"><span></span><span></span><span></span></button>
          <div class="mts-navbar-menu hm-menu menu" id="mts-navbar-menu"></div>
          <a class="mts-navbar-cta hm-nav-cta quote" href="contact.html"><span data-i18n="nav.quote">Request a quote</span> <span aria-hidden="true">↗</span></a>
        </nav>`;
      if (legacy) legacy.replaceWith(header);
      else document.body.insertBefore(header, document.body.firstChild);
    }

    const menus = header.querySelectorAll('.mts-navbar-menu');
    menus.forEach(menu => {
      menu.innerHTML = `
        <a href="index.html"${activeAttr('index.html')} data-i18n="nav.home">Home</a>
        <div class="nav-group${servicesOpen ? ' is-current-section' : ''}">
          <button type="button" class="nav-group-toggle" aria-haspopup="true" aria-expanded="false"><span data-i18n="nav.services">Services</span><svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          <div class="nav-dropdown nav-mega" role="menu">
            <div class="nav-mega-grid">
              <div class="nav-mega-cols">
                <div class="nav-mega-col-x">
                  <h5 data-i18n="nav.col.ground">GROUND &amp; TERMINAL</h5>
                  <a href="${svc.road}" class="nav-mega-item"><span class="nav-mega-ico"><img src="assets/icons/svc-container.svg" alt=""></span><span class="nav-mega-text"><strong data-i18n="nav.sub.road">Road freight</strong><small data-i18n="nav.sub.road.d">Port drayage, short hauls &amp; international long-haul</small></span></a>
                  <div class="nav-mega-live" aria-hidden="true">
                    <span class="nav-mega-live-label" data-i18n="nav.mega.live.k">On the road right now</span>
                    <svg class="nav-mega-live-route" viewBox="0 0 200 44" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                      <path class="road" d="M6 26 H194" stroke-linecap="round"/>
                      <circle class="dot" cx="6" cy="26" r="3.4"/>
                      <path class="pin" d="M194 22 l3 5 -3 5 -3 -5 Z"/>
                      <g class="truck">
                        <rect x="0" y="2" width="16" height="10" rx="1.2"/>
                        <rect x="14" y="5" width="7" height="7" rx="1"/>
                        <rect x="2" y="4" width="4" height="3" rx=".5" fill="#79d2d7"/>
                        <circle class="wheel" cx="4" cy="13.5" r="1.9"/>
                        <circle class="wheel" cx="18" cy="13.5" r="1.9"/>
                      </g>
                    </svg>
                    <div class="nav-mega-live-ends"><span data-i18n="nav.mega.live.from">HAMBURG</span><span data-i18n="nav.mega.live.to">WORLDWIDE</span></div>
                    <div class="nav-mega-live-meta">
                      <div><strong>24/7</strong><span data-i18n="nav.mega.live.ops">Operations desk</span></div>
                      <div><strong>100+</strong><span data-i18n="nav.mega.live.routes">Partner routes</span></div>
                    </div>
                  </div>
                </div>
                <div class="nav-mega-col-x">
                  <h5 data-i18n="nav.col.freight">INTERNATIONAL FREIGHT</h5>
                  <a href="${svc.sea}" class="nav-mega-item"><span class="nav-mega-ico"><img src="assets/icons/svc-freight.svg" alt=""></span><span class="nav-mega-text"><strong data-i18n="nav.sub.sea">Seafreight</strong><small data-i18n="nav.sub.sea.d">FCL / LCL ocean freight worldwide</small></span></a>
                  <a href="${svc.air}" class="nav-mega-item"><span class="nav-mega-ico"><img src="assets/icons/svc-freight.svg" alt=""></span><span class="nav-mega-text"><strong data-i18n="nav.sub.air">Air freight</strong><small data-i18n="nav.sub.air.d">Time-critical cargo via partner airlines</small></span></a>
                  <a href="${svc.rail}" class="nav-mega-item"><span class="nav-mega-ico"><img src="assets/icons/svc-freight.svg" alt=""></span><span class="nav-mega-text"><strong data-i18n="nav.sub.rail">Rail transport</strong><small data-i18n="nav.sub.rail.d">Combined routes to Central Asia &amp; CIS</small></span></a>
                </div>
                <div class="nav-mega-col-x">
                  <h5 data-i18n="nav.col.vehicles">VEHICLES</h5>
                  <a href="${svc.car}" class="nav-mega-item"><span class="nav-mega-ico"><img src="assets/icons/svc-vehicle.svg" alt=""></span><span class="nav-mega-text"><strong data-i18n="nav.sub.car">Car shipping</strong><small data-i18n="nav.sub.car.d">4–6 vehicles per 40&#39; HC, worldwide</small></span></a>
                  <a href="classic-cars.html" class="nav-mega-item"${activeAttr('classic-cars.html')}><span class="nav-mega-ico"><img src="assets/icons/svc-vehicle.svg" alt=""></span><span class="nav-mega-text"><strong data-i18n="nav.classic">Classic &amp; Premium Cars</strong><small data-i18n="nav.sub.cc.d">Enclosed single-vehicle container shipping</small></span></a>
                  <a href="services.html" class="nav-mega-item nav-mega-all-card"><span class="nav-mega-ico"><img src="assets/icons/svc-customs.svg" alt=""></span><span class="nav-mega-text"><strong data-i18n="nav.services.all">All services</strong><small>Overview of what MTS handles →</small></span></a>
                </div>
              </div>
              <div class="nav-mega-feature">
                <span class="nav-mega-feature-badge" data-i18n="nav.mega.feat.k">NEED SOMETHING BESPOKE?</span>
                <h4 data-i18n="nav.mega.feat.h">Individual solutions</h4>
                <p data-i18n="nav.mega.feat.p">Non-standard routes, project cargo, out-of-gauge or combined mode shipments — talk to our Hamburg desk.</p>
                <ul class="nav-mega-feature-list">
                  <li data-i18n="nav.mega.feat.b1">Fixed quote in ~2 business hours</li>
                  <li data-i18n="nav.mega.feat.b2">Single Hamburg point of contact</li>
                </ul>
                <a class="nav-mega-cta" href="${svc.ind}"><span data-i18n="nav.mega.feat.cta">Talk to us</span> <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <div class="nav-mega-bar">
              <span class="nav-mega-bar-status"><span class="nav-mega-bar-dot" aria-hidden="true"></span><span data-i18n="nav.mega.bar.badge">LIVE</span> · <span data-i18n="nav.mega.bar.reply">Operations desk online now · typical reply under 2h</span></span>
              <span class="nav-mega-bar-sep" aria-hidden="true"></span>
              <a class="nav-mega-bar-link" href="tel:+494081978530"><img src="assets/icons/phone-call.svg" alt=""><span data-i18n="nav.mega.bar.phone">+49 (0)40 / 819 78 530</span></a>
              <a class="nav-mega-bar-link" href="mailto:info@mtsonline.de"><img src="assets/icons/mail.svg" alt=""><span data-i18n="nav.mega.bar.email">info@mtsonline.de</span></a>
              <span class="nav-mega-bar-hours"><img src="assets/icons/clock.svg" alt=""><span data-i18n="nav.mega.bar.hours">Mo–Fr 9–18:00</span></span>
            </div>
          </div>
        </div>
        <a href="destinations.html"${activeAttr('destinations.html')} data-i18n="nav.destinations">Destinations</a>
        <a href="contact.html"${activeAttr('contact.html')} data-i18n="nav.contact">Contact</a>`;
      const group = menu.querySelector('.nav-group');
      const toggle = group.querySelector('.nav-group-toggle');
      let closeTimer = null;
      const open = () => { clearTimeout(closeTimer); group.classList.add('is-open'); toggle.setAttribute('aria-expanded','true'); };
      const close = () => { group.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false'); };
      const scheduleClose = () => { clearTimeout(closeTimer); closeTimer = setTimeout(close, 220); };
      // Hover handling: open on enter, close with a small grace period so
      // crossing the gap between the Services button and the mega panel
      // never cancels the open state.
      group.addEventListener('mouseenter', open);
      group.addEventListener('mouseleave', scheduleClose);
      toggle.addEventListener('focus', open);
      toggle.addEventListener('click', e => { e.stopPropagation(); if (group.classList.contains('is-open')) close(); else open(); });
      document.addEventListener('click', e => { if (!group.contains(e.target)) close(); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    });

    // Wire the mobile menu toggle on the (freshly-rendered) button. The
    // per-page scripts (home.js / app.js) bound to the pre-replacement
    // button, so the current element in the DOM has no handler of its own.
    const toggleBtn = header.querySelector('.mts-navbar-toggle');
    const menuEl = header.querySelector('.mts-navbar-menu');
    if (toggleBtn && menuEl && !toggleBtn.dataset.wired) {
      toggleBtn.dataset.wired = '1';
      toggleBtn.addEventListener('click', () => {
        const open = menuEl.classList.toggle('is-open');
        menuEl.classList.toggle('open', open);
        toggleBtn.setAttribute('aria-expanded', String(open));
        toggleBtn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      });
      menuEl.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
        menuEl.classList.remove('is-open');
        menuEl.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }));
    }
  }

  function render() {
    renderTopbar();
    renderNav();
    renderFooter();
    renderThemeToggle();
    renderDownloadsModal();
    renderSupport();
    applyTranslations();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render, { once: true });
  else render();
})();
