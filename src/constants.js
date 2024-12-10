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
    name: "Baby FROG - $BFOWG",
    image: "/assets/bfwog-cover.png",
    // gitHub: "https://github.com/techie-sam/quizlet",
    liveDemo: "https://bfwog.vercel.app",
    description:
      "A clean and simple page for $BabyFwog, which gives visitors everything they need without making them hunt for it. From token buying guides to smart contract details and the project roadmap, all the key info is easy to find in a friendly and modern design.",
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
  },
  {
    name: "Heal Me  Non-profit Organization", 
    image: "/assets/heal-me-cover.png",
    // gitHub: "https://github.com/techie-sam/quizlet",
    // liveDemo: "https://heal-me-frontend.vercel.app",
    description:
      "A non-profit organization that helps orphaned children, hospital patients, new mothers, and individuals with disabilities. I focused on designing the parts of the website people interact with, and suggested ways to improve the backend.",
  },
];
