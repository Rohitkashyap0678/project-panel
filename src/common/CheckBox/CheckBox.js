import React from "react";
import "./Checkbox.css";
function CheckBox({ name, checked, className }) {
  return (
    <label className={`main   ${className}`}>
      {name}
      <input type="checkbox" checked={checked} />
      <span className="checkbox-container"></span>
    </label>
  );
}

export default CheckBox;
