import React from "react";
import "./ProfileBottom.scss";

export default function ProfileBottom() {
  return (
    <div className="profile-bottom">
      <div className="first">
        <h3> Who to follow</h3>
        <div className="friends">
          <div className="friend">
            <div>
              <img src="https://binged.it/3prQzwQ" alt="twitter" />
              <div className="name">
                <span> Bilgirje </span>
                <p style={{ marginTop: "1px" }}>@bilgirje</p>
              </div>
            </div>
            <button style={{ marginRight: "5px" }}> Follow </button>
          </div>
          <div className="friend">
            <div>
              <img src="https://binged.it/3prQzwQ" alt="twitter" />
              <div className="name">
                <span> Bilgirje </span>
                <p style={{ marginTop: "1px" }}>@bilgirje</p>
              </div>
            </div>
            <button style={{ marginRight: "5px" }}> Follow </button>
          </div>
          <div className="friend">
            <div>
              <img src="https://binged.it/3prQzwQ" alt="twitter" />
              <div className="name">
                <span> Bilgirje </span>
                <p style={{ marginTop: "1px" }}>@bilgirje</p>
              </div>
            </div>
            <button style={{ marginRight: "5px" }}> Follow </button>
          </div>
        </div>

        <p
          style={{
            marginLeft: "16px",
            marginBottom: "16px",
            color: "#1D9BF0",
            cursor: "pointer",
          }}
        >
          {" "}
          Show more
        </p>
      </div>
    </div>
  );
}
