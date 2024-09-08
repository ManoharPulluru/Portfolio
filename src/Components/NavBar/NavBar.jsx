import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css";
import home from "/svg/home.svg";
import projects from "/svg/projects.svg";
import experience from "/svg/experience.svg";
import NavItem from "./NavItem";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { icon: home, altText: "Home", path: "/" },
    { icon: projects, altText: "Projects", path: "/projects" },
    { icon: experience, altText: "Experience", path: "/experience" },
  ];

  return (
    <div className="NavbarMain">
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          icon={item.icon}
          altText={item.altText}
          path={item.path}
          navigate={navigate}
          isActive={location.pathname === item.path}
        />
      ))}
    </div>
  );
};

export default NavBar;
