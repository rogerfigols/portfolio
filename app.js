// ==========================================================================
// ROGER FÍGOLS SOLER — PORTFOLIO JAVASCRIPT
// Interactive Timeline, Multilingual Switcher, CV Download Modal, Smooth UI
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTimeline();
  initFilters();
  initModal();
});

// 1. MULTILINGUAL SWITCHER (CA / ES / EN)
const translations = {
  ca: {
    hero_title_1: "Enginyer Industrial",
    hero_title_2: "Enginyer de Disseny Industrial & Desenvolupament de Producte",
    hero_bio: "<strong>Enginyer amb doble titulació per la UPC</strong>, amb experiència en optimització de processos i metodologia Lean a <strong>Louis Vuitton</strong>, tècnic CAD a <strong>CELO</strong> i desenvolupament de projectes propis com <strong>CALYU</strong>. Amb caràcter emprenedor i visió de producte, treballo especialment bé per projectes, <strong>abocant-m'hi al màxim</strong> quan m'apassiona el repte i hi crec fermament. Especialitzat en l'aplicació d'<strong>Intel·ligència Artificial per optimitzar processos</strong>, automatitzant fluxos i accelerant la velocitat d'iteració tècnica.",
    btn_cv: "Descarregar CV (PDF)",
    btn_projects: "Explorar Projectes",

    // Timeline Items
    t1_date: "Gener 2027",
    t1_role: "Graduat en Màster en Enginyeria Industrial",
    t1_sub: "Especialitat en Organització Industrial",
    t1_drawer: "<strong>Ubicació</strong>: Terrassa (UPC ESEIAAT).<br><br>Aprofundiment avançat en gestió integral de projectes industrials, càlcul estructural, optimització de plantes, sistemes energètics i integració tecnològica. Desenvolupament en curs del Treball de Fi de Màster (TFM).",

    t2_date: "Feb 2026 – Actualitat",
    t2_role: "Co-Fundador &amp; Cap de Producte",
    t2_sub: "Startup de gestió per a pisos compartits",
    t2_drawer: "<li><strong>Ubicació &amp; Entorn</strong>: Terrassa (Model Híbrid). Projecte incubat al prestigiós programa <strong>Emprèn UPC</strong> i seleccionat com a finalista per presentar al <strong>Demo Day Santander X Explorer UPC</strong>.</li><li><strong>Desenvolupament integral de producte</strong>: Definició de l'arquitectura de funcionalitats, fluxos d'usuari per a despeses compartides, tasques domèstiques i gamificació (iOS i Android).</li><li><strong>Metodologia Lean Startup (Eric Ries)</strong>: Validació àgil mitjançant el bucle <em>Construir-Mesurar-Aprendre</em>, testeig continu d'usabilitat i llançament amb més de 100 <em>early adopters</em>.</li>",
    visit_calyu_app: "Visitar calyu.app ↗",

    t3_date: "Maig 2025 – Feb 2026",
    t3_role: "Enginyer de Millora Contínua (Pràctiques)",
    t3_sub: "Manufactura de marroquineria de luxe",
    t3_drawer: "<li><strong>Ubicació</strong>: Santa Perpètua de Mogoda · Planta de manufactura artesanal d'alta gamma de marroquineria.</li><li><strong>Metodologies Lean Manufacturing &amp; 5S</strong>: Implementació pràctica d'eines d'estandardització, ordre i eficiència operativa directament a línia de manufactura.</li><li><strong>Automatització de processos &amp; IA (Iniciativa pròpia)</strong>: Desenvolupament en paral·lel d'una eina interna basada en <strong>macros i IA</strong> per generar documentació tècnica recurrent amb un sol clic, <strong>reduint el temps de dedicació en un 75% (un procés x4 més ràpid)</strong>.</li><li><strong>Optimització de processos &amp; Temps de cicle</strong>: Anàlisi de colls d'ampolla i desaprofitaments per elevar la productivitat respectant els exigents estàndards artesanals.</li><li><strong>Treball interdisciplinari &amp; Planta</strong>: Coordinació transversal diària amb els departaments de producció, manteniment, control de qualitat i operaris de línia.</li>",

    t4_date: "Setembre 2024",
    t4_role: "Graduat en Enginyeria de Disseny Industrial &amp; Desenv. de Producte",
    t4_drawer: "<strong>Ubicació</strong>: Terrassa (Universitat Politècnica de Catalunya).<br><br>Formació troncal completa de 4 anys (2020–2024) que fusiona enginyeria mecànica, modelat 3D CAD/CAM (SolidWorks), selecció de materials plàstics i metàl·lics, processos de manufactura, ergonomia, disseny per a fabricació (DFM) i prototipatge ràpid.",

    t5_date: "Setembre 2024",
    t5_role: "Presentació TFG: CarGo (Matrícula d'Honor)",
    t5_sub: "Plataforma de logística col·laborativa",
    t5_drawer: "<li><strong>Qualificació &amp; Reconeixement</strong>: Guardonat amb <strong>Matrícula d'Honor</strong> pel tribunal d'avaluació de la UPC (Terrassa) per la seva viabilitat tècnica, impacte ambiental reduint emissions de CO₂ i optimització de costos logístics.</li><li><strong>Concepció i model de negoci</strong>: Plataforma de crowdshipping que aprofita els desplaçaments habituals que les persones ja han de fer per transportar paqueteria a mitjanes distàncies a través de xarxa de punts de conveniència.</li>",
    t5_action: "Veure detalls a Projectes Destacats ↓",

    t6_date: "Set 2023 – Gen 2024",
    t6_role: "Enginyer en Pràctiques (Oficina Tècnica)",
    t6_sub: "Fixació i caragoleria tècnica industrial",
    t6_drawer: "<li><strong>Ubicació</strong>: Castellar del Vallès · Planta industrial especialitzada en sistemes de caragoleria tècnica i estampació.</li><li><strong>Modelat 3D &amp; Delineació CAD</strong>: Generació, revisió i optimització de plànols tècnics de fabricació mitjançant <strong>SolidWorks</strong>, aplicant toleràncies geomètriques i criteris de mecanitzat.</li><li><strong>Enllaç tècnic amb producció</strong>: Comunicació diària amb els equips de manufactura per adaptar els dissenys als requeriments de maquinària i resoldre incidències tècniques.</li>",

    t7_date: "Jul 2022",
    t7_role: "Operari de Línia de Producció",
    t7_sub: "Sector químic i higiènic",
    t7_drawer: "<strong>Ubicació</strong>: Vilafranca del Penedès.<br><br>Control de procés, envasament automatitzat, verificació de qualitat en línia i paletització en una planta industrial d'alt ritme de fabricació continu.",

    t8_date: "Jul – Ago 2021",
    t8_role: "Ajudant de Recepció i Cambrer",
    t8_sub: "Sector hoteler i restauració",
    t8_drawer: "<strong>Ubicació</strong>: Berga.<br><br>Atenció directa al client, gestió àgil de reserves en recepció i coordinació de servei en torns de restaurant.",

    t9_date: "Novembre 2019",
    t9_role: "Treball de Recerca: Reforma Hotel Estel",
    t9_sub: "Estudi de viabilitat i normativa",
    t9_drawer: "<li><strong>Qualificació &amp; Distinció</strong>: Qualificat amb un <strong>10 / 10</strong> pel tribunal d'avaluació de Batxillerat.</li><li><strong>Compliment normatiu &amp; Viabilitat</strong>: Estudi tècnic de la normativa turística vigent per determinar els requisits legals d'espais, accessibilitat i serveis per elevar l'hotel de 2 a 4 estrelles.</li><li><strong>Delineació i redisseny arquitectònic</strong>: Modificació completa dels plànols arquitectònics: cotes d'habitacions, redistribució de banys, ampliació de zones comunes i integració de nous ascensors.</li>",
    t9_action: "Veure plànol a Projectes ↓",

    t10_date: "Juny 2019",
    t10_role: "Certificació d'Anglès B2",
    t10_sub: "First Certificate (Professional)",
    t10_drawer: "Competència comunicativa sòlida per a entorns professionals internacionals, documentació tècnica, redacció d'informes d'enginyeria i presentacions de projecte.",

    // Projects Section
    projects_heading: "Projectes",
    p1_cat: "Startup / TFM",
    p1_origin: "Personal / UPC",
    p1_desc: "Plataforma per a la gestió de convivència i despeses compartides en pisos d'estudiants.",

    p2_cat: "Disseny de Producte",
    p2_origin: "Concurs",
    p2_desc: "Concepció d'un topall de porta i delineació de plànols tècnics de fabricació.",

    p3_cat: "TFG",
    p3_origin: "UPC",
    p3_desc: "Plataforma de crowdshipping guardonada amb Matrícula d'Honor pel tribunal UPC.",

    p4_cat: "Impressió 3D",
    p4_origin: "Personal",
    p4_desc: "Repositori de projectes d'impressió 3D FDM: utillatges industrials, enginyeria inversa i peces funcionals.",

    p5_cat: "Modelat 3D",
    p5_origin: "UPC",
    p5_desc: "Presentació de producte per a ulleres de drons FPV explorant diversos motors de render i textures CMF.",

    p6_cat: "Redisseny",
    p6_origin: "UPC",
    p6_desc: "Redisseny estètic de robot de cuina i manual d'usuari amb desglossament vectorial.",

    p7_cat: "Arquitectura & Normativa",
    p7_origin: "Batxillerat",
    p7_desc: "Estudi tècnic i redisseny de plànols per elevar l'hotel de 2 a 4 estrelles (Qualificació: 10/10).",

    p8_cat: "Campanya Publicitària",
    p8_origin: "UPC",
    p8_desc: "Campanya digital per a festival de música: identitat visual i creativitats per a xarxes.",

    p9_cat: "Disseny Editorial",
    p9_origin: "UPC",
    p9_desc: "Disseny gràfic i maquetació editorial d'una revista d'aventures amb retícula tipogràfica.",

    // Skills Option 3, Contact, Footer, Modal
    skills_heading: "Competències",
    sk_panel1_title: "Software &amp; Eines Digitals",
    sk_row1_1_title: "CAD / CAM &amp; Delineació 3D",
    sk_row1_2_title: "Prototipatge &amp; Fabricació Additiva",
    sk_item_3dprint: "Impressió 3D (FDM / SLA)",
    sk_item_reverse_eng: "Enginyeria Inversa",
    sk_row1_3_title: "IA &amp; Automatització Tècnica",
    sk_item_doc_auto: "Automatització Documental",
    sk_row1_4_title: "Disseny Digital &amp; UI",

    sk_panel2_title: "Metodologia &amp; Operacions",
    sk_row2_1_title: "Lean Manufacturing",
    sk_item_kaizen: "Kaizen (Millora Contínua)",
    sk_item_std: "Estandardització",
    sk_row2_2_title: "Processos &amp; Planta",
    sk_item_bottleneck: "Anàlisi de Colls d'Ampolla",
    sk_item_line_bal: "Equilibrat de Línies",
    sk_item_cycle_time: "Estudis de Temps de Cicle",
    sk_item_cross_team: "Treball Interdisciplinari",
    sk_row2_3_title: "Enginyeria de Producte",
    sk_row2_4_title: "Startup &amp; Validació",

    sk_lang_title: "Idiomes &amp; Certificació",
    sk_lang_ca: "Natiu",
    sk_lang_es: "Natiu",
    sk_lang_en: "B2 First Certificate (Cambridge English)",
    contact_heading: "Contacte",
    contact_desc: "Tens un projecte o iniciativa d'enginyeria on vulguis sumar? Parlem-ne.",
    footer_rights: "© 2026 Roger Fígols Soler · Enginyer Industrial & Disseny de Producte",
    back_to_top: "Dalt ↑",
    modal_title: "Descarregar CV Oficial",
    modal_subtitle: "Format estàndard 1 pàgina A4 d'alta precisió. Tria el teu idioma:"
  },
  es: {
    hero_title_1: "Ingeniero Industrial",
    hero_title_2: "Ingeniero de Diseño Industrial y Desarrollo de Producto",
    hero_bio: "<strong>Ingeniero con doble titulación por la UPC</strong>, con experiencia en optimización de procesos y metodología Lean en <strong>Louis Vuitton</strong>, técnico CAD en <strong>CELO</strong> y desarrollo de proyectos propios como <strong>CALYU</strong>. Con carácter emprendedor y visión de producto, trabajo especialmente bien por proyectos, volcándome al máximo cuando me apasiona el reto y creo firmemente en él. Especializado en la aplicación de <strong>Inteligencia Artificial para optimizar procesos</strong>, automatizando flujos y acelerando la velocidad de iteración técnica.",
    btn_cv: "Descargar CV (PDF)",
    btn_projects: "Explorar Proyectos",

    // Timeline Items
    t1_date: "Enero 2027",
    t1_role: "Graduado en Máster en Ingeniería Industrial",
    t1_sub: "Especialidad en Organización Industrial",
    t1_drawer: "<strong>Ubicación</strong>: Terrassa (UPC ESEIAAT).<br><br>Profundización avanzada en gestión integral de proyectos industriales, cálculo estructural, optimización de plantas, sistemas energéticos e integración tecnológica. Desarrollo en curso del Trabajo de Fin de Máster (TFM).",

    t2_date: "Feb 2026 – Actualidad",
    t2_role: "Co-Fundador &amp; Jefe de Producto",
    t2_sub: "Startup de gestión para pisos compartidos",
    t2_drawer: "<li><strong>Ubicación &amp; Entorno</strong>: Terrassa (Modelo Híbrido). Proyecto incubado en el prestigioso programa <strong>Emprèn UPC</strong> y seleccionado como finalista para presentar en el <strong>Demo Day Santander X Explorer UPC</strong>.</li><li><strong>Desarrollo integral de producto</strong>: Definición de la arquitectura de funcionalidades, flujos de usuario para gastos compartidos, tareas domésticas y gamificación (iOS y Android).</li><li><strong>Metodología Lean Startup (Eric Ries)</strong>: Validación ágil mediante el bucle <em>Construir-Medir-Aprender</em>, testeo continuo de usabilidad y lanzamiento con más de 100 <em>early adopters</em>.</li>",
    visit_calyu_app: "Visitar calyu.app ↗",

    t3_date: "Mayo 2025 – Feb 2026",
    t3_role: "Ingeniero de Mejora Continua (Prácticas)",
    t3_sub: "Manufactura de marroquinería de lujo",
    t3_drawer: "<li><strong>Ubicación</strong>: Santa Perpètua de Mogoda · Planta de manufactura artesanal de alta gama de marroquinería.</li><li><strong>Metodologías Lean Manufacturing &amp; 5S</strong>: Implementación práctica de herramientas de estandarización, orden y eficiencia operativa directamente en línea de manufactura.</li><li><strong>Automatización de procesos e IA (Iniciativa propia)</strong>: Desarrollo en paralelo de una herramienta interna basada en <strong>macros e IA</strong> para generar documentación técnica recurrente con un solo clic, <strong>reduciendo el tiempo un 75% (x4 más rápido)</strong>.</li><li><strong>Optimización de procesos &amp; Tiempos de ciclo</strong>: Análisis de cuellos de botella y desperdicios para elevar la productividad respetando los exigentes estándares artesanales.</li><li><strong>Trabajo interdisciplinar &amp; Planta</strong>: Coordinación transversal diaria con producción, mantenimiento, control de calidad y operarios.</li>",

    t4_date: "Septiembre 2024",
    t4_role: "Graduado en Ingeniería de Diseño Industrial y Desarr. de Producto",
    t4_drawer: "<strong>Ubicación</strong>: Terrassa (Universitat Politècnica de Catalunya).<br><br>Formación troncal completa de 4 años (2020–2024) que fusiona ingeniería mecánica, modelado 3D CAD/CAM (SolidWorks), selección de materiales plásticos y metálicos, procesos de manufactura, ergonomía, diseño para fabricación (DFM) y prototipado rápido.",

    t5_date: "Septiembre 2024",
    t5_role: "Presentación TFG: CarGo (Matrícula de Honor)",
    t5_sub: "Plataforma de logística colaborativa",
    t5_drawer: "<li><strong>Calificación &amp; Reconocimiento</strong>: Galardonado con <strong>Matrícula de Honor</strong> por el tribunal de evaluación de la UPC (Terrassa) por su viabilidad técnica, impacto ambiental reduciendo emisiones de CO₂ y optimización de costes logísticos.</li><li><strong>Concepción y modelo de negocio</strong>: Plataforma de crowdshipping que aprovecha los desplazamientos habituales para transportar paquetería a distancias medias a través de red de puntos de conveniencia.</li>",
    t5_action: "Ver detalles en Proyectos Destacados ↓",

    t6_date: "Sep 2023 – Ene 2024",
    t6_role: "Ingeniero en Prácticas (Oficina Técnica)",
    t6_sub: "Fijación y tornillería técnica industrial",
    t6_drawer: "<li><strong>Ubicación</strong>: Castellar del Vallès · Planta industrial especializada en sistemas de tornillería técnica y estampación.</li><li><strong>Modelado 3D &amp; Delineación CAD</strong>: Generación, revisión y optimización de planos técnicos de fabricación mediante <strong>SolidWorks</strong>, aplicando tolerancias geométricas y criterios de mecanizado.</li><li><strong>Enlace técnico con producción</strong>: Comunicación diaria con los equipos de manufactura para adaptar los diseños a los requerimientos de maquinaria y resolver incidencias técnicas.</li>",

    t7_date: "Jul 2022",
    t7_role: "Operario de Línea de Producción",
    t7_sub: "Sector químico e higiénico",
    t7_drawer: "<strong>Ubicación</strong>: Vilafranca del Penedès.<br><br>Control de proceso, envasado automatizado, verificación de calidad en línea y paletización en una planta industrial de alto ritmo de fabricación continuo.",

    t8_date: "Jul – Ago 2021",
    t8_role: "Ayudante de Recepción y Camarero",
    t8_sub: "Sector hostelero y restauración",
    t8_drawer: "<strong>Ubicación</strong>: Berga.<br><br>Atención directa al cliente, gestión ágil de reservas en recepción y coordinación de servicio en turnos de restaurante.",

    t9_date: "Noviembre 2019",
    t9_role: "Trabajo de Investigación: Reforma Hotel Estel",
    t9_sub: "Estudio de viabilidad y normativa",
    t9_drawer: "<li><strong>Calificación &amp; Distinción</strong>: Calificado con un <strong>10 / 10</strong> por el tribunal de evaluación de Bachillerato.</li><li><strong>Cumplimiento normativo &amp; Viabilidad</strong>: Estudio técnico de la normativa turística vigente para determinar los requisitos legales de espacios, accesibilidad y servicios para elevar el hotel de 2 a 4 estrellas.</li><li><strong>Delineación y rediseño arquitectónico</strong>: Modificación completa de los planos arquitectónicos: cotas de habitaciones, redistribución de baños, ampliación de zonas comunes e integración de nuevos ascensores.</li>",
    t9_action: "Ver plano en Proyectos ↓",

    t10_date: "Junio 2019",
    t10_role: "Certificación de Inglés B2",
    t10_sub: "First Certificate (Profesional)",
    t10_drawer: "Competencia comunicativa sólida para entornos profesionales internacionales, documentación técnica, redacción de informes de ingeniería y presentaciones de proyecto.",

    // Projects Section
    projects_heading: "Proyectos",
    p1_cat: "Startup / TFM",
    p1_origin: "Personal / UPC",
    p1_desc: "Plataforma para la gestión de convivencia y gastos compartidos en pisos de estudiantes.",

    p2_cat: "Diseño de Producto",
    p2_origin: "Concurso",
    p2_desc: "Concepción de un tope de puerta y delineación de planos técnicos de fabricación.",

    p3_cat: "TFG",
    p3_origin: "UPC",
    p3_desc: "Plataforma de crowdshipping galardonada con Matrícula de Honor por el tribunal UPC.",

    p4_cat: "Impresión 3D",
    p4_origin: "Personal",
    p4_desc: "Repositorio de proyectos de impresión 3D FDM: utillajes industriales, ingeniería inversa y piezas funcionales.",

    p5_cat: "Modelado 3D",
    p5_origin: "UPC",
    p5_desc: "Presentación de producto para gafas de drones FPV explorando diversos motores de render y texturas CMF.",

    p6_cat: "Rediseño",
    p6_origin: "UPC",
    p6_desc: "Rediseño estético de robot de cocina y manual de usuario con despiece vectorial.",

    p7_cat: "Arquitectura & Normativa",
    p7_origin: "Bachillerato",
    p7_desc: "Estudio técnico y rediseño de planos para elevar el hotel de 2 a 4 estrellas (Calificación: 10/10).",

    p8_cat: "Campaña Publicitaria",
    p8_origin: "UPC",
    p8_desc: "Campaña digital para festival de música: identidad visual y creatividades para redes.",

    p9_cat: "Diseño Editorial",
    p9_origin: "UPC",
    p9_desc: "Diseño gráfico y maquetación editorial de una revista de aventuras con retícula tipográfica.",

    // Skills Option 3, Contact, Footer, Modal
    skills_heading: "Competencias",
    sk_panel1_title: "Software &amp; Herramientas Digitales",
    sk_row1_1_title: "CAD / CAM &amp; Delineación 3D",
    sk_row1_2_title: "Prototipado &amp; Fabricación Aditiva",
    sk_item_3dprint: "Impresión 3D (FDM / SLA)",
    sk_item_reverse_eng: "Ingeniería Inversa",
    sk_row1_3_title: "IA &amp; Automatización Técnica",
    sk_item_doc_auto: "Automatización Documental",
    sk_row1_4_title: "Diseño Digital &amp; UI",

    sk_panel2_title: "Metodología &amp; Operaciones",
    sk_row2_1_title: "Lean Manufacturing",
    sk_item_kaizen: "Kaizen (Mejora Continua)",
    sk_item_std: "Estandarización",
    sk_row2_2_title: "Procesos &amp; Planta",
    sk_item_bottleneck: "Análisis de Cuellos de Botella",
    sk_item_line_bal: "Equilibrado de Líneas",
    sk_item_cycle_time: "Estudios de Tiempos de Ciclo",
    sk_item_cross_team: "Trabajo Interdisciplinar",
    sk_row2_3_title: "Ingeniería de Producto",
    sk_row2_4_title: "Startup &amp; Validación",

    sk_lang_title: "Idiomas &amp; Certificación",
    sk_lang_ca: "Nativo",
    sk_lang_es: "Nativo",
    sk_lang_en: "B2 First Certificate (Cambridge English)",
    contact_heading: "Contacto",
    contact_desc: "¿Tienes un proyecto o iniciativa de ingeniería donde sumar? Hablemos.",
    footer_rights: "© 2026 Roger Fígols Soler · Ingeniero Industrial y Diseño de Producto",
    back_to_top: "Arriba ↑",
    modal_title: "Descargar CV Oficial",
    modal_subtitle: "Formato estándar 1 página A4 de alta precisión. Elige tu idioma:"
  },
  en: {
    hero_title_1: "Industrial Engineer",
    hero_title_2: "Industrial Design & Product Development Engineer",
    hero_bio: "<strong>Dual-degree Engineer from UPC Barcelona</strong>, with hands-on experience in process optimization and Lean methodology at <strong>Louis Vuitton</strong>, CAD engineering at <strong>CELO</strong>, and product ventures such as <strong>CALYU</strong>. Entrepreneurial mindset and product vision, thriving in project-driven environments where passion meets high technical standards. Specialized in applying <strong>Artificial Intelligence to process engineering</strong>, streamlining workflows and accelerating technical iteration cycles.",
    btn_cv: "Download CV (PDF)",
    btn_projects: "Explore Projects",

    // Timeline Items
    t1_date: "January 2027",
    t1_role: "Master's Degree in Industrial Engineering",
    t1_sub: "Major in Industrial Management",
    t1_drawer: "<strong>Location</strong>: Terrassa (UPC ESEIAAT).<br><br>Advanced focus on industrial project management, structural analysis, plant optimization, energy systems, and technology integration. Ongoing Master's Thesis (TFM).",

    t2_date: "Feb 2026 – Present",
    t2_role: "Co-Founder &amp; Head of Product",
    t2_sub: "Flatmate management startup",
    t2_drawer: "<li><strong>Location &amp; Ecosystem</strong>: Terrassa (Hybrid). Incubated at the prestigious <strong>Emprèn UPC</strong> startup program and selected as finalist for the <strong>Santander X Explorer UPC Demo Day</strong>.</li><li><strong>End-to-end Product Development</strong>: Feature architecture, user journey mapping for shared expenses, household chores, and gamification (iOS &amp; Android).</li><li><strong>Lean Startup Methodology (Eric Ries)</strong>: Rapid hypothesis testing through <em>Build-Measure-Learn</em> cycles, continuous usability feedback, and onboarding of 100+ <em>early adopters</em>.</li>",
    visit_calyu_app: "Visit calyu.app ↗",

    t3_date: "May 2025 – Feb 2026",
    t3_role: "Continuous Improvement Engineer (Internship)",
    t3_sub: "Luxury leather goods manufacturing",
    t3_drawer: "<li><strong>Location</strong>: Santa Perpètua de Mogoda · High-end luxury leather goods craftsmanship plant.</li><li><strong>Lean Manufacturing &amp; 5S</strong>: Practical implementation of visual management, standardization, and operational efficiency directly on the production lines.</li><li><strong>Process Automation &amp; AI (Personal Initiative)</strong>: Self-driven engineering of an internal system combining <strong>VBA macros and generative AI</strong> to auto-compile recurring audit reports in one click, <strong>cutting report preparation time by 75% (x4 faster)</strong>.</li><li><strong>Cycle Time &amp; Bottleneck Analysis</strong>: Identification of process wastes (Muda) to streamline throughput while safeguarding exacting artisanal standards.</li><li><strong>Cross-functional Shop Floor Leadership</strong>: Daily direct collaboration with manufacturing operators, maintenance technicians, quality inspectors, and plant leadership.</li>",

    t4_date: "September 2024",
    t4_role: "B.Sc. in Industrial Design &amp; Product Development Engineering",
    t4_drawer: "<strong>Location</strong>: Terrassa (Universitat Politècnica de Catalunya).<br><br>Comprehensive 4-year curriculum (2020–2024) combining mechanical engineering, 3D CAD/CAM (SolidWorks), plastics and metals material selection, manufacturing processes, ergonomics, design for manufacturing (DFM), and rapid prototyping.",

    t5_date: "September 2024",
    t5_role: "Bachelor Thesis: CarGo (Honors Mark)",
    t5_sub: "Crowdshipping logistics platform",
    t5_drawer: "<li><strong>Distinction &amp; Honors</strong>: Awarded <strong>Matrícula d'Honor (Highest Honors)</strong> by the UPC faculty committee for technical rigor, CO₂ emissions reduction model, and supply chain cost efficiency.</li><li><strong>Conception &amp; Business Architecture</strong>: Medium-distance crowdshipping model leveraging recurring everyday commutes to deliver parcels via localized drop-off and pick-up hubs.</li>",
    t5_action: "View details in Featured Projects ↓",

    t6_date: "Sep 2023 – Jan 2024",
    t6_role: "Design Engineer Intern (Technical Office)",
    t6_sub: "Industrial fastening and technical screws",
    t6_drawer: "<li><strong>Location</strong>: Castellar del Vallès · Manufacturing facility specialized in precision cold forming and technical fastening solutions.</li><li><strong>3D CAD Modeling &amp; Drafting</strong>: Technical drawing creation, blueprint auditing, and engineering modeling in <strong>SolidWorks</strong>, applying strict GD&amp;T geometric tolerances and machining standards.</li><li><strong>Shop Floor Engineering Interface</strong>: Daily collaboration with production supervisors and toolmakers to align CAD specs with cold-forming machinery capabilities.</li>",

    t7_date: "Jul 2022",
    t7_role: "Production Line Operator",
    t7_sub: "Chemical and hygiene sector",
    t7_drawer: "<strong>Location</strong>: Vilafranca del Penedès.<br><br>Process monitoring, automated packaging, line quality inspection, and palletizing in a high-throughput industrial continuous manufacturing facility.",

    t8_date: "Jul – Aug 2021",
    t8_role: "Front Desk &amp; Hospitality Assistant",
    t8_sub: "Hospitality and dining sector",
    t8_drawer: "<strong>Location</strong>: Berga.<br><br>Direct guest communication, front-desk booking management, and high-tempo hospitality service coordination.",

    t9_date: "November 2019",
    t9_role: "High School Research Thesis: Hotel Estel Renovation",
    t9_sub: "Feasibility study & building code",
    t9_drawer: "<li><strong>Distinction &amp; Grade</strong>: Graded <strong>10 / 10 (Highest Honors)</strong> by the academic evaluation board.</li><li><strong>Regulatory Compliance &amp; Feasibility</strong>: Comprehensive technical study of hospitality building regulations to meet requirements for upgrading hotel classification from 2 to 4 stars.</li><li><strong>Architectural Drafting &amp; Redesign</strong>: Full CAD redesign of floor plans: room dimensions, bathroom layouts, accessibility compliance, expanded shared facilities, and elevator core integration.</li>",
    t9_action: "View blueprint in Projects ↓",

    t10_date: "June 2019",
    t10_role: "B2 English Certification (First Certificate)",
    t10_sub: "First Certificate (Professional)",
    t10_drawer: "Solid working English proficiency for international engineering teams, technical documentation, design specifications, and project presentations.",

    // Projects Section
    projects_heading: "Projects",
    p1_cat: "Startup / Master's Thesis",
    p1_origin: "Personal / UPC",
    p1_desc: "Coliving management platform for shared expenses and household tasks in student flats.",

    p2_cat: "Product Design",
    p2_origin: "Competition",
    p2_desc: "Functional concept of a door stopper and technical drafting of manufacturing blueprints.",

    p3_cat: "Bachelor's Thesis",
    p3_origin: "UPC",
    p3_desc: "Crowdshipping logistics platform awarded Highest Honors by the UPC faculty committee.",

    p4_cat: "3D Printing",
    p4_origin: "Personal",
    p4_desc: "Repository of FDM 3D printing projects: industrial tooling, reverse engineering, and functional parts.",

    p5_cat: "3D Modeling",
    p5_origin: "UPC",
    p5_desc: "Product presentation for FPV drone goggles exploring different rendering engines and CMF texturing.",

    p6_cat: "Redesign",
    p6_origin: "UPC",
    p6_desc: "Aesthetic kitchen mixer redesign and illustrated technical user guide.",

    p7_cat: "Architecture & Regulations",
    p7_origin: "High School",
    p7_desc: "Technical feasibility and CAD blueprint redesign to upgrade hotel from 2 to 4 stars (Grade: 10/10).",

    p8_cat: "Advertising Campaign",
    p8_origin: "UPC",
    p8_desc: "Digital campaign for a music festival: visual brand identity and social media creatives.",

    p9_cat: "Editorial Design",
    p9_origin: "UPC",
    p9_desc: "Graphic design and editorial layout of an adventure magazine using structured typographic grids.",

    // Skills Option 3, Contact, Footer, Modal
    skills_heading: "Skills &amp; Expertise",
    sk_panel1_title: "Software &amp; Digital Tools",
    sk_row1_1_title: "CAD / CAM &amp; 3D Drafting",
    sk_row1_2_title: "Prototyping &amp; Additive Manufacturing",
    sk_item_3dprint: "3D Printing (FDM / SLA)",
    sk_item_reverse_eng: "Reverse Engineering",
    sk_row1_3_title: "AI &amp; Technical Automation",
    sk_item_doc_auto: "Document Automation",
    sk_row1_4_title: "Digital Design &amp; UI",

    sk_panel2_title: "Methodology &amp; Operations",
    sk_row2_1_title: "Lean Manufacturing",
    sk_item_kaizen: "Kaizen (Continuous Improvement)",
    sk_item_std: "Standardization",
    sk_row2_2_title: "Processes &amp; Plant Floor",
    sk_item_bottleneck: "Bottleneck Analysis",
    sk_item_line_bal: "Line Balancing",
    sk_item_cycle_time: "Cycle Time Studies",
    sk_item_cross_team: "Cross-functional Collaboration",
    sk_row2_3_title: "Product Engineering",
    sk_row2_4_title: "Startup &amp; Validation",

    sk_lang_title: "Languages &amp; Certification",
    sk_lang_ca: "Native",
    sk_lang_es: "Native",
    sk_lang_en: "B2 First Certificate (Cambridge English)",
    contact_heading: "Contact",
    contact_desc: "Have an engineering challenge or initiative you'd like to collaborate on? Let's talk.",
    footer_rights: "© 2026 Roger Fígols Soler · Industrial & Product Design Engineer",
    back_to_top: "Top ↑",
    modal_title: "Download Official CV",
    modal_subtitle: "Standard 1-page high-precision A4 format. Choose your language:"
  }
};

function switchLanguage(lang) {
  if (!translations[lang]) return;

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update button active classes
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Apply translations to data-i18n elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Persist preference
  try {
    localStorage.setItem('roger_portfolio_lang', lang);
  } catch (e) {
    // Local storage might be blocked in private mode
  }
}

function initLanguage() {
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });

  // Restore saved language or default to 'ca'
  let initialLang = 'ca';
  try {
    const saved = localStorage.getItem('roger_portfolio_lang');
    if (saved && translations[saved]) {
      initialLang = saved;
    }
  } catch (e) {}

  if (initialLang !== 'ca') {
    switchLanguage(initialLang);
  }
}

// 2. TIMELINE ACCORDION INTERACTION
function toggleTimeline(card) {
  const isAlreadyActive = card.classList.contains('active-card');
  
  // Close other cards for a clean accordion feel
  const allCards = document.querySelectorAll('.timeline-card');
  allCards.forEach(c => {
    if (c !== card) {
      c.classList.remove('active-card');
    }
  });

  if (isAlreadyActive) {
    card.classList.remove('active-card');
  } else {
    card.classList.add('active-card');
  }
}

function initTimeline() {
  window.toggleTimeline = toggleTimeline;
}

// 3. TIMELINE CATEGORY FILTERS (Safe fallback)
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const timelineItems = document.querySelectorAll('.timeline-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      timelineItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.classList.remove('hidden-item');
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 50);
        } else {
          item.classList.add('hidden-item');
        }
      });
    });
  });
}

// 4. CV DOWNLOAD MODAL
function initModal() {
  const modal = document.getElementById('cv-modal');
  const openButtons = document.querySelectorAll('.btn-cv-header, .open-cv-modal-trigger');
  const closeBtn = document.getElementById('close-cv-modal');

  const openModal = () => {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  openButtons.forEach(btn => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Close when clicking outside the card
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
