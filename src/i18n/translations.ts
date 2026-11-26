export const translations = {
  es: {
    meta: {
      title: 'Iván Bosch de Haro · Desarrollador Full-Stack',
      description:
        'Estudiante de 2º de DAW y desarrollador full-stack (React, TypeScript, Node.js, PostgreSQL) con prácticas en NaturalSoft. Disponible para prácticas FCT del 15 feb al 4 jun 2027 en Granada, presencial o en remoto.',
      skip: 'Saltar al contenido',
      menu: 'Menú',
      theme: 'Cambiar tema',
      language: 'Idioma',
      backToTop: 'Volver arriba',
    },
    nav: {
      projects: 'Proyectos',
      fivem: 'FiveM',
      stack: 'Stack',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    header: { cta: 'Hablemos' },
    hero: {
      eyebrow: 'Iván Bosch de Haro · 2º DAW · Granada / remoto',
      lines: ['Estudiante', 'que ya', 'factura.'],
      lead: 'Estudiante de 2º de DAW en EIG Granada. Busco empresa para mis prácticas FCT, en Granada o en remoto.',
      ctaProjects: 'Ver proyectos',
      ctaCv: 'Descargar CV',
      avatarAlt: 'Retrato de Iván Bosch',
      orbitLabel: 'Tecnologías con las que trabajo',
      stats: {
        label: 'Datos destacados',
        next: 'Ver el siguiente dato',
        goTo: 'Ver dato',
        items: [
          { value: '+5', title: 'años de experiencia', detail: 'programando desde 2021' },
          { value: '3–5', title: 'devs liderados', detail: 'en proyectos freelance' },
          { value: '{count}', title: 'proyectos', detail: 'web y FiveM, en esta página' },
          { value: 'C1', title: 'inglés', detail: 'español nativo · francés básico' },
        ],
      },
      badge: 'Inglés C1',
    },
    journey: {
      title: 'Mi camino',
      intro: '// de programar por afición a facturar, y lo que viene',
      steps: [
        {
          year: '2021',
          verb: 'Programo.',
          text: 'Empiezo de forma autodidacta con FiveM: mis primeros scripts en Lua, con usuarios reales desde el principio.',
          stack: ['Lua'],
        },
        {
          year: '2022',
          verb: 'Facturo.',
          text: 'Freelance: he liderado equipos de 3 a 5 desarrolladores para clientes de EE.UU., Reino Unido y Rumanía.',
          stack: ['Lua', 'Svelte', 'React', 'Node.js'],
        },
        {
          year: '2027',
          verb: '¿Contigo?',
          text: 'Prácticas FCT del 15 de febrero al 4 de junio, presencial en Granada o en remoto.',
          stack: [],
        },
      ],
    },
    projects: {
      web: {
        title: 'Web',
        intro: '// aplicaciones de punta a punta. Haz clic en la captura para abrir la demo',
      },
      fivem: {
        title: 'FiveM',
        intro: '// donde empecé en 2021: sistemas en producción con usuarios reales, pagos y entrega automática',
        carousel: 'Proyectos de FiveM',
        enlarge: 'Ampliar',
        enlargeLabel: 'Ampliar la imagen de',
      },
      status: {
        developmentClient: 'En desarrollo · cliente real',
        development: 'En desarrollo',
        demo: 'Demo online',
        openSource: 'Código abierto',
        store: 'Tienda propia',
        production: 'En producción',
      },
      links: {
        openDemo: 'Abrir demo',
        viewDemo: 'Ver demo',
        demo: 'Demo',
        viewCode: 'Ver código',
        code: 'Código',
        store: 'Visitar tienda',
        web: 'Ver web',
        video: 'Ver vídeo',
      },
      viewer: {
        close: 'Cerrar',
        hint: 'Haz clic fuera de la imagen o pulsa Esc para cerrar',
        label: 'Imagen ampliada de',
      },
      items: {
        boutiqueStays: {
          title: 'Boutique Stays',
          description:
            'Plataforma de reservas para un negocio real de apartamentos, pendiente de lanzamiento. Disponibilidad en tiempo real, checkout con Stripe confirmado por webhook y emails transaccionales. Interfaz en tres idiomas (ES · EN · DE).',
        },
        mdConverter: {
          title: 'MD Converter',
          description:
            'Convierte PDF y DOCX a Markdown limpio, 100 % en el navegador: sin backend ni subidas, los documentos no salen de tu equipo. Reconstruye títulos, listas y tablas reales.',
        },
        portfolio: {
          title: 'Este portfolio',
          description:
            'React 19, TypeScript y Tailwind v4; modo claro/oscuro, i18n y animaciones hechos a mano, sin librerías de UI.',
        },
        bcs: {
          title: 'BCS Scripts',
          description:
            'Mi tienda de scripts para FiveM (ESX, QBCore y OX). Llevo producto, código, escrow, entrega automática y soporte: un producto de principio a fin.',
        },
        paragon: {
          title: 'Paragon Roleplay',
          description:
            'Servidor en desarrollo junto a un equipo de desarrolladores. Mi parte: scripts en Lua, sistemas de economía y comercio e interfaces en React para los jugadores.',
        },
        oneRpg: {
          title: 'OneRPG',
          description:
            'Servidor RPG en producción en 2024: progresión y economía propias, panel de gestión (vehículos, propiedades, tienda) en React y datos persistentes en MariaDB.',
        },
        hiddenRp: {
          title: 'Hidden RP',
          description:
            'Servidor sobre qb-core desarrollado en solitario, en producción de 2022 a 2024: backend en Lua, inventario y personajes, interfaces en Svelte y React, MariaDB.',
        },
      },
    },
    stack: {
      title: 'Stack',
      intro: '// con qué trabajo, agrupado por para qué lo uso',
      highlight: 'resaltar',
      highlighted: 'resaltado',
      pressHint: 'Pulsa para resaltar',
      carouselA: 'Tecnologías de frontend y backend',
      carouselB: 'Bases de datos y herramientas',
      groups: {
        frontend: { name: 'Frontend', tag: 'frontend', desc: 'Lo que ve y toca el usuario' },
        backend: { name: 'Backend', tag: 'backend', desc: 'La lógica y las APIs' },
        database: { name: 'Bases de datos', tag: 'base de datos', desc: 'Donde viven los datos' },
        tools: { name: 'Herramientas', tag: 'herramientas', desc: 'Cómo lo construyo y lo entrego' },
      },
      techLabels: { AI: 'IA', 'Linux (Ubuntu Server)': 'Linux' },
    },
    about: {
      title: 'Sobre mí',
      statement: [
        { text: 'Empecé a programar en ' },
        { text: '2021', mark: true },
        { text: ' con FiveM. Desde ' },
        { text: '2022', mark: true },
        { text: ' trabajo como freelance y he liderado equipos de ' },
        { text: '3 a 5 desarrolladores', mark: true },
        { text: '. En ' },
        { text: 'mayo de 2026', mark: true },
        { text: ' hice prácticas en ' },
        { text: 'NaturalSoft', mark: true },
        { text: ', software médico.' },
      ],
      body: 'Hoy curso 2º de DAW en EIG Granada y busco un equipo donde tocar código real desde la primera semana, recibir feedback y seguir aprendiendo.',
      facts: {
        education: { label: 'Formación', title: 'CFGS Desarrollo de Aplicaciones Web', detail: '2025 – 2027 · EIG, Granada' },
        ecommerce: { label: 'Especialización', title: 'Curso de E-commerce', detail: '2025 – 2026 · EIG, Granada' },
        languages: { label: 'Idiomas', title: 'Español nativo · Inglés C1', detail: 'Francés básico' },
        location: { label: 'Ubicación', title: 'Granada', detail: 'Presencial o remoto' },
        internship: {
          label: 'Prácticas · mayo 2026',
          title: 'NaturalSoft · software médico',
          detail:
            'Datos clínicos a producción en clínicas activas, modelo dimensional para Power BI y mejora de la interfaz de los paneles de análisis.',
        },
      },
    },
    contact: {
      eyebrow: '// contacto',
      title: '¿Contigo?',
      lead: 'Si tu empresa acoge alumnos de DAW en prácticas, en Granada o en remoto, escríbeme. También si solo quieres hablar de código.',
      copy: 'copiar email',
      copied: 'copiado',
      reply: 'Respondo en menos de 24 h',
      mail: 'Enviar un email a',
      cv: 'Descargar CV',
      orbitLabel: 'Más tecnologías con las que trabajo',
      ticker: ['¿HABLAMOS?', 'ESCRÍBEME'],
    },
    footer: {
      store: 'Tienda de scripts',
      source: 'Código fuente',
      made: 'hecho con React · TypeScript · Tailwind CSS · desplegado en Vercel',
    },
  },
  en: {
    meta: {
      title: 'Iván Bosch de Haro · Full-Stack Developer',
      description:
        'Second-year web development student and full-stack developer (React, TypeScript, Node.js, PostgreSQL) with an internship at NaturalSoft. Open to a 15 Feb – 4 Jun 2027 internship in Granada, Spain (on-site) or remote.',
      skip: 'Skip to content',
      menu: 'Menu',
      theme: 'Toggle theme',
      language: 'Language',
      backToTop: 'Back to top',
    },
    nav: {
      projects: 'Projects',
      fivem: 'FiveM',
      stack: 'Stack',
      about: 'About',
      contact: 'Contact',
    },
    header: { cta: 'Let’s talk' },
    hero: {
      eyebrow: 'Iván Bosch de Haro · 2nd-year DAW · Granada / remote',
      lines: ['Student', 'who already', 'invoices.'],
      lead: 'Second-year web development student at EIG Granada. I’m looking for a company for my internship, in Granada or remote.',
      ctaProjects: 'View projects',
      ctaCv: 'Download CV',
      avatarAlt: 'Portrait of Iván Bosch',
      orbitLabel: 'Technologies I work with',
      stats: {
        label: 'Highlights',
        next: 'Show the next highlight',
        goTo: 'Show highlight',
        items: [
          { value: '+5', title: 'years of experience', detail: 'coding since 2021' },
          { value: '3–5', title: 'devs led', detail: 'on freelance projects' },
          { value: '{count}', title: 'projects', detail: 'web and FiveM, on this page' },
          { value: 'C1', title: 'English', detail: 'native Spanish · basic French' },
        ],
      },
      badge: 'English C1',
    },
    journey: {
      title: 'My path',
      intro: '// from coding as a hobby to invoicing, and what comes next',
      steps: [
        {
          year: '2021',
          verb: 'I code.',
          text: 'I start out self-taught with FiveM: my first Lua scripts, with real users from day one.',
          stack: ['Lua'],
        },
        {
          year: '2022',
          verb: 'I invoice.',
          text: 'Freelance: I’ve led teams of 3 to 5 developers for clients in the US, UK and Romania.',
          stack: ['Lua', 'Svelte', 'React', 'Node.js'],
        },
        {
          year: '2027',
          verb: 'With you?',
          text: 'Internship from 15 February to 4 June, on-site in Granada or remote.',
          stack: [],
        },
      ],
    },
    projects: {
      web: {
        title: 'Web',
        intro: '// end-to-end applications. Click the screenshot to open the demo',
      },
      fivem: {
        title: 'FiveM',
        intro: '// where I started in 2021: production systems with real users, payments and automated delivery',
        carousel: 'FiveM projects',
        enlarge: 'Enlarge',
        enlargeLabel: 'Enlarge the image of',
      },
      status: {
        developmentClient: 'In development · real client',
        development: 'In development',
        demo: 'Live demo',
        openSource: 'Open source',
        store: 'Own store',
        production: 'In production',
      },
      links: {
        openDemo: 'Open demo',
        viewDemo: 'View demo',
        demo: 'Demo',
        viewCode: 'View code',
        code: 'Code',
        store: 'Visit store',
        web: 'View site',
        video: 'Watch video',
      },
      viewer: {
        close: 'Close',
        hint: 'Click outside the image or press Esc to close',
        label: 'Enlarged image of',
      },
      items: {
        boutiqueStays: {
          title: 'Boutique Stays',
          description:
            'Booking platform for a real apartment business, awaiting launch. Real-time availability, Stripe checkout confirmed by webhook and transactional email. Interface in three languages (ES · EN · DE).',
        },
        mdConverter: {
          title: 'MD Converter',
          description:
            'Converts PDF and DOCX into clean Markdown, 100% in the browser: no backend, no uploads, documents never leave your machine. Rebuilds headings, lists and real tables.',
        },
        portfolio: {
          title: 'This portfolio',
          description:
            'React 19, TypeScript and Tailwind v4; light/dark mode, i18n and animations hand-rolled, no UI libraries.',
        },
        bcs: {
          title: 'BCS Scripts',
          description:
            'My FiveM scripts store (ESX, QBCore and OX). I run product, code, escrow, automated delivery and support: a product from start to finish.',
        },
        paragon: {
          title: 'Paragon Roleplay',
          description:
            'Server in development with a team of developers. My part: Lua scripts, economy and trading systems, and React interfaces for players.',
        },
        oneRpg: {
          title: 'OneRPG',
          description:
            'RPG server in production in 2024: custom progression and economy, management panel (vehicles, properties, shop) in React and persistent data in MariaDB.',
        },
        hiddenRp: {
          title: 'Hidden RP',
          description:
            'Server on qb-core built solo, in production from 2022 to 2024: Lua backend, inventory and characters, Svelte and React interfaces, MariaDB.',
        },
      },
    },
    stack: {
      title: 'Stack',
      intro: '// what I work with, grouped by what I use it for',
      highlight: 'highlight',
      highlighted: 'highlighted',
      pressHint: 'Press to highlight',
      carouselA: 'Frontend and backend technologies',
      carouselB: 'Databases and tools',
      groups: {
        frontend: { name: 'Frontend', tag: 'frontend', desc: 'What users see and touch' },
        backend: { name: 'Backend', tag: 'backend', desc: 'The logic and the APIs' },
        database: { name: 'Databases', tag: 'database', desc: 'Where the data lives' },
        tools: { name: 'Tools', tag: 'tools', desc: 'How I build and ship it' },
      },
      techLabels: { AI: 'AI', 'Linux (Ubuntu Server)': 'Linux' },
    },
    about: {
      title: 'About me',
      statement: [
        { text: 'I started coding in ' },
        { text: '2021', mark: true },
        { text: ' with FiveM. Since ' },
        { text: '2022', mark: true },
        { text: ' I work freelance and I’ve led teams of ' },
        { text: '3 to 5 developers', mark: true },
        { text: '. In ' },
        { text: 'May 2026', mark: true },
        { text: ' I interned at ' },
        { text: 'NaturalSoft', mark: true },
        { text: ', a medical software company.' },
      ],
      body: 'Today I’m in the second year of the DAW degree at EIG Granada, and I’m looking for a team where I touch real code from the first week, get feedback and keep learning.',
      facts: {
        education: { label: 'Education', title: 'Higher degree in Web Application Development', detail: '2025 – 2027 · EIG, Granada' },
        ecommerce: { label: 'Specialisation', title: 'E-commerce course', detail: '2025 – 2026 · EIG, Granada' },
        languages: { label: 'Languages', title: 'Native Spanish · English C1', detail: 'Basic French' },
        location: { label: 'Location', title: 'Granada, Spain', detail: 'On-site or remote' },
        internship: {
          label: 'Internship · May 2026',
          title: 'NaturalSoft · medical software',
          detail:
            'Clinical data to production in active clinics, a dimensional model for Power BI and a better UI for the analytics dashboards.',
        },
      },
    },
    contact: {
      eyebrow: '// contact',
      title: 'With you?',
      lead: 'If your company hosts web development interns, in Granada or remotely, drop me a line. Also if you just want to talk code.',
      copy: 'copy email',
      copied: 'copied',
      reply: 'I reply within 24 h',
      mail: 'Send an email to',
      cv: 'Download CV',
      orbitLabel: 'More technologies I work with',
      ticker: ['LET’S TALK', 'WRITE ME'],
    },
    footer: {
      store: 'Scripts store',
      source: 'Source code',
      made: 'built with React · TypeScript · Tailwind CSS · deployed on Vercel',
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type Translation = (typeof translations)[Locale];
