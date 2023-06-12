import React from 'react';
import "../Styles/Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import FilePresentIcon from '@mui/icons-material/FilePresent';
import Link from '@material-ui/core/Link';
import { ListItem } from '@mui/material';
import pdfFile from "../assets/Husain Yusuf CV.pdf";

function Home() {
  return (
    <div className="home">
      <div className = "about">
        <h2> Hi, My Name is Husain</h2>
        <div className= "prompt">
          <p>
            An aspiring software developer and recent graduate from West Virginia University. 
          </p>

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
      </div>
      <div className="row">
      <div className = "skills">
        <h1>Skills</h1>
        <ol className="list">
        <li className="item">
          <h2>Front-End</h2>
          <span>ReactJS, Angular, BootStrap, HTML, CSS, PHP, NPM, Yarn</span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>NodeJS, ExpressJS, Java Spring, Django, MySQL, AWS S3 </span>
        </li>
        <li className="item">
          <h2>Programming Languages</h2>
          <span>Java, Python, Javascript, C, C++, MATLAB</span>
        </li>
        <li className="item">
          <h2>Natural Languages</h2>
          <span>English, Arabic</span>
        </li>
        </ol>
      </div>
      <div className = "awards">
        <h1>Awards</h1>
        <ol className="list">
        <li className="item">
          <h2>University</h2>
          <span>Summa Cum Laude <br></br>Vice President of WVU's International Student Organization <br></br> WVU ECOCAR 1st Place Presentation <br></br> Record High TEDXWVU Attendance <br></br> 3 personal projects reach 500 visits</span>
        </li>
        <li className="item">
          <h2>Highschool</h2>
          <span>First Place Marathon Relay 2018-2019<br></br> 3rd Place TradeQuest Investment Competition<br></br> Math Kumon Graduate<br></br>Golden IB-CAS Award</span>
        </li>
        <li className="item">
          <h2>Personal</h2>
          <span>5 KM Marathon Completed in 22:36<br></br> Provided manual labor for renovating houses of less fortunate families in Bahrain<br></br>Fastest Completion of the Jump King game in the MENA region </span>
        </li>
        </ol>
      </div>
      </div>
      </div>
  )
}

export default Home;