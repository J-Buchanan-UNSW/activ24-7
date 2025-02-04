import React from "react";
import GymEquipment from "./GymEquipment";
import "../App.css"
import "../index.css"
import "../Styles/HomePage.css"
import bannerImage from "../assets/Weights_top.jpg"

function FacilitiesPage() {
  return (
    <div>
      <img src={bannerImage} alt="Panorama of Gym" className="pano-image"/>
      <h1>Facilities and Amenities</h1>
      <hr />
      <GymEquipment/>
      <h2>Enjoy the amenties on offer</h2>
      <ul>
        <li>Mutiple reverse cycle air conditioners. Keeping the gym at ideal temperatures all year around</li>
        <hr className="line" />
        <li>State of the art sound system, to enjoy music and workouts with friends</li>
        <hr className="line" />
        <li>Access to bathroom/changing facilties</li>
      </ul>
    </div>
  );
}

export default FacilitiesPage;
