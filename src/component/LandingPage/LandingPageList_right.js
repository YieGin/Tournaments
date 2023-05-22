import React, { useEffect } from "react";
import "./LandingPage.css";
const LandingPageList_right = ({ Listright }) => {
  return (
    <div className="Mainleft_top">
      {Listright.map((CardRight, index) => (
        <div key={index} className="Cardright_1">
          <img className="Image2" src={CardRight[0]} alt="" />
          <div className="Cardright_2">
            <h4>{CardRight[1]}</h4>
            <p>{CardRight[2]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPageList_right;
