// CONTACT LIKS
const linkedinAddress = "https://www.linkedin.com/in/TechieSamDev";
const twitterAddress = "https://twitter.com/TechieSamDev";
const githubAddress = "https://github.com/TechieSamDev";
const instagramAddress = "https://www.instagram.com/techiesamdev";
const whatsappLink =
  "https://wa.me/+2349061918327?text=Hi Sam, I ";
const telegramLink =
  "https://t.me/techiesamdev?start=Hi Sam, I";

const emailAddress = "mailto:techiesam.dev@gmail.com";

export const CONTACT_DETAILS = {
  linkedin: {
    platform: "LinkedIn",
    address: `@${linkedinAddress.split("/").pop()}`,
    link: linkedinAddress,
    icon: "",
  },
  email: {
    platform: "Email",
    address: `${emailAddress.split(":").pop()}`,
    link: emailAddress,
    icon: "",
  },
  twitter: {
    platform: "Twitter",
    address: `@${twitterAddress.split("/").pop()}`,
    link: twitterAddress,
    icon: "",
  },
  github: {
    platform: "Github",
    address: `@${githubAddress.split("/").pop()}`,
    link: githubAddress,
    icon: "",
  },
  whatsapp: {
    platform: "WhatsApp",
    address: "+2347032640298",
    link: whatsappLink,
    icon: "",
  },
  telegram: {
    platform: "@Telegram",
    address: "techiesamdev",
    link: telegramLink,
    icon: "",
  },
  instagram: {
    platform: "Instagram",
    address: `@${instagramAddress.split("/").pop()}`,
    link: instagramAddress,
    icon: "",
  },
};

// SKILLS
export const LANGUAGES = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "SQL",
  "PHP",
];
export const TECHNOLOGIES = [
  "React",
  "Next",
  "Redux",
  "TailwindCSS",
  "Express",
  "NodeJS",
];
export const PROJECTS = [
  {
    name: "Fleetano - Car Rental Management Platform",
    image: "/assets/fleetano-cover.webp",
    stacks: [
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    liveLink: "https://fleetano.vercel.app", // Update with your actual URL
    description:
      "Fleetano is a car rental management platform that helps rental businesses manage their operations from one dashboard. Customers can browse available vehicles, book a car, and pay online, while administrators can manage vehicles, bookings, customers, pricing, availability, and payments. It simplifies the rental process and makes booking faster and easier for everyone.",
  },
  {
    name: "E-Commerce Platform",
    image: "/assets/rbf-cover.webp",
    stacks: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "MongoDB",
      "Stripe",
    ],
    liveLink: "https://rahmabyfatima.vercel.app",
    description:
      "An e-commerce platform built to help businesses sell products online. Customers can browse products, search and filter items, add products to their cart, and complete purchases securely. Store owners can manage products, inventory, orders, customers, and payments from an easy-to-use admin dashboard.",
  },
  {
    name: "Heal Me - Charity Platform",
    image: "/assets/heal-me-cover.webp",
    stacks: ["Next.js", "TailwindCSS", "TypeScript", "Node.js"],
    liveLink: "https://lovefoundationafrica.org",
    description:
      "L.O.V.E Foundation is a donation platform built for a non-profit organization to help people easily support charitable causes online. It allows users to donate in a simple and secure way, while the organization can manage campaigns, track donations, and monitor impact from one place. The platform was designed to make giving faster and easier, reduce donation drop-offs, and improve the overall experience for both donors and administrators.",
  },
  {
    name: "Throst - Expense Splitting App",
    image: "/assets/throst-cover.webp",
    stacks: ["React.js", "TailwindCSS", "TypeScript", "Node.js"],
    liveLink: "https://throst.vercel.app",
    description:
      "Throst is an application that makes it easy to split expenses with friends during group activities. Users can create groups for trips, hangouts, or shared events, invite participants, and add expenses with details of who paid and who shared in the cost. Throst then automatically calculates and shows how much each person owes based on the agreed split.",
  },
];
