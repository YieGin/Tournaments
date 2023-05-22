import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles/Tournament.css";
const To_list = ({ ToList }) => {
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
    <div className="dsqdsq">
      {ToList.map((To_list, index) => (
        <motion.div
          key={index}
          ref={ref}
          variants={textScrollVariants}
          initial="hidden"
          className="To_list_main"
          animate={controls}
        >
          <img className="Image_list" src={To_list[0]} alt="" />
          <div className="To_list_1">
            <p>{To_list[1]}</p>
            <div className="Featured">
              <div className="Featured_box">Featured</div>
            </div>
          </div>
          <h5>{To_list[2]}</h5>
          <div className="To_list_1">
            <img src={To_list[3]} alt="" />
            <p>{To_list[4]}</p>
            <p className="date"> {To_list[5]} </p>
          </div>
          <div className="To_list_2">
            <p>Tournament By</p>
            <img
              src="https://kafugames.com/_next/image?url=https%3A%2F%2Fkafubackup-new.s3.me-south-1.amazonaws.com%2Fuploads%2Fsponsers%2Flogos%2F1651141116.png&w=64&q=75"
              alt=""
            />
            <p>Yalla Yie</p>
          </div>
          <div className="To_list_3">
            <div className="Registration">
              <p>Registration Open</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default To_list;
