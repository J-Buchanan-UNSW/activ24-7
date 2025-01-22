import React from "react";
import Carousel from "./carousel";
import bannerImage from "../assets/Gym_Pano.jpg"
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <img src={bannerImage} alt="Panorama of Gym" className="GymImage"/>
      <div>
        <h1>Welcome to Active 24/7</h1>
        <p>We pride ourselves on providing the community with the very best gym equipment. Whether you are a beginner or a seasoned gym-goer, you'll find the equipment you need to get moving!</p>
      </div>
      <div>
        <h2>Start your fitness journey today</h2>
        <Link to="/membership">
          <button>Join</button>
        </Link>
      </div>
      {/*Carousel in here! */}

    </div>
  );
}

export default HomePage;
