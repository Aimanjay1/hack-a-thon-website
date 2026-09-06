export const PRIZES = [
  {
    icon: "Medal",
    place: "Runner-Up",
    amount: "RM 60",
    description: "Nice work! You've earned it.",
    className: "bg-md-surface-container-low",
    featured: false,
    order: "order-2 md:order-1",
  },
  {
    icon: "Trophy",
    place: "Champion",
    amount: "RM 90",
    description:
      "All eyes on you!",
    className: "bg-md-secondary-container md:-translate-y-6 shadow-md-lg",
    featured: true,
    order: "order-1 md:order-2",
  },
  {
    icon: "Award",
    place: "Rising Rookie",
    amount: "RM 30",
    description:
      "Good things come to those who hustle.",
    className: "bg-md-primary-container",
    featured: false,
     order: "order-3 md:order-3",
  },
] as const;

export const LINK_GROUPS = [
  {
    title: "Event",
    links: [
      { label: "Overview", href: "#top" },
      { label: "Schedule", href: "#schedule" },
      { label: "Prizes", href: "#prizes" },
      { label: "FAQ & rules", href: "#faq" },
    ],
  },
  {
    title: "Info",
    links: [
      {
        label: "Code of conduct",
        href: "https://oasis-periwinkle-ec4.notion.site/Hack-A-Ton-Information-Rules-Regulations-3b47dc15b0308024a82dc9697320be96",
      },
      { label: "Sponsors", href: "#sponsors" },
    ],
  },
] as const;

export const SOCIALS = [
  { icon: "MessageCircle", label: "Community chat", href: "#" },
  { icon: "Globe", label: "Website", href: "https://www.motionukict.com/" },
  { icon: "Mail", label: "Email", href: "mailto:contacts@motionukict.com" },
] as const;

export const FAQS = [
  {
    question: "What is Hack-A-Ton?",
    answer:
      "A 24-hour hackathon where students collaborate to create innovative web solutions, as well as a chance to learn, network, and win prizes.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes, but it is affordable. The amount will be announced on our website and social media channels.",
  },
  {
    question: "What should I bring?",
    answer: "Your laptop and charger. We provide meals, snacks, and a place to crash if you need it.",
  },
  {
    question: "Who is organizing this event?",
    answer: "It is organized by Motion-U club, a fascinating technopreneurships club in KICT.",
  },
  {
    question: "When is the registration deadline?",
    answer: "The registration deadline will be announced soon.",
  },
] as const;

export const RULES = [
  {
    question: "Team size",
    answer: "Teams must consist of exactly 3 members; individual participation is not allowed.",
  },
  {
    question: "Eligibility",
    answer: "The hackathon is open only to registered IIUM undergraduate students.",
  },
  {
    question: "Original work only",
    answer:
      "All code, design, and assets must be created during the event. Pre-existing projects or full codebases are strictly prohibited.",
  },
  {
    question: "Code of conduct",
    answer: "Participants must uphold IIUM’s core values, show respect, and avoid any harassment, plagiarism, or unsportsmanlike behavior.",
  },
  {
    question: "Submission deadline",
    answer: "All repositories, documentation, and slides must be submitted before the event ends, with no late submissions accepted.",
  },
] as const;

export const TONES = {
  gold: {
    badge: "bg-[#f4bc6a] text-[#1d3557]",
    item: "border-[#f4bc6a]/45 bg-[#fff9eb] hover:border-[#f4bc6a] has-data-[state=open]:border-[#f4bc6a]",
    trigger: "text-[#1d3557] [&>svg]:text-[#7b1113]!",
    content: "text-[#1d3557]",
  },
  burgundy: {
    badge: "bg-[#7b1113] text-[#fff9eb]",
    item: "border-[#7b1113]/45 bg-[#fff9eb] hover:border-[#7b1113] has-data-[state=open]:border-[#7b1113]",
    trigger: "text-[#7b1113] [&>svg]:text-[#7b1113]!",
    content: "text-[#1d3557]",
  },
} as const;
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
    src: "/logo-hackaton.png",
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
    { value: "50+", label: "Students" },
    { value: "24", label: "Hours" },
    { value: "15+", label: "Universities" },
    { value: "20+", label: "Mentors" },
  ],
  borderColors: ["#1d3557", "#D4A017", "#78141e"],
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
  note: "*The full event tentative will be provided later through the official WhatsApp group.",
} as const;

export const SPONSORS = {
  heading: "Calling For Sponsors",
  description:
    "Support CodeDojo: Hack-A-Ton and gain valuable brand exposure among students and aspiring developers. Sponsors will benefit from product showcases, social media promotions, logo placement on official event materials, and official recognition through appreciation plaques and e-certificates.",
  contactLabel: "For any inquiries or further details, please contact:",
  contactEmail: "partnerships@motionukict.com",
} as const;

export const NAV_LINKS = [
  { href: "#schedule", label: "Schedule" },
  { href: "#merchs-and-sponsors", label: "Merchs and Sponsors" },
  { href: "#prizes", label: "Prizes" },
  { href: "#faq", label: "FAQ" },
] as const;

export const MERCHS = {
    heading: "Hack-A-Ton Merch",
    description: "Get your hands on exclusive Hack-A-Ton merchandise! Show off your participation and support for the event with our limited edition merch items.",
  } as const;