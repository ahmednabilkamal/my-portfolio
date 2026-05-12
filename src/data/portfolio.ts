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
  storeLinks?: SocialLink[];
  logoUrl?: string;
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
  name: "Ahmed Nabil",
  title:
    "Senior Software Engineer – Frontend (React Native, Android & React.js)",
  location: "6 October, Giza",
  phone: "(+2011) 445 174 40",
  email: "ahmednabil.2016@yahoo.com",
  cvUrl: "/Ahmed-Nabil-SE.pdf",
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmed-nabil-a8130895/",
    },
    {
      label: "GitHub",
      href: "https://github.com/ahmednabilkamal",
    },
  ],
  summary:
    "Senior Mobile Developer with 10+ years of experience building cross-platform mobile applications for Android and iOS. Proficient in JavaScript, TypeScript, and Agile methodologies, with a strong track record in optimizing app performance, integrating third-party APIs, and delivering user-friendly solutions.",
  stats: [
    { label: "Years Experience", value: "10+" },
    { label: "Platforms", value: "Android & iOS" },
    { label: "Core Focus", value: "React Native" },
  ],
  experience: [
    {
      company: "Interact Technology Solutions",
      location: "Maadi",
      role: "Senior Software Engineer – Frontend",
      period: "Aug 2021 – Present",
      highlights: [
        "Led development of a React Native inventory management app, reducing manual processes by 80%.",
        "Mentored junior developers and conducted code reviews to ensure best practices.",
        "Integrated Firebase for real-time data synchronization and push notifications.",
      ],
    },
    {
      company: "LemonAI LLC",
      location: "Maadi",
      role: "React Native Developer",
      period: "Feb 2020 – Aug 2021",
      highlights: ["Built a React Native app for sports club management."],
    },
    {
      company: "Spell Advertising LLC",
      location: "Maadi",
      role: "Senior Android Developer",
      period: "Jun 2017 – Jan 2020",
      highlights: [
        "Developed and maintained Android apps for advertising clients.",
        "Integrated Google Maps API and payment gateways.",
        "Improved app performance through optimization and debugging.",
      ],
    },
    {
      company: "Multi Mega",
      location: "Maadi",
      role: "Android Developer",
      period: "Sep 2016 – May 2017",
      highlights: [
        "Contributed to Android e-commerce applications.",
        "Worked on RESTful API integration and database management.",
        "Resolved app crashes and improved user satisfaction.",
      ],
    },
  ],
  projects: [
    {
      name: "Faid",
      tagline: "On-demand local services platform",
      description:
        "Mobile app for discovering nearby service providers and managing service requests through a simple, guided booking flow.",
      storeLinks: [
        {
          label: "iOS",
          href: "https://apps.apple.com/us/app/faid/id6756526201",
        },
        {
          label: "Android",
          href: "https://play.google.com/store/apps/details?id=com.faid.app&hl=en",
        },
      ],
      stack: ["React Native", "iOS", "Android"],
    },
    {
      name: "Biban",
      tagline: "Entrepreneurship forum platform",
      description:
        "Event and ecosystem platform for entrepreneurs with agenda, notifications, and forum-focused digital experiences.",
      storeLinks: [
        {
          label: "iOS",
          href: "https://apps.apple.com/us/app/biban/id6723862494",
        },
        {
          label: "Android",
          href: "https://play.google.com/store/apps/details?id=com.bibanglobal.sa&hl=en",
        },
      ],
      stack: ["React Native", "iOS", "Android"],
    },
    {
      name: "Asima",
      tagline: "iOS application",
      description:
        "Productized iOS mobile experience delivered with a focus on polished UI and production-grade release quality.",
      storeLinks: [
        {
          label: "iOS",
          href: "https://apps.apple.com/us/app/asima-%D8%A7%D8%B3%D9%8A%D9%85%D8%A7/id6761766764",
        },
      ],
      stack: ["iOS"],
    },
    {
      name: "NASAQ",
      tagline: "iOS application",
      description:
        "Published iOS app built for a production release workflow, user-facing performance, and app-store readiness.",
      storeLinks: [
        {
          label: "iOS",
          href: "https://apps.apple.com/us/app/nasaq-%D9%86%D8%B3%D9%82/id6761719275",
        },
      ],
      stack: ["iOS"],
    },
    {
      name: "PureSite",
      tagline: "Cross-platform mobile app",
      description:
        "Cross-platform application delivered for both iOS and Android with a user-focused mobile experience.",
      storeLinks: [
        {
          label: "iOS",
          href: "https://apps.apple.com/us/app/puresite-%D8%A8%D9%8A%D9%88%D8%B1-%D8%B3%D8%A7%D9%8A%D8%AA/id6761421822",
        },
        {
          label: "Android",
          href: "https://play.google.com/store/apps/details?id=com.afsc.PureSite&hl=en",
        },
      ],
      stack: ["React Native", "iOS", "Android"],
    },
    {
      name: "Earno",
      tagline: "Cross-platform mobile app",
      description:
        "Cross-platform product shipped to both stores with production-grade mobile delivery and release management.",
      storeLinks: [
        {
          label: "iOS",
          href: "https://apps.apple.com/us/app/earno-%D8%A5%D9%8A%D8%B1%D9%86%D9%88/id6761137437",
        },
        {
          label: "Android",
          href: "https://play.google.com/store/apps/details?id=com.afsc.earno",
        },
      ],
      stack: ["React Native", "iOS", "Android"],
    },
    {
      name: "Throwback",
      tagline: "Photos, albums & sharing",
      description:
        "Consumer app to save and share photos and videos: digital albums, privacy-controlled sharing, social discovery, and family connections — available on iOS and Android.",
      storeLinks: [
        {
          label: "iOS",
          href: "https://apps.apple.com/us/app/throwback-%D8%AB%D8%B1%D9%88%D8%A8%D8%A7%D9%83/id6762511229",
        },
        {
          label: "Android",
          href: "https://play.google.com/store/apps/details?id=com.venus.throwback&hl=en",
        },
      ],
      logoUrl:
        "https://play-lh.googleusercontent.com/x3FenW3dmoglSAGB3wNxlfVX4Cvd6LG-YS58Qfh3wC6Lg8nzZhJedx3zOfDojwa9Nw73SLWBG7ro12lh2-WvSfs=w240-h480",
      stack: ["iOS", "Android"],
    },
    {
      name: "GoodsMart",
      tagline: "Premium household delivery app",
      description:
        "Android shopping app for scheduled household delivery with late-night ordering, no-delivery-fee convenience, and doorstep drop-box fulfillment.",
      storeLinks: [
        {
          label: "Android",
          href: "https://play.google.com/store/apps/details?id=hussein.apps.talabaty&hl=en",
        },
      ],
      logoUrl:
        "https://play-lh.googleusercontent.com/xm5xfIvwQJhQLZk5kNRUNyMSAcTwWFDUswayB-CtaXWkdsnUm1SmMfUVhvMRdo2deS0=w240-h480",
      stack: ["Android"],
    },
    {
      name: "Taxi Wattan Driver",
      tagline: "Driver-side ride hailing app",
      description:
        "Driver mobile app with trip requests, GPS navigation, earnings tracking, and bilingual UX.",
      storeLinks: [
        {
          label: "iOS",
          href: "https://apps.apple.com/us/app/%D8%B3%D9%88%D8%A7%D9%82-%D8%AA%D9%83%D8%B3%D9%8A-%D9%88%D8%B7%D9%86/id6755447750",
        },
        {
          label: "Android",
          href: "https://play.google.com/store/apps/details?id=com.vexxaai.taxi_watan_driver",
        },
      ],
      stack: ["React Native", "iOS", "Android"],
    },
    {
      name: "Taxi Wattan Rider",
      tagline: "Passenger ride hailing app",
      description:
        "Passenger app for booking rides, viewing real-time driver updates, and managing trips from a simple mobile flow.",
      storeLinks: [
        {
          label: "iOS",
          href: "https://apps.apple.com/us/app/%D8%AA%D9%83%D8%B3%D9%8A-%D9%88%D8%B7%D9%86/id6755160104",
        },
        {
          label: "Android",
          href: "https://play.google.com/store/apps/details?id=com.vexxaai.taxiwatanuser",
        },
      ],
      stack: ["React Native", "iOS", "Android"],
    },
  ],
  skills: [
    {
      title: "Programming Languages",
      items: ["Java", "JavaScript", "TypeScript"],
    },
    { title: "Web Development", items: ["HTML", "CSS", "SQL", "React.js"] },
    { title: "Mobile Development", items: ["Android", "React Native"] },
    {
      title: "Tools & Frameworks",
      items: ["Firebase", "State Management", "Git", "Agile"],
    },
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science",
      school: "Faculty of Computers and Information – Cairo University",
    },
  ],
};
