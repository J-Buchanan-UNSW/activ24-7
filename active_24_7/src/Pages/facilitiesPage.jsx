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
      <h1>Facilties and Amenities</h1>
      <hr />
      <GymEquipment/>
      <h2>Enjoy the amenties on offer</h2>
      <p>Add in aircon, etc</p>
    </div>
  );
}

export default FacilitiesPage;