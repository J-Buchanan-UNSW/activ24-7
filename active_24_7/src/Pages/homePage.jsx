import React from "react";
import bannerImage from "../assets/Mirror.jpeg"
import { Link } from "react-router-dom";
import "../App.css";
import "../Styles/HomePage.css";

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
          <img src="https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/cardio1.jpeg" alt="treadmill"/>
          <img src="https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/cardio2.jpeg" alt ="cycle"/>
          <img src="https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/cardio3.jpeg" alt="cycle 2"/>
          <img src="https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/cardio4.jpeg" alt="eliptical"/>
          <img src="https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/cardio5.jpeg" alt="rowing"/>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
