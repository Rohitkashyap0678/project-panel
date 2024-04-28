import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import CheckBox from "../CheckBox/CheckBox";
import SearchBar from "../SearchBar/SearchBar";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState([1, 2]);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevActive) => {
      if (prevActive.includes(index)) {
        return prevActive.filter((item) => item !== index);
      } else {
        return [...prevActive, index];
      }
    });
  };

  return (
    <div className="accordion-container">
      <div className="accordion border-b p-4 border-gray-400">
        <button
          className={`accordion-button flex items-center justify-between w-full font-semibold text-white uppercase ${
            activeAccordion.includes(1) ? "active" : ""
          }`}
          onClick={() => toggleAccordion(1)}
        >
          Categories
          <FaAngleDown className="text-[--body-bg-color]" />
        </button>
        <div
          className="panel"
          style={{ display: activeAccordion.includes(1) ? "block" : "none" }}
        >
          <SearchBar />
          <div className="mt-5">
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="ATV Dealer"
              checked={true}
            />
            <CheckBox
              name="ATV Dealer Shop"
              checked={true}
              className="!text-xs !text-[--body-bg-color]"
            />
            <CheckBox
              name="Abbay"
              className="!text-xs !text-[--body-bg-color]"
            />
            <CheckBox
              name="Abbaey vise Suply"
              className="!text-xs !text-[--body-bg-color]"
            />
            <CheckBox
              name="Life truth"
              className="!text-xs !text-[--body-bg-color]"
            />
            <h6 className="text-[--body-bg-color] !text-sm">More...</h6>
          </div>
        </div>
      </div>

      <div className="accordion border-b p-4 border-gray-400">
        <button
          className={`accordion-button flex items-center justify-between w-full font-semibold text-white uppercase ${
            activeAccordion.includes(2) ? "active" : ""
          }`}
          onClick={() => toggleAccordion(2)}
        >
          Websites
          <FaAngleDown className="text-[--body-bg-color]" />
        </button>
        <div
          className="panel"
          style={{ display: activeAccordion.includes(2) ? "block" : "none" }}
        >
          <div className="mt-5 grid gap-1">
            <ToggleSwitch name="Websites" />
            <ToggleSwitch name="Responsive" />
            <ToggleSwitch name="Mobile" />
          </div>
        </div>
      </div>

      <div className="accordion border-b p-4 border-gray-400">
        <button
          className={`accordion-button flex items-center justify-between w-full font-semibold text-white uppercase ${
            activeAccordion.includes(3) ? "active" : ""
          }`}
          onClick={() => toggleAccordion(3)}
        >
          PRIMARY LANGUAGE
          <FaAngleDown className="text-[--body-bg-color]" />
        </button>
        <div
          className="panel"
          style={{ display: activeAccordion.includes(3) ? "block" : "none" }}
        >
          <SearchBar />
          <div className="mt-5">
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="Catelen (Valenecin)"
              checked={true}
            />
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="Chinese"
            />
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="English"
            />
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="french"
            />
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="Germen"
            />
            <h6 className="text-[--body-bg-color] !text-sm">More...</h6>
          </div>
        </div>
      </div>

      <div className="accordion border-b p-4 border-gray-400">
        <button
          className={`accordion-button flex items-center justify-between w-full font-semibold text-white uppercase ${
            activeAccordion.includes(4) ? "active" : ""
          }`}
          onClick={() => toggleAccordion(4)}
        >
          CONTENT
          <FaAngleDown className="text-[--body-bg-color]" />
        </button>
        <div
          className="panel"
          style={{ display: activeAccordion.includes(4) ? "block" : "none" }}
        >
          <SearchBar />
          <div className="mt-5">
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="Catelen (Valenecin)"
              checked={true}
            />
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="Chinese"
            />
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="English"
            />
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="french"
            />
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="Germen"
            />
            <h6 className="text-[--body-bg-color] !text-sm">More...</h6>
          </div>
        </div>
      </div>

      <div className="accordion border-b p-4 !border-gray-400">
        <button
          className={`accordion-button flex items-center justify-between w-full font-semibold text-white uppercase ${
            activeAccordion.includes(5) ? "active" : ""
          }`}
          onClick={() => toggleAccordion(5)}
        >
          social
          <FaAngleDown className="text-[--body-bg-color]" />
        </button>
        <div
          className="panel"
          style={{ display: activeAccordion.includes(5) ? "block" : "none" }}
        >
          <div className="mt-5">
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="Catelen (Valenecin)"
              checked={true}
            />
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="Chinese"
            />
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="English"
            />
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="french"
            />
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="Germen"
            />
            <h6 className="text-[--body-bg-color] !text-sm">More...</h6>
          </div>
        </div>
      </div>

      <div className="accordion border-b p-4 border-gray-400">
        <button
          className={`accordion-button flex items-center justify-between w-full font-semibold text-white uppercase ${
            activeAccordion.includes(6) ? "active" : ""
          }`}
          onClick={() => toggleAccordion(6)}
        >
          Seo
          <FaAngleDown className="text-[--body-bg-color]" />
        </button>
        <div
          className="panel"
          style={{ display: activeAccordion.includes(6) ? "block" : "none" }}
        >
          <SearchBar />
          <div className="mt-5">
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="Catelen (Valenecin)"
              checked={true}
            />
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="Chinese"
            />
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="English"
            />
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="french"
            />
            <CheckBox
              className="!text-xs !text-[--body-bg-color]"
              name="Germen"
            />
            <h6 className="text-[--body-bg-color] !text-sm">More...</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
