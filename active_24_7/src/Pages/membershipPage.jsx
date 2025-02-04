import React from "react";
import "../index.css"
import "../App.css"
import bannerImage from "../assets/Front.jpeg"

function MembershipPage() {
  return (
    <div> 
      <img src={bannerImage} alt="Panorama of Gym" className="pano-image"/>
      <h1>Membership at Active 24/7</h1>
      <h2>Join for just $40 a month</h2>
      <ul>
        <li>No lock in contract! cancel any time</li>
        <li>Access 24 hours a day, 7 days a week</li>
        <li>Enjoy our new and udpated range of top end cardio equipment</li>
      </ul>
      <h2>Payment Options</h2>
      <ul>
        <li>Credit Card</li>
        <li>Reccurring Direct Deposit</li>
        <li>Cash</li>
      </ul>
      <PDFDownload />
    </div>
  );
}

const PDFDownload = () => {
  return (
    <div>
      <a href="https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/MemberForm.pdf" download="Active_24_7_Membership_Form.pdf">
        <button>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Icon_pdf_file.svg/1805px-Icon_pdf_file.svg.png" 
            style={{ width: '20px', height: '20px', marginRight: '10px'}} /*temp until css implemented*/
          />
          Download our membership form
        </button>
      </a>
    </div>
  )
}

export default MembershipPage;