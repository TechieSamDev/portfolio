// CONTACT LIKS
const linkedinAddress = "https://www.linkedin.com/in/TechieSamDev";
const twitterAddress = "https://twitter.com/TechieSamDev";
const githubAddress = "https://github.com/TechieSamDev";
const whatsappLink =
  "https://wa.me/+2349061918327?text=Hey Techie Sam, I wanted to reach out and ...";
const telegramLink =
  "https://t.me/TechieSam?start=Hey_Techie_Sam_I_wanted to reach out and ...";

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
    address: `@${emailAddress.split(":").pop()}`,
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
    platform: "Telegram",
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
  "Bootstrap",
  "NodeJS",
];

export const PROJECTS = [
  {
    name: "Heal Me  Non-profit Organization",
    image: "/assets/heal-me-cover.png",
    // gitHub: "https://github.com/techie-sam/quizlet",
    // liveDemo: "https://heal-me-frontend.vercel.app",
    description:
      "A non-profit organization that helps orphaned children, hospital patients, new mothers, and individuals with disabilities. I focused on designing the parts of the website people interact with, and suggested ways to improve the backend.",
  },
  {
    name: "Baby FROG - $BFOWG",
    image: "/assets/bfwog-cover.png",
    // gitHub: "https://github.com/techie-sam/quizlet",
    liveDemo: "https://bfwog.vercel.app",
    description:
      "A fresh and inviting landing page for $BabyFwog that puts everything visitors need right at their fingertips. No hunting, no hassle, just clear access to token buying guides, smart contract details, and the project roadmap, ",
  },
  {
    name: "$BSC - Building Strong Community",
    image: "/assets/bsc-cover.png",
    liveDemo: "https://bsc.vercel.app",
    description:
      "A Web3 project website made to help users easily find everything they need. It includes the project's smart contract address, contact links, a decentralized exchange (DEX), and a simple guide on how to buy the token.",
  },

  {
    name: "$FLOOF",
    liveDemo: "https://floofcto.vercel.app",
    image: "/assets/floof-cover.png",
    // gitHub: "https://github.com/techie-sam/cbt_react_app",
    description:
      "A Web3 project website redesigned to improve its look, usability, and overall user experience. I created a modern, user-friendly design that aligns with the project's vision and enhances user engagement",
  }
];
