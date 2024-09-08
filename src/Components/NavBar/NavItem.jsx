import React from "react";
import { useNavigate } from "react-router-dom";

const NavItem = ({ icon, altText, path, navigate, isActive }) => {
  return (
    <div
      className={`navIcon ${isActive ? 'active' : ''}`}
      onClick={() => navigate(path)}
    >
      <div className="navIconBg"></div>
      <img src={icon} alt={altText} />
    </div>
  );
};

export default NavItem;
