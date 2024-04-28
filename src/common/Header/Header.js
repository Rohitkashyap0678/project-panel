import React, { useState } from "react";
import WebLogo from "../../assets/WebLogo.png";
import AvatarImage from "../../assets/Avatar.png";
import { VscThreeBars } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import Sidebar from "../Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const openSideBar = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  return (
    <>
      <header>
        <div className="header-inner  clearfix  flex items-center ">
          <div
            className={`hamburger  w-[82px] h-full justify-center items-center flex text-center logoBorder hamburger-spin ${
              isAsideOpen ? "is-active" : ""
            }`}
            id="menu"
            onClick={openSideBar}
          >
            {/* <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div> */}
            <GiHamburgerMenu className="text-gray-700 w-6 h-6" />
            <Sidebar isOpen={isAsideOpen} />
          </div>
          <div className="header-logo lg:ml-0 ml-[-16px] flex items-center !p-0">
            <a href="#" className="">
              <img
                alt="logo-icon"
                className="float-left md:!max-h-14  max-h-10 !min-h-10 inline-block"
                src={WebLogo}
                // width="80"
                // height="100"
              />
            </a>
          </div>
          <div className="header-search lg:!block !hidden !ml-10 relative">
            <div className="search shadow lg:!min-w-[600px] min-w-[200px]">
              <input
                type="search"
                name="search"
                className="lg:block hidden !min-w-[600px]  "
                placeholder="Search Using Website URL, Bussiness Name, product and more..."
              />
              <input
                type="search"
                name="search"
                className="lg:hidden block !min-w-[300px] "
                placeholder="Search..."
              />
              <button className="bg-green-600 absolute text-white px-5 py-[14px] right-0 top-0">
                <FaSearch className=" bg-green-600 text-white " />
              </button>
            </div>
          </div>

          <div className="header-menu ml-auto">
            <ul className="ul-base flex items-center gap-3">
              <li>
                <a href="#" className="twitter" target="_blank">
                  <FaRegQuestionCircle className="flex text-[--body-txt-color] lg:w-7 lg:h-7 w-5 h-5 " />
                </a>
              </li>
              <li>
                <a href="#" className="facebook" target="_blank">
                  <MdNotificationsNone className="flex text-[--body-txt-color]  lg:w-8 lg:h-8 w-6 h-6 gap-2" />
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="rss flex text-[--body-txt-color] gap-2 items-center"
                  target="_blank"
                >
                  <img
                    alt="logo-icon"
                    className="rounded-full"
                    src={AvatarImage}
                    width="40"
                    height="40"
                  />{" "}
                  <span className="md:block hidden">Rohit kashyap</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
