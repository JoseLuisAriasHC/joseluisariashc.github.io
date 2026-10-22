import type { SiteContent } from './types'

// Borrador a partir del perfil de LinkedIn. Los textos marcados con [Pendiente: …] faltan por escribir.
export const es: SiteContent = {
  locale: 'es',

  person: {
    name: 'Jose Luis Arias',
    role: 'Desarrollador de software',
    location: 'Zaragoza',
    links: {
      linkedin: 'https://www.linkedin.com/in/jose-luis-a-66aab828a/',
      github: 'https://github.com/JoseLuisAriasHC',
      // Provisional: se cambia al final
      email: 'contacto@example.com',
    },
  },

  ui: {
    skipToContent: 'Saltar al contenido',
    sectionsNav: 'Secciones',
    contact: 'Contacto',
    email: 'Correo',
    nextSection: 'Siguiente sección',
    backToTop: 'Volver arriba',
    menu: 'Menú',
    closeMenu: 'Cerrar menú',
    opensInNewTab: 'se abre en una pestaña nueva',
    seeWork: 'Ver trabajos destacados',
    downloadCv: 'Descargar CV',
    writeEmail: 'Escribir un correo',
    viewLinkedin: 'Ver perfil de LinkedIn',
    mainStack: 'Tecnologías principales',
    present: 'actualidad',
    featuredWork: 'Trabajos destacados',
    stack: 'Tecnologías',
    caseSteps: {
      context: 'Contexto',
      contribution: 'Mi aportación',
      solution: 'Solución',
      result: 'Resultado',
    },
    imagePending: 'Imagen pendiente',
    alternateLanguage: { label: 'English', href: '/en/', lang: 'en' },
  },

  hero: {
    id: 'inicio',
    navLabel: 'Inicio',
    headline: 'Desarrollo backend y automatización',
    stack: ['C#', '.NET', 'SQL Server', 'n8n'],
    intro:
      'Desarrollo aplicaciones web con C#, .NET y SQL Server, modernizo sistemas existentes y automatizo procesos con n8n. Me gusta entender cómo funciona un proceso, detectar dónde se complica y convertirlo en una solución más sencilla de utilizar y mantener.',
    photoAlt: 'Retrato de Jose Luis Arias',
  },

  career: {
    id: 'trayectoria',
    navLabel: 'Trayectoria',
    title: 'Trayectoria y formación',
    experienceTitle: 'Experiencia',
    jobs: [
      {
        key: 'dreams-junior',
        role: 'Desarrollador de software junior',
        company: 'Dreams',
        period: { start: '2025-10' },
        summary:
          'Aplicaciones web con C#, .NET y SQL Server, modernización de sistemas y automatización de procesos. También integración de datos de ERP para el seguimiento de reparaciones, flujos con IA y mantenimiento de APIs en Laravel con despliegues en Docker y GitLab CI/CD.',
        cases: ['admin-panel', 'automation', 'migration'],
      },
      {
        key: 'dreams-internship',
        role: 'Desarrollador web en prácticas',
        company: 'Dreams',
        period: { start: '2025-01', end: '2025-10' },
        summary:
          'Desarrollo y mantenimiento de aplicaciones con Laravel y ASP.NET Core: funcionalidades CRUD, mejoras en paneles de administración, la renovación de una página de inicio con Vue, autenticación y mapas con Google Maps.',
      },
      {
        key: 'schnell-internship',
        role: 'Desarrollador web en prácticas',
        company: 'Schnell Software',
        period: { start: '2023-03', end: '2023-06' },
        summary:
          'Prácticas de desarrollo web con Xataface. [Pendiente: una frase sobre lo que hiciste.]',
      },
    ],
    educationTitle: 'Formación',
    education: [
      {
        key: 'nett-master',
        title: 'Máster en Desarrollo Web',
        center: 'NETT Digital School',
        period: { start: '2025-01', end: '2025-09' },
        summary:
          'Desarrollo web full stack: PHP con Laravel y Symfony, Vue y Angular, WordPress y PrestaShop, SEO técnico y metodologías ágiles.',
      },
      {
        key: 'dam',
        title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
        center: 'Izquierdo FP',
        period: { start: '2020-09', end: '2023-09' },
        summary:
          'Programación orientada a objetos con Java, bases de datos relacionales con SQL y administración de sistemas ERP y CRM.',
        grade: 'Nota: 9',
      },
    ],
  },

  cases: [
    {
      key: 'admin-panel',
      id: 'panel-de-administracion',
      navLabel: 'Panel',
      title: 'Modernización de un panel de administración',
      company: 'Dreams',
      steps: {
        context:
          'El panel de administración de una aplicación web tenía problemas de compatibilidad con algunos navegadores y una gestión de archivos complicada.',
        contribution:
          'Renové el panel y desarrollé funcionalidades con ASP.NET MVC y vistas Razor para gestionar usuarios, permisos, contenidos y procesos internos.',
        solution:
          '[Pendiente: cómo lo abordaste; qué cambiaste en la interfaz y en la gestión de archivos, y cómo lo probaste en los distintos navegadores.]',
        result:
          'El panel funciona igual en los navegadores habituales y gestionar archivos es más sencillo. [Pendiente: un dato concreto si lo tienes.]',
      },
      stack: ['C#', 'ASP.NET MVC', 'Razor', 'SQL Server'],
    },
    {
      key: 'automation',
      id: 'automatizacion-n8n',
      navLabel: 'Automatización',
      title: 'Automatización de procesos comerciales con n8n',
      company: 'Dreams',
      steps: {
        context:
          'El equipo de ventas trabajaba con información repartida entre HubSpot, Gmail, Google Drive y Mailchimp, y tareas como sincronizar contactos o preparar correos con documentación comercial se hacían a mano.',
        contribution:
          'Construyo y mantengo los flujos con n8n y JavaScript, y también la instancia de n8n: actualizaciones de versión y avisos por correo cuando un flujo falla.',
        solution:
          'Flujos que conectan las APIs de HubSpot, Gmail, Google Drive y Mailchimp para sincronizar contactos, preparar correos con la documentación comercial y centralizar la actividad de ventas. [Pendiente: describe un flujo concreto paso a paso.]',
        result:
          'Estos procesos ya no dependen de tareas manuales y, si un flujo falla, llega un aviso por correo para corregirlo. [Pendiente: un dato concreto si lo tienes.]',
      },
      stack: ['n8n', 'JavaScript', 'HubSpot', 'Gmail', 'Google Drive', 'Mailchimp'],
    },
    {
      key: 'migration',
      id: 'migracion-de-datos',
      navLabel: 'Migración',
      title: 'Migración selectiva de datos',
      company: 'Dreams',
      steps: {
        context:
          'Una plataforma B2B se estaba modernizando con una nueva estructura de código y de datos, y había que trasladar solo una parte de la información del sistema anterior.',
        contribution:
          'Analicé el sistema heredado y desarrollé el proceso de migración entre bases de datos, en coordinación con el responsable técnico y proponiendo mejoras en la lógica y el modelo de datos.',
        solution:
          'Un proceso que selecciona los registros necesarios junto con sus datos relacionados y les aplica reglas de transformación, cálculo y filtrado para adaptarlos al nuevo modelo. [Pendiente: cómo lo ejecutaste y validaste.]',
        result:
          '[Pendiente: qué quedó resuelto; por ejemplo, qué datos se migraron y cómo se comprobó que eran correctos.]',
      },
      stack: ['C#', '.NET', 'SQL Server'],
    },
  ],

  contact: {
    id: 'contacto',
    navLabel: 'Contacto',
    title: 'Contacto',
    intro:
      'Si buscas a alguien para desarrollo backend con .NET o para automatizar procesos, escríbeme por correo o por LinkedIn.',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        key: 'contribution',
        question: '¿Qué parte de cada trabajo es tuya?',
        answer:
          'Son trabajos de equipo en Dreams. En cada caso, el apartado «Mi aportación» explica qué hice yo.',
      },
      {
        key: 'code',
        question: '¿Puedo ver el código?',
        answer:
          'No, porque es código de clientes y es confidencial. Por eso cada caso explica el problema, el enfoque y el resultado, y las imágenes son representativas.',
      },
      {
        key: 'ai',
        question: '¿Trabajas con IA?',
        answer:
          'Sí. He desarrollado flujos que seleccionan y validan noticias con modelos de lenguaje y un prototipo de asistente de soporte basado en documentación técnica, combinando el modelo con reglas de negocio y comprobaciones en código.',
      },
    ],
  },
}
