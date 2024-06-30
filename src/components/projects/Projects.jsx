'use client';
import StyledCard from '../../styles/StyledCard';
import quizlet from '../../assets/quizlet.png';

import vbank from '../../assets/V-bank.png';
import trems from '../../assets/trems-nigeria.png';
import harmonyheaven from '../../assets/harmony-heaven.jpg';
import Project from './Project';

const Projects = () => {
  const PROJECTS = [
    {
      name: 'Trems Nigeria',
      liveDemo: 'https://tremsnigeria.com',
      image: trems,
      gitHub: '#',
      description:
        'A website has significantly boosted TREMS Nigeria brand income through its Search Engine Optimization (SEO), seamless user experience, intuitive navigation which have attracted a significant influx of new clients',
    },
    {
      name: 'Harmony Heaven',
      liveDemo: 'https://harmonyheaven.vercel.app',
      image: harmonyheaven,
      gitHub: 'https://github.com/techie-sam/quizlet',
      description:
        'A hotel website which entice potential guests and provide them with essential information, as room availability, booking options, and also providing seamless navigation.',
    },
    {
      name: 'V Bank',
      liveDemo: 'https://vbank.vercel.app/',
      image: vbank,
      gitHub: 'https://github.com/techie-sam/v-bank',
      description:
        'A functional banking solution which offers a range of basic features. It allows users to simulate transactions, manage accounts, and view balances in a secure and reliable environment.',
    },
    {
      name: 'Quizlet Quiz App',
      liveDemo: 'https://quizlet001.vercel.app',
      image: quizlet,
      gitHub: 'https://github.com/techie-sam/cbt_react_app',
      description:
        'A test app designed to combats exam malpractice. Create and take tests online with multiple-choice questions, timed tests, and advanced analytics for progress tracking',
    },
  ];

  return (
    <section id="projects">
      <div className="text-center mt-5 mb-5">
        <h6>Recent Projects</h6>
        <h5>Projects</h5>
      </div>
      <StyledCard>
        <ul className="row gap-3 border m-auto">
          {PROJECTS.map((details) => (
            <Project key={details.name} details={details} />
          ))}
        </ul>
      </StyledCard>
    </section>
  );
};

export default Projects;
