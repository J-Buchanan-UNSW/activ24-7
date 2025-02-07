import { React, useEffect, useRef } from "react";
import bannerImage from "../assets/contact.jpg";
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
      <div className="map">
        <MapAPI />
      </div>
    </div>
  )
}

function MapAPI() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const location = { lat: -31.563046097412176, lng: 147.1956108209046 };

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 18,
        center: location,
      });

      new window.google.maps.Marker({
        position: location,
        map: map,
      });
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = loadMap;
      document.head.appendChild(script);
      console.log("hssssijai");
    } else {
      loadMap();
    }
  }, []);

  return (
    <div>
      <h2>Find Us Here</h2>
      <div
        ref={mapRef}
        style={{ height: "400px", width: "100%", borderRadius: "12px" }}
      />
    </div>
  );
}


export default ContactPage;
