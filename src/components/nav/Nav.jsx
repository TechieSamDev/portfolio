import { motion } from "motion/react";
import React, { useState, useEffect } from "react";
import {
  HiMiniBriefcase,
  HiMiniChatBubbleOvalLeftEllipsis,
  HiMiniHome,
  HiMiniUser,
} from "react-icons/hi2";
import LinkButton from "../utils/LinkButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#hero");

  const NAV_CONTENT = [
    {
      href: "#hero",
      icon: <HiMiniHome />,
      text: "Home",
    },
    {
      href: "#about",
      icon: <HiMiniUser />,
      text: "About",
    },
    {
      href: "#projects",
      icon: <HiMiniBriefcase />,
      text: "Projects",
    },
    {
      href: "#contact",
      icon: <HiMiniChatBubbleOvalLeftEllipsis />,
      text: "Contact",
    },
  ];

  return (
    <nav className="bg-black/40 w-max md:w-full md:rounded-none md:bg- md:border-0 md:border- md:justify-end md:bg-primary/50 p-3 px-7 z-20 md:h-20 items-center md:top-0 md:right-0 fixed -translate-x-1/2 left-1/2 bottom-8 flex gap-5 md:gap-10 rounded-full backdrop-filter backdrop-blur-lg border-2 border-accent/50">
      <motion.div
        whileInView="visible"
        initial="hidden"
        variants={containerVariants}
        className="flex gap-5"
      >
        {NAV_CONTENT.map(({ href, icon, text }, index) => (
          <motion.a
            key={href}
            href={href}
            aria-label={text}
            onClick={() => setActiveNav(href)}
            variants={itemVariant}
            className={`p-2 rounded-full ${
              activeNav === href &&
              "underline underline-offset-8 underline-red-500"
            }`}
          >
            <span
              className={`md:hidden block ${
                activeNav === href && "text-accent"
              }`}
            >
              {icon}
            </span>
            <span className="hidden md:block">
              <small className="text-accent">0{index + 1}.</small>{" "}
              <span className="text">{text}</span>
            </span>
          </motion.a>
        ))}
      </motion.div>
      <div className="hidden md:block">
        <LinkButton
          variant="accent"
          href="/assets/001Abolade-Samuel-Resume.pdf"
          download="001Abolade-Samuel-(Techie_Sam)-Resume.pdf"
          className="border border-accent text-accent py-2 px-4 text-sm rounded-lg transition duration outline-none flex items-center  focus:bg-accent/50 focus:text-slate-100"
        >
          Get Resume
        </LinkButton>
      </div>
    </nav>
  );
};

export default Nav;
