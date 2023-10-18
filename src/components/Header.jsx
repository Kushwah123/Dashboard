

import React from "react";
import Card from "./Card";
import Home from "./Home";
import Productsell from "./Productsell";
import { FaHandPaper, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="header">
        {/* Greeting and Hand Icon */}
        <p>
          Hello Dharmendra Kushwah
          <FaHandPaper style={{ marginLeft: "10px" }} />
          {/* Search Input */}
          <input type="text" placeholder="Search" className="searchbar" />
        </p>
      </div>
    </>
  );
};

export default Header;
