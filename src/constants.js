// CONTACT LIKS
const linkedinAddress = "https://www.linkedin.com/in/TechieSamDev";
const twitterAddress = "https://twitter.com/TechieSamDev";
const githubAddress = "https://github.com/TechieSamDev";
const whatsappLink = 'https://wa.me/+2349061918327?text="Hey Techie Sam!"';
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
    address: `@${twitterAddress.split("/").pop()}`,
    link: twitterAddress,
    icon: "",
  },
  whatsapp: {
    platform: "WhatsApp",
    address: "+2349061918327",
    link: whatsappLink,
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
    name: "$BSC - Building Strong Community",
    image: "/assets/bsc-cover.png",
    liveDemo: "https://bsc.vercel.app",
    description:
      "A Web3 project website designed to provide clear and easy access to essential information. The site features the project's smart contract address, contact links, a decentralized exchange (DEX), and a step-by-step guide on how to buy the token, making things easy for visitors to quickly find everything they need.",
  },
  {
    name: "Heal Me  Non-profit Organization",
    image: "/assets/heal-me-cover.png",
    // gitHub: "https://github.com/techie-sam/quizlet",
    liveDemo: "https://heal-me-frontend.vercel.app",
    description:
      "A non-profit organization that helps orphaned children, hospital patients, new mothers, and individuals with disabilities. I focused on designing the parts of the website people interact with, and suggested ways to improve the backend.",
  },
  // {
  //   name: "V Bank",
  //   liveDemo: "https://vbank.vercel.app/",
  //   image: "/assets/V-bank.png",
  //   gitHub: "https://github.com/techie-sam/v-bank",
  //   description:
  //     "A functional banking solution which offers a range of basic features. It allows users to simulate transactions, manage accounts, and view balances in a secure and reliable environment.",
  // },
  {
    name: "$FLOOF",
    liveDemo: "https://floofcto.vercel.app",
    image: "/assets/floof-cover.png",
    gitHub: "https://github.com/techie-sam/cbt_react_app",
    description:
      "A Web3 project website redesigned to improve its look, usability, and overall user experience. I created a modern, user-friendly design that aligns with the project's vision and enhances user engagement",
  },
];
