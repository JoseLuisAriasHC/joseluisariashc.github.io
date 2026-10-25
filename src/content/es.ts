import { caseImages } from './images'
import type { SiteContent } from './types'

// Textos en revisión: se ajustarán antes de publicar
export const es: SiteContent = {
  locale: 'es',

  person: {
    name: 'Jose Luis Arias',
    role: 'Desarrollador de software',
    location: 'Zaragoza',
    links: {
      linkedin: 'https://www.linkedin.com/in/jose-luis-a-66aab828a/',
      github: 'https://github.com/JoseLuisAriasHC',
      email: 'joseluisariashc@gmail.com',
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
    stack: 'Tecnologías',
    integrations: 'Integraciones',
    articles: 'Artículos',
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
      'Desarrollo aplicaciones web, modernizo sistemas existentes y automatizo procesos empresariales. Mi trabajo se centra en el backend y la integración de sistemas, desde paneles de administración hasta flujos que conectan distintas herramientas. Me gusta entender cómo funciona cada proceso y desarrollar soluciones que faciliten el trabajo diario y sean sencillas de mantener.',
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
          'Desarrollo aplicaciones web con C#, .NET y SQL Server, y participo en la modernización de sistemas, la integración con ERP y la migración de datos. También desarrollo y mantengo automatizaciones con n8n, JavaScript y APIs para conectar herramientas comerciales, y trabajo con modelos de IA para seleccionar noticias y consultar documentación técnica.',
      },
      {
        key: 'dreams-internship',
        role: 'Desarrollador web en prácticas',
        company: 'Dreams',
        period: { start: '2025-01', end: '2025-10' },
        summary:
          'Participé en el desarrollo y mantenimiento de aplicaciones con Laravel y ASP.NET Core, incorporando funcionalidades y resolviendo incidencias. Trabajé en paneles de administración, autenticación y renovación de interfaces con Vue, JavaScript y vistas Blade y Razor.',
      },
      {
        key: 'schnell-internship',
        role: 'Desarrollador web en prácticas',
        company: 'Schnell Software',
        period: { start: '2023-03', end: '2023-06' },
        summary:
          'Realicé mejoras de interfaz en aplicaciones web y desarrollé funcionalidades de lectura y procesamiento de archivos. También participé en la corrección de errores y la incorporación de funcionalidades de backend.',
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
          'Formación en desarrollo web full stack con PHP, frameworks de backend y frontend, bases de datos y gestores de contenido. Incluye control de versiones, SEO técnico, usabilidad y metodologías ágiles.',
      },
      {
        key: 'dam',
        title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
        center: 'Izquierdo FP',
        period: { start: '2021-09', end: '2023-09' },
        summary:
          'Formación en programación orientada a objetos, bases de datos relacionales y desarrollo de aplicaciones web y móviles, además de administración y programación de sistemas ERP y CRM.',
        grade: 'Nota: 9',
      },
    ],
  },

  cases: [
    {
      key: 'b2b-platform',
      id: 'plataforma-b2b',
      navLabel: 'Plataforma B2B',
      title: 'Modernización de una plataforma B2B y migración selectiva de datos',
      company: 'Dreams',
      steps: {
        context:
          'Una plataforma B2B para distintos clientes había acumulado funcionalidades y parches que dificultaban su mantenimiento. Su modernización requería reorganizar el código y los datos conservando las particularidades de cada cliente.',
        contribution:
          'Desarrollé la migración de datos y ficheros, el catálogo y el carrito, con sus validaciones según contrato, rol y usuario. También propuse mejoras del modelo de datos y realicé pruebas funcionales.',
        solution:
          'Creé una aplicación de consola que migra los contratos seleccionados y sus datos relacionados mediante scripts SQL, respetando las dependencias entre tablas. Al desarrollar el catálogo, también simplifiqué su estructura: una propuesta aceptada fue sustituir la relación N:M entre productos y variantes por una 1:N, más acorde con su funcionamiento.',
        result:
          'Catálogo y carrito adaptados y probados, con un proceso de migración al nuevo modelo. La plataforma sigue en desarrollo y la migración evoluciona con sus necesidades.',
      },
      stack: ['C#', '.NET', 'SQL Server'],
      image: {
        ...caseImages['b2b-platform'],
        alt: 'Ilustración de la migración: tablas enredadas del sistema anterior, selección de algunos contratos y el nuevo modelo con un producto base, sus variantes y el catálogo con carrito.',
      },
    },
    {
      key: 'automation',
      id: 'automatizacion-n8n',
      navLabel: 'Automatización',
      title: 'Automatización de procesos comerciales',
      company: 'Dreams',
      steps: {
        context:
          'El equipo comercial necesitaba mantener los contactos actualizados entre herramientas, preparar correos con condiciones comerciales y centralizar sus visitas. Estas tareas requerían trasladar información manualmente y podían retrasar el seguimiento de los clientes.',
        contribution:
          'Desarrollé los tres flujos con n8n y JavaScript, integrando HubSpot, Gmail, Google Drive y Mailchimp mediante sus APIs. También me encargué del mantenimiento de la instancia y de configurar avisos para detectar y resolver errores.',
        solution:
          'Automaticé la sincronización de contactos, la creación de borradores con documentación adjunta y la centralización de la actividad comercial. Cuando los nodos de n8n no cubrían una necesidad, utilicé código y llamadas directas a las APIs, como para incorporar imágenes y adjuntos a los correos.',
        result:
          'Los tres flujos están en producción y reducen tareas manuales de gestión y seguimiento. Los contactos se sincronizan, las visitas quedan centralizadas y los correos se preparan para que el comercial los revise y envíe.',
      },
      stack: ['n8n', 'JavaScript', 'APIs REST'],
      integrations: ['HubSpot', 'Gmail', 'Google Drive', 'Mailchimp'],
      articles: [
        {
          title: 'Automatización con n8n e IA: 7 lecciones de proyectos reales',
          href: 'https://www.dreams.es/transformacion-digital/ia-automatizacion/automatizacion-con-n8n-e-ia-7-lecciones-de-proyectos-reales',
          lang: 'es',
        },
      ],
    },
    {
      key: 'news-selection',
      id: 'seleccion-de-noticias',
      navLabel: 'Noticias con IA',
      title: 'Selección y validación de noticias con IA',
      company: 'Dreams',
      steps: {
        context:
          'Un equipo de comunicación necesitaba revisar distintos medios para localizar noticias relevantes de su sector. La búsqueda exigía aplicar criterios editoriales y descartar duplicados entre numerosas publicaciones.',
        contribution:
          'Desarrollé el flujo con n8n, modelos de lenguaje y JavaScript. Ajusté las instrucciones y la selección de modelos, separé las tareas de los agentes e incorporé comprobaciones mediante código para validar sus resultados.',
        solution:
          'El flujo recopila noticias y utiliza un agente para evaluar su relevancia y otro para detectar duplicados y comprobar su ámbito geográfico. Antes de preparar el correo, el código contrasta los enlaces con las fuentes originales y recupera sus titulares, evitando que la IA los empareje incorrectamente.',
        result:
          'El flujo genera un resumen por correo con las noticias seleccionadas y sus enlaces originales. Combina el criterio editorial aplicado por los modelos con validaciones de código para reducir la revisión manual y controlar errores.',
      },
      stack: ['n8n', 'Modelos de lenguaje', 'JavaScript'],
      articles: [
        {
          title: 'ChatGPT, Claude o Gemini: qué IA elegir para tu empresa',
          href: 'https://www.dreams.es/transformacion-digital/ia-automatizacion/chatgpt-claude-o-gemini-que-ia-elegir-para-tu-empresa',
          lang: 'es',
        },
      ],
    },
    {
      key: 'admin-panel',
      id: 'panel-de-administracion',
      navLabel: 'Panel',
      title: 'Modernización de un panel de administración',
      company: 'Dreams',
      steps: {
        context:
          'Un panel de administración antiguo necesitaba actualizarse para funcionar correctamente en navegadores actuales y facilitar la gestión de archivos, conservando las funcionalidades existentes.',
        contribution:
          'Me encargué de renovar el panel, adaptar sus funcionalidades y mejorar la gestión de archivos. Trabajé en la administración de usuarios y permisos con MVC y vistas Razor.',
        solution:
          'Actualicé las vistas y los componentes que presentaban problemas de compatibilidad e integré la carga de archivos en el propio panel. Mantuve las funcionalidades necesarias para que los usuarios pudieran continuar con sus tareas habituales.',
        result:
          'Un panel actualizado para navegadores actuales, con la carga de archivos integrada y una gestión más sencilla, conservando las funcionalidades del sistema anterior.',
      },
      stack: ['C#', 'ASP.NET MVC', 'Razor', 'SQL Server'],
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
        key: 'value',
        question: '¿Qué puedo aportar a tu equipo?',
        answer:
          'Experiencia en aplicaciones reales: desarrollar funcionalidades, interpretar reglas de negocio y trabajar con sistemas existentes. Además de implementar lo solicitado, analizo cómo encaja en el conjunto y propongo mejoras cuando detecto una forma más sencilla de resolverlo.',
      },
      {
        key: 'background',
        question: '¿Qué respalda mi trabajo?',
        answer:
          'Una titulación oficial en Desarrollo de Aplicaciones Multiplataforma, formación complementaria en desarrollo web y experiencia profesional desarrollando y manteniendo aplicaciones para clientes reales.',
      },
      {
        key: 'automation-criteria',
        question: '¿Cómo decido qué conviene automatizar?',
        answer:
          'Primero analizo cómo funciona el proceso, qué herramientas intervienen y qué excepciones aparecen. Valoro qué pasos se pueden automatizar y cuáles necesitan revisión humana, buscando reducir trabajo manual sin complicar el proceso.',
      },
      {
        key: 'automation-maintenance',
        question: '¿Cómo cuido que una automatización siga funcionando?',
        answer:
          'Además de construir el flujo, me ocupo de las validaciones, los avisos de error y el mantenimiento. Mi experiencia incluye resolver incidencias y ajustar las integraciones cuando cambian las herramientas o las necesidades del equipo.',
      },
    ],
  },
}
