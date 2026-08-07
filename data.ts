// All site data goes here — dates, nav links, prizes, FAQ, etc.
// Import in components with: import { ... } from "@/data"

export const PHASES = [
  {
    label: "Registration opens",
    date: "2026-08-20T00:00:00+08:00",
  },
  {
    label: "Registration closes",
    date: "2026-10-09T23:59:59+08:00",
  },
  {
    label: "Hack-A-Ton begins",
    date: "2026-10-15T20:30:00+08:00",
  },
] as const;

export const HERO = {
  badge: "CODEDOJO",
  heading: {
    prefix: "Hack-",
    highlight: "A",
    suffix: "-TON",
  },
  eventInfo: [
    { icon: "calendar" as const, text: "October 16-17, 2026" },
    { icon: "mapPin" as const, text: "KICT, IIUM" },
  ],
  description:
    "Join our hackathon and bring your ideas to life. Whether you're a beginner or an experienced developer, this is your chance to learn, collaborate, and compete for exciting prizes.",
  cta: {
    primary: {
      text: "Enroll your team",
      href: "https://docs.google.com/forms/d/e/1FAIpQLScYaCuuy-nYPhO2xI2lu5KybvESA6KOJxtMNrGz8N00zfSZmw/viewform?usp=header",
    },
    secondary: {
      text: "See the timeline",
      href: "#schedule",
    },
  },
  logo: {
    src: "/logo hackaton.png",
    alt: "Hack-a-ton Logo",
  },
} as const;

export const ABOUT = {
  badge: "HACK-A-TON THEME :",
  heading: "Empowering Local Communities",
  description:
    "Participants are encouraged to develop innovative web solutions that address real-world challenges and create meaningful impacts for local communities through technology.",
} as const;

export const BENEFITS = {
  badge: "Why join",
  heading: "Turn Ideas into Reality",
  description:
    "Gain hands-on experience, strengthen your skills, and build a functional web application in a 24-hour hackathon.",
  cards: [
    {
      title: "Hands-on Learning",
      description:
        "Apply your web development knowledge by building a functional and responsive web application within 24 hours.",
    },
    {
      title: "Collaboration & Skill Development",
      description:
        "Work in teams to enhance your communication, teamwork, problem-solving, and time management skills.",
    },
    {
      title: "Innovation & Portfolio Building",
      description:
        "Create an innovative web solution and enhance your portfolio for future opportunities.",
    },
  ],
  stats: [
    { value: "500+", label: "Students" },
    { value: "48", label: "Hours" },
    { value: "15+", label: "Schools" },
    { value: "20+", label: "Mentors" },
  ],
} as const;

export const SCHEDULE = {
  badge: "Schedule",
  heading: "The dojo timeline",
  description:
    "Three days, one relentless build. Here's how it runs.",
  days: [
    {
      day: "Pre-Hack-A-Ton",
      description:
        "Online briefing to introduce the hackathon, event guidelines, and participant preparation.",
    },
    {
      day: "DAY 1",
      description:
        "Opening ceremony, theme announcement, team formation, and 24-hour web development challenge.",
    },
    {
      day: "DAY 2",
      description:
        "Project submission, team presentations, judging session, and award & closing ceremony.",
    },
  ],
} as const;

export const SPONSORS = {
  heading: "Calling For Sponsors",
  description:
    "Support CodeDojo: Hack-A-Ton and gain valuable brand exposure among students and aspiring developers. Sponsors will benefit from product showcases, social media promotions, logo placement on official event materials, and official recognition through appreciation plaques and e-certificates.",
  contactLabel: "For any inquiries or further details, please contact:",
  contactEmail: "partnerships@motionukict.com",
} as const;
