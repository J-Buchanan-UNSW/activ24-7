import React from "react";
import "../index.css"
import "../App.css"

function MembershipPage() {
  return (
    <div> 
      <img src="https://active-24-7-photos.s3.ap-southeast-2.amazonaws.com/Front.jpeg" alt="Panorama of Gym" className="pano-image"/>
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

const DownloadLink = () => {
  fetch("MemberForm.pdf")
    .then((response) => response.blob())
    .then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);

      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "Active247_membership_form.pdf";
      alink.click();
    })
    .catch((error) => {
      console.error('Error downloading the file:', error);
    });
};

const PDFDownload = () => {
  return (
    <div>
        <button onClick={DownloadLink}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Icon_pdf_file.svg/1805px-Icon_pdf_file.svg.png" 
            style={{ width: '20px', height: '20px', marginRight: '10px'}} /*temp until css implemented*/
          />
          Download our membership form
        </button>
    </div>
  );
};

export default MembershipPage;