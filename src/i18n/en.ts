// English translations
import type { Translations } from './es';

export const en: Translations = {
  siteDescription: 'CGuardPro is a security operations platform for private security companies. Manage guards, patrols, scheduling, dispatch, incidents, clients, GPS tracking, and reports in one system.',

  nav: {
    features: 'Platform',
    howItWorks: 'How It Works',
    pricing: 'Pricing',
    about: 'About',
    blog: 'Blog',
    signIn: 'Sign In',
    requestDemo: 'Book a Demo',
  },

  footer: {
    tagline: 'The security operations platform built for modern private security companies. One platform. Total command.',
    getStarted: 'Get Started Free',
    sections: {
      product: 'Product',
      company: 'Company',
      industry: 'Industry',
    },
    links: {
      features: 'Features',
      pricing: 'Pricing',
      howItWorks: 'How It Works',
      requestDemo: 'Request Demo',
      about: 'About Us',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      guardManagement: 'Guard Management',
      clientManagement: 'Client Management',
      incidentReporting: 'Incident Reporting',
      mobileApp: 'Mobile App',
    },
    rights: 'All rights reserved.',
    builtFor: 'Built for security professionals.',
  },

  hero: {
    badge: 'Security Operations Platform',
    headline1: 'Run Your Entire Security Company',
    headline2: 'From One Platform',
    subheadline: 'CGuardPro is a modern security operations platform that helps private security companies manage guards, clients, patrols, dispatch, incidents, scheduling, payroll, and real-time operations from one connected command center.',
    supporting: 'Built for security companies that need more visibility, faster response times, stronger guard accountability, and better client communication.',
    ctaPrimary: 'Book a Live Demo',
    ctaSecondary: 'Explore Platform',
    trust1: 'Web + iOS + Android',
    trust2: 'English & Spanish',
    trust3: 'Live in one day',
    dashboardUrl: 'app.cguardpro.com/command-center',
    dashboardAlt: 'CGuardPro security guard management software dashboard — live GPS guard tracking map, operations metrics, and real-time activity',
  },

  // Stats (product facts — no invented customer numbers)
  stats: [
    { value: '1', label: 'Connected Platform', sub: 'operations, guards, supervisors & clients' },
    { value: '3', label: 'Mobile Apps', sub: 'for guards, supervisors & clients' },
    { value: '24/7', label: 'Real-Time Visibility', sub: 'live GPS, alerts & dispatch' },
    { value: '100%', label: 'Digital Reporting', sub: 'no more paper or spreadsheets' },
  ],

  problem: {
    badge: 'The Problem',
    headline: 'Security Operations Shouldn’t Feel Like Firefighting',
    body: 'Missed shifts, last-minute call offs, paper reports, client complaints, payroll disputes, and disconnected tools make it harder to run a profitable security company. CGuardPro brings your operations together so your team can see what is happening, respond faster, and keep every site accountable.',
    bullets: [
      'Reduce missed patrols and late arrivals',
      'Track guards and vehicles in real time',
      'Replace paper reports with digital incident reporting',
      'Give clients better visibility into service activity',
      'Simplify scheduling, dispatch, and workforce management',
      'Keep patrols, reports, GPS, and communication connected',
    ],
  },

  features: {
    badge: 'The Command Center',
    headline1: 'Your Entire Security Operation.',
    headline2: 'One Command Center.',
    subheadline: 'CGuardPro connects the tools your operations team depends on every day. From live guard tracking to incident reports and client portals, everything works together in one security workforce management platform.',
    items: [
      {
        title: 'Live GPS Tracking',
        desc: 'Know where guards, supervisors, and vehicles are in real time.',
      },
      {
        title: 'Guard Patrol Tracking',
        desc: 'Use QR codes, GPS checkpoints, photos, and timestamps to verify every patrol.',
      },
      {
        title: 'Security Scheduling',
        desc: 'Build shifts, assign guards, manage call offs, and prevent coverage gaps.',
      },
      {
        title: 'Dispatch & Communication',
        desc: 'Send updates, instructions, alerts, and emergency messages from one place.',
      },
      {
        title: 'Incident Reporting',
        desc: 'Create professional incident reports with photos, notes, time stamps, and client-ready summaries.',
      },
      {
        title: 'Client Portal',
        desc: 'Give clients access to reports, patrol history, visitor logs, and site activity.',
      },
    ],
    linksHtml: 'Go deeper: see why <a href="/en/blog/security-guard-scheduling-software-vs-spreadsheets" class="text-brand underline decoration-brand/40 underline-offset-4 hover:decoration-brand transition-colors">security guard scheduling software</a> beats spreadsheets, how <a href="/en/blog/gps-guard-tour-systems-complete-guide" class="text-brand underline decoration-brand/40 underline-offset-4 hover:decoration-brand transition-colors">guard patrol tracking</a> verifies every tour, and how <a href="/en/blog/digital-vs-paper-incident-reporting-security" class="text-brand underline decoration-brand/40 underline-offset-4 hover:decoration-brand transition-colors">digital incident reporting</a> protects your contracts.',
  },

  ai: {
    badge: 'AI & Intelligence',
    headline: 'AI Built for Modern Security Operations',
    body: 'CGuardPro helps your team move faster by turning daily security activity into clear operational intelligence.',
    bullets: [
      'Generate incident summaries in seconds',
      'Search reports and activity history faster',
      'Identify missed patrols, late arrivals, and unusual activity',
      'Help dispatchers make faster decisions',
      'Turn guard activity into client-ready insights',
    ],
  },

  liveOps: {
    badge: 'Live Operations',
    headline: 'Know What’s Happening Right Now',
    body: 'The moment something changes, your team knows. CGuardPro gives operations managers real-time visibility into guards, patrols, incidents, alerts, visitors, and site activity.',
    alerts: [
      'Guard arrived late',
      'Patrol checkpoint missed',
      'Panic alert activated',
      'Incident report submitted',
      'Vehicle left assigned area',
      'Visitor checked in',
      'Supervisor inspection completed',
    ],
    screenshotUrl: 'app.cguardpro.com/incidents',
    screenshotAlt: 'Security incident reporting software in CGuardPro — live incident queue with photos, timestamps, and case status',
  },

  clientXp: {
    badge: 'Client Experience',
    headline: 'Give Clients the Transparency They Expect',
    body: 'Security clients want proof that service is being delivered. CGuardPro helps you build trust with professional reports, completed patrol history, GPS verification, photos, and real-time activity records.',
    bullets: [
      'Share completed patrols',
      'Deliver professional incident reports',
      'Show photo evidence and timestamps',
      'Provide visitor and site activity logs',
      'Improve client retention with better communication',
    ],
  },

  mobile: {
    badge: 'Mobile App',
    headline1: 'A Guard App',
    headline2: 'Built for the Field',
    body: 'Your guards need simple tools that work while they are on duty. The CGuardPro mobile app helps officers clock in, follow post orders, scan patrol checkpoints, submit reports, upload photos, and send emergency alerts from their phone.',
    features: [
      'Clock in and out',
      'GPS tracking',
      'QR patrol checkpoints',
      'Incident reports',
      'Photo evidence',
      'Push notifications',
      'Digital post orders',
      'Emergency alerts',
      'Offline support where possible',
    ],
    ctaDemo: 'Book a Live Demo',
    ctaLearn: 'See the guard app features',
    ctaLearnHref: '/en/blog/security-guard-mobile-app-essential-features',
    phoneOnDuty: 'ON DUTY',
    phoneSite: 'Site A — North Gate',
    phoneShift: 'Shift: 22:00 – 06:00',
    phoneCheckpoints: ['Checkpoint 1 ✓', 'Checkpoint 2 ✓', 'Checkpoint 3 ⏳'],
    phoneReportBtn: 'File Incident Report',
  },

  howItWorks: {
    badge: 'How It Works',
    headline1: 'Up and running',
    headline2: 'in one day',
    steps: [
      { step: '01', title: 'Set Up Your Company', desc: 'Create your account, configure your locations, and import your guard roster in under 30 minutes.' },
      { step: '02', title: 'Onboard Clients', desc: 'Invite clients to their portal. Assign guards, define coverage zones, and agree on service levels.' },
      { step: '03', title: 'Guards Work Any Shift', desc: 'Your team uses the CGuardPro mobile app to clock in, scan checkpoints, and file reports.' },
      { step: '04', title: 'You Stay in Command', desc: 'Monitor everything live from the web dashboard. Get alerts, generate invoices, and grow your business.' },
    ],
  },

  whySwitch: {
    badge: 'Why CGuardPro',
    headline: 'Why Security Companies Switch to CGuardPro',
    body: 'Most security companies outgrow spreadsheets, paper reports, text messages, and disconnected guard tour systems. CGuardPro gives your business one connected platform built specifically for private security operations.',
    bullets: [
      'One platform instead of multiple disconnected tools',
      'Modern interface for office teams, supervisors, guards, and clients',
      'Better accountability across every site',
      'Faster dispatch and incident response',
      'Easier scheduling and payroll preparation',
      'Stronger client reporting',
      'Scales from small teams to large security operations',
    ],
  },

  results: {
    badge: 'Outcomes',
    headline: 'More Control. Less Administration.',
    body: 'CGuardPro helps security companies reduce manual work, improve field accountability, and deliver a better client experience.',
    cards: [
      'Reduce scheduling errors',
      'Improve guard accountability',
      'Respond to incidents faster',
      'Cut paperwork and manual reporting',
      'Strengthen client trust',
      'Scale operations without adding unnecessary admin work',
    ],
  },

  cta: {
    headline: 'Ready to Modernize Your Security Operations?',
    subheadline: 'Stop managing your security company with spreadsheets, paper reports, text messages, and disconnected software. CGuardPro gives your team the platform to manage guards, clients, patrols, reports, scheduling, dispatch, and operations in one place.',
    primary: 'Book a Live Demo',
    secondary: 'See How It Works',
  },

  pricing: {
    badge: 'Pricing',
    headline1: 'Simple pricing.',
    headline2: 'No surprises.',
    subheadline: 'One simple plan. Everything included. Start with a 14-day free trial.',
    mostPopular: 'Best Value',
    plans: [
      {
        name: 'CGuardPro',
        price: '5',
        period: '/user/mo',
        desc: 'Everything you need to run your security operation — no hidden fees.',
        features: ['$5 per user — admins, guards, supervisors & clients', 'Shift scheduling & clock-in', 'GPS patrol tracking', 'Incident reporting', 'Advanced reporting & analytics', 'Client portal with branding', 'Invoice generation', 'Mobile app access (iOS & Android)', 'Multi-tenant / franchise support', 'API access', 'Priority support'],
        cta: 'Start Free Trial',
        highlight: true,
      },
      {
        name: 'Implementation',
        price: '250',
        period: ' one-time',
        desc: 'We set up your account, import your data, and get your team running.',
        features: ['Dedicated onboarding specialist', 'Account & site configuration', 'Data import & migration', 'Team training session', 'Custom branding setup', 'Go-live support'],
        cta: 'Request Demo',
        highlight: false,
      },
    ],
    faqTitle: 'Frequently asked questions',
    faqs: [
      { q: 'Is there a free trial?', a: 'Yes. All plans include a 14-day free trial with full feature access. No credit card required to start.' },
      { q: 'Can I change plans later?', a: 'Absolutely. You can upgrade or downgrade at any time. Changes take effect immediately with prorated billing.' },
      { q: 'How does the mobile app work for guards?', a: 'Guards download the CGuardPro mobile app on iOS or Android. They clock in, run patrols, scan checkpoints, and submit reports directly from their phone. Everything syncs instantly to your dashboard.' },
      { q: 'Do clients need to pay for portal access?', a: 'No. Client portal access is included in your plan. You invite clients at no extra cost, and they can view reports, guard activity, and incidents for their sites.' },
      { q: 'Is my data secure?', a: 'Yes. All data is encrypted in transit and at rest. We follow industry security best practices and maintain a 99.9% uptime SLA.' },
    ],
  },

  contact: {
    badge: 'Contact Us',
    headline1: 'See CGuardPro',
    headline2: 'in action',
    subheadline: 'Request a personalized demo and we\'ll show you exactly how CGuardPro can streamline your security operations.',
    phone: 'Phone',
    email: 'Email',
    formTitle: 'Request a Demo',
    firstName: 'First Name',
    lastName: 'Last Name',
    workEmail: 'Work Email',
    company: 'Company Name',
    guards: 'Number of Guards',
    guardsPlaceholder: 'Select range',
    guardsOptions: ['1 – 10 guards', '11 – 50 guards', '51 – 150 guards', '150+ guards'],
    message: 'How can we help?',
    messagePlaceholder: 'Tell us about your operation...',
    submit: 'Send Request',
    submitting: 'Sending…',
    successMsg: '✓ Thanks! We\'ll be in touch within one business day.',
    required: '*',
    firstNamePlaceholder: 'John',
    lastNamePlaceholder: 'Smith',
    emailPlaceholder: 'john@yourcompany.com',
    companyPlaceholder: 'Secure Shield Corp.',
  },

  about: {
    badge: 'About Us',
    headline1: 'Built for the security industry.',
    headline2: 'By people who get it.',
    subheadline: 'CGuardPro was built to solve a real problem: security companies running critical operations on spreadsheets, WhatsApp, and paper forms. We set out to build the platform the industry actually deserves.',
    storyTitle: 'Our Story',
    story: [
      'Security companies protect what matters most — people, property, and assets. Yet the back-office tools available to them were decades behind. Guard schedules lived in Excel. Incident reports went out via WhatsApp. Invoices were handwritten.',
      'We built CGuardPro to change that. A modern, mobile-first platform that gives security operations the same quality of tooling that large enterprises take for granted — accessible to companies of any size.',
      'From day one, every feature has been designed with one question in mind: does this make a security professional\'s job easier?',
    ],
    statsLabels: ['Companies Onboarded', 'Guards Managed Daily', 'Countries Served', 'Platform Rating'],
    valuesTitle: 'What we stand for',
    values: [
      { title: 'Mission-Driven', desc: 'We exist to help security professionals do their jobs better. Every feature we build serves that mission.' },
      { title: 'Built for Professionals', desc: 'CGuardPro is designed by people who understand the security industry\'s unique operational demands.' },
      { title: 'Relentlessly Reliable', desc: '99.9% uptime. Your operation never sleeps, and neither does our infrastructure.' },
      { title: 'Partner, Not Vendor', desc: 'We treat each security company as a long-term partner. Your success directly drives our roadmap.' },
    ],
    ctaTitle: 'Ready to see it in action?',
    ctaSubtitle: 'Schedule a 30-minute demo and we\'ll walk you through the entire platform.',
    ctaBtn: 'Book Your Demo',
  },

  notFound: {
    code: '// ERROR 404',
    title: 'Page not found',
    desc: 'The page you\'re looking for doesn\'t exist or has been moved.',
    back: 'Return to Home',
  },

  langSwitcher: {
    label: 'Language',
    es: 'Español',
    en: 'English',
  },
};
