import React, { useState } from "react";
import "./Tabs.css"; // Import your CSS file for styling

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab !text-sm md:!text-base ${
              activeTab === index ? "active" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {tab}
          </div>
        ))}
        <div
          className="active-tab-indicator"
          style={{ left: `${activeTab * 100}px` }}
        ></div>
      </div>
      <div className="tab-content"></div>
    </div>
  );
};

export default Tabs;
