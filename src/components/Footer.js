import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import Link from '@material-ui/core/Link';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import pdfFile from "../assets/Husain Yusuf CV.pdf";

import "../Styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
       <div className="socials">
       
       <a href={pdfFile} target="_blank">
          <FilePresentIcon /> 
          </a>   
          <Link href="https://www.linkedin.com/in/husainyusuf1/" target="_blank">
          <LinkedInIcon/>
          </Link>
          <Link href="https://github.com/HusainYusuf" target="_blank">
          <GitHubIcon/>
          </Link>
          <Link href="mailto:husainyusuf1901@gmail.com">
          <EmailIcon/>
          </Link>
       </div>
       <p> &copy; 2023 husainyusuf.com</p>
    </div>
  )
}

export default Footer