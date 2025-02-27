import React from "react";
import GymEquipment from "./GymEquipment";
import "../App.css"
import "../index.css"
import "../Styles/HomePage.css"

function FacilitiesPage() {
  return (
    <div>
      <img src="https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/Weights_top_2.jpg" alt="Panorama of Gym" className="pano-image"/>
      <h1>Facilities and Amenities</h1>
      <hr />
      <GymEquipment/>
      <h2>Enjoy the amenties on offer</h2>
        <b>Mutiple reverse cycle air conditioners. Keeping the gym at ideal temperatures all year around</b>
        <hr className="line" />
        <b>State of the art sound system, to enjoy music and workouts with friends</b>
        <hr className="line" />
        <b>Access to bathroom/changing facilties</b>
    </div>
  );
}

export default FacilitiesPage;
