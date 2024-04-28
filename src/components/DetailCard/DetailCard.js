import React from "react";
import "./index.css";
import CheckBox from "../../common/CheckBox/CheckBox";
import { IoLocationSharp } from "react-icons/io5";
import { ImLink } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { PiChatCircleTextBold } from "react-icons/pi";
import GraphMeter from "../../assets/GraphMeter.png";
import RedCard from "../../assets/RedCard.png";

const DetailCard = () => {
  const data = [
    { title: "Age", value: "19 Y" },
    { title: "Employees", value: "17 - 20" },
    { title: "Revenue", value: "$75-10M" },
    { title: "Locations", value: "03" },
    { title: "Contacts", value: "06" },
    { title: "Avg Spend/Mo", value: "Unknown" },
  ];
  return (
    <div>
      <div className="border-l-4 shadow-md mt-5 border-[--primary-green] !rounded-md">
        <div className="md:flex grid bg-white">
          <div className="bg-white p-5 col-10 border-r py-5 border-[--border-color] !rounded-md ">
            <div className="detailLabelCheckbox">
              <CheckBox
                name="NationWide Automobile"
                className="text-black font-semibold !flex !items-center !w-fit !justify-start"
              />
            </div>
            <div className="md:pl-6 md:pr-4">
              <div className="border-b-2 border-[--border-color] pb-3 lg:flex grid  justify-start lg:gap-5 gap-2 w-full">
                <h6 className="text-gray-400 text-sm flex items-baseline gap-1">
                  <IoLocationSharp className="w-5 h-5 text-[--primary-green] relative top-1" />
                  26 Prince, vise value, America 20019
                </h6>
                <h6 className="text-[--primary-green] text-sm flex items-baseline gap-1">
                  <ImLink className="w-4 h-4 text-[--primary-green] relative top-1" />
                  www.instagram.com
                </h6>
                <h6 className="text-gray-400 text-sm flex items-baseline gap-1">
                  <BsTelephoneFill className="w-4 h-4 text-[--primary-green] relative top-[2px]" />
                  8218702025
                </h6>
              </div>

              <div className="grid md:grid-cols-3 grid-cols-2 gap-5 lg:gap-0 lg:flex border-b-2 border-[--border-color] mt-4 pb-3  items-center justify-between">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="text-gray-400 text-sm grid gap-1 "
                  >
                    <h6 className="text-start text-[--body-txt-color] font-semibold">
                      {item.title}
                    </h6>
                    <h1 className="text-start text-gray-400 md:text-2xl text-xl">
                      {item.value}
                    </h1>
                  </div>
                ))}
              </div>

              <div className="5xl:flex grid 5xl:gap-0 gap-3 mt-5 lg:justify-between items-center">
                <div className="md:flex grid gap-2 items-center">
                  <h6 className="text-start text-[--body-txt-color] font-semibold">
                    Category(s):
                  </h6>
                  <button className="text-gray-400 text-sm border px-2 py-1 border-[--border-color] rounded-full">
                    Auto Auction
                  </button>
                  <button className="text-gray-400 text-sm whitespace-nowrap border px-2 py-1 border-[--border-color] rounded-full">
                    Auto Supplier
                  </button>
                </div>

                <div className="md:flex grid gap-2 items-center">
                  <h6 className="text-start text-[--body-txt-color] font-semibold">
                    Prospects for:
                  </h6>
                  <button className="text-gray-400 text-sm border px-2 py-1 border-[--border-color] rounded-full">
                    Websites
                  </button>
                  <button className="text-gray-400 text-sm border px-2 py-1 border-[--border-color] rounded-full">
                    Social
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-2 h-fit grid mx-auto">
            <button className="text-[--primary-green] md:flex grid justify-center md:w-fit  ml-auto w-full md:justify-end mt-5 !text-center   py-1 px-3 font-semibold text-sm border border-[--primary-green]">
              ADD
            </button>
            <div className="flex justify-center ml-auto">
              <img
                alt="meter image"
                className="rounded-full flex ml-auto justify-center  mt-10"
                src={GraphMeter}
                width="120"
                height="120"
              />
            </div>
          </div>
        </div>

        <div className="bg-[--light-white-color] md:pl-11 pl-5 flex items-center rounded-md gap-5 py-3 md:pr-4">
          <h6 className="text-gray-500 md:text-base text-sm flex font-semibold items-baseline gap-2">
            Source:
            <PiChatCircleTextBold className="w-5 h-5 text-[--primary-green] relative top-[3px]" />
          </h6>

          <h6 className="text-gray-500 md:text-base text-sm flex font-semibold items-baseline gap-2">
            Updated On:
            <span className="text-gray-400 text-sm ">Dec 2017</span>
          </h6>
        </div>
      </div>

      <div className="border-l-4 shadow-md mt-5 border-[--primary-green] !rounded-md">
        <div className="md:flex grid bg-white">
          <div className="bg-white p-5 col-10 border-r py-5 border-[--border-color] !rounded-md ">
            <div className="detailLabelCheckbox">
              <CheckBox
                name="Vercioly make"
                className="text-black font-semibold !flex !items-center !w-fit !justify-start"
              />
            </div>
            <div className="md:pl-6 md:pr-4">
              <div className="border-b-2 border-[--border-color] pb-3 lg:flex grid  justify-start lg:gap-5 gap-2 w-full">
                <h6 className="text-gray-400 text-sm flex items-baseline gap-1">
                  <IoLocationSharp className="w-5 h-5 text-[--primary-green] relative top-1" />
                  3289mdfj, chandihagr 898900
                </h6>
                <h6 className="text-[--primary-green] text-sm flex items-baseline gap-1">
                  <ImLink className="w-4 h-4 text-[--primary-green] relative top-1" />
                  www.facebook.com
                </h6>
                <h6 className="text-gray-400 text-sm flex items-baseline gap-1">
                  <BsTelephoneFill className="w-4 h-4 text-[--primary-green] relative top-[2px]" />
                  9479 32483
                </h6>
              </div>

              <div className="5xl:flex grid 5xl:gap-0 gap-3 mt-5 lg:justify-between items-center">
                <div className="md:flex grid gap-2 items-center">
                  <h6 className="text-start text-[--body-txt-color] font-semibold">
                    Category(s):
                  </h6>
                  <button className="text-gray-400 text-sm border px-2 py-1 border-[--border-color] rounded-full">
                    Auto Auction
                  </button>
                  <button className="text-gray-400 text-sm whitespace-nowrap border px-2 py-1 border-[--border-color] rounded-full">
                    Auto Supplier
                  </button>
                </div>

                <div className="md:flex grid gap-2 items-center">
                  <h6 className="text-start text-[--body-txt-color] font-semibold">
                    Prospects for:
                  </h6>
                  <button className="text-gray-400 text-sm border px-2 py-1 border-[--border-color] rounded-full">
                    Websites
                  </button>
                  <button className="text-gray-400 text-sm border px-2 py-1 border-[--border-color] rounded-full">
                    Social
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-2 h-fit grid mx-auto">
            <button className="text-[--primary-green] md:flex grid justify-center md:w-fit  ml-auto w-full md:justify-end mt-5 !text-center   py-1 px-3 font-semibold text-sm border border-[--primary-green]">
              ADD
            </button>
            <div className="flex justify-center ml-auto">
              <img
                alt="meter image"
                className="rounded-full flex ml-auto justify-center  mt-10"
                src={RedCard}
                width="120"
                height="120"
              />
            </div>
          </div>
        </div>

        <div className="bg-[--light-white-color] md:pl-11 pl-5 flex items-center rounded-md gap-5 py-3 md:pr-4">
          <h6 className="text-gray-500 md:text-base text-sm flex font-semibold items-baseline gap-2">
            Source:
            <PiChatCircleTextBold className="w-5 h-5 text-[--primary-green] relative top-[3px]" />
          </h6>

          <h6 className="text-gray-500 md:text-base text-sm flex font-semibold items-baseline gap-2">
            Updated On:
            <span className="text-gray-400 text-sm ">Feb 2021</span>
          </h6>
        </div>
      </div>

      {/* <div className="border-l-4 shadow-md mt-5 border-[--primary-green] !rounded-md">
        <div className="flex bg-white">
          <div className="bg-white px-5 pt-5 col-10 border-r py-5 border-[--border-color] !rounded-md ">
            <div className="detailLabelCheckbox">
              <CheckBox
                name="Automated View"
                className="text-black font-semibold !flex !items-center !w-fit !justify-start"
              />
            </div>
            <div className="pl-6 pr-4">
              <div className="border-b-2 border-[--border-color] pb-3 flex justify-start gap-5 w-full">
                <h6 className="text-gray-400 text-sm flex items-baseline gap-1">
                  <IoLocationSharp className="w-5 h-5 text-[--primary-green] relative top-1" />
                  244 excel, night sdde, 21413
                </h6>
                <h6 className="text-[--primary-green] text-sm flex items-baseline gap-1">
                  <ImLink className="w-4 h-4 text-[--primary-green] relative top-1" />
                  www.twitterr.com
                </h6>
                <h6 className="text-gray-400 text-sm flex items-baseline gap-1">
                  <BsTelephoneFill className="w-4 h-4 text-[--primary-green] relative top-[2px]" />
                  ( 873) 2947923
                </h6>
              </div>

              <div className="5xl:flex grid 5xl:gap-0 gap-3  mt-5 justify-between items-center">
                <div className="flex gap-2 items-center">
                  <h6 className="text-start text-[--body-txt-color] font-semibold">
                    Category(s):
                  </h6>
                  <button className="text-gray-400 text-sm border px-2 py-1 border-[--border-color] rounded-full">
                    Auto Auction
                  </button>
                  <button className="text-gray-400 text-sm border px-2 py-1 border-[--border-color] rounded-full">
                    Auto Body Parts Supplier
                  </button>
                </div>

                <div className="flex gap-2 items-center">
                  <h6 className="text-start text-[--body-txt-color] font-semibold">
                    Prospects for:
                  </h6>
                  <button className="text-gray-400 text-sm border px-2 py-1 border-[--border-color] rounded-full">
                    Websites
                  </button>
                  <button className="text-gray-400 text-sm border px-2 py-1 border-[--border-color] rounded-full">
                    Social
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-2 h-fit grid mx-auto">
            <button className="text-[--primary-green] flex justify-end mt-5 ml-auto  py-1 px-3 font-semibold text-sm border border-[--primary-green]">
              ADD
            </button>
            <div className="flex justify-center ml-auto">
              <img
                alt="meter image"
                className="rounded-full flex ml-auto justify-center  mt-4 mr-6"
                src={RedCard}
                width="90"
                height="90"
              />
            </div>
          </div>
        </div>

        <div className="bg-[--light-white-color] pl-11 flex items-center rounded-md gap-5 py-3 pr-4">
          <h6 className="text-gray-500 text-base flex font-semibold items-baseline gap-2">
            Source:
            <PiChatCircleTextBold className="w-5 h-5 text-[--primary-green] relative top-[3px]" />
          </h6>

          <h6 className="text-gray-500 text-base flex font-semibold items-baseline gap-2">
            Updated On:
            <span className="text-gray-400 text-sm ">May 2021</span>
          </h6>
        </div>
      </div>
*/}
      <div className="border-l-4 shadow-md mt-5 border-[--primary-green] !rounded-md">
        <div className="md:flex grid bg-white">
          <div className="bg-white p-5 col-10 border-r py-5 border-[--border-color] !rounded-md ">
            <div className="detailLabelCheckbox">
              <CheckBox
                name="prince king velly"
                className="text-black font-semibold !flex !items-center !w-fit !justify-start"
              />
            </div>
            <div className="md:pl-6 md:pr-4">
              <div className="border-b-2 border-[--border-color] pb-3 lg:flex grid  justify-start lg:gap-5 gap-2 w-full">
                <h6 className="text-gray-400 text-sm flex items-baseline gap-1">
                  <IoLocationSharp className="w-5 h-5 text-[--primary-green] relative top-1" />
                  23tre, vermerica 3543
                </h6>
                <h6 className="text-[--primary-green] text-sm flex items-baseline gap-1">
                  <ImLink className="w-4 h-4 text-[--primary-green] relative top-1" />
                  www.telegram.com
                </h6>
                <h6 className="text-gray-400 text-sm flex items-baseline gap-1">
                  <BsTelephoneFill className="w-4 h-4 text-[--primary-green] relative top-[2px]" />
                  432453233
                </h6>
              </div>

              <div className="grid md:grid-cols-3 grid-cols-2 gap-5 lg:gap-0 lg:flex border-b-2 border-[--border-color] mt-4 pb-3  items-center justify-between">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="text-gray-400 text-sm grid gap-1 "
                  >
                    <h6 className="text-start text-[--body-txt-color] font-semibold">
                      {item.title}
                    </h6>
                    <h1 className="text-start text-gray-400 md:text-2xl text-xl">
                      {item.value}
                    </h1>
                  </div>
                ))}
              </div>

              <div className="5xl:flex grid 5xl:gap-0 gap-3 mt-5 lg:justify-between items-center">
                <div className="md:flex grid gap-2 items-center">
                  <h6 className="text-start text-[--body-txt-color] font-semibold">
                    Category(s):
                  </h6>
                  <button className="text-gray-400 text-sm border px-2 py-1 border-[--border-color] rounded-full">
                    Auto Auction
                  </button>
                  <button className="text-gray-400 text-sm whitespace-nowrap border px-2 py-1 border-[--border-color] rounded-full">
                    Auto Supplier
                  </button>
                </div>

                <div className="md:flex grid gap-2 items-center">
                  <h6 className="text-start text-[--body-txt-color] font-semibold">
                    Prospects for:
                  </h6>
                  <button className="text-gray-400 text-sm border px-2 py-1 border-[--border-color] rounded-full">
                    Websites
                  </button>
                  <button className="text-gray-400 text-sm border px-2 py-1 border-[--border-color] rounded-full">
                    Social
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-2 h-fit grid mx-auto">
            <button className="text-[--primary-green] md:flex grid justify-center md:w-fit  ml-auto w-full md:justify-end mt-5 !text-center   py-1 px-3 font-semibold text-sm border border-[--primary-green]">
              ADD
            </button>
            <div className="flex justify-center ml-auto">
              <img
                alt="meter image"
                className="rounded-full flex ml-auto justify-center  mt-10"
                src={GraphMeter}
                width="120"
                height="120"
              />
            </div>
          </div>
        </div>

        <div className="bg-[--light-white-color] md:pl-11 pl-5 flex items-center rounded-md gap-5 py-3 md:pr-4">
          <h6 className="text-gray-500 md:text-base text-sm flex font-semibold items-baseline gap-2">
            Source:
            <PiChatCircleTextBold className="w-5 h-5 text-[--primary-green] relative top-[3px]" />
          </h6>

          <h6 className="text-gray-500 md:text-base text-sm flex font-semibold items-baseline gap-2">
            Updated On:
            <span className="text-gray-400 text-sm ">may 2014</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
