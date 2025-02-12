import { useState } from 'react';
import "../Styles/FacilitiesPage.css"
import "../Styles/HomePage.css"

function GymEquipment() {
  const [selectedOption, setSelectedOption] = useState('cardio');

  const content = {
    cardio: [
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/cardio1.jpeg", 
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/cardio2.jpeg",
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/cardio3.jpeg",
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/cardio4.jpeg",
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/cardio5.jpeg"],
    freeWeights: [
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/barbell.jpg", 
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/dumbbell_colour.jpeg",
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/weights_tower.jpeg",
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/assisted_curl.jpeg",
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/benchpress.jpeg",
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/Weight_mirror.jpeg"],
    weightMach: [
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/chest_press.jpeg", 
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/functional_trainer.jpeg",
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/lat_pulldown.jpeg", 
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/leg_extension.jpeg", 
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/leg_press.jpeg", 
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/pec_fly.jpeg",
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/smith_machine.jpeg",
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/pulldown.jpeg",
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/shoulder_press.jpeg"],
    other: [
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/dumbbell.jpeg", 
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/balls.jpeg",
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/back_ext.jpeg",
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/steps.jpeg",
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/med_ball.jpeg",
      "https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/punching_bag.jpeg"]
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
            <li onClick={() => setSelectedOption('other')}>Functional Fitness</li>
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