export type SocialLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack?: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Education = {
  degree: string;
  school: string;
};

export type PortfolioData = {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  cvUrl: string;
  social: SocialLink[];
  summary: string;
  stats: { label: string; value: string }[];
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
};

export const portfolio: PortfolioData = {
  name: 'Ahmed Nabil',
  title: 'Senior Software Engineer – Frontend (React Native, Android & React.js)',
  location: '6 October, Giza',
  phone: '(+2011) 445 174 40',
  email: 'ahmednabil.2016@yahoo.com',
  cvUrl: '/Ahmed-Nabil-SE.pdf',
  social: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ahmed-nabil-a8130895/',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/ahmednabilkamal',
    },
  ],
  summary:
    'Senior Mobile Developer with 9+ years of experience building cross-platform mobile applications for Android and iOS. Proficient in JavaScript, TypeScript, and Agile methodologies, with a strong track record in optimizing app performance, integrating third-party APIs, and delivering user-friendly solutions.',
  stats: [
    { label: 'Years Experience', value: '9+' },
    { label: 'Platforms', value: 'Android & iOS' },
    { label: 'Core Focus', value: 'React Native' },
  ],
  experience: [
    {
      company: 'Interact Technology Solutions',
      location: 'Maadi',
      role: 'Senior Software Engineer – Frontend',
      period: 'Aug 2021 – Present',
      highlights: [
        'Led development of a React Native inventory management app, reducing manual processes by 80%.',
        'Mentored junior developers and conducted code reviews to ensure best practices.',
        'Integrated Firebase for real-time data synchronization and push notifications.',
      ],
    },
    {
      company: 'LemonAI LLC',
      location: 'Maadi',
      role: 'React Native Developer',
      period: 'Feb 2020 – Aug 2021',
      highlights: ['Built a React Native app for sports club management.'],
    },
    {
      company: 'Spell Advertising LLC',
      location: 'Maadi',
      role: 'Senior Android Developer',
      period: 'Jun 2017 – Jan 2020',
      highlights: [
        'Developed and maintained Android apps for advertising clients.',
        'Integrated Google Maps API and payment gateways.',
        'Improved app performance through optimization and debugging.',
      ],
    },
    {
      company: 'Multi Mega',
      location: 'Maadi',
      role: 'Android Developer',
      period: 'Sep 2016 – May 2017',
      highlights: [
        'Contributed to Android e-commerce applications.',
        'Worked on RESTful API integration and database management.',
        'Resolved app crashes and improved user satisfaction.',
      ],
    },
  ],
  projects: [
    {
      name: 'Amen Mobile App',
      tagline: 'Track children with designated receiver verification',
      description:
        'Cross-platform React Native app for real-time child location tracking with Google Maps and Firebase notifications.',
      stack: ['React Native', 'Firebase', 'Google Maps API'],
    },
    {
      name: 'Fe El Khedma',
      tagline: 'Service booking cart application',
      description:
        'Cart app for service providers enabling booking and payments with a streamlined user flow.',
    },
    {
      name: 'SMG Mobile App',
      tagline: 'Purchase car spare parts',
      description:
        'E-commerce app for spare parts with secure payments and a user-friendly interface.',
    },
    {
      name: 'Club Master',
      tagline: 'Manage club members, sports, and courses',
      description:
        'Cloud-based system for club admins and members to manage activities and services around the clock.',
    },
    {
      name: 'Service Field App & Dashboard',
      tagline: 'Inventory management system',
      description:
        'Offline-enabled inventory app to track stock levels and resolve customer issues efficiently.',
    },
    {
      name: 'Bayaan – Abu Dhabi Statistics',
      tagline: 'Official statistics platform',
      description:
        'Explore trusted economic, social, and environmental statistics to support research and decisions.',
    },
    {
      name: 'Presence Plus',
      tagline: 'Field mission management',
      description:
        'Real-time mission lifecycle management with CRM and HR integrations.',
    },
    {
      name: 'Biban App',
      tagline: 'Entrepreneurship forum app',
      description:
        'Event platform supporting the entrepreneurship ecosystem with a global focus.',
    },
    {
      name: 'Taxi Wattan (Driver)',
      tagline: 'Driver-side ride-hailing',
      description:
        'Trip requests, GPS navigation, earnings tracking, and bilingual interface for drivers.',
    },
    {
      name: 'Taxi Wattan (Rider)',
      tagline: 'Passenger ride-hailing app',
      description:
        'Passenger-focused Android app with real-time tracking and seamless trip management.',
    },
  ],
  skills: [
    { title: 'Programming Languages', items: ['Java', 'JavaScript', 'TypeScript'] },
    { title: 'Web Development', items: ['HTML', 'CSS', 'SQL', 'React.js'] },
    { title: 'Mobile Development', items: ['Android', 'React Native'] },
    { title: 'Tools & Frameworks', items: ['Firebase', 'State Management', 'Git', 'Agile'] },
  ],
  education: [
    {
      degree: 'B.Sc. in Computer Science',
      school: 'Faculty of Computers and Information – Cairo University',
    },
  ],
};
