import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "violet" : "black"
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/students"
          style={({ isActive }) => ({
            color: isActive ? "violet" : "black"
          })}
        >
          Students
        </NavLink>
        <NavLink
          to="/contacts"
          style={({ isActive }) => ({
            color: isActive ? "violet" : "black"
          })}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
