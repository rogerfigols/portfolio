// ==========================================================================
// ROGER FÍGOLS SOLER — PROJECT PAGES MULTILINGUAL SWITCHER (CA / ES / EN)
// Synchronized with index.html via localStorage ('roger_portfolio_lang') and ?lang=
// ==========================================================================

(function () {
  const common = {
    ca: {
      nav_back: "Tornar a Projectes",
      footer_all: "Tots els projectes",
      nav_hotel_prev: "← Reforma Hotel Estel",
      nav_hotel_next: "Reforma Hotel Estel →",
      sec_concept: "El Concepte",
      sec_result: "Resultat",
      sec_presentation: "Presentació",
      btn_behance: "Veure projecte a Behance"
    },
    es: {
      nav_back: "Volver a Proyectos",
      footer_all: "Todos los proyectos",
      nav_hotel_prev: "← Reforma Hotel Estel",
      nav_hotel_next: "Reforma Hotel Estel →",
      sec_concept: "El Concepto",
      sec_result: "Resultado",
      sec_presentation: "Presentación",
      btn_behance: "Ver proyecto en Behance"
    },
    en: {
      nav_back: "Back to Projects",
      footer_all: "All projects",
      nav_hotel_prev: "← Hotel Estel Renovation",
      nav_hotel_next: "Hotel Estel Renovation →",
      sec_concept: "The Concept",
      sec_result: "Outcome",
      sec_presentation: "Presentation",
      btn_behance: "View project on Behance"
    }
  };

  const projects = {
    quicklap: {
      ca: {
        page_title: "QuickLap – Roger Fígols Soler",
        hero_eyebrow: "PROJECTE PROPI · 2026",
        hero_summary: "Controlador compacte de sim-racing per a escriptori: direcció analògica i pedals progressius llestos en segons, sense muntatges complexos.",
        spec1_l: "Rol",
        spec1_v: "Disseny Integral",
        spec2_l: "Hardware",
        spec3_l: "Àmbit",
        spec3_v: "Sim-Racing / Producte",
        spec4_l: "Web",
        concept_lead: "Gaudir de la simulació de conducció amb precisió real sense necessitat d'un cockpit ni temps de muntatge.",
        concept_copy: "QuickLap neix amb l'objectiu de condensar el control analògic en un dispositiu d'escriptori net i immediat. El desenvolupament cobreix el cicle complet de producte: des de l'ergonomia i el modelat mecànic CAD fins al disseny de la placa electrònica PCB i els prototips funcionals impresos en 3D.",
        triad_1_t: "Disseny Mecànic CAD",
        triad_1_c: "Geometria compacta, allotjaments interns i ergonomia de conducció modelada íntegrament amb SolidWorks.",
        triad_2_t: "Electrònica PCB",
        triad_2_c: "Disseny d'esquemàtic i rutatge de placa electrònica a mida amb KiCad per a lectura precisa d'entrades analògiques.",
        triad_3_t: "Prototipatge 3D",
        triad_3_c: "Iteració ràpida en impressió 3D FDM per validar toleràncies mecàniques, recorreguts i muntatge funcional.",
        sec_videos: "Evolució dels Prototips",
        vid1_t: "Prototip 01 · Primera versió funcional",
        vid1_c: "Validació inicial de mecànica, sensors i resposta en simulador.",
        vid2_t: "Prototip 02 · Segona iteració i demostració",
        vid2_c: "Evolució ergonòmica, electrònica integrada i prova real en conducció.",
        sec_status: "Estat Actual",
        closing_copy: "Projecte en fase de desenvolupament actiu, combinant validació física de prototips, calibratge de sensors i millores iteratives de producte.",
        btn_visit: "Visitar quicklap.pro"
      },
      es: {
        page_title: "QuickLap – Roger Fígols Soler",
        hero_eyebrow: "PROYECTO PROPIO · 2026",
        hero_summary: "Controlador compacto de sim-racing para escritorio: dirección analógica y pedales progresivos listos en segundos, sin montajes complejos.",
        spec1_l: "Rol",
        spec1_v: "Diseño Integral",
        spec2_l: "Hardware",
        spec3_l: "Ámbito",
        spec3_v: "Sim-Racing / Producto",
        spec4_l: "Web",
        concept_lead: "Disfrutar de la simulación de conducción con precisión real sin necesidad de un cockpit ni tiempo de montaje.",
        concept_copy: "QuickLap nace con el objetivo de condensar el control analógico en un dispositivo de escritorio limpio e inmediato. El desarrollo cubre el ciclo completo de producto: desde la ergonomía y el modelado mecánico CAD hasta el diseño de la placa electrónica PCB y los prototipos funcionales impresos en 3D.",
        triad_1_t: "Diseño Mecánico CAD",
        triad_1_c: "Geometría compacta, alojamientos internos y ergonomía de conducción modelada íntegramente en SolidWorks.",
        triad_2_t: "Electrónica PCB",
        triad_2_c: "Diseño de esquemático y rutado de placa electrónica a medida con KiCad para lectura precisa de entradas analógicas.",
        triad_3_t: "Prototipado 3D",
        triad_3_c: "Iteración rápida en impresión 3D FDM para validar tolerancias mecánicas, recorridos y montaje funcional.",
        sec_videos: "Evolución de los Prototipos",
        vid1_t: "Prototipo 01 · Primera versión funcional",
        vid1_c: "Validación inicial de mecánica, sensores y respuesta en simulador.",
        vid2_t: "Prototipo 02 · Segunda iteración y demostración",
        vid2_c: "Evolución ergonómica, electrónica integrada y prueba real en conducción.",
        sec_status: "Estado Actual",
        closing_copy: "Proyecto en fase de desarrollo activo, combinando validación física de prototipos, calibración de sensores y mejoras iterativas de producto.",
        btn_visit: "Visitar quicklap.pro"
      },
      en: {
        page_title: "QuickLap – Roger Fígols Soler",
        hero_eyebrow: "PERSONAL PROJECT · 2026",
        hero_summary: "Compact desktop sim-racing controller: analog steering and progressive pedals ready in seconds, without complex rig setups.",
        spec1_l: "Role",
        spec1_v: "End-to-End Design",
        spec2_l: "Hardware",
        spec3_l: "Domain",
        spec3_v: "Sim-Racing / Product",
        spec4_l: "Website",
        concept_lead: "Enjoy driving simulation with true analog precision without a dedicated cockpit or setup time.",
        concept_copy: "QuickLap was created to pack analog racing control into a clean, instant-setup desktop device. Development spans the full product cycle: from ergonomics and mechanical CAD modeling to custom PCB layout and 3D-printed functional prototypes.",
        triad_1_t: "Mechanical CAD Design",
        triad_1_c: "Compact geometry, internal housings, and driving ergonomics modeled end-to-end in SolidWorks.",
        triad_2_t: "PCB Electronics",
        triad_2_c: "Custom schematic design and PCB layout in KiCad for accurate analog input acquisition.",
        triad_3_t: "3D Prototyping",
        triad_3_c: "Rapid FDM 3D-printing iterations to validate mechanical tolerances, lever travel, and functional assembly.",
        sec_videos: "Prototype Evolution",
        vid1_t: "Prototype 01 · First functional unit",
        vid1_c: "Initial validation of mechanics, sensors, and in-simulator response.",
        vid2_t: "Prototype 02 · Second iteration & demo",
        vid2_c: "Ergonomic refinement, integrated electronics, and live driving test.",
        sec_status: "Current Status",
        closing_copy: "Actively under development, combining physical prototype validation, sensor calibration, and iterative product refinement.",
        btn_visit: "Visit quicklap.pro"
      }
    },

    calyu: {
      ca: {
        page_title: "CALYU – Roger Fígols Soler",
        hero_eyebrow: "PROJECTE PERSONAL · EMPRÈN UPC · 2026",
        hero_summary: "Aplicació mòbil per gestionar despeses compartides, tasques domèstiques i convivència en pisos compartits sense friccions.",
        spec1_l: "Programa",
        spec2_l: "Rol",
        spec3_l: "Plataforma",
        spec4_l: "Eines",
        concept_lead: "La manera més senzilla d'organitzar un pis compartit: despeses clares, tasques repartides i gamificació quotidiana.",
        concept_copy: "Impulsada dins el programa d'emprenedoria Emprèn UPC, l'aplicació es va validar seguint la metodologia Lean Startup amb més de 100 primers usuaris. La proposta va ser seleccionada com a finalista per presentar-se al Demo Day Santander X Explorer UPC.",
        feat1_eyebrow: "Pantalla Principal",
        feat1_heading: "Organització diària sense friccions",
        feat1_copy: "Des de la pantalla d'inici cada company indica el seu estat de disponibilitat, llança preguntes ràpides de Sí o No i consulta el calendari setmanal del pis. Tot pensat per evitar malentesos quotidians en un sol cop d'ull.",
        feat2_eyebrow: "Validació Real",
        feat2_heading: "Publicada en accés anticipat a Google Play",
        feat2_copy: "L'aplicació va arribar a producció en accés anticipat a Google Play Store per recollir feedback real de pisos d'estudiants i iterar directament sobre l'ús diari.",
        sec_impact: "Impacte",
        closing_copy: "Desenvolupada des de la definició funcional i el disseny UX fins al llançament inicial, consolidant-se com a projecte finalista al Demo Day Santander X Explorer UPC."
      },
      es: {
        page_title: "CALYU – Roger Fígols Soler",
        hero_eyebrow: "PROYECTO PERSONAL · EMPRÈN UPC · 2026",
        hero_summary: "Aplicación móvil para gestionar gastos compartidos, tareas domésticas y convivencia en pisos compartidos sin fricciones.",
        spec1_l: "Programa",
        spec2_l: "Rol",
        spec3_l: "Plataforma",
        spec4_l: "Herramientas",
        concept_lead: "La forma más sencilla de organizar un piso compartido: gastos claros, tareas repartidas y gamificación cotidiana.",
        concept_copy: "Impulsada dentro del programa de emprendimiento Emprèn UPC, la aplicación se validó siguiendo la metodología Lean Startup con más de 100 primeros usuarios. La propuesta fue seleccionada como finalista para presentarse en el Demo Day Santander X Explorer UPC.",
        feat1_eyebrow: "Pantalla Principal",
        feat1_heading: "Organización diaria sin fricciones",
        feat1_copy: "Desde la pantalla de inicio cada compañero indica su estado de disponibilidad, lanza preguntas rápidas de Sí o No y consulta el calendario semanal del piso. Todo pensado para evitar malentendidos cotidianos de un vistazo.",
        feat2_eyebrow: "Validación Real",
        feat2_heading: "Publicada en acceso anticipado en Google Play",
        feat2_copy: "La aplicación llegó a producción en acceso anticipado en Google Play Store para recoger feedback real de pisos de estudiantes e iterar directamente sobre el uso diario.",
        sec_impact: "Impacto",
        closing_copy: "Desarrollada desde la definición funcional y el diseño UX hasta el lanzamiento inicial, consolidándose como proyecto finalista en el Demo Day Santander X Explorer UPC."
      },
      en: {
        page_title: "CALYU – Roger Fígols Soler",
        hero_eyebrow: "PERSONAL PROJECT · EMPRÈN UPC · 2026",
        hero_summary: "Mobile app for managing shared expenses, household chores, and frictionless roommate coliving.",
        spec1_l: "Program",
        spec2_l: "Role",
        spec3_l: "Platform",
        spec4_l: "Tools",
        concept_lead: "The simplest way to organize a shared flat: transparent expenses, fair chores, and everyday gamification.",
        concept_copy: "Accelerated within the Emprèn UPC entrepreneurship program, the app was validated following Lean Startup methodology with over 100 early users and selected as a finalist for the Santander X Explorer UPC Demo Day.",
        feat1_eyebrow: "Home Screen",
        feat1_heading: "Frictionless daily coordination",
        feat1_copy: "From the home screen, each roommate sets their availability status, sends quick Yes/No polls, and checks the flat's weekly calendar — designed to prevent everyday misunderstandings at a glance.",
        feat2_eyebrow: "Real-World Validation",
        feat2_heading: "Released in early access on Google Play",
        feat2_copy: "Shipped to production in early access on Google Play Store to gather real feedback from student flats and iterate directly from daily usage.",
        sec_impact: "Impact",
        closing_copy: "Built from functional definition and UX architecture through initial launch, earning finalist recognition at the Santander X Explorer UPC Demo Day."
      }
    },

    cargo: {
      ca: {
        page_title: "CarGo – Roger Fígols Soler",
        hero_eyebrow: "TREBALL DE FI DE GRAU · 2024",
        hero_summary: "Plataforma de logística col·laborativa que aprofita els desplaçaments quotidians per enviar paquets de forma més econòmica i sostenible.",
        spec1_l: "Distinció",
        spec1_v: "Matrícula d'Honor",
        spec2_l: "Institució",
        spec3_l: "Projecte",
        spec3_v: "Treball de Fi de Grau",
        spec4_l: "Eines",
        concept_lead: "Connectar persones que necessiten enviar un paquet amb conductors que ja fan el mateix trajecte cada dia.",
        concept_copy: "En lloc d'afegir més furgonetes de repartiment, CarGo utilitza comerços de barri com a punts de recollida i entrega. Així es redueixen els costos d'enviament, s'eliminen els lliuraments fallits i es disminueix la petjada de CO₂.",
        screens_caption: "Arquitectura de pantalles en Figma: cerca de trajectes, ofertes, punts de recollida i validació per QR",
        feat_eyebrow: "Experiència i Identitat",
        feat_heading: "Flux simple en 3 passos",
        feat_copy: "L'usuari indica les dimensions del paquet i selecciona l'origen i destí en un mapa interactiu que suggereix transportistes compatibles al moment. La recepció es valida amb un codi QR segur als punts d'entrega locals, sota una identitat visual neta i immediata.",
        closing_copy: "Defensat davant del tribunal de la UPC ESEIAAT el setembre de 2024 i guardonat amb Matrícula d'Honor per la seva viabilitat econòmica, simplicitat d'ús i impacte ambiental."
      },
      es: {
        page_title: "CarGo – Roger Fígols Soler",
        hero_eyebrow: "TRABAJO DE FIN DE GRADO · 2024",
        hero_summary: "Plataforma de logística colaborativa que aprovecha los desplazamientos cotidianos para enviar paquetes de forma más económica y sostenible.",
        spec1_l: "Distinción",
        spec1_v: "Matrícula de Honor",
        spec2_l: "Institución",
        spec3_l: "Proyecto",
        spec3_v: "Trabajo de Fin de Grado",
        spec4_l: "Herramientas",
        concept_lead: "Conectar personas que necesitan enviar un paquete con conductores que ya realizan el mismo trayecto cada día.",
        concept_copy: "En lugar de añadir más furgonetas de reparto, CarGo utiliza comercios de barrio como puntos de recogida y entrega. Así se reducen los costes de envío, se eliminan las entregas fallidas y se disminuye la huella de CO₂.",
        screens_caption: "Arquitectura de pantallas en Figma: búsqueda de trayectos, ofertas, puntos de recogida y validación por QR",
        feat_eyebrow: "Experiencia e Identidad",
        feat_heading: "Flujo simple en 3 pasos",
        feat_copy: "El usuario indica las dimensiones del paquete y selecciona el origen y destino en un mapa interactivo que sugiere transportistas compatibles al momento. La recepción se valida con un código QR seguro en los puntos de entrega locales, bajo una identidad visual limpia e inmediata.",
        closing_copy: "Defendido ante el tribunal de la UPC ESEIAAT en septiembre de 2024 y galardonado con Matrícula de Honor por su viabilidad económica, simplicidad de uso e impacto ambiental."
      },
      en: {
        page_title: "CarGo – Roger Fígols Soler",
        hero_eyebrow: "BACHELOR'S THESIS · 2024",
        hero_summary: "Collaborative crowdshipping platform leveraging everyday commutes to deliver parcels more affordably and sustainably.",
        spec1_l: "Distinction",
        spec1_v: "Highest Honors (Matrícula d'Honor)",
        spec2_l: "Institution",
        spec3_l: "Project",
        spec3_v: "Bachelor's Thesis",
        spec4_l: "Tools",
        concept_lead: "Connecting senders with everyday commuters who already drive the same route.",
        concept_copy: "Instead of adding more delivery vans, CarGo turns neighborhood shops into convenient pick-up and drop-off hubs—cutting shipping costs, eliminating missed deliveries, and reducing CO₂ emissions.",
        screens_caption: "Figma screen architecture: route search, courier offers, local hubs, and QR parcel verification",
        feat_eyebrow: "UX & Brand Identity",
        feat_heading: "Simple 3-step delivery flow",
        feat_copy: "Users enter parcel dimensions and pick origin and destination on an interactive map that matches compatible drivers in real time. Handover is verified via a secure QR code at local pickup points, backed by a clean visual identity.",
        closing_copy: "Defended before the UPC ESEIAAT thesis board in September 2024 and awarded Highest Honors (Matrícula d'Honor) for economic viability, usability, and environmental impact."
      }
    },

    cup3d: {
      ca: {
        page_title: "Cup3D – Roger Fígols Soler",
        hero_eyebrow: "PROTOTIPATGE RÀPID · TALLER PROPI",
        hero_summary: "Galeria de peces funcionals, utillatges industrials i projectes d'enginyeria inversa fabricats mitjançant impressió 3D FDM.",
        spec1_l: "Tecnologia",
        spec1_v: "Impressió 3D (FDM)",
        spec2_l: "Material",
        spec3_l: "Enfocament",
        spec3_v: "Peces Funcionals &amp; Utillatges",
        spec4_l: "CAD",
        concept_lead: "Del modelat paramètric a la peça física en poques hores per validar ajustos, toleràncies i resistència mecànica.",
        concept_copy: "Espai dedicat a prototips propis, utillatges a mida i peces d'enginyeria inversa orientades a resoldre necessitats pràctiques reals. Cada disseny optimitza l'orientació d'impressió, els roscats funcionals i els encaixos mecànics.",
        sec_catalog: "Catàleg de Peces",
        c1_t: "Utillatge per a robot",
        c1_m: "Adaptador dissenyat a mida per a braç robòtic",
        c2_t: "Prototip físic",
        c2_m: "Assaig d'encaix mecànic per a assignatura UPC",
        c3_t: "Carcassa de mòbil a mida",
        c3_m: "Funda personalitzada amb acabat texturitzat",
        c4_t: "Prototip robòtic en proves",
        c4_m: "Integració d'accessori sobre braç robòtic",
        c5_t: "Utillatge per a robot",
        c5_m: "Impressió de peça amb suports orgànics",
        c6_t: "Caragols mètrics funcionals",
        c6_m: "Enginyeria inversa i validació de roscats",
        c7_t: "Circuit Nürburgring",
        c7_m: "Silueta decorativa en dues peces",
        c8_t: "Clauer personalitzat",
        c8_m: "Acabat texturitzat de precisió"
      },
      es: {
        page_title: "Cup3D – Roger Fígols Soler",
        hero_eyebrow: "PROTOTIPADO RÁPIDO · TALLER PROPIO",
        hero_summary: "Galería de piezas funcionales, utillajes industriales y proyectos de ingeniería inversa fabricados mediante impresión 3D FDM.",
        spec1_l: "Tecnología",
        spec1_v: "Impresión 3D (FDM)",
        spec2_l: "Material",
        spec3_l: "Enfoque",
        spec3_v: "Piezas Funcionales y Utillajes",
        spec4_l: "CAD",
        concept_lead: "Del modelado paramétrico a la pieza física en pocas horas para validar ajustes, tolerancias y resistencia mecánica.",
        concept_copy: "Espacio dedicado a prototipos propios, utillajes a medida y piezas de ingeniería inversa orientadas a resolver necesidades prácticas reales. Cada diseño optimiza la orientación de impresión, las roscas funcionales y los encajes mecánicos.",
        sec_catalog: "Catálogo de Piezas",
        c1_t: "Utillaje para robot",
        c1_m: "Adaptador diseñado a medida para brazo robótico",
        c2_t: "Prototipo físico",
        c2_m: "Ensayo de encaje mecánico para asignatura UPC",
        c3_t: "Carcasa de móvil a medida",
        c3_m: "Funda personalizada con acabado texturizado",
        c4_t: "Prototipo robótico en pruebas",
        c4_m: "Integración de accesorio sobre brazo robótico",
        c5_t: "Utillaje para robot",
        c5_m: "Impresión de pieza con soportes orgánicos",
        c6_t: "Tornillos métricos funcionales",
        c6_m: "Ingeniería inversa y validación de roscas",
        c7_t: "Circuito Nürburgring",
        c7_m: "Silueta decorativa en dos piezas",
        c8_t: "Llavero personalizado",
        c8_m: "Acabado texturizado de precisión"
      },
      en: {
        page_title: "Cup3D – Roger Fígols Soler",
        hero_eyebrow: "RAPID PROTOTYPING · IN-HOUSE WORKSHOP",
        hero_summary: "Showcase of functional parts, industrial tooling, and reverse-engineering projects produced via FDM 3D printing.",
        spec1_l: "Technology",
        spec1_v: "3D Printing (FDM)",
        spec2_l: "Material",
        spec3_l: "Focus",
        spec3_v: "Functional Parts &amp; Tooling",
        spec4_l: "CAD",
        concept_lead: "From parametric CAD to physical parts within hours to validate fits, tolerances, and mechanical strength.",
        concept_copy: "Dedicated workspace for custom prototypes, bespoke fixtures, and reverse-engineered parts built to solve practical engineering needs—optimizing print orientation, printed threads, and mechanical fits.",
        sec_catalog: "Parts Catalog",
        c1_t: "Robot tooling",
        c1_m: "Custom adapter designed for a robotic arm",
        c2_t: "Physical prototype",
        c2_m: "Mechanical fit test for a UPC engineering course",
        c3_t: "Custom phone case",
        c3_m: "Bespoke protective shell with textured finish",
        c4_t: "Robotic prototype in testing",
        c4_m: "Accessory integration mounted on a robotic arm",
        c5_t: "Robot tooling",
        c5_m: "Component printed using organic tree supports",
        c6_t: "Functional metric fasteners",
        c6_m: "Reverse engineering and printed thread validation",
        c7_t: "Nürburgring track",
        c7_m: "Two-piece decorative silhouette",
        c8_t: "Custom keychain",
        c8_m: "Fine textured surface finish"
      }
    },

    "door-stopper": {
      ca: {
        page_title: "Door Stopper – Roger Fígols Soler",
        hero_eyebrow: "CONCURS DE DISSENY DE PRODUCTE",
        hero_summary: "Concepció d'un topall de porta minimalista i delineació completa de plànols tècnics orientats a fabricació.",
        spec1_l: "Context",
        spec1_v: "Concurs de Disseny",
        spec2_l: "Enfocament",
        spec3_l: "Eines",
        spec4_l: "Entregable",
        spec4_v: "Plànols Tècnics",
        concept_lead: "Reduir un objecte quotidià a la seva essència geomètrica, garantint una fabricació senzilla i una absorció d'impactes duradora.",
        concept_copy: "El conjunt combina un cos principal sòlid i compacte amb una anella perimetral d'elastòmer dissenyada per protegir les fulles de les portes. L'arquitectura de quatre components facilita el muntatge, la fixació oculta a terra i la producció en sèrie.",
        blueprint_caption: "Plànol tècnic de fabricació i desglossament de components (1–4)",
        feat_eyebrow: "Enginyeria de Detall",
        feat_heading: "Detall constructiu i muntatge",
        feat_copy: "Cada cota i tolerància s'ha definit directament a SolidWorks pensant en processos estàndard de mecanitzat i emmotllament. L'objectiu és evitar operacions secundàries innecessàries i assegurar un encaix net sense joc mecànic.",
        closing_copy: "Proposta completa desenvolupada amb documentació tècnica de producció, vistes seccionades i llista de materials preparada per a industrialització."
      },
      es: {
        page_title: "Door Stopper – Roger Fígols Soler",
        hero_eyebrow: "CONCURSO DE DISEÑO DE PRODUCTO",
        hero_summary: "Concepción de un tope de puerta minimalista y delineación completa de planos técnicos orientados a fabricación.",
        spec1_l: "Contexto",
        spec1_v: "Concurso de Diseño",
        spec2_l: "Enfoque",
        spec3_l: "Herramientas",
        spec4_l: "Entregable",
        spec4_v: "Planos Técnicos",
        concept_lead: "Reducir un objeto cotidiano a su esencia geométrica, garantizando una fabricación sencilla y una absorción de impactos duradera.",
        concept_copy: "El conjunto combina un cuerpo principal sólido y compacto con una anilla perimetral de elastómero diseñada para proteger las hojas de las puertas. La arquitectura de cuatro componentes facilita el montaje, la fijación oculta al suelo y la producción en serie.",
        blueprint_caption: "Plano técnico de fabricación y desglose de componentes (1–4)",
        feat_eyebrow: "Ingeniería de Detalle",
        feat_heading: "Detalle constructivo y montaje",
        feat_copy: "Cada cota y tolerancia se ha definido directamente en SolidWorks pensando en procesos estándar de mecanizado y moldeo. El objetivo es evitar operaciones secundarias innecesarias y asegurar un encaje limpio sin juego mecánico.",
        closing_copy: "Propuesta completa desarrollada con documentación técnica de producción, vistas seccionadas y lista de materiales preparada para industrialización."
      },
      en: {
        page_title: "Door Stopper – Roger Fígols Soler",
        hero_eyebrow: "PRODUCT DESIGN COMPETITION",
        hero_summary: "Minimalist door stopper concept and complete manufacturing blueprint drafting.",
        spec1_l: "Context",
        spec1_v: "Design Competition",
        spec2_l: "Approach",
        spec3_l: "Tools",
        spec4_l: "Deliverable",
        spec4_v: "Technical Blueprints",
        concept_lead: "Reducing an everyday object to its geometric essence while ensuring simple manufacturing and durable impact absorption.",
        concept_copy: "The assembly pairs a compact rigid core with a perimeter elastomer bumper ring to protect doors from impact. Its four-part architecture simplifies assembly, concealed floor mounting, and mass production.",
        blueprint_caption: "Manufacturing blueprint and component breakdown (1–4)",
        feat_eyebrow: "Detail Engineering",
        feat_heading: "Construction & assembly detail",
        feat_copy: "Every dimension and tolerance was defined in SolidWorks for standard machining and molding processes—eliminating secondary operations and ensuring a clean, zero-play fit.",
        closing_copy: "Complete design package featuring production drawings, section views, and a bill of materials ready for industrialization."
      }
    },

    "breville-mixer": {
      ca: {
        page_title: "Breville Mixer – Roger Fígols Soler",
        hero_eyebrow: "UPC ESEIAAT · DISSENY GRÀFIC &amp; UX",
        hero_summary: "Disseny gràfic i experiència d'usuari d'un manual d'instruccions pensat per facilitar la comprensió i l'ús quotidià d'una màquina batedora.",
        spec1_l: "Institució",
        spec2_l: "Disciplina",
        spec2_v: "Disseny Gràfic &amp; UX",
        spec3_l: "Entregable",
        spec3_v: "Manual d'Instruccions",
        spec4_l: "Eines",
        spec4_v: "Illustrator · Disseny Editorial",
        concept_lead: "Transformar un manual tècnic d'electrodomèstic en una guia visual clara, jerarquitzada i immediata per a l'usuari final.",
        concept_copy: "El projecte aplica principis de disseny gràfic i experiència d'usuari per fer comprensibles els controls, els accessoris i les funcions d'una batedora Breville sense sobrecarregar el lector. Cada component s'il·lustra mitjançant dibuix vectorial precís i línies d'anotació netes.",
        spread_caption: "Doble pàgina de components: jerarquia visual de controls, bols i accessoris",
        gal1_caption: "Portada del manual d'usuari amb il·lustració lineal",
        gal2_caption: "Detall del desglossament vectorial i microtext explicatiu",
        closing_copy: "Projecte acadèmic orientat a unir el disseny gràfic editorial i l'experiència d'usuari per fer més accessible la documentació tècnica de producte."
      },
      es: {
        page_title: "Breville Mixer – Roger Fígols Soler",
        hero_eyebrow: "UPC ESEIAAT · DISEÑO GRÁFICO &amp; UX",
        hero_summary: "Diseño gráfico y experiencia de usuario de un manual de instrucciones pensado para facilitar la comprensión y el uso cotidiano de una batidora.",
        spec1_l: "Institución",
        spec2_l: "Disciplina",
        spec2_v: "Diseño Gráfico &amp; UX",
        spec3_l: "Entregable",
        spec3_v: "Manual de Instrucciones",
        spec4_l: "Herramientas",
        spec4_v: "Illustrator · Diseño Editorial",
        concept_lead: "Transformar un manual técnico de electrodoméstico en una guía visual clara, jerarquizada e inmediata para el usuario final.",
        concept_copy: "El proyecto aplica principios de diseño gráfico y experiencia de usuario para hacer comprensibles los controles, los accesorios y las funciones de una batidora Breville sin sobrecargar al lector. Cada componente se ilustra mediante dibujo vectorial preciso y líneas de anotación limpias.",
        spread_caption: "Doble página de componentes: jerarquía visual de controles, boles y accesorios",
        gal1_caption: "Portada del manual de usuario con ilustración lineal",
        gal2_caption: "Detalle del desglose vectorial y microtexto explicativo",
        closing_copy: "Proyecto académico orientado a unir el diseño gráfico editorial y la experiencia de usuario para hacer más accesible la documentación técnica de producto."
      },
      en: {
        page_title: "Breville Mixer – Roger Fígols Soler",
        hero_eyebrow: "UPC ESEIAAT · GRAPHIC DESIGN &amp; UX",
        hero_summary: "Graphic design and user experience of an instruction manual crafted to make daily mixer operation clear and intuitive.",
        spec1_l: "Institution",
        spec2_l: "Discipline",
        spec2_v: "Graphic Design &amp; UX",
        spec3_l: "Deliverable",
        spec3_v: "User Instruction Guide",
        spec4_l: "Tools",
        spec4_v: "Illustrator · Editorial Design",
        concept_lead: "Turning a technical appliance manual into a clear, hierarchical, and immediately readable visual guide for end users.",
        concept_copy: "Applying graphic design and UX principles, this guide explains a Breville stand mixer's controls, attachments, and functions without overwhelming the reader—pairing crisp vector linework with clean callout annotations.",
        spread_caption: "Component overview spread: visual hierarchy of controls, bowls, and attachments",
        gal1_caption: "User guide cover featuring technical line-art illustration",
        gal2_caption: "Detail of vector callout breakdown and explanatory microcopy",
        closing_copy: "Academic project bridging editorial graphic design and UX to make technical product documentation genuinely approachable."
      }
    },

    xplore: {
      ca: {
        page_title: "Xplore – Roger Fígols Soler",
        hero_eyebrow: "UPC ESEIAAT · MODELAT 3D &amp; CMF",
        hero_summary: "Presentació de producte per a unes ulleres de drons FPV explorant modelat de superfícies, il·luminació i acabats CMF.",
        spec1_l: "Institució",
        spec2_l: "Disciplina",
        spec2_v: "Modelat 3D &amp; CMF",
        spec3_l: "Producte",
        spec3_v: "Ulleres de Dron FPV",
        spec4_l: "Eines",
        concept_lead: "Explorar la interacció entre carcassa tècnica mat, botons ergonòmics d'alt contrast i ferratges metàl·lics mitjançant renderitzat fotorrealista.",
        concept_copy: "El treball posa el focus en la comunicació visual del producte: definició precisa de línies de partició, comandaments tàctils identificables sense mirar i coherència cromàtica en condicions d'il·luminació d'estudi.",
        gal1_caption: "Tríptic de detall: botonera tàctil, sivella metàl·lica i ergonomia frontal",
        gal2_caption: "Gama de producte i packaging: XCONTROL, XFRAME, XFLY i XVIEW",
        closing_copy: "Estudi complet de representació virtual per a electrònica de consum, cuidant materials compostos, escumes ergonòmiques i reflexos controlats."
      },
      es: {
        page_title: "Xplore – Roger Fígols Soler",
        hero_eyebrow: "UPC ESEIAAT · MODELADO 3D &amp; CMF",
        hero_summary: "Presentación de producto para unas gafas de drones FPV explorando modelado de superficies, iluminación y acabados CMF.",
        spec1_l: "Institución",
        spec2_l: "Disciplina",
        spec2_v: "Modelado 3D &amp; CMF",
        spec3_l: "Producto",
        spec3_v: "Gafas de Dron FPV",
        spec4_l: "Herramientas",
        concept_lead: "Explorar la interacción entre carcasa técnica mate, botones ergonómicos de alto contraste y herrajes metálicos mediante renderizado fotorrealista.",
        concept_copy: "El trabajo pone el foco en la comunicación visual del producto: definición precisa de líneas de partición, mandos táctiles identificables sin mirar y coherencia cromática en condiciones de iluminación de estudio.",
        gal1_caption: "Tríptico de detalle: botonera táctil, hebilla metálica y ergonomía frontal",
        gal2_caption: "Gama de producto y packaging: XCONTROL, XFRAME, XFLY y XVIEW",
        closing_copy: "Estudio completo de representación virtual para electrónica de consumo, cuidando materiales compuestos, espumas ergonómicas y reflejos controlados."
      },
      en: {
        page_title: "Xplore – Roger Fígols Soler",
        hero_eyebrow: "UPC ESEIAAT · 3D MODELING &amp; CMF",
        hero_summary: "Product showcase for FPV drone goggles exploring surface modeling, studio lighting, and CMF finishes.",
        spec1_l: "Institution",
        spec2_l: "Discipline",
        spec2_v: "3D Modeling &amp; CMF",
        spec3_l: "Product",
        spec3_v: "FPV Drone Goggles",
        spec4_l: "Tools",
        concept_lead: "Exploring the interplay between matte technical shells, high-contrast tactile buttons, and brushed metal hardware via photorealistic rendering.",
        concept_copy: "Focused on visual product storytelling: crisp parting lines, blind-tactile controls, and cohesive CMF palette under controlled studio lighting.",
        gal1_caption: "Detail triptych: tactile control buttons, metal buckle, and frontal ergonomics",
        gal2_caption: "Product ecosystem & packaging lineup: XCONTROL, XFRAME, XFLY, and XVIEW",
        closing_copy: "Complete virtual product visualization study for consumer electronics, detailing composite textures, ergonomic foams, and studio reflections."
      }
    },

    "hotel-estel": {
      ca: {
        page_title: "Reforma Hotel Estel – Roger Fígols Soler",
        hero_eyebrow: "TREBALL DE RECERCA · 2019",
        hero_title: "Reforma Hotel Estel",
        hero_summary: "Estudi de viabilitat normativa i redisseny de plànols arquitectònics per elevar la categoria d'un hotel de 2 a 4 estrelles.",
        spec1_l: "Qualificació",
        spec2_l: "Tipus",
        spec2_v: "Treball de Recerca",
        spec3_l: "Objectiu",
        spec3_v: "De 2★ a 4★",
        spec4_l: "Eines",
        spec4_v: "AutoCAD · Normativa",
        concept_lead: "Auditar tota la normativa turística vigent per transformar un edifici existent sense comprometre'n l'estructura principal.",
        concept_copy: "El projecte parteix d'una anàlisi exhaustiva dels requisits legals de superfícies, accessibilitat i serveis per assolir la categoria de quatre estrelles. A partir d'aquests criteris tècnics, es replanteja íntegrament la distribució interior en planta.",
        feat1_eyebrow: "Delineació Arquitectònica",
        feat1_heading: "Redistribució en planta i compliment normatiu",
        feat1_copy: "S'han recalculat les dimensions mínimes d'habitacions, els radis de gir adaptats als banys, l'ampliació de les zones comunes i la integració d'un nou nucli d'ascensor respectant els murs de càrrega originals.",
        feat2_eyebrow: "AutoCAD i Normativa",
        feat2_heading: "Càlcul de superfícies i comparativa d'habitacions",
        feat2_copy: "Mitjançant delineació en AutoCAD i l'aplicació estricta de la normativa turística de 4 estrelles, es va replantejar cada unitat d'allotjament fins a garantir els mínims legals d'habitació (15 m²), bany (4,5 m²) i accessibilitat.",
        closing_copy: "Treball de Recerca qualificat amb un 10 / 10 pel tribunal de Batxillerat, reconeixent el detall tècnic de delineació en AutoCAD i el rigor normatiu aplicat al cas real."
      },
      es: {
        page_title: "Reforma Hotel Estel – Roger Fígols Soler",
        hero_eyebrow: "TRABAJO DE INVESTIGACIÓN · 2019",
        hero_title: "Reforma Hotel Estel",
        hero_summary: "Estudio de viabilidad normativa y rediseño de planos arquitectónicos para elevar la categoría de un hotel de 2 a 4 estrellas.",
        spec1_l: "Calificación",
        spec2_l: "Tipo",
        spec2_v: "Trabajo de Investigación",
        spec3_l: "Objetivo",
        spec3_v: "De 2★ a 4★",
        spec4_l: "Herramientas",
        spec4_v: "AutoCAD · Normativa",
        concept_lead: "Auditar toda la normativa turística vigente para transformar un edificio existente sin comprometer su estructura principal.",
        concept_copy: "El proyecto parte de un análisis exhaustivo de los requisitos legales de superficies, accesibilidad y servicios para alcanzar la categoría de cuatro estrellas. A partir de estos criterios técnicos, se replantea íntegramente la distribución interior en planta.",
        feat1_eyebrow: "Delineación Arquitectónica",
        feat1_heading: "Redistribución en planta y cumplimiento normativo",
        feat1_copy: "Se han recalculado las dimensiones mínimas de habitaciones, los radios de giro adaptados en los baños, la ampliación de las zonas comunes y la integración de un nuevo núcleo de ascensor respetando los muros de carga originales.",
        feat2_eyebrow: "AutoCAD y Normativa",
        feat2_heading: "Cálculo de superficies y comparativa de habitaciones",
        feat2_copy: "Mediante delineación en AutoCAD y la aplicación estricta de la normativa turística de 4 estrellas, se replanteó cada unidad de alojamiento hasta garantizar los mínimos legales de habitación (15 m²), baño (4,5 m²) y accesibilidad.",
        closing_copy: "Trabajo de Investigación calificado con un 10 / 10 por el tribunal de Bachillerato, reconociendo el detalle técnico de delineación en AutoCAD y el rigor normativo aplicado al caso real."
      },
      en: {
        page_title: "Hotel Estel Renovation – Roger Fígols Soler",
        hero_eyebrow: "HIGH SCHOOL RESEARCH THESIS · 2019",
        hero_title: "Hotel Estel Renovation",
        hero_summary: "Regulatory feasibility study and CAD architectural floor-plan redesign to upgrade an existing hotel from 2 to 4 stars.",
        spec1_l: "Grade",
        spec2_l: "Type",
        spec2_v: "Research Thesis",
        spec3_l: "Goal",
        spec3_v: "2★ to 4★ Upgrade",
        spec4_l: "Tools",
        spec4_v: "AutoCAD · Building Code",
        concept_lead: "Auditing hospitality building regulations end-to-end to transform an existing hotel without compromising its load-bearing structure.",
        concept_copy: "Built around a thorough review of legal floor-area, accessibility, and hospitality service requirements for a four-star rating, the entire interior layout was re-engineered on blueprint.",
        feat1_eyebrow: "Architectural Drafting",
        feat1_heading: "Floor-plan redesign & regulatory compliance",
        feat1_copy: "Room dimensions, wheelchair turning radii in bathrooms, expanded common areas, and a new elevator shaft were recalculated while preserving all original load-bearing walls.",
        feat2_eyebrow: "AutoCAD & Regulations",
        feat2_heading: "Area calculations & room comparison",
        feat2_copy: "Using AutoCAD drafting and strict four-star hospitality regulations, every guest unit was redesigned to meet mandatory area minimums—15 m² bedrooms, 4.5 m² bathrooms—and accessibility clearances.",
        closing_copy: "Awarded a perfect 10 / 10 grade by the academic evaluation board in recognition of its AutoCAD drafting precision and real-world regulatory rigor."
      }
    }
  };

  function getInitialLang() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const param = urlParams.get('lang');
      if (param && common[param]) return param;
      const saved = localStorage.getItem('roger_portfolio_lang');
      if (saved && common[saved]) return saved;
    } catch (e) {}
    return 'ca';
  }

  function applyProjectLanguage(lang) {
    if (!common[lang]) return;
    const projectId = document.body.getAttribute('data-project') || '';
    const projectPack = (projects[projectId] && projects[projectId][lang]) || {};
    const dict = { ...common[lang], ...projectPack };

    document.documentElement.lang = lang;
    if (dict.page_title) {
      document.title = dict.page_title;
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.innerHTML = dict[key];
      }
    });

    try {
      localStorage.setItem('roger_portfolio_lang', lang);
    } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        applyProjectLanguage(lang);
      });
    });

    const initial = getInitialLang();
    if (initial !== 'ca') {
      applyProjectLanguage(initial);
    }
  });
})();
