import React from "react";
import "./Projects.css";
import aegis from "/svg/aegis.svg";
import gofema from "/svg/gofema.svg";
import hearhere from "/svg/hearhere.svg";
import drone from "/jpg/drone.png"
import rover from "/jpg/rover.png"

const Projects = () => {
  return (
    <div className="ProjectsMain">
      <div className="projectsTitleBox">
        <div className="myProjectsTitle">My Projects</div>
        <p className="projectsPara">Full Stack Developer with expertise in the MERN stack. Led projects integrating web and robotics, including real-time tracking and emergency response systems. Passionate about creating smart, scalable solutions.</p>
      </div>
      <div className="projectBoxes">
        <div className="projectCard">
          <div className="projectCardTop">
            <img src={aegis} />
          </div>
          <div className="projectCardBot">Aegis is a platform connecting NOCs, first responders, and civilians for efficient rescue operations. It integrates with government APIs to manage incidents, assign responders, and aid civilians.</div>
        </div>
        <div className="projectCard">
          <div className="projectCardTop">
            <img src={gofema} />
          </div>
          <div className="projectCardBot">Gofema is a weather app that tracks alerts for users, their friends, and family. It allows users to mark themselves as safe or unsafe during incidents, with data sent to government authorities for improved response.</div>
        </div>
        <div className="projectCard">
          <div className="projectCardTop">
            <img className="hearhere" src={hearhere} />
          </div>
          <div className="projectCardBot ">Hear Here is a mobile website that informs users about the city they are in and allows them to book seats for local events. It also provides reminders and various other features to enhance their experience.</div>
        </div>
        <div className="projectCard">
          <div className="projectCardTop">
            <img src={rover} />
          </div>
          <div className="projectCardBot ">I worked on a remote-less rover with unlimited range access, where I built a server using WebSockets for control. I utilized a Raspberry Pi and ultrasonic sensors to enhance its functionality.</div>
        </div>
        <div className="projectCard">
          <div className="projectCardTop">
            <img src={drone} />
          </div>
          <div className="projectCardBot ">I developed a drone with unlimited range access, using APIs and WebSockets for control. I integrated mission planning and execution features, leveraging advanced technology for seamless operation.</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;