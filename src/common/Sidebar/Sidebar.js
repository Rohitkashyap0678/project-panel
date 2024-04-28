import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoDocumentOutline } from "react-icons/io5";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`sidebar h-[100vh] w-fit  min-w-[100px] fixed left-0 !top-[70px] ${
        isOpen ? "open" : ""
      }`}
    >
      {/* <div className=""> */}
      <nav className="navbar navbar-inverse !h-full navbar-fixed-left">
        <div className="container h-full">
          <div
            id="navbar"
            className="navbar-collapse bg-gray-700 !h-full collapses"
          >
            <ul className="nav navbar-nav !h-full">
              <li className="arrow " style={{ borderBottom: "1px solid gray" }}>
                <a
                  href="#"
                  className="grid items-center justify-center text-center text-[--light-white-color] gap-1 py-4 m-auto"
                >
                  {" "}
                  <AiOutlineHome className="items-center justify-center w-6 h-6 text-[--light-white-color] text-center m-auto gap-5 flex" />
                  Home
                </a>
              </li>
              <li className="arrow" style={{ borderBottom: "1px solid gray" }}>
                <a
                  href="#"
                  className="grid items-center justify-center text-center gap-1 text-[--light-white-color] py-4 m-auto"
                >
                  {" "}
                  <IoDocumentOutline className="items-center justify-center w-6 h-6 text-[--light-white-color] text-center m-auto gap-5 flex" />
                  Profiles
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
