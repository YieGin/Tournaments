import React from "react";
import "./styles/User.css";
const Userlist = ({ userlist }) => {
  return (
    <div>
      {userlist.map((carduser) => (
        <div className="userlist_main">
          <h1 className="number">{carduser[0]}</h1>
          <img
            className="Image1"
            src="https://kafugames.com/_next/image?url=http%3A%2F%2Fadmin.kafugames.com%2Fuploads%2Favatars%2FOgf2mLq9ZmDF6aYGQjrhVSVCaJWfWJgthk43vv5L.svg&w=1920&q=75"
            alt=""
          />
          <div className="userlist_main1">
            <p className="Text_user_list1">{carduser[1]}</p>
            <div className="userlist_2">
              <p className="wins">{carduser[2]}</p>
              <p className="lose">{carduser[3]}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Userlist;
