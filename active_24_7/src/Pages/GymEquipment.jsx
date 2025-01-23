import React, { useState } from 'react';
import "../Styles/FacilitiesPage.css"
import "../Styles/HomePage.css"

function GymEquipment() {
  const [selectedOption, setSelectedOption] = useState('cardio');

  const content = {
    cardio: [
      "https://www.active247.net.au/content/images/thumbnails/cardio-equipment/bike.jpg", 
      "https://www.active247.net.au/content/images/thumbnails/cardio-equipment/cross-trainer.jpg",
      "https://www.active247.net.au/content/images/thumbnails/cardio-equipment/rower.jpg",
      "https://www.active247.net.au/content/images/thumbnails/cardio-equipment/treadmill.jpg"],
    freeWeights: [
      "https://www.active247.net.au/content/images/thumbnails/free-weights/bench-press.jpg", 
      "https://www.active247.net.au/content/images/thumbnails/free-weights/dumbells.jpg",
      "https://www.active247.net.au/content/images/thumbnails/free-weights/barbells.jpg"],
    weightMach: [
      "https://www.active247.net.au/content/images/thumbnails/weight-machines/chest-press.jpg", 
      "https://www.active247.net.au/content/images/thumbnails/weight-machines/functional-trainer.jpg",
      "https://www.active247.net.au/content/images/thumbnails/weight-machines/lat-pulldown.jpg", 
      "https://www.active247.net.au/content/images/thumbnails/weight-machines/leg-curl.jpg", 
      "https://www.active247.net.au/content/images/thumbnails/weight-machines/leg-press.jpg", 
      "https://www.active247.net.au/content/images/thumbnails/weight-machines/pec-fly.jpg",
      "https://www.active247.net.au/content/images/thumbnails/weight-machines/smith-machine.jpg",
      "https://www.active247.net.au/content/images/thumbnails/weight-machines/shoulder-press.jpg"],
    other: [
      "https://www.active247.net.au/content/images/thumbnails/other-equipment/back-extension.jpg", 
      "https://www.active247.net.au/content/images/thumbnails/other-equipment/bosu.jpg",
      "https://www.active247.net.au/content/images/thumbnails/other-equipment/medicine-balls.jpg",
      "https://www.active247.net.au/content/images/thumbnails/other-equipment/kettlebells.jpg",
      "https://www.active247.net.au/content/images/thumbnails/other-equipment/fitballs.jpg"]
  };

  return (
    <div>
      <h2>Explore our range of exercise equipment</h2>
      <div className='container'>
        <div className='options'>
          <ul>
            <hr />
            <li onClick={() => setSelectedOption('cardio')}>Cardio Eqipment</li>
            <hr />
            <li onClick={() => setSelectedOption('freeWeights')}>Free Weights</li>
            <hr />
            <li onClick={() => setSelectedOption('weightMach')}>Weight Machines</li>
            <hr />
            <li onClick={() => setSelectedOption('other')}>Other</li>
            <hr />
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          {selectedOption ? (
            <div className="image-grid">
              {content[selectedOption].map((imageSrc, index) => (
                <div className="image-item" key={index}>
                  <img
                    src={imageSrc}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p>Please select an option to see the content.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GymEquipment;