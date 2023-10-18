

import React from "react";
import BarChart from "./Barchart";
import CircularProgressBar from "./CircularProgressBar";
import "./css/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Overview Section */}
      <div className="overview">
        <h3 style={{ margin: "1px", marginLeft: "10px" }}>Overview</h3>
        <p
          style={{
            color: "#b3cccc",
            fontSize: "12px",
            marginBottom: "1px",
            marginLeft: "10px",
          }}
        >
          Monthly earning
        </p>
        <BarChart />
      </div>

      {/* Customers Section */}
      <div className="customers">
        <div className="progress-bar">
          <p style={{ marginLeft: "20px", marginTop: "10px"}}>Customers</p>
          <span style={{ color: "#b3cccc", fontSize: "12px",marginLeft: "20px" }}>
            Customers That buy products
          </span>
          <CircularProgressBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
