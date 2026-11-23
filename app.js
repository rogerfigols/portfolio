// ==========================================================================
// ROGER FÍGOLS SOLER — PORTFOLIO JAVASCRIPT
// Interactive Timeline, Multilingual Switcher, CV Download Modal, Smooth UI
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTimeline();
  initFilters();
  initModal();
  initHashScroll();
});

// 1. MULTILINGUAL SWITCHER (CA / ES / EN)
const translations = {
  ca: {
    hero_title_1: "Enginyer Industrial",
    hero_title_2: "Enginyer de Disseny Industrial & Desenvolupament de Producte",
    hero_bio: "<strong>Enginyer de Producte</strong> amb doble titulació en Disseny Industrial i Enginyeria Industrial per la UPC. Especialitzat en el desenvolupament integral de producte físic (CAD, electrònica PCB i prototipatge ràpid) i en l'acceleració de processos mitjançant Intel·ligència Artificial.",
    btn_cv: "Descarregar CV (PDF)",
    btn_projects: "Explorar Projectes",

    // Timeline Items
    t1_date: "Gener 2027",
    t1_role: "Graduat en Màster en Enginyeria Industrial",
    t1_sub: "Especialitat en Organització Industrial",
    t1_drawer: "<strong>Ubicació</strong>: Terrassa (UPC ESEIAAT).<br><br>Aprofundiment avançat en gestió integral de projectes industrials, càlcul estructural, optimització de plantes, sistemes energètics i integració tecnològica. Desenvolupament en curs del Treball de Fi de Màster (TFM).",

    t2_date: "Feb 2026 – Actualitat",
    t2_role: "Desenvolupament de Producte",
    t2_company: "Projectes Propis",
    t2_drawer: "<li><strong>Quicklap</strong>: Desenvolupament d'un dispositiu de control per a simulació de conducció: disseny integral des del modelat CAD fins a la placa electrònica (PCB) i prototipatge 3D.</li><li><strong>Automatització de processos amb IA</strong>: Desenvolupament i integració de fluxos de treball automatitzats amb IA per a empreses.</li><li><strong>CALYU</strong>: Concepció i desenvolupament d'una aplicació mòbil per a la convivència en pisos compartits, impulsada amb el suport del programa Emprèn UPC.</li>",

    t3_date: "Maig 2025 – Feb 2026",
    t3_role: "Enginyer Lean (Pràctiques)",
    t3_drawer: "<li><strong>Metodologies Lean Manufacturing &amp; 5S</strong>: Implementació pràctica d'eines d'organització, estandardització i eficiència operativa directament a línia de producció.</li><li><strong>Optimització de processos</strong>: Anàlisi de colls d'ampolla i desaprofitaments per elevar la productivitat respectant els estàndards de luxe artesanal.</li><li><strong>Treball interdisciplinari</strong>: Coordinació transversal diària amb els equips de producció, manteniment, control de qualitat i operaris de línia per aplicar millores operatives duradores.</li><li><strong>Automatització de processos &amp; IA (Iniciativa pròpia)</strong>: Desenvolupament en paral·lel d'una eina basada en macros i IA per generar documentació tècnica recurrent amb un sol clic, reduint el temps dedicat a la tasca en un 75%.</li>",

    t4_date: "Setembre 2024",
    t4_role: "Graduat en Enginyeria de Disseny Industrial &amp; Desenv. de Producte",
    t4_drawer: "<strong>Ubicació</strong>: Terrassa (Universitat Politècnica de Catalunya).<br><br>Formació troncal completa de 4 anys (2020–2024) que fusiona enginyeria mecànica, modelat 3D CAD/CAM (SolidWorks), selecció de materials plàstics i metàl·lics, processos de manufactura, ergonomia, disseny per a fabricació (DFM) i prototipatge ràpid.",

    t5_date: "Setembre 2024",
    t5_role: "Presentació TFG: CarGo (Matrícula d'Honor)",
    t5_sub: "Plataforma de logística col·laborativa",
    t5_drawer: "<li><strong>Qualificació &amp; Reconeixement</strong>: Guardonat amb <strong>Matrícula d'Honor</strong> pel tribunal d'avaluació de la UPC (Terrassa) per la seva viabilitat tècnica, impacte ambiental reduint emissions de CO₂ i optimització de costos logístics.</li><li><strong>Concepció i model de negoci</strong>: Plataforma de crowdshipping que aprofita els desplaçaments habituals que les persones ja han de fer per transportar paqueteria a mitjanes distàncies a través de xarxa de punts de conveniència.</li>",
    t5_action: "Veure detalls a Projectes Destacats ↓",

    t6_date: "Set 2023 – Gen 2024",
    t6_role: "Enginyer de Producte (Pràctiques)",
    t6_drawer: "<li><strong>Modelat 3D &amp; Delineació CAD</strong>: Generació, revisió i optimització de plànols tècnics de fabricació mitjançant SolidWorks.</li><li><strong>Enllaç tècnic &amp; Processos</strong>: Comunicació directa amb equips de processos i oficina tècnica per adaptar els dissenys als requeriments de producció i necessitat de client.</li>",

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
    p1_cat: "Projecte Personal / App",
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

    // Skills, Contact, Footer, Modal
    skills_heading: "Competències",
    sk_panel1_title: "Disseny Tècnic &amp; Fabricació",
    sk_row1_1_title: "CAD / CAM &amp; Disseny Tècnic",
    sk_row1_2_title: "Fabricació &amp; Taller",
    sk_item_3dprint: "Impressió 3D (FDM)",
    sk_item_cnc: "Mecanitzat &amp; Tall CNC (2 eixos i 2.5D)",

    sk_panel2_title: "Metodologia Industrial &amp; IA",
    sk_row2_1_title: "Metodologia Industrial",
    sk_row2_2_title: "IA &amp; Eines Digitals",

    sk_lang_title: "Idiomes &amp; Certificació",
    sk_lang_ca: "Natiu",
    sk_lang_es: "Natiu",
    sk_lang_en: "B2 First Certificate (Cambridge English)",
    contact_heading: "Contacte",
    contact_desc: "Tens un projecte o iniciativa d'enginyeria on vulguis sumar? Parlem-ne.",
    footer_rights: "© 2026 Roger Fígols Soler · Enginyer Industrial & Disseny de Producte",
    back_to_top: "Dalt ↑",
    modal_title: "Descarregar CV en PDF",
    modal_btn_ca: "Currículum en Català",
    modal_btn_es: "Currículum en Castellà",
    modal_btn_en: "Currículum en Anglès"
  },
  es: {
    hero_title_1: "Ingeniero Industrial",
    hero_title_2: "Ingeniero de Diseño Industrial y Desarrollo de Producto",
    hero_bio: "<strong>Ingeniero de Producto</strong> con doble titulación en Diseño Industrial e Ingeniería Industrial por la UPC. Especializado en el desarrollo integral de producto físico (CAD, electrónica PCB y prototipado rápido) y en la aceleración de procesos mediante Inteligencia Artificial.",
    btn_cv: "Descargar CV (PDF)",
    btn_projects: "Explorar Proyectos",

    // Timeline Items
    t1_date: "Enero 2027",
    t1_role: "Graduado en Máster en Ingeniería Industrial",
    t1_sub: "Especialidad en Organización Industrial",
    t1_drawer: "<strong>Ubicación</strong>: Terrassa (UPC ESEIAAT).<br><br>Profundización avanzada en gestión integral de proyectos industriales, cálculo estructural, optimización de plantas, sistemas energéticos e integración tecnológica. Desarrollo en curso del Trabajo de Fin de Máster (TFM).",

    t2_date: "Feb 2026 – Actualidad",
    t2_role: "Desarrollo de Producto",
    t2_company: "Proyectos Propios",
    t2_drawer: "<li><strong>Quicklap</strong>: Desarrollo de un dispositivo de control para simulación de conducción: diseño integral desde el modelado CAD hasta la placa electrónica (PCB) y prototipado 3D.</li><li><strong>Automatización de procesos con IA</strong>: Desarrollo e integración de flujos de trabajo automatizados con IA para empresas.</li><li><strong>CALYU</strong>: Concepción y desarrollo de una aplicación móvil para la convivencia en pisos compartidos, impulsada con el apoyo del programa Emprèn UPC.</li>",

    t3_date: "Mayo 2025 – Feb 2026",
    t3_role: "Ingeniero Lean (Prácticas)",
    t3_drawer: "<li><strong>Metodologías Lean Manufacturing &amp; 5S</strong>: Implementación práctica de herramientas de organización, estandarización y eficiencia operativa directamente en línea de producción.</li><li><strong>Optimización de procesos</strong>: Análisis de cuellos de botella y desperdicios para elevar la productividad respetando los estándares de calidad artesanal.</li><li><strong>Trabajo interdisciplinario</strong>: Coordinación transversal diaria con los equipos de producción, mantenimiento, control de calidad y operarios de línea para aplicar mejoras operativas duraderas.</li><li><strong>Automatización de procesos &amp; IA (Iniciativa propia)</strong>: Desarrollo en paralelo de una herramienta basada en macros e IA para generar documentación técnica recurrente con un solo clic, reduciendo el tiempo dedicado a la tarea en un 75%.</li>",

    t4_date: "Septiembre 2024",
    t4_role: "Graduado en Ingeniería de Diseño Industrial y Desarr. de Producto",
    t4_drawer: "<strong>Ubicación</strong>: Terrassa (Universitat Politècnica de Catalunya).<br><br>Formación troncal completa de 4 años (2020–2024) que fusiona ingeniería mecánica, modelado 3D CAD/CAM (SolidWorks), selección de materiales plásticos y metálicos, procesos de manufactura, ergonomía, diseño para fabricación (DFM) y prototipado rápido.",

    t5_date: "Septiembre 2024",
    t5_role: "Presentación TFG: CarGo (Matrícula de Honor)",
    t5_sub: "Plataforma de logística colaborativa",
    t5_drawer: "<li><strong>Calificación &amp; Reconocimiento</strong>: Galardonado con <strong>Matrícula de Honor</strong> por el tribunal de evaluación de la UPC (Terrassa) por su viabilidad técnica, impacto ambiental reduciendo emisiones de CO₂ y optimización de costes logísticos.</li><li><strong>Concepción y modelo de negocio</strong>: Plataforma de crowdshipping que aprovecha los desplazamientos habituales para transportar paquetería a distancias medias a través de red de puntos de conveniencia.</li>",
    t5_action: "Ver detalles en Proyectos Destacados ↓",

    t6_date: "Sep 2023 – Ene 2024",
    t6_role: "Ingeniero de Producto (Prácticas)",
    t6_drawer: "<li><strong>Modelado 3D &amp; Delineación CAD</strong>: Generación, revisión y optimización de planos técnicos de fabricación mediante SolidWorks.</li><li><strong>Enlace técnico &amp; Procesos</strong>: Comunicación directa con equipos de procesos y oficina técnica para adaptar los diseños a los requerimientos de producción y necesidad de cliente.</li>",

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
    p1_cat: "Proyecto Personal / App",
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

    // Skills, Contact, Footer, Modal
    skills_heading: "Competencias",
    sk_panel1_title: "Diseño Técnico &amp; Fabricación",
    sk_row1_1_title: "CAD / CAM &amp; Diseño Técnico",
    sk_row1_2_title: "Fabricación &amp; Taller",
    sk_item_3dprint: "Impresión 3D (FDM)",
    sk_item_cnc: "Mecanizado &amp; Corte CNC (2 ejes y 2.5D)",

    sk_panel2_title: "Metodología Industrial &amp; IA",
    sk_row2_1_title: "Metodología Industrial",
    sk_row2_2_title: "IA &amp; Herramientas Digitales",

    sk_lang_title: "Idiomas &amp; Certificación",
    sk_lang_ca: "Nativo",
    sk_lang_es: "Nativo",
    sk_lang_en: "B2 First Certificate (Cambridge English)",
    contact_heading: "Contacto",
    contact_desc: "¿Tienes un proyecto o iniciativa de ingeniería donde sumar? Hablemos.",
    footer_rights: "© 2026 Roger Fígols Soler · Ingeniero Industrial y Diseño de Producto",
    back_to_top: "Arriba ↑",
    modal_title: "Descargar CV en PDF",
    modal_btn_ca: "Currículum en Catalán",
    modal_btn_es: "Currículum en Castellano",
    modal_btn_en: "Currículum en Inglés"
  },
  en: {
    hero_title_1: "Industrial Engineer",
    hero_title_2: "Industrial Design & Product Development Engineer",
    hero_bio: "<strong>Product Engineer</strong> with a dual degree in Industrial Design and Industrial Engineering from UPC. Specialized in end-to-end physical product development (CAD, PCB electronics, and rapid prototyping) and AI-driven process acceleration.",
    btn_cv: "Download CV (PDF)",
    btn_projects: "Explore Projects",

    // Timeline Items
    t1_date: "January 2027",
    t1_role: "Master's Degree in Industrial Engineering",
    t1_sub: "Major in Industrial Management",
    t1_drawer: "<strong>Location</strong>: Terrassa (UPC ESEIAAT).<br><br>Advanced focus on industrial project management, structural analysis, plant optimization, energy systems, and technology integration. Ongoing Master's Thesis (TFM).",

    t2_date: "Feb 2026 – Present",
    t2_role: "Product Development",
    t2_company: "Personal Projects",
    t2_drawer: "<li><strong>Quicklap</strong>: Development of a sim-racing driving control device: end-to-end design from CAD modeling to electronic PCB layout and 3D prototyping.</li><li><strong>AI Process Automation</strong>: Development and integration of automated AI workflows for business operations.</li><li><strong>CALYU</strong>: Product conception and end-to-end development of a mobile app for shared apartment living, accelerated by the Emprèn UPC startup program.</li>",

    t3_date: "May 2025 – Feb 2026",
    t3_role: "Lean Engineer (Internship)",
    t3_drawer: "<li><strong>Lean Manufacturing &amp; 5S</strong>: Implemented workplace organization, process standardization, and operational efficiency methods directly on the assembly floor.</li><li><strong>Process Optimization</strong>: Analyzed bottlenecks and eliminated waste to boost throughput while safeguarding high artisanal luxury quality standards.</li><li><strong>Cross-functional Collaboration</strong>: Partnered daily across production, maintenance, quality control, and assembly-line operators to implement lasting operational improvements.</li><li><strong>Process Automation &amp; AI (Proactive Initiative)</strong>: Concurrently engineered an internal automation tool powered by macros and AI to generate repetitive technical documentation in a single click, cutting execution time by 75%.</li>",

    t4_date: "September 2024",
    t4_role: "B.Sc. in Industrial Design &amp; Product Development Engineering",
    t4_drawer: "<strong>Location</strong>: Terrassa (Universitat Politècnica de Catalunya).<br><br>Comprehensive 4-year curriculum (2020–2024) combining mechanical engineering, 3D CAD/CAM (SolidWorks), plastics and metals material selection, manufacturing processes, ergonomics, design for manufacturing (DFM), and rapid prototyping.",

    t5_date: "September 2024",
    t5_role: "Bachelor Thesis: CarGo (Honors Mark)",
    t5_sub: "Crowdshipping logistics platform",
    t5_drawer: "<li><strong>Distinction &amp; Honors</strong>: Awarded <strong>Matrícula d'Honor (Highest Honors)</strong> by the UPC faculty committee for technical rigor, CO₂ emissions reduction model, and supply chain cost efficiency.</li><li><strong>Conception &amp; Business Architecture</strong>: Medium-distance crowdshipping model leveraging recurring everyday commutes to deliver parcels via localized drop-off and pick-up hubs.</li>",
    t5_action: "View details in Featured Projects ↓",

    t6_date: "Sep 2023 – Jan 2024",
    t6_role: "Product Engineer (Internship)",
    t6_drawer: "<li><strong>3D CAD Modeling &amp; Drafting</strong>: Generated, reviewed, and optimized 2D/3D fabrication drawings in SolidWorks.</li><li><strong>Technical Liaison &amp; Processes</strong>: Direct communication with process teams and technical office to adapt designs to production requirements and customer needs.</li>",

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
    p1_cat: "Personal Project / App",
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

    // Skills, Contact, Footer, Modal
    skills_heading: "Skills &amp; Toolkit",
    sk_panel1_title: "Technical Design &amp; Manufacturing",
    sk_row1_1_title: "CAD / CAM &amp; Technical Design",
    sk_row1_2_title: "Prototyping &amp; Workshop",
    sk_item_3dprint: "3D Printing (FDM)",
    sk_item_cnc: "CNC Machining &amp; Cutting (2-Axis &amp; 2.5D)",

    sk_panel2_title: "Industrial Methodology &amp; AI",
    sk_row2_1_title: "Industrial Methodologies",
    sk_row2_2_title: "AI &amp; Digital Tools",

    sk_lang_title: "Languages &amp; Certification",
    sk_lang_ca: "Native",
    sk_lang_es: "Native",
    sk_lang_en: "B2 First Certificate (Cambridge English)",
    contact_heading: "Contact",
    contact_desc: "Have an engineering challenge or initiative you'd like to collaborate on? Let's talk.",
    footer_rights: "© 2026 Roger Fígols Soler · Industrial & Product Design Engineer",
    back_to_top: "Top ↑",
    modal_title: "Download CV in PDF",
    modal_btn_ca: "Curriculum in Catalan",
    modal_btn_es: "Curriculum in Spanish",
    modal_btn_en: "Resume in English"
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

  // URL param override (?lang=es or ?lang=en) or restore saved language or default to 'ca'
  let initialLang = 'ca';
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && translations[langParam]) {
      initialLang = langParam;
    } else {
      const saved = localStorage.getItem('roger_portfolio_lang');
      if (saved && translations[saved]) {
        initialLang = saved;
      }
    }
  } catch (e) {}

  if (initialLang !== 'ca') {
    switchLanguage(initialLang);
  }
}

function initHashScroll() {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
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
