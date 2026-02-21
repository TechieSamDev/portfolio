// CONTACT LIKS
const linkedinAddress = "https://www.linkedin.com/in/TechieSamDev";
const twitterAddress = "https://twitter.com/TechieSamDev";
const githubAddress = "https://github.com/TechieSamDev";
const whatsappLink =
  "https://wa.me/+2349061918327?text=Hey Techie Sam, I am reaching out ...";
const telegramLink =
  "https://t.me/TechieSam?start=Hey_Techie_Sam_I_wanted to  ...";

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
    address: "+2349061918327",
    link: whatsappLink,
    icon: "",
  },
  telegram: {
    platform: "@Telegram",
    address: "TechieSamDev",
    link: telegramLink,
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
    name: "CarBnB - Car Rental App",
    image: "/assets/carbnb-cover.webp",
    liveLink: "https://carbnb-prod.vercel.app",
    stacks: ["Next.js", "TailwindCSS", "Node.js"],
    description:
      "CarBnB is a car rental platform designed to make booking and managing vehicles simple for both customers and business owners. Customers can browse available cars, view pricing and availability, and make reservations online, either as soft reservations or confirmed bookings. Business owners can easily update car details, track reservations, and manage orders, reducing double bookings and improving customer satisfaction.",
  },

  {
    name: "Throst - Expense Splitting App",
    image: "/assets/throst-cover.webp",
    stacks: ["React.js", "TailwindCSS", "TypeScript", "Node.js"],
    liveLink: "https://throst.vercel.app",
    description:
      "Throst is an application that makes it easy to split expenses with friends during group activities. Users can create groups for trips, hangouts, or shared events, invite participants, and add expenses with details of who paid and who shared in the cost. Throst then automatically calculates and shows how much each person owes based on the agreed split.",
  },

  {
    name: "Moar Market – Adaptive DeFi Interface",
    image: "/assets/moar-market-cover.gif",
    liveLink: "#",
    description:
      'Moar Market is a DeFi interface designed to make lending and borrowing on the Aptos blockchain intuitive for all users. Recognizing that technical jargon often scares away beginners, I built a "Dual-Mode" experience. Users can toggle between "Earn" (a simplified, bank-like view for passive income) and "Boost" (an advanced view for leverage and trading strategies).',
  },

  {
    name: "Heal Me - Charity Platform",
    image: "/assets/heal-me-cover.webp",
    stacks: ["Next.js", "TailwindCSS", "TypeScript", "Node.js"],
    liveLink: "https://lovefoundationafrica.org",
    description:
      "Heal Me is a platform designed to support vulnerable groups such as orphaned children, hospital patients, new mothers, and individuals with disabilities. It connects donors, volunteers, and people in need in one place, making it easy to give, receive support, or offer time and care.",
  },
];
