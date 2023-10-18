import React from "react";
import Card from "./Card";
import Home from "./Home";
import Productsell from "./Productsell";
import Header from "./Header";


const Rightside = () => {
    return (
        <div className="right-side">
              <Header/>
              <Card/>
              <Home/>
              <Productsell/>
        </div>
    )
}
export default Rightside;