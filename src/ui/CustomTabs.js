import React, { useState } from "react";

const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="flex items-center gap-2">
      <div
        className={` cursor-pointer ${
          activeTab === 0
            ? "active text-[--primary-green] "
            : "text-[--tabs-color]"
        }`}
        onClick={() => handleClick(0)}
      >
        <h6 className="text-primary-green font-semibold text-sm">MAP</h6>
      </div>
      <div
        className={` cursor-pointer  ${
          activeTab === 1
            ? "active text-[--primary-green] "
            : "text-[--tabs-color]"
        }`}
        onClick={() => handleClick(1)}
      >
        <h6 className="text-tabs-color font-semibold text-sm">CARD</h6>
      </div>
    </div>
  );
};

export default CustomTabs;
