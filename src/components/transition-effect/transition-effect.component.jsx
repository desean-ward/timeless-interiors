"use client";
import React, { useEffect, useRef, useState } from "react";

import { usePathname } from "next/navigation";

import {} from "./transition-effect.styles";

import { motion, useAnimation, useInView } from "framer-motion";

const TransitionEffect = () => {
  const [firstLoad, setFirstLoad] = useState(true);

  const path = usePathname();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();
  // const slideIn = useAnimation()
  // const slideOut = useAnimation()

  const variants1 = {
    show: {
      x: "100%",
      width: "100%",
      transition: { duration: 0.1, ease: "easeInOut" },
    },
    hide: {
      x: 0,
      width: 0,
      transition: { delay: 0.3, duration: 0.5, ease: "easeInOut" },
    },
    exit: { x: ["0%", "100% "], width: ["0%", "100%"] },
  };

  const variants2 = {
    show: {
      x: "100%",
      width: "100%",
      transition: { duration: 0.1, ease: "easeInOut" },
    },
    hide: {
      x: 0,
      width: 0,
      transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
    },
    exit: { x: ["0%", "100% "], width: ["0%", "100%"] },
  };

  const variants3 = {
    show: {
      x: "100%",
      width: "100%",
      transition: { duration: 0.1, ease: "easeInOut" },
    },
    hide: {
      x: 0,
      width: 0,
      transition: { delay: 0.7, duration: 0.5, ease: "easeInOut" },
    },
    exit: { x: ["0%", "100% "], width: ["0%", "100%"] },
  };

  /**
   * Check if the is the initial visit to the site before applying page transition slide effect
   */
  useEffect(() => {
    const firstVisit = () => {
      if (path !== "/" && firstLoad === true) setFirstLoad(false);
    };

    firstVisit();
  }, []);

  /**
   * Controls the page transition slide effect
   */
  useEffect(() => {
    const startSlide = async () => {
      if (isInView && !firstLoad) {
        await controls.start("show");
        await controls.start("hide");
      }
    };

    startSlide();
  }, [controls, isInView]);

  return (
    <>
      <motion.div
        ref={ref}
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[tan]'
        variants={variants1}
        animate={controls}
      />

      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-gray-400'
        variants={variants2}
        animate={controls}
      />

      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[black]'
        variants={variants3}
        animate={controls}
      />
    </>
  );
};

export default TransitionEffect;
