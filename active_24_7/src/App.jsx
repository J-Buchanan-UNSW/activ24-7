import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./Pages/homePage";
import MembershipPage from "./Pages/membershipPage";
import ContactPage from "./Pages/contactPage";
import FaciltiesPage from "./Pages/facilitiesPage";
import Logo from "./assets/logo.png";
import "./App.css"

function App() {
  return (
    <div>
      <Router>
        {/*Banner with logo and navigation*/}
        <div>
          <div className="banner">
            <div className="call-to-action">
              <p>Join Now!</p>
              <a href="mailto:admin@active247.net.au">admin@active247.net.au</a>
            </div>
            <img src={Logo}/>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/facilities">Facilities</Link></li>
                <li><Link to="/membership">Membership</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/facilities" element={<FaciltiesPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </Router>
      <br />
      <h6 className="copyRight">&copy; Active 24/7 2025 - All rights Reserved</h6>
    </div>
  );
}

export default App;

