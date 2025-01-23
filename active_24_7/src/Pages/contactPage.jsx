import React from "react";
import bannerImage from "../assets/contact.jpg";
import placeHolder from "../assets/placeHolder.png"
import "../App.css";
import "../index.css";
import "../Styles/HomePage.css"
import "../Styles/Contact.css"

function ContactPage() {
  return (
    <div>
      <img src={bannerImage} alt="Panorama of Gym" className="pano-image"/>
      <h1>Contact</h1>
      <div className="contact-container">
      <div className="contact-info">
          <p>Email</p>
          <a href="mailto:admin@active247.net.au?subject=Membership Enquiry">admin@active247.net.au</a>
          <p>Phone</p>
          <a href="tel:+61268321164">02 6832 1164</a>
          <p>
            Active 24/7 Office
            <br></br> 
            <a
              href="https://maps.app.goo.gl/5tqMMLMPRXxzjXog6"
              target="_blank"
              rel="noopener noreferrer"
            >
              103 Pangee Street Nyngan NSW 2825
            </a>
          </p>
          <p>
            Active 24/7 Gym
            <br></br> 
            <a
              href="https://maps.app.goo.gl/36CwSwwKPDZNHxGf8"
              target="_blank"
              rel="noopener noreferrer"
            >
              101 Pangee Street Nyngan NSW 2825
            </a>
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={placeHolder} />
      </div>
    </div>
  )
}

export default ContactPage;