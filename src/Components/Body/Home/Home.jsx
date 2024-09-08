import React, { useState, useEffect } from "react";
import "./Home.css";
import profile from "/jpg/profile.png";
import linkedin from "/jpg/linkedin.png";
import gmail from "/jpg/gmail.png";
import download from "/jpg/download.png";
import resume from "/pdf/MANOHAR_PULLURU_RESUME.pdf"
import phone from "/jpg/phone.png";
import exp from "/jpg/experience.png";
import Carousel from "../../Features/Caurosel";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "I'm a MERN web and product developer with a strong focus on creativity, problem-solving, and logical thinking. With experience in complex websites, robotics, and drone development, I've built innovative solutions, including a web platform for remote drone control using React and Node.js. I excel at leveraging AI tools and have led successful projects in both software and hardware domains.";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText[index]);
      index++;
      if (index >= fullText.length-1) {
        clearInterval(interval);
      }
    }, 10); // Adjust typing speed here
    return () => clearInterval(interval);
  }, [fullText]);
  

  // Function to handle Gmail logo click for opening Gmail compose in a new tab
  const handleGmailClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=manumanohar4488@gmail.com&su=Hello%20Manohar&body=I%20would%20like%20to%20connect%20with%20you.`;
    window.open(gmailUrl, "_blank");
  };

  const [shownum, setShowNum] = useState(false);

  // Function to handle LinkedIn logo click to open LinkedIn profile in a new tab
  const handleLinkedInClick = () => {
    const linkedInUrl = "https://www.linkedin.com/in/manohar-pulluru-5648411a0/";
    window.open(linkedInUrl, "_blank");
  };

  return (
    <div className="homeMain">
      <img className="profileImage" src={profile} alt="Profile" />
      <div className="homeContent">
        <div className="homeContentLine1">I’m Manohar Pulluru</div>
        <div className="homeContentLine2">
          Web & Product <span>Developer</span>
        </div>
        <p className="typingEffect">{typedText}</p>
        <div className="homeContact">
          <a style={{ textDecoration: "none" }} href={resume} download="Manohar_Pulluru_Resume.pdf" className="downloadBtn">
            Download Resume
          </a>
          <img className="gmailLogo" src={gmail} alt="Gmail" onClick={handleGmailClick} style={{ cursor: "pointer" }} />
          <img className="linkedinLogo" src={linkedin} alt="LinkedIn" onClick={handleLinkedInClick} style={{ cursor: "pointer" }} />
          <div onClick={() => { setShowNum(!shownum) }} className="phNumber">
            {shownum ? "+91 6303411409" : "Call Me"}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
