import React from "react";
import "./ToggleSwitch.css";
const ToggleSwitch = ({ name }) => {
  return (
    <div className="toggle-container flex items-center justify-between text-white">
      {name}
      <input type="checkbox" id={name} className="checkbox" />
      <label htmlFor={name} className="toggle"></label>
    </div>
  );
};

export default ToggleSwitch;
