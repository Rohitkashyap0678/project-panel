import React from "react";
import { Link } from "react-router-dom";

const EmptyCard = () => {
  return (
    <div>
      <div className="border-l-4 shadow-md mt-5 border-[--primary-green] !rounded-md">
        <div className="bg-white font-semibold text-gray-400 p-14 m-auto  gap-2 justify-center text-center !rounded-md ">
          We can Try and fetch more results via an external source. Ok!
          <span className="text-[--primary-green] font-semibold ml-2 !underline">
            Get Me More
          </span>
          {/* <Link
            to="/"
            className="text-[--primary-green] font-semibold !underline"
          >
            Get Me More
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default EmptyCard;
