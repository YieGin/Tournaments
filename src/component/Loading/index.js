import React from "react";
import "./style/style.css";
const Loading = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container">
        <div className="top">
          <div className="square">
            <div className="square">
              <div className="square">
                <div className="square">
                  <div className="square">
                    <div className="square"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="square">
            <div className="square">
              <div className="square">
                <div className="square">
                  <div className="square">
                    <div className="square"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left">
          <div className="square">
            <div className="square">
              <div className="square">
                <div className="square">
                  <div className="square">
                    <div className="square"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="square">
            <div className="square">
              <div className="square">
                <div className="square">
                  <div className="square">
                    <div className="square"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
