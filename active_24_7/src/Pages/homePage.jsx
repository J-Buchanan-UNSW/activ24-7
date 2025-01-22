import React from "react";
import Carousel from "./carousel";
import bannerImage from "../assets/Gym-Pano.png"
import { Link } from "react-router-dom";
import "../App.css"
import "../Styles/HomePage.css"

function HomePage() {
  return (
    <div>
      <img src={bannerImage} alt="Panorama of Gym" className="pano-image"/>
      <div>
        <h1>Welcome to Active 24/7</h1>
        <div className="content-container">
          <p>
            We pride ourselves on providing the community with the very best gym equipment. 
            Whether you are a beginner or a seasoned gym-goer, you'll find the equipment you need to get moving!
          </p>
          <div className="right-content">
            <h2>Start your fitness journey today</h2>
            <Link to="/membership">
              <button>Join</button>
            </Link>
          </div>
        </div>
      </div>
      {/*Carousel in here! */}
    </div>
  );
}

export default HomePage;
