import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from '@mui/icons-material/Work';
import "../Styles/Experience.css"
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor ="#3e497a">
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="Sep 2009- May 2019"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">Abdulrahman Kanoo International School, Bahrain</h3>
          <h4 className="vertical-timeline-element-subtitle">Highschool Diploma</h4>
          <p>High Distinction</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="Nov 2019- Jan 2022"
        iconStyle={{background: "#7DCE82", color: "#fff"}}
        icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">IT Service Desk - West Virginia University</h3>
          <h4 className="vertical-timeline-element-subtitle">Morgantown, WV</h4>
          <p>Provided rapid diagnosis, troubleshooting, and resolution of IT issues ensuring continuous uptime and productivity</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="Aug 2020- March 2023"
        iconStyle={{background: "#7DCE82", color: "#fff"}}
        icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">Mathematics & Computer Science Tutor - West Virginia University</h3>
          <h4 className="vertical-timeline-element-subtitle">Morgantown, WV</h4>
          <p>Tutored students in Calculus 1, Calculus 2, Applications of Algebra, and Intro to Data Structures & Algorithms</p>
        </VerticalTimelineElement>
      
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="Feb 2021- Aug 2022"
        iconStyle={{background: "#7DCE82", color: "#fff"}}
        icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">Website and Design Chair - TEDxWVU</h3>
          <h4 className="vertical-timeline-element-subtitle">Morgantown, WV</h4>
          <p>Managed and updated the official <a href="https://tedxwvu.com/">TEDxWVU website</a> 
 &nbsp;using HTML and CSS & Algorithms</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="May 2021- Aug 2021"
        iconStyle={{background: "#7DCE82", color: "#fff"}}
        icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">Software Development Intern - ACE Insurance Brokers</h3>
          <h4 className="vertical-timeline-element-subtitle">Seef, Bahrain</h4>
          <p>Developed an online claim-request project, where customers could file a claim for their car insurance 
online, promoting a COVID-conscious business model</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="Aug 2022- May 2023"
        iconStyle={{background: "#7DCE82", color: "#fff"}}
        icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">Connected and Automated Vehicles Software Developer - WVU ECOCAR</h3>
          <h4 className="vertical-timeline-element-subtitle">Morgantown, WV</h4>
          <p>Built a K-means clustering algorithm that enabled the vehicle with pothole detection and verification capabilities
</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="Aug 2019- May 2023"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">West Virginia University, Morgantown, WV</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor of Science in Computer Science</h4>
          <p>Summa Cum Laude</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience