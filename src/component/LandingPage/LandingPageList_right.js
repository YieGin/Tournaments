import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./LandingPage.css";
const LandingPageList_right = ({ Listright }) => {
  const textScrollVariants = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      variants={textScrollVariants}
      initial="hidden"
      className="Mainleft_top"
      animate={controls}
    >
      {Listright.map((CardRight) => (
        <div className="Cardright_1">
          <img className="Image2" src={CardRight[0]} alt="" />
          <div className="Cardright_2">
            <h4>{CardRight[1]}</h4>
            <p>{CardRight[2]}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default LandingPageList_right;
