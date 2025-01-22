import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./Pages/homePage";
import MembershipPage from "./Pages/membershipPage";
import ContactPage from "./Pages/contactPage";
import FaciltiesPage from "./Pages/facilitiesPage";
import Logo from "./assets/logo.png";



import Carousel from "./Pages/carousel.jsx";

function App() {
  return (
    <div>
      <Router>
        {/*Banner with logo and navigation*/}
        <div>
          <img src={Logo}/>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/facilities">Facilties</Link></li>
              <li><Link to="/membership">Membership</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
  
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/facilities" element={<FaciltiesPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </Router>
      <h6>Copyright notice</h6>
    </div>
  );
}

export default App;

