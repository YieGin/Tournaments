import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./LandingPage.css";
const LandingPageList = ({ List }) => {
  const textScrollVariants = {
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
  return (
    <motion.div
      ref={ref}
      variants={textScrollVariants}
      initial="hidden"
      className="Mainleft_move"
      animate={controls}
    >
      {List.map((ListLanding) => (
        <div className="LandingPage_list_main">
          <h1>{ListLanding[0]}</h1>
          <div className="List_flex">
            <div className="List_2">
              <h3>{ListLanding[1]}</h3>
              <p>{ListLanding[2]}</p>
            </div>
            <img className="Image1" src={ListLanding[3]} alt="" />
            <p>{ListLanding[4]}</p>
            <p>-</p>
            <p>{ListLanding[5]}</p>
            <img className="Image1" src={ListLanding[6]} alt="" />
            <div className="List_2">
              <h3>{ListLanding[7]}</h3>
              <p>{ListLanding[8]}</p>
            </div>
          </div>
          <div className="List_right">
            <p>{ListLanding[9]}</p>
            <p>{ListLanding[10]}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default LandingPageList;
