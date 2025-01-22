import React, { useState } from 'react';

function GymEquipment() {
  const [selectedOption, setSelectedOption] = useState('cardio');

  // Content for each option (images in this case)
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
      "https://www.active247.net.au/content/images/thumbnails/free-weights/dumbells.jpg",
      "https://www.active247.net.au/content/images/thumbnails/free-weights/barbells.jpg"],
    other: [
      "https://www.active247.net.au/content/images/thumbnails/other-equipment/back-extension.jpg", 
      "https://www.active247.net.au/content/images/thumbnails/free-weights/dumbells.jpg",
      "https://www.active247.net.au/content/images/thumbnails/free-weights/barbells.jpg"]
  };

  return (
    <div>
      <h2>Explore of range of exercise Equipment</h2>
      
      {/* Text options */}
      <ul>
        <li onClick={() => setSelectedOption('cardio')}>Cardio Eqipment</li>
        <li onClick={() => setSelectedOption('freeWeights')}>Free Weights</li>
        <li onClick={() => setSelectedOption('weightMach')}>Weight Machines</li>
        <li onClick={() => setSelectedOption('other')}>Other</li>
      </ul>

      <div style={{ marginTop: '20px' }}>
        {/* Dynamically render images in a grid layout based on selected option */}
        {selectedOption ? (
          <div className="image-grid">
            {content[selectedOption].map((imageSrc, index) => (
              <div className="image-item" key={index}>
                <img
                  src={imageSrc}
                  alt={`Image ${index + 1}`}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        ) : (
          <p>Please select an option to see the content.</p>
        )}
      </div>
    </div>
  );
}

export default GymEquipment;