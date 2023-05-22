import React from "react";
import "./LandingPage.css";
const LandingPageList = ({ List }) => {
  return (
    <div className="Mainleft_move">
      {List.map((ListLanding, index) => (
        <div key={index} className="LandingPage_list_main">
          <div className="List_flex">
            <div className="List_2">
              <h3>{ListLanding[1]}</h3>
              <h3>{ListLanding[0]}</h3>
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
    </div>
  );
};

export default LandingPageList;
