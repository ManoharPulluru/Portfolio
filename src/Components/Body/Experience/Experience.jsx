import React from "react";
import "./Experience.css";
import gaian from "/jpg/gaian.png";
import tenX from "/jpg/10x.png";

const Experience = () => {
  return (
    <div className="ExperinceMain">
      <div className="expTitleDiv">
        <div className="expTop">My Work Experience</div>
        <div className="expBot">Extensive knowlege With 1.1 years of experience in full-stack web development, I specialize in integrating web technologies with autonomous systems like drones and rovers. I've developed a remote-controlled rover using WebSockets and ultrasonic sensors, and built an autonomous drone with API-based mission planning and execution. My expertise spans hardware integration and real-time system control, combining advanced technology with web-based solutions.</div>
      </div>
      <div className="experienceDivs">
        <div className="companyDiv">
          <div className="companyDivLeft">
            {/* <div className="companyTitle">GAIAN SOLUTIONS</div> */}
            <div className="companyTimeline">SEPT 2023 - PRESENT</div>
            <div className="companyLogosDiv">
              <img src={gaian} />
            </div>
          </div>
          <div className="companyDivRight">
            <div className="companyRole">TEAM LEAD & WEB DEVELOPER</div>
            <div className="companyDescription">
              I am currently working as a Full Stack Web Developer & Team Lead for Drones and Robotics at Gaian Solutions since September 2023. My role involves developing and maintaining web applications for platforms like 311, Open FEMA, and Ticketmaster using full-stack technologies. Through my work, I gained deep expertise in building and optimizing complex web applications. Recently, I was promoted to lead the Drones and Robotics team, where I oversee multiple projects, manage team efforts,
              and ensure smooth coordination across departments. This position has strengthened my skills in product development, team management, and leadership. I am responsible for handling the full lifecycle of development, from concept to deployment, while driving innovation in the integration of web technologies with autonomous systems. My experience at Gaian Solutions has provided me with the opportunity to work on cutting-edge technologies, collaborate with talented teams, and tackle
              real-world challenges.
            </div>
          </div>
        </div>
        <div className="companyDiv">
          <div className="companyDivLeft">
            {/* <div className="companyTitle">THE 10X ACADEMY</div> */}
            <div className="companyTimeline">DEC 2022 - JUNE 2023</div>
            <div className="companyLogosDiv">
              <img src={tenX} />
            </div>
          </div>
          <div className="companyDivRight">
            <div className="companyRole">STUDENT</div>
            <div className="companyDescription">
              10x Academy was pivotal in shaping my journey as a full-stack web developer. As a student in this intensive program, I delved deeply into essential technologies including JavaScript, HTML, CSS, React, MongoDB, SQL, and Node.js. The curriculum was meticulously designed to cover both front-end and back-end development, providing a well-rounded education. Through hands-on projects, I applied my knowledge to build real-world applications, tackling challenges that mirrored industry
              scenarios. This practical experience was complemented by rigorous training that enhanced my coding proficiency and problem-solving skills. I learned to design responsive user interfaces with React, manage databases with MongoDB and SQL, and create robust server-side applications using Node.js. The program's expert instructors offered invaluable insights and mentorship, guiding me through complex concepts and best practices. This exposure not only refined my technical abilities but
              also prepared me to handle sophisticated web development tasks with confidence.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
