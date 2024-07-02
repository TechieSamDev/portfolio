// CONTACT LIKS
const linkedinAddress = 'https://www.linkedin.com/in/TechieSamDev';
const twitterAddress = 'https://twitter.com/TechieSamDev';
const githubAddress = 'https://github.com/TechieSamDev';
const whatsappLink = 'https://wa.me/+2349061918327?text="Hey Techie Sam!"';
const emailAddress = 'mailto:techiesam.dev@gmail.com';

export const CONTACT_DETAILS = {
  linkedin: {
    platform: 'LinkedIn',
    address: `@${linkedinAddress.split('/').pop()}`,
    link: linkedinAddress,
    icon: '',
  },
  email: {
    platform: 'Email',
    address: `@${emailAddress.split(':').pop()}`,
    link: emailAddress,
    icon: '',
  },
  twitter: {
    platform: 'Twitter',
    address: `@${twitterAddress.split('/').pop()}`,
    link: twitterAddress,
    icon: '',
  },
  github: {
    platform: 'Github',
    address: `@${twitterAddress.split('/').pop()}`,
    link: twitterAddress,
    icon: '',
  },
  whatsapp: {
    platform: 'WhatsApp',
    address: '+2349061918327',
    link: whatsappLink,
    icon: '',
  },
};

// SKILLS
export const LANGUAGES = ['HTML', 'CSS', 'JavaScript', 'SQL', 'PHP'];
export const TECHNOLOGIES = [
  'React',
  'Next',
  'Redux',
  'TailwindCSS',
  'Bootstrap',
  'NodeJS',
];

// PROJECTS
export const PROJECTS = [
  {
    name: 'Trems Nigeria',
    liveDemo: 'https://tremsnigeria.com',
    image: '/src/assets/trems-nigeria.png',
    gitHub: '#',
    description:
      'A website has significantly boosted TREMS Nigeria brand income through its Search Engine Optimization (SEO), seamless user experience, intuitive navigation which have attracted a significant influx of new clients',
  },
  {
    name: 'Harmony Heaven',
    liveDemo: 'https://harmonyheaven.vercel.app',
    image: '/src/assets/harmony-heaven.jpg',
    gitHub: 'https://github.com/techie-sam/quizlet',
    description:
      'A hotel website which entice potential guests and provide them with essential information, as room availability, booking options, and also providing seamless navigation.',
  },
  {
    name: 'V Bank',
    liveDemo: 'https://vbank.vercel.app/',
    image: '/src/assets/V-bank.png',
    gitHub: 'https://github.com/techie-sam/v-bank',
    description:
      'A functional banking solution which offers a range of basic features. It allows users to simulate transactions, manage accounts, and view balances in a secure and reliable environment.',
  },
  {
    name: 'Quizlet Quiz App',
    liveDemo: 'https://quizlet001.vercel.app',
    image: '/src/assets/quizlet.png',
    gitHub: 'https://github.com/techie-sam/cbt_react_app',
    description:
      'A test app designed to combats exam malpractice. Create and take tests online with multiple-choice questions, timed tests, and advanced analytics for progress tracking',
  },
];
