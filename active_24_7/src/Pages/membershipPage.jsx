import React from "react";

function MembershipPage() {
  return (
    <div> 
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
      <button>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Icon_pdf_file.svg/1805px-Icon_pdf_file.svg.png" 
          style={{ width: '20px', height: '20px', marginRight: '10px'}} /*temp until css implemented*/
        />
        Download our membership form
      </button>
    </div>
  );
}

export default MembershipPage;