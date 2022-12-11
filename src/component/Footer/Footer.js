import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Footer.css";
const Footer = () => {
  const textScrollVariantsright = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };
  const controls2 = useAnimation();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    }
  }, [controls2, inView2]);
  return (
    <div className="Footer_main">
      <div className="Footer_main2">
        <motion.ul
          ref={ref2}
          variants={textScrollVariantsright}
          initial="hidden"
          className="menuFooter"
          animate={controls2}
        >
          <li class="li-text_footer">
            <a class="A-text_footer">INSTAGRAM</a>
          </li>
        </motion.ul>
        <motion.ul
          ref={ref2}
          variants={textScrollVariantsright}
          initial="hidden"
          className="menuFooter"
          animate={controls2}
        >
          <li class="li-text_footer">
            <a class="A-text_footer">LINKEDIN</a>
          </li>
        </motion.ul>
        <motion.ul
          ref={ref2}
          variants={textScrollVariantsright}
          initial="hidden"
          className="menuFooter"
          animate={controls2}
        >
          <li class="li-text_footer">
            <a class="A-text_footer">GITHUB</a>
          </li>
        </motion.ul>
        <motion.ul
          ref={ref2}
          variants={textScrollVariantsright}
          initial="hidden"
          className="menuFooter"
          animate={controls2}
        >
          <li class="li-text_footer">
            <a class="A-text_footer">TWITTER</a>
          </li>
        </motion.ul>
      </div>
      <p className="copyright">
        © Copyright 2022 – Vilmantas. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
