import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="search !rounded-md !mt-3 !w-full shadow">
      <FaSearch className=" w-4 h-4 left-3 top-[9px] absolute text-[--body-bg-color]" />
      <input
        type="search"
        name="search"
        defaultValue="Search"
        className="!pl-9 !text-sm !pr-5 !h-9 !rounded !text-[--body-bg-color]"
        placeholder="Search Categories..."
      />
    </div>
  );
};

export default SearchBar;
