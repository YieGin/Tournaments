import React, { useState, useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Image9 from "../../Images/9.jpg";
import "./NavBar.css";
const NavBar = () => {
  const textScrollVariants = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  };
  const textScrollVariantsright = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const controls1 = useAnimation();
  const [ref1, inView1] = useInView();

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
  }, [controls1, inView1]);

  const [hamburger, sethamburger] = useState(false);
  const [hamburger2, sethamburger2] = useState(true);
  return (
    <div className="Navbar_main">
      <div className="Icon">
        <Link to="./">
          <img
            className="Icon_svg"
            src="https://media.discordapp.net/attachments/606404175449948162/1051497098362753164/ezgif.com-gif-maker_53.gif"
            alt=""
          />
        </Link>
      </div>
      <Link to="/Tournament">
        <motion.ul
          ref={ref1}
          variants={textScrollVariantsright}
          initial="hidden"
          className="menu"
          animate={controls1}
        >
          <li class="li-text">
            <a class="A-text">TOURNAMENTS</a>
          </li>
        </motion.ul>
      </Link>
      <Link to="/User">
        <motion.ul
          ref={ref1}
          variants={textScrollVariantsright}
          initial="hidden"
          className="menu"
          animate={controls1}
        >
          <li class="li-text">
            <a class="A-text">USERS</a>
          </li>
        </motion.ul>
      </Link>
      <Link to="/Login">
        <motion.ul
          ref={ref1}
          variants={textScrollVariantsright}
          initial="hidden"
          className="menu"
          animate={controls1}
        >
          <li class="li-text">
            <a class="A-text">REGISTER</a>
          </li>
        </motion.ul>
      </Link>
      {hamburger2 && (
        <div
          onClick={() => {
            sethamburger(true);
            sethamburger2(false);
          }}
          className="hamburger_menu"
        >
          <span className="span"></span>
          <span className="span"></span>
          <span className="span"></span>
        </div>
      )}
      {hamburger && (
        <>
          <div className="hamburger_menu">
            <svg
              onClick={() => {
                sethamburger(false);
                sethamburger2(true);
              }}
              className="Svg_close"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="34"
              height="34"
            >
              <path
                fill-rule="evenodd"
                d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
              ></path>
            </svg>
          </div>
          <motion.div
            ref={ref}
            variants={textScrollVariants}
            initial="hidden"
            className="Svgx_Open"
            animate={controls}
          >
            <Link to="/Tournament">
              <motion.h1
                onClick={() => {
                  sethamburger(false);
                  sethamburger2(true);
                }}
                ref={ref}
                variants={textScrollVariants}
                initial="hidden"
                className="H1_names"
                animate={controls}
              >
                TOURNAMENTS
              </motion.h1>
            </Link>
            <Link to="/User">
              <motion.h1
                onClick={() => {
                  sethamburger(false);
                  sethamburger2(true);
                }}
                ref={ref}
                variants={textScrollVariants}
                initial="hidden"
                className="H1_names"
                animate={controls}
              >
                USERS
              </motion.h1>
            </Link>
            <Link to="/Login">
              <motion.h1
                onClick={() => {
                  sethamburger(false);
                  sethamburger2(true);
                }}
                ref={ref}
                variants={textScrollVariants}
                initial="hidden"
                className="H1_names"
                animate={controls}
              >
                REGISTER
              </motion.h1>
            </Link>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default NavBar;
