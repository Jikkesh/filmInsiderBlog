import React from "react";
import TrendingScrollBar from "./TrendingScrollBar/TrendingScrollBar";

import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogbox from "./Blogbox/Blogbox.jsx";


const Home = () => {
  
  return (
    <div className="home-container">
      <div className="hero-container">

          <div className="blogs">
            <main className="main-content">
              <Blogbox/>
           
            </main>
          </div>
      </div>
        <div className="Box EditorsPick">
            <TrendingScrollBar/>
        </div>
        
        </div>
  );
};
export default Home;

