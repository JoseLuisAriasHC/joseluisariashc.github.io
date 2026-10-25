import { caseImages } from './images'
import type { SiteContent } from './types'

// Traducción de es.ts: cualquier cambio en el español se repite aquí
export const en: SiteContent = {
  locale: 'en',

  person: {
    name: 'Jose Luis Arias',
    role: 'Software developer',
    location: 'Zaragoza, Spain',
    links: {
      linkedin: 'https://www.linkedin.com/in/jose-luis-a-66aab828a/',
      github: 'https://github.com/JoseLuisAriasHC',
      email: 'joseluisariashc@gmail.com',
    },
  },

  ui: {
    skipToContent: 'Skip to content',
    sectionsNav: 'Sections',
    contact: 'Contact',
    email: 'Email',
    nextSection: 'Next section',
    backToTop: 'Back to top',
    menu: 'Menu',
    closeMenu: 'Close menu',
    opensInNewTab: 'opens in a new tab',
    seeWork: 'See featured work',
    downloadCv: 'Download CV',
    writeEmail: 'Send an email',
    copyEmail: 'Copy',
    emailCopied: 'Copied',
    viewLinkedin: 'View LinkedIn profile',
    mainStack: 'Main technologies',
    present: 'present',
    stack: 'Technologies',
    integrations: 'Integrations',
    articles: 'Articles',
    caseSteps: {
      context: 'Context',
      contribution: 'My contribution',
      solution: 'Solution',
      result: 'Result',
    },
    imagePending: 'Image pending',
    enlargeImage: 'Enlarge image',
    closeImage: 'Close',
    alternateLanguage: { label: 'Español', href: '/', lang: 'es' },
  },

  hero: {
    id: 'home',
    navLabel: 'Home',
    headline: 'Backend development and automation',
    stack: ['C#', '.NET', 'SQL Server', 'n8n'],
    intro:
      'I build web applications, modernize existing systems and automate business processes. My work focuses on the backend and systems integration, from admin panels to workflows that connect different tools. I like to understand how each process works and build solutions that make day-to-day work easier and are simple to maintain.',
    photoAlt: 'Portrait of Jose Luis Arias',
  },

  career: {
    id: 'career',
    navLabel: 'Career',
    title: 'Career and education',
    experienceTitle: 'Experience',
    jobs: [
      {
        key: 'dreams-junior',
        role: 'Junior software developer',
        company: 'Dreams',
        period: { start: '2025-10' },
        summary:
          'I build web applications with C#, .NET and SQL Server, and take part in system modernization, ERP integration and data migration. I also build and maintain automations with n8n, JavaScript and APIs to connect sales tools, and work with AI models to select news and query technical documentation.',
      },
      {
        key: 'dreams-internship',
        role: 'Web developer intern',
        company: 'Dreams',
        period: { start: '2025-01', end: '2025-10' },
        summary:
          'I helped develop and maintain applications with Laravel and ASP.NET Core, adding features and resolving issues. I worked on admin panels, authentication and interface redesigns with Vue, JavaScript, and Blade and Razor views.',
      },
      {
        key: 'schnell-internship',
        role: 'Web developer intern',
        company: 'Schnell Software',
        period: { start: '2023-03', end: '2023-06' },
        summary:
          'I made interface improvements to web applications and developed file reading and processing features. I also helped fix bugs and add backend features.',
      },
    ],
    educationTitle: 'Education',
    education: [
      {
        key: 'nett-master',
        title: "Master's in Web Development",
        center: 'NETT Digital School',
        period: { start: '2025-01', end: '2025-09' },
        summary:
          'Full-stack web development training covering PHP, backend and frontend frameworks, databases and content management systems. It also covers version control, technical SEO, usability and agile methodologies.',
      },
      {
        key: 'dam',
        title: 'Higher Technician in Multiplatform Application Development',
        center: 'Izquierdo FP',
        period: { start: '2021-09', end: '2023-09' },
        summary:
          'Training in object-oriented programming, relational databases and web and mobile application development, as well as ERP and CRM system administration and programming.',
        grade: 'Grade: 9/10',
      },
    ],
  },

  cases: [
    {
      key: 'b2b-platform',
      id: 'b2b-platform',
      navLabel: 'B2B platform',
      title: 'B2B platform modernization and selective data migration',
      company: 'Dreams',
      steps: {
        context:
          "A B2B platform serving several clients had accumulated features and patches that made it hard to maintain. Modernizing it meant reorganizing the code and data while preserving each client's specific needs.",
        contribution:
          'I developed the data and file migration, the catalog and the shopping cart, with validations based on contract, role and user. I also proposed improvements to the data model and carried out functional testing.',
        solution:
          'I built a console application that migrates the selected contracts and their related data through SQL scripts, respecting the dependencies between tables. While developing the catalog, I also simplified its structure: one of my accepted proposals was to replace the N:M relationship between products and variants with a 1:N one, which better reflected how it works.',
        result:
          'A catalog and cart adapted and tested, with a migration process to the new model. The platform is still in development, and the migration keeps evolving with its needs.',
      },
      stack: ['C#', '.NET', 'SQL Server'],
      image: {
        ...caseImages['b2b-platform'],
        alt: 'Illustration of the migration: tangled tables from the old system, a selection of some contracts, and the new model with a base product, its variants and the catalog with a cart.',
      },
    },
    {
      key: 'automation',
      id: 'n8n-automation',
      navLabel: 'Automation',
      title: 'Sales process automation',
      company: 'Dreams',
      steps: {
        context:
          'The sales team needed to keep contacts up to date across tools, prepare emails with commercial terms and centralize their visits. These tasks required moving information by hand and could delay customer follow-up.',
        contribution:
          'I developed the three workflows with n8n and JavaScript, integrating HubSpot, Gmail, Google Drive and Mailchimp through their APIs. I also maintained the instance and set up alerts to detect and fix errors.',
        solution:
          "I automated contact syncing, the creation of email drafts with attached documents and the centralization of sales activity. When n8n's nodes didn't cover a need, I used code and direct API calls, for example to add images and attachments to the emails.",
        result:
          'The three workflows are in production and reduce manual admin and follow-up work. Contacts stay in sync, visits are centralized, and emails are prepared for the salesperson to review and send.',
      },
      stack: ['n8n', 'JavaScript', 'REST APIs'],
      integrations: ['HubSpot', 'Gmail', 'Google Drive', 'Mailchimp'],
      image: {
        ...caseImages.automation,
        alt: 'n8n workflow that checks the attachment size, builds the MIME message and creates the draft through the Gmail API.',
      },
      articles: [
        {
          title: 'Automation with n8n and AI: 7 lessons from real projects (in Spanish)',
          href: 'https://www.dreams.es/transformacion-digital/ia-automatizacion/automatizacion-con-n8n-e-ia-7-lecciones-de-proyectos-reales',
          lang: 'es',
        },
      ],
    },
    {
      key: 'news-selection',
      id: 'ai-news-selection',
      navLabel: 'AI news',
      title: 'AI-powered news selection and validation',
      company: 'Dreams',
      steps: {
        context:
          'A communications team needed to monitor several media outlets to find news relevant to their sector. The search required applying editorial criteria and discarding duplicates across many publications.',
        contribution:
          'I developed the workflow with n8n, language models and JavaScript. I refined the prompts and model selection, split the tasks between agents and added code checks to validate their output.',
        solution:
          'The workflow collects news and uses one agent to assess relevance and another to detect duplicates and check geographic scope. Before the email is prepared, code matches the links against the original sources and retrieves their headlines, preventing the AI from pairing them incorrectly.',
        result:
          'The workflow produces an email digest with the selected news and their original links. It combines the editorial judgment applied by the models with code validation to reduce manual review and keep errors under control.',
      },
      stack: ['n8n', 'Language models', 'JavaScript'],
      image: {
        ...caseImages['news-selection'],
        alt: 'n8n workflow with two AI agents: the first assesses how relevant each news item is and the second filters out duplicates, with a code step between them that processes and cleans the results.',
      },
      articles: [
        {
          title: 'ChatGPT, Claude or Gemini: which AI to choose for your business (in Spanish)',
          href: 'https://www.dreams.es/transformacion-digital/ia-automatizacion/chatgpt-claude-o-gemini-que-ia-elegir-para-tu-empresa',
          lang: 'es',
        },
      ],
    },
    {
      key: 'admin-panel',
      id: 'admin-panel',
      navLabel: 'Admin panel',
      title: 'Admin panel modernization',
      company: 'Dreams',
      steps: {
        context:
          'An old admin panel needed updating to work properly in current browsers and make file management easier, while keeping its existing features.',
        contribution:
          'I was responsible for renewing the panel, adapting its features and improving file management. I worked on user and permission management with MVC and Razor views.',
        solution:
          'I updated the views and components that had compatibility issues and built file uploads into the panel itself. I kept the features users needed to carry on with their usual tasks.',
        result:
          'A panel updated for current browsers, with built-in file uploads and simpler management, keeping the features of the previous system.',
      },
      stack: ['C#', 'ASP.NET MVC', 'Razor', 'SQL Server'],
      image: {
        ...caseImages['admin-panel'],
        alt: 'Illustration of the panel renewal: the old panel in the background and, in front, the new one with the same sections, the file upload area with its progress and the users table with their permissions.',
      },
    },
  ],

  contact: {
    id: 'contact',
    navLabel: 'Contact',
    title: 'Contact',
    intro:
      "If you're looking for someone for .NET backend development or process automation, email me or reach out on LinkedIn.",
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        key: 'value',
        question: 'What can I bring to your team?',
        answer:
          "Experience with real-world applications: building features, interpreting business rules and working with existing systems. Beyond implementing what's asked, I look at how it fits into the whole and suggest improvements when I see a simpler way to solve it.",
      },
      {
        key: 'background',
        question: 'What backs up my work?',
        answer:
          'An official qualification in Multiplatform Application Development, additional training in web development and professional experience building and maintaining applications for real clients.',
      },
      {
        key: 'automation-criteria',
        question: "How do I decide what's worth automating?",
        answer:
          'First I look at how the process works, which tools are involved and what exceptions come up. I assess which steps can be automated and which need human review, aiming to reduce manual work without complicating the process.',
      },
      {
        key: 'automation-maintenance',
        question: 'How do I make sure an automation keeps working?',
        answer:
          "Beyond building the workflow, I handle validation, error alerts and maintenance. My experience includes resolving incidents and adjusting integrations when the tools or the team's needs change.",
      },
    ],
  },
}
