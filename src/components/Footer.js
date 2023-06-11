import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

import "../Styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
       <div className="socials">
       <LinkedInIcon/>
       <GitHubIcon/>
       <EmailIcon/>
       </div>
       <p> &copy; 2023 husainyusuf.com</p>
    </div>
  )
}

export default Footer