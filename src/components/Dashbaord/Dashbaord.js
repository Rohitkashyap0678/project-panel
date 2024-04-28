import React, { useState } from "react";
import Accordion from "../../common/Accordian/Accordian";
import Tabs from "../../ui/Tabs/Tabs";
import { RiFilterLine } from "react-icons/ri";
import { FaSortAmountDown } from "react-icons/fa";
import CustomTabs from "../../ui/CustomTabs";
import DetailCard from "../DetailCard/DetailCard";
import EmptyCard from "../EmptyCard/EmptyCard";
import Sidebar from "../../common/Sidebar/Sidebar";

const Dashbaord = () => {
  const tabs = ["MY ACCOUNT (78)", "NEW (50)", "SAVED SEARCH (37)"];

  // const [isAsideOpen, setIsAsideOpen] = useState(true);

  // const openSideBar = () => {
  //   setIsAsideOpen(!isAsideOpen);
  // };

  return (
    <>
      {/* <div
        className={`sidebar h-[100vh] border-4 border-green-800 w-fit  min-w-[100px] fixed left-0 !top-[70px] ${
          isAsideOpen ? "open" : ""
        }`}
      >
        <Sidebar isOpen={isAsideOpen} />
      </div> */}

      <div className="gridDashboard py-7 pl-5 xl:pr-0 pr-5">
        <div className="row ">
          <div className="col-4 border-4 h-full  !rounded-lg  border-rsed-800">
            <div
              style={{
                borderTopRightRadius: "6px",
                borderTopLeftRadius: "6px",
              }}
              className="text-left p-4 bg-teal-500   border-white"
            >
              <h1 className="uppercase text-white font-semibold">
                filters to find projects
              </h1>
              <p
                className="text-sm text-[--light-white-color] pt-[6px]"
                style={{ lineHeight: "20px" }}
              >
                These Filters help to refine your find projects accross varios
                Signals and Segments
              </p>
            </div>
            <hr />
            <div
              className="text-left  bg-gray-500 "
              style={{
                borderBottomRightRadius: "6px",
                borderBottomLeftRadius: "6px",
              }}
            >
              <Accordion />
            </div>
          </div>
          <div className="col-8">
            <Tabs tabs={tabs} />

            <div className="sm:flex grid gap-5 sm:gap-0 items-center justify-between mt-5">
              <div className="flex items-center justify-start gap-4">
                <RiFilterLine className="w-6 text-[--primary-green]  cursor-pointer  h-6" />
                <FaSortAmountDown className="w-4 text-[--primary-green]  cursor-pointer  h-4" />
                <h6 className="text-gray-400">
                  Sort by:{" "}
                  <span className="text-[--primary-green]  cursor-pointer  font-semibold">
                    Newly Added
                  </span>
                </h6>
              </div>
              <CustomTabs />
            </div>
            <DetailCard />
            <EmptyCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbaord;
