export const personal = {
  name: "Archie Benitez",
  initials: "AB",
  tagline: "Conquering Comfort Zone",
  location: "Doha, Qatar",
  status: "Available for IT roles",
  email: "archiebenitez101@gmail.com",
  linkedin: "https://linkedin.com/in/archie-benitez-916b08247",
  facebook: "https://www.facebook.com/ArchieBenitez101/",
  instagram: "https://www.instagram.com/archie.sc.qa/",
  whatsapp: "https://wa.me/97431081172",
  github: "https://github.com/Archie-Benitez",
  cv: "/cv.pdf",
  primaryStack: "React / .NET",
}

export const about = [
  `I’m currently a <strong>Sales Coordinator</strong> in a <strong>logistics</strong> company in Qatar but the part I love most is the tech stuff I do on the job. I've become the <strong>unofficial helpdesk</strong> for my office, fixing hardware and troubleshooting software and explaining things. It’s not part of my role; I simply do it because I really like it.`,
  `I don't just want to code; I want to understand the problems people face and build the tools that solve them. Outside of work, I build stuff, like <strong>websites, apps, network setup.</strong> I started at 16 years old when my friend introduced me to <strong>WinForms and MySQL</strong>, I didn't continue for some reason, but somehow I keep coming back to Technology.`,
  `I'm going hard on my stacks right now, Focusing on <strong>C# and React</strong>. Even with AI help I keep learning myself. I’m aiming to build my future with tech. I am currently building <strong>CargoDesk - a cargo management system that focus on speed and accurate data entry and fast service tracking.</strong>`,
]

export const techStack = [
  { category: "Languages", tags: ["C#", "JavaScript", "TypeScript", "Python", "HTML / CSS"], variant: undefined },
  { category: "Frontend", tags: ["React", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui"], variant: undefined },
  { category: "Backend & Database", tags: [".NET", "Supabase", "PostgreSQL", "MySQL", "MSSQL"], variant: undefined },
  { category: "Tools & Infra", tags: ["Git", "GitHub", "Linux", "Vercel", "Cloudflare"], variant: undefined },
  { category: "AI Tools", tags: ["Claude", "Cursor", "v0", "Lovable", "Gemini", "Kimi", "Antigravity"], variant: undefined },
  { category: "Currently Learning", tags: ["Azure", "Docker", "Active Directory"], variant: "learning" as const },
]

export type ProjectStatus = "live" | "wip" | "built"

export interface Project {
  id: string
  name: string
  image?: string
  status: ProjectStatus
  emoji: string
  shortDesc: string
  fullDesc: string
  stack: string[]
  links: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    id: "cargodesk",
    name: "CargoDesk",
    image: "",
    status: "wip",
    emoji: "📦",
    shortDesc: "Cargo Management System for Filipino door-to-door balikbayan box companies. Customer tracking + admin panel.",
    fullDesc: "A cargo management system for small Filipino door-to-door companies handling balikbayan boxes. Public customer-facing site for shipment tracking and no login required. Separate invite-only admin panel with dashboard, Excel export/import, Supabase auth, and row-level security.",
    stack: ["React", "Vite", "Supabase", "Cloudflare Workers", "Cloudflare Turnstile", "Vercel"],
    links: [{ label: "GitHub ↗", url: "#" }, { label: "Live Demo ↗", url: "#" }],
  },
  {
    id: "company-website",
    name: "Company Website",
    image: "/projects/project-company.png",
    status: "built",
    emoji: "🏢",
    shortDesc: "Full site built for my logistics employer in Doha. Designed, developed, and production-ready.",
    fullDesc: "A full company website built for my logistics employer in Doha. Designed from scratch, fully developed, and production-ready. Includes company profile, services, and contact sections. Currently awaiting official endorsement before going live.",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase", "Cloudflare Workers", "Cloudflare Turnstile", "Vercel"],
    links: [{ label: "Preview ↗", url: "https://premierexpress-cs.vercel.app" }],
  },
  {
    id: "portfolio",
    name: "Portfolio Site",
    image: "/projects/project-portfolio.png",
    status: "live",
    emoji: "🌐",
    shortDesc: "This site. Mobile-first portfolio documenting my transition from logistics into IT.",
    fullDesc: "This website. A mobile-first personal portfolio documenting my transition from logistics into IT and tech roles in Qatar. Built with React, Vite, Tailwind CSS, and custom components.",
    stack: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    links: [{ label: "GitHub ↗", url: "https://github.com/Archie-Benitez/Archie-Benitez" }, { label: "Live ↗", url: "https://archiebenitez.vercel.app/" }],
  },
  {
    id: "router-lab",
    name: "Router Setup & Configuration",
    image: "/projects/project-router.png",
    status: "live",
    emoji: "🔌",
    shortDesc: "Hands-on D-Link router reset, setup, and configuration. Documented as a networking reference.",
    fullDesc: "Hands-on D-Link router setup including factory reset, manual IP configuration, DHCP settings, and wireless security. Documented step-by-step and shared on YouTube as a tutorial.",
    stack: ["Networking", "D-Link", "DHCP", "Wireless Security"],
    links: [{ label: "YouTube ↗", url: "https://www.youtube.com/watch?v=z_qFKAg6ZAw" }],
  },
]

export const certifications = [
  { icon: "🎖", name: "Foundational C# with Microsoft", issuer: "freeCodeCamp × Microsoft", year: "2026", url: "https://www.freecodecamp.org/certification/archiebenitez/foundational-c-sharp-with-microsoft" },
  { icon: "🌐", name: "Networking Basics", issuer: "Cisco Networking Academy", year: "2026", url: "https://www.credly.com/badges/df61b950-3c4e-4cc1-b0da-7f03854356fb" },
  { icon: "🖥️", name: "Installing and Configuring Computer Systems", issuer: "TESDA Online Program", year: "2025", url: "/tesda.pdf" },
  { icon: "💻", name: "Introduction to CSS", issuer: "TESDA Online Program", year: "2025", url: "/tesda2.pdf" },
  { icon: "🔧", name: "Computer Hardware Servicing", issuer: "Colegio de San Juan de Letran", year: "2023", url: "#" },
]

export const journey = [
  { year: "2026 - Now", title: "Going deep on C#", desc: "Focused on .NET mastery, building real projects, actively targeting IT Support roles in Doha.", active: true },
  { year: "2023 - Present", title: "Sales Coordinator, Doha", desc: "Logistics company. Handles customer service, data entry, and driver coordination plus unofficial IT support for the whole office." },
  { year: "2023", title: "Landed in Qatar at 19", desc: "Moved abroad. Had a job within a month. Figured out how to survive, then how to grow." },
  { year: "2021 - 2022", title: "First job — 7/11 Clerk", desc: "Started at 18. Worked my way to production operator. Learned what showing up every day actually builds." },
  { year: "2020", title: "Hello World", desc: "A friend showed me MySQL and WinForms. Never finished the project. But the curiosity stuck." },
]

export const obsessions = [
  { label: "Home Lab", url: "https://www.reddit.com/r/homelab/", icon: "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-8 11H8v-2h4v2zm4-4H8V9h8v2z" },
  { label: "Fish Keeping", url: "https://www.reddit.com/r/Aquariums/", icon: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" },
  { label: "Software Dev", url: "https://github.com", icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" },
  { label: "Cybersecurity", url: "https://www.cybrary.it/", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
  { label: "Philosophy", url: "https://www.philosophytalk.org/", icon: "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-5h2v2h-2zm0-8h2v6h-2z" },
  { label: "Karak Tea", url: "https://en.wikipedia.org/wiki/Karak_chai", icon: "M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" },
]

export const galleryImages = [
  { src: "/gallery/photo_01.jpg", alt: "Gallery photo 1" },
  { src: "/gallery/photo_02.jpeg", alt: "Gallery photo 2" },
  { src: "/gallery/photo_03.jpeg", alt: "Gallery photo 3" },
  { src: "/gallery/photo_04.jpg", alt: "Gallery photo 4" },
  { src: "/gallery/photo_05.jpg", alt: "Gallery photo 5" },
  { src: "/gallery/photo_06.jpg", alt: "Gallery photo 6" },
  { src: "/gallery/photo_07.jpg", alt: "Gallery photo 7" },
  { src: "/gallery/photo_08.jpg", alt: "Gallery photo 8" },
  { src: "/gallery/photo_09.jpg", alt: "Gallery photo 9" },
  { src: "/gallery/photo_11.webp", alt: "Gallery photo 11" },
  { src: "/gallery/photo_12.jpg", alt: "Gallery photo 12" },
  { src: "/gallery/photo_13.jpg", alt: "Gallery photo 13" },
  { src: "/gallery/photo_14.jpg", alt: "Gallery photo 14" },
]
