import React from "react";
import Carousel from "../Pages/carousel";
import bannerImage from "../assets/Mirror.jpeg"
import { Link } from "react-router-dom";
import "../App.css";
import "../Styles/HomePage.css";
import cardio1 from "../assets/cardio1.jpeg";
import cardio2 from "../assets/cardio2.jpeg";
import cardio3 from "../assets/cardio3.jpeg";
import cardio4 from "../assets/cardio4.jpeg";
import cardio5 from "../assets/cardio5.jpeg";

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
        <br />
        <hr />
        <h2 className="clickable">
          Explore our refreshed equipment range!
        </h2>
      </div>
      <Link to="/facilities">
        <div className="image-container">
          <img src={cardio1} alt="what"/>
          <img src={cardio2} />
          <img src={cardio3} />
          <img src={cardio4} />
          <img src={cardio5} />
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
