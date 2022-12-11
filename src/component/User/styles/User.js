import React from "react";
import Userlist from "../Userlist";
const User = () => {
  const Userlist1 = [
    ["1", "Akechi", "WON 102", "LOSE 50"],
    ["2", "FLAMES", "WON 92", "LOSE 70"],
    ["3", "Haones", "WON 85", "LOSE 72"],
    ["4", "Zevras", "WON 80", "LOSE 70"],
    ["5", "Theon", "WON 75", "LOSE 65"],
    ["6", "HesitantAli", "WON 70", "LOSE 60"],
    ["7", "POE", "WON 65", "LOSE 62"],
    ["8", "Archangel", "WON 60", "LOSE 56"],
    ["9", "Monke", "WON 55", "LOSE 50"],
    ["10", "Patoska", "WON 51", "LOSE 45"],
  ];
  return (
    <div className="User_main">
      <div className="Ladder">
        <h1>LEADERBOARD</h1>
      </div>
      <Userlist userlist={Userlist1} />
    </div>
  );
};

export default User;
