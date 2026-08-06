export const PRIZES = [
  {
    icon: "Medal",
    place: "Runner-Up",
    amount: "RM 60",
    description: "Nice work! You've earned it.",
    className: "bg-md-surface-container-low",
    featured: false,
  },
  {
    icon: "Trophy",
    place: "Champion",
    amount: "RM 90",
    description:
      "All eyes on you!",
    className: "bg-md-secondary-container md:-translate-y-6 shadow-md-lg",
    featured: true,
  },
  {
    icon: "Award",
    place: "Rising Rookie",
    amount: "RM 30",
    description:
      "Good things come to those who hustle.",
    className: "bg-md-primary-container",
    featured: false,
  },
] as const;

export const BENEFITS = [
  {
    title: "Hands-on Learning",
    content: [
      {
        type: "text",
        description:
          "Gain practical experience through interactive projects and real-world applications.",
      },
    ],
  },
  {
    title: "Collaboration & Skill Development",
    content: [
      {
        type: "text",
        description:
          "Work in teams to enhance your communication, teamwork, problem-solving, and time management skills.",
      },
    ],
  },
  {
    title: "Innovation & Portfolio Building",
    content: [
      {
        type: "text",
        description:
          "Create an innovative web solution and enhance your portfolio for future opportunities.",
      },
    ],
  },
  {
    Stats: [
      {
        value: "50+",
        label: "Students",
      },
      {
        value: "48",
        label: "Hours",
      },
      {
        value: "15+",
        label: "Universities",
      },
      {
        value: "20+",
        label: "Mentors",
      },
    ],
  },
  {
    "border-colors": [
      {
        color: "#1d3557",
      },
      {
        color: "#D4A017",
      },
      {
        color: "#78141e",
      },
    ],
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
      "A 48-hour hackathon where students collaborate to create innovative web solutions, as well as a chance to learn, network, and win prizes.",
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