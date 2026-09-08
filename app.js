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
    hero_bio: "<strong>Enginyer amb doble titulació per la UPC</strong>, amb experiència en optimització de processos i metodologia Lean a <strong>Louis Vuitton</strong>, tècnic CAD a <strong>CELO</strong> i desenvolupament de projectes propis (<strong>CALYU</strong>). Amb caràcter emprenedor i visió de producte, treballo especialment bé per projectes, bolcant-m'hi al màxim quan m'apassiona el repte i hi crec fermament. Especialitzat en l'aplicació d'<strong>Intel·ligència Artificial per optimitzar processos</strong>, automatitzant fluxos i accelerant la velocitat d'iteració tècnica.",
    btn_cv: "Descarregar CV (PDF)",
    btn_projects: "Explorar Projectes",
    projects_heading: "Projectes",
    p1_cat: "TFG · Matrícula d'Honor UPC",
    p1_desc: "Concepció i model de negoci d'una plataforma de crowdshipping per aprofitar trajectes habituals en transport de paqueteria a mitjana distància mitjançant xarxa de punts de conveniència.",
    p2_cat: "Modelat 3D CAD & Renders CMF",
    p2_desc: "Disseny d'ulleres FPV per a pilots de drons. Treball d'ergonomia formal, estudi de particions complexes i renders d'alta fidelitat explorant textures i materials en components.",
    p3_cat: "Delineació Tècnica & Redisseny",
    p3_desc: "Redisseny estètic del robot de cuina i creació del manual tècnic d'instruccions d'ús, amb delineació esquemàtica i desglossament vectorial dels components i batedors.",
    p4_cat: "Startup per a Pisos Compartits · Co-Fundador",
    p4_desc: "Desenvolupament integral de producte i arquitectura UX per a la gestió de convivència en pisos compartits. Validat amb Lean Startup i incubat a Emprèn UPC.",
    more_info: "Més informació",
    visit_calyu: "Visitar Web App",
    behance_prompt: "Vols explorar més projectes de disseny industrial i modelat 3D?",
    behance_btn: "Veure portafoli complet a Behance ↗",
    skills_heading: "Competències",
    skill_sub_1: "Enginyeria de precisió, plànols i fabricació",
    skill_sub_2: "Acceleració de codi i optimització de processos",
    skill_sub_3: "Cultura Lean aplicada a planta i startup",
    skill_sub_4: "Validació física i comunicació internacional",
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
    hero_bio: "<strong>Ingeniero con doble titulación por la UPC</strong>, con experiencia en optimización de procesos y metodología Lean en <strong>Louis Vuitton</strong>, técnico CAD en <strong>CELO</strong> y desarrollo de proyectos propios (<strong>CALYU</strong>). Con carácter emprendedor y visión de producto, trabajo especialmente bien por proyectos, volcándome al máximo cuando me apasiona el reto y creo firmemente en él. Especializado en la aplicación de <strong>Inteligencia Artificial para optimizar procesos</strong>, automatizando flujos y acelerando la velocidad de iteración técnica.",
    btn_cv: "Descargar CV (PDF)",
    btn_projects: "Explorar Proyectos",
    projects_heading: "Proyectos",
    p1_cat: "TFG · Matrícula de Honor UPC",
    p1_desc: "Concepción y modelo de negocio de una plataforma de crowdshipping para aprovechar trayectos habituales en transporte de paquetería a mediana distancia mediante red de puntos de conveniencia.",
    p2_cat: "Modelado 3D CAD & Renders CMF",
    p2_desc: "Diseño de gafas FPV para pilotos de drones. Estudio de ergonomía formal, particiones complejas y renders de alta fidelidad explorando texturas y materiales en componentes.",
    p3_cat: "Delineación Técnica & Rediseño",
    p3_desc: "Rediseño estético del robot de cocina y creación del manual técnico de instrucciones de uso, con delineación esquemática y despiece vectorial de componentes y batidores.",
    p4_cat: "Startup para Pisos Compartidos · Co-Fundador",
    p4_desc: "Desarrollo integral de producto y arquitectura UX para la gestión de convivencia en pisos compartidos. Validado con Lean Startup e incubado en Emprèn UPC.",
    more_info: "Más información",
    visit_calyu: "Visitar Web App",
    behance_prompt: "¿Quieres explorar más proyectos de diseño industrial y modelado 3D?",
    behance_btn: "Ver portafolio completo en Behance ↗",
    skills_heading: "Competencias",
    skill_sub_1: "Ingeniería de precisión, planos y fabricación",
    skill_sub_2: "Aceleración de código y optimización de procesos",
    skill_sub_3: "Cultura Lean aplicada a planta y startup",
    skill_sub_4: "Validación física y comunicación internacional",
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
    hero_bio: "<strong>Dual-degree Engineer from UPC Barcelona</strong>, with hands-on experience in process optimization and Lean methodology at <strong>Louis Vuitton</strong>, CAD engineering at <strong>CELO</strong>, and product ventures (<strong>CALYU</strong>). Entrepreneurial mindset and product vision, thriving in project-driven environments where passion meets high technical standards. Specialized in applying <strong>Artificial Intelligence to process engineering</strong>, streamlining workflows and accelerating technical iteration cycles.",
    btn_cv: "Download CV (PDF)",
    btn_projects: "Explore Projects",
    projects_heading: "Projects",
    p1_cat: "Bachelor Thesis · UPC Honors Mark",
    p1_desc: "Conception and business model of a crowdshipping platform leveraging daily commutes to transport parcels over medium distances through local convenience point networks.",
    p2_cat: "3D CAD Modeling & CMF Renders",
    p2_desc: "Industrial design of FPV goggles for drone pilots. Focus on facial ergonomics, complex parting lines, and high-fidelity texturing and materials (CMF) across components.",
    p3_cat: "Technical Drafting & Redesign",
    p3_desc: "Aesthetic redesign of the kitchen mixer and creation of the technical user guide, featuring exploded schematic vector drafting of components and mixing attachments.",
    p4_cat: "Coliving Management Startup · Co-Founder",
    p4_desc: "End-to-end product design and UX architecture for flatmate expense and chore management. Validated through Lean Startup, incubated at Emprèn UPC.",
    more_info: "More info",
    visit_calyu: "Visit Web App",
    behance_prompt: "Interested in exploring more industrial design and 3D modeling projects?",
    behance_btn: "View full portfolio on Behance ↗",
    skills_heading: "Skills & Expertise",
    skill_sub_1: "Precision engineering, blueprints & manufacturing",
    skill_sub_2: "Code acceleration and process workflow optimization",
    skill_sub_3: "Lean culture applied to manufacturing plant & startup",
    skill_sub_4: "Physical validation and international communication",
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
