import React from "react";
import marker from "../img/marker.svg";

const Find = () => {
  return (
    <>
      <a className="hover-underline-animation" href="!#">
        <img src={marker} alt="" />
        <span>Find a store</span>
      </a>
    </>
  );
};
export default Find;
