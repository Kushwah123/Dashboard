

import React from "react";
import "./css/Sidebar.css";
import {
  FaCodepen,
  FaCreativeCommonsBy,
  FaWpforms,
  FaWeixin,
  FaUnity,
  FaLeanpub,
  FaChevronRight,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Dashboard Section */}
      <h3>
        <FaLeanpub
          style={{ marginRight: "5px", marginLeft: "30px", marginTop: "5px" }}
        />{" "}
        DASHBOARD
      </h3>

      {/* Navigation List Items */}
      <ul>
        <list>
          <FaCodepen
            style={{
              marginRight: "10px",
              marginTop: "3px",
              marginBottom: "10px",
            }}
          />
          Products
          <FaChevronRight
            style={{ marginLeft: "40px", marginTop: "5px" }}
          />
        </list>
      </ul>

      <ul>
        <list>
          <FaCreativeCommonsBy
            style={{
              marginRight: "10px",
              marginTop: "3px",
              marginBottom: "10px",
            }}
          />
          Customers
          <FaChevronRight
            style={{ marginLeft: "28px", marginTop: "5px" }}
          />
        </list>
      </ul>

      <ul>
        <list>
          <FaWpforms style={{ marginRight: "10px", marginTop: "3px" }} />
          Income
          <FaChevronRight
            style={{
              marginLeft: "50px",
              marginTop: "3px",
              marginBottom: "10px",
            }}
          />
        </list>
      </ul>

      <ul>
        <list>
          <FaUnity style={{ marginRight: "10px", marginTop: "3px" }} />
          Promote
          <FaChevronRight
            style={{
              marginLeft: "42px",
              marginTop: "3px",
              marginBottom: "10px",
            }}
          />
        </list>
      </ul>

      <ul>
        <list>
          <FaWeixin style={{ marginRight: "10px", marginTop: "3px" }} />
          Help
          <FaChevronRight
            style={{
              marginLeft: "69px",
              marginTop: "3px",
              marginBottom: "10px",
            }}
          />
        </list>
      </ul>

      {/* Additional listst Item */}
      <ul style={{ marginTop: "280px" }}>
        <list style={{backgroundColor: " skyblue", marginRight: "10px"}}>
          <img style={{width: "30px", height: "30px", marginRight: "10px" }}  src=" data:image/png;base64,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" alt="image not found"/>
          Member
          <FaChevronRight
            style={{
              marginLeft: "69px",
              marginTop: "3px",
              marginBottom: "10px",
            }}
          />
        </list>
      </ul>
    </div>
  );
};

export default Sidebar;
