import React from "react";

function ContactPage() {
  return (
    <div>
      <h1>Contact</h1>
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
  )
}

export default ContactPage;