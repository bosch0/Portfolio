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
      summary: 'Resumen de experiencia',
      zoom: 'Ampliar imagen',
      close: 'Cerrar',
    },
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: '// estudiante de 2º DAW · prácticas FCT · 15 feb – 4 jun 2027',
      badge: 'Disponible para prácticas · Granada (presencial) · Remoto',
      role: 'Desarrollador Full-Stack',
      lead:
        'Construyo aplicaciones web de punta a punta, del esquema de base de datos a la interfaz. En 2026 hice prácticas en NaturalSoft (software médico) migrando datos clínicos a producción, y desde 2022 desarrollo para clientes internacionales. Busco una empresa en Granada o en remoto donde hacer las prácticas de DAW.',
      ctaProjects: 'Ver proyectos',
      ctaCv: 'Descargar CV',
      stats: ['programando desde 2021', 'prácticas en NaturalSoft · 2026', 'inglés C1 · francés básico'],
      term: {
        window: 'ivan@boscho — zsh',
        command: 'cat experiencia.json',
        entries: [
          {
            key: 'naturalsoft',
            rows: [
              { k: 'rol', v: '"becario · software médico"', kind: 'str' },
              { k: 'cuándo', v: '"mayo 2026 · Granada"', kind: 'str' },
              {
                k: 'hice',
                v: '"migración de datos clínicos a producción, modelo dimensional para Power BI, UI de paneles"',
                kind: 'str',
              },
              { k: 'stack', v: 'Velneo, SQL, Power BI, Java', kind: 'list' },
            ],
          },
          {
            key: 'freelance',
            rows: [
              { k: 'rol', v: '"dev · lead de equipos de 3-5"', kind: 'str' },
              { k: 'cuándo', v: '"2022 – hoy"', kind: 'str' },
              { k: 'hice', v: '"sistemas en producción para clientes de EE.UU., Reino Unido y Rumanía"', kind: 'str' },
              { k: 'stack', v: 'Lua, Svelte, React, Node.js', kind: 'list' },
            ],
          },
          {
            key: 'fct',
            rows: [
              { k: 'estado', v: 'open', kind: 'ok' },
              { k: 'cuándo', v: '"15 feb – 4 jun 2027 · presencial o remoto"', kind: 'str' },
            ],
          },
        ],
      },
    },
    projects: {
      path: '~/proyectos',
      title: 'Proyectos',
      intro: 'Qué he construido, con qué y por qué. Primero web; más abajo, lo que hice antes de DAW en FiveM.',
      featured: 'Proyecto destacado',
      inDevelopment: 'En desarrollo',
      closedSource: 'Código privado · proyecto para cliente',
      kinds: { web: 'Web app', store: 'Tienda de scripts', fivem: 'Servidor de rol' },
      links: { preview: 'Ver demo', code: 'Código', demo: 'Demo', web: 'Web', video: 'Vídeo' },
      fivem: {
        eyebrow: '// antes de DAW · 2021 – hoy',
        title: 'Desarrollo para FiveM',
        intro:
          'Empecé programando para el mod multijugador de GTA V. Lo que me llevo de ahí: sistemas en producción con usuarios reales, pagos y entrega automática, y trabajo con equipos internacionales.',
      },
      items: {
        boutiqueStays: {
          title: 'Boutique Stays',
          description:
            'Plataforma de reservas para un negocio real de apartamentos, pendiente de lanzamiento. Next.js 16 (App Router), Supabase con PostgreSQL y Row Level Security, Stripe y Resend.',
          features: [
            'Disponibilidad en tiempo real por apartamento, con las reglas de acceso en la propia base de datos (RLS)',
            'Checkout con Stripe confirmado por webhook: ninguna reserva depende del navegador del cliente',
            'Emails transaccionales con React Email + Resend',
            'Interfaz en tres idiomas (ES · EN · DE)',
          ],
        },
        mdConverter: {
          title: 'MD Converter',
          description:
            'Convierte PDF y DOCX a Markdown limpio, 100 % en el navegador: sin backend ni subidas, los documentos no salen de tu equipo. Reconstruye títulos, listas y tablas reales.',
        },
        portfolio: {
          title: 'Portfolio personal',
          description:
            'Este sitio. React 19, TypeScript y Tailwind v4; modo claro/oscuro, i18n y animaciones hechos a mano, sin librerías de UI.',
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
    about: {
      path: '~/sobre-mi',
      title: 'Sobre mí',
      paragraphs: [
        'Empecé a programar en 2021 de forma autodidacta con FiveM, el mod multijugador de GTA V: sistemas en tiempo real, en producción y con usuarios reales. Desde 2022 trabajo también como freelance, liderando equipos de 3 a 5 desarrolladores en proyectos para clientes de EE.UU., Reino Unido y Rumanía, y entregando webs y tiendas online de forma autónoma.',
        'Hoy curso 2º del ciclo superior de Desarrollo de Aplicaciones Web en EIG (Granada), junto a un curso de especialización en e-commerce. En mayo de 2026 hice prácticas en NaturalSoft, software médico: migré datos clínicos a producción en clínicas activas, diseñé un modelo dimensional para Power BI y mejoré la interfaz de los paneles de análisis.',
        'Para las prácticas de DAW (15 de febrero – 4 de junio de 2027) busco un equipo donde tocar código real desde la primera semana, recibir feedback y seguir aprendiendo. Granada y alrededores en presencial, o cualquier sitio en remoto.',
      ],
      logTitle: 'git log --oneline',
      log: [
        { period: '2021', text: 'Primeros scripts en Lua para FiveM' },
        { period: '2022 – 2024', text: 'Hidden RP y OneRPG en producción · freelance para clientes internacionales' },
        { period: '2025', text: 'Empiezo DAW en EIG Granada y el curso de especialización en e-commerce' },
        { period: '2026', text: 'Prácticas en NaturalSoft (mayo) · Boutique Stays, MD Converter y este portfolio' },
        { period: '2027', text: 'Prácticas FCT · 15 feb – 4 jun · ¿tu empresa?' },
      ],
      stackTitle: 'Stack',
      groups: { frontend: 'frontend', backend: 'backend', database: 'bases de datos', tools: 'herramientas' },
      techLabels: { AI: 'IA' },
      factsTitle: 'Formación e idiomas',
      facts: {
        education: { title: 'CFGS Desarrollo de Aplicaciones Web', detail: '2025 – 2027 · EIG, Granada' },
        ecommerce: { title: 'Curso de especialización en E-commerce', detail: '2025 – 2026 · EIG, Granada' },
        languages: {
          title: 'Español nativo · Inglés C1 · Francés básico',
          detail: 'Documentación, código y comunicación técnica en inglés sin problema',
        },
        location: {
          title: 'Granada · presencial o remoto',
          detail: 'Disponible para desplazarme en Granada y alrededores; remoto en cualquier zona de España',
        },
      },
    },
    contact: {
      path: '~/contacto',
      title: '¿Hablamos?',
      lead:
        'Si tu empresa acoge alumnos de DAW en prácticas, en Granada o en remoto, escríbeme. También si solo quieres hablar de código.',
      copy: 'copiar',
      copied: 'copiado ✓',
      cv: 'Descargar CV (PDF)',
      note: '// suelo responder en menos de 24 h',
      company: {
        title: 'Datos para la empresa',
        rows: [
          { k: 'ciclo', v: 'CFGS Desarrollo de Aplicaciones Web · 2º curso' },
          { k: 'centro', v: 'EIG · Granada' },
          { k: 'periodo', v: '15 feb – 4 jun 2027' },
          { k: 'modalidad', v: 'Presencial en Granada o remoto' },
          { k: 'convenio', v: 'Acuerdo de FCT a través del centro educativo' },
        ],
      },
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
      summary: 'Experience summary',
      zoom: 'Enlarge image',
      close: 'Close',
    },
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      eyebrow: '// 2nd-year web development student · internship · 15 Feb – 4 Jun 2027',
      badge: 'Open to internships · Granada, Spain (on-site) · Remote',
      role: 'Full-Stack Developer',
      lead:
        'I build web applications end to end, from the database schema to the interface. In 2026 I interned at NaturalSoft (medical software) migrating clinical data to production, and since 2022 I have built for international clients. I’m looking for a company in Granada or remote for my final-year internship.',
      ctaProjects: 'View projects',
      ctaCv: 'Download CV',
      stats: ['coding since 2021', 'NaturalSoft internship · 2026', 'english C1 · basic french'],
      term: {
        window: 'ivan@boscho — zsh',
        command: 'cat experience.json',
        entries: [
          {
            key: 'naturalsoft',
            rows: [
              { k: 'role', v: '"intern · medical software"', kind: 'str' },
              { k: 'when', v: '"May 2026 · Granada"', kind: 'str' },
              {
                k: 'did',
                v: '"clinical data migration to production, dimensional model for Power BI, dashboard UI"',
                kind: 'str',
              },
              { k: 'stack', v: 'Velneo, SQL, Power BI, Java', kind: 'list' },
            ],
          },
          {
            key: 'freelance',
            rows: [
              { k: 'role', v: '"dev · lead of 3-5 dev teams"', kind: 'str' },
              { k: 'when', v: '"2022 – today"', kind: 'str' },
              { k: 'did', v: '"production systems for clients in the US, UK and Romania"', kind: 'str' },
              { k: 'stack', v: 'Lua, Svelte, React, Node.js', kind: 'list' },
            ],
          },
          {
            key: 'internship',
            rows: [
              { k: 'status', v: 'open', kind: 'ok' },
              { k: 'when', v: '"15 Feb – 4 Jun 2027 · on-site or remote"', kind: 'str' },
            ],
          },
        ],
      },
    },
    projects: {
      path: '~/projects',
      title: 'Projects',
      intro: 'What I built, with what and why. Web first; further down, what I did before the degree in FiveM.',
      featured: 'Featured project',
      inDevelopment: 'In development',
      closedSource: 'Private code · client project',
      kinds: { web: 'Web app', store: 'Scripts store', fivem: 'Roleplay server' },
      links: { preview: 'View demo', code: 'Code', demo: 'Demo', web: 'Web', video: 'Video' },
      fivem: {
        eyebrow: '// before the degree · 2021 – today',
        title: 'FiveM development',
        intro:
          'I started out coding for the GTA V multiplayer mod. What I took from it: production systems with real users, payments and automated delivery, and work with international teams.',
      },
      items: {
        boutiqueStays: {
          title: 'Boutique Stays',
          description:
            'Booking platform for a real apartment business, awaiting launch. Next.js 16 (App Router), Supabase with PostgreSQL and Row Level Security, Stripe and Resend.',
          features: [
            'Real-time availability per apartment, with access rules enforced in the database itself (RLS)',
            'Stripe checkout confirmed by webhook: no booking depends on the customer’s browser',
            'Transactional email with React Email + Resend',
            'Interface in three languages (ES · EN · DE)',
          ],
        },
        mdConverter: {
          title: 'MD Converter',
          description:
            'Converts PDF and DOCX into clean Markdown, 100% in the browser: no backend, no uploads, documents never leave your machine. Rebuilds headings, lists and real tables.',
        },
        portfolio: {
          title: 'Personal portfolio',
          description:
            'This site. React 19, TypeScript and Tailwind v4; light/dark mode, i18n and animations hand-rolled, no UI libraries.',
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
    about: {
      path: '~/about',
      title: 'About me',
      paragraphs: [
        'I started coding in 2021, self-taught, with FiveM, the GTA V multiplayer mod: real-time systems, in production and with real users. Since 2022 I also work freelance, leading teams of 3 to 5 developers on projects for clients in the US, UK and Romania, and delivering websites and online stores on my own.',
        'Today I’m in the second year of the higher vocational degree in Web Application Development (DAW) at EIG (Granada), alongside a specialisation course in e-commerce. In May 2026 I interned at NaturalSoft, a medical software company: I migrated clinical data to production in active clinics, designed a dimensional model for Power BI and improved the analytics dashboards UI.',
        'For the internship (15 February – 4 June 2027) I want a team where I touch real code from the first week, get feedback and keep learning. On-site in Granada and surroundings, or remote from anywhere.',
      ],
      logTitle: 'git log --oneline',
      log: [
        { period: '2021', text: 'First Lua scripts for FiveM' },
        { period: '2022 – 2024', text: 'Hidden RP and OneRPG in production · freelance for international clients' },
        { period: '2025', text: 'Start the DAW degree at EIG Granada and the e-commerce specialisation course' },
        { period: '2026', text: 'NaturalSoft internship (May) · Boutique Stays, MD Converter and this portfolio' },
        { period: '2027', text: 'Internship · 15 Feb – 4 Jun · your company?' },
      ],
      stackTitle: 'Stack',
      groups: { frontend: 'frontend', backend: 'backend', database: 'databases', tools: 'tools' },
      techLabels: { AI: 'AI' },
      factsTitle: 'Education & languages',
      facts: {
        education: { title: 'Higher degree in Web Application Development (DAW)', detail: '2025 – 2027 · EIG, Granada, Spain' },
        ecommerce: { title: 'E-commerce specialisation course', detail: '2025 – 2026 · EIG, Granada, Spain' },
        languages: {
          title: 'Native Spanish · English C1 · Basic French',
          detail: 'Comfortable with documentation, code and technical communication in English',
        },
        location: {
          title: 'Granada · on-site or remote',
          detail: 'Can commute within Granada and surroundings; remote from anywhere in Spain',
        },
      },
    },
    contact: {
      path: '~/contact',
      title: 'Let’s talk',
      lead: 'If your company hosts web development interns, in Granada or remotely, drop me a line. Also if you just want to talk code.',
      copy: 'copy',
      copied: 'copied ✓',
      cv: 'Download CV (PDF)',
      note: '// I usually reply within 24 h',
      company: {
        title: 'Details for companies',
        rows: [
          { k: 'degree', v: 'Higher degree in Web Application Development · 2nd year' },
          { k: 'school', v: 'EIG · Granada, Spain' },
          { k: 'period', v: '15 Feb – 4 Jun 2027' },
          { k: 'mode', v: 'On-site in Granada or remote' },
          { k: 'agreement', v: 'Internship agreement handled through the school' },
        ],
      },
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
