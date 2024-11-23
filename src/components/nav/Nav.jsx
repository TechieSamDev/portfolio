import React, { useState, useEffect } from 'react';
import {
  HiMiniBriefcase,
  HiMiniChatBubbleOvalLeftEllipsis,
  HiMiniCog,
  HiMiniHome,
  HiMiniUser,
} from 'react-icons/hi2';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#hero');

  const NAV_CONTENT = [
    {
      href: '#hero',
      icon: <HiMiniHome />,
    },
    {
      href: '#about',
      icon: <HiMiniUser />,
    },
    {
      href: '#skills',
      icon: <HiMiniCog />,
    },
    {
      href: '#projects',
      icon: <HiMiniBriefcase />,
    },
    {
      href: '#contact',
      icon: <HiMiniChatBubbleOvalLeftEllipsis />,
    },
  ];

  return (
    <nav className="bg-black bg-opacity-50 max-w-max p-3 px-7 z-20 fixed -translate-x-1/2 left-1/2 bottom-8 flex gap-5 md:gap-10 rounded-full backdrop-filter backdrop-blur-lg border-2 border-accent/50 shadow">
      {NAV_CONTENT.map(({ href, icon }) => (
        <a
          key={href}
          href={href}
          onClick={() => setActiveNav(href)}
          className={`p-2 rounded-full ${
            activeNav === href ? 'text-accent' : ''
          }`}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
