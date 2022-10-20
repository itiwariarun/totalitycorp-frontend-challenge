import React from "react";
import main4 from "../img/main4.jpg";

const Learn = () => {
  return (
    <>
      <section className="box box-d bg-primary grid-col-2 grid-reversed">
        <img src={main4} alt="" />
        <div className="box-text">
          <h2 className="text-xl">Fighting hunger this holiday</h2>
          <p className="text-lg-bold style3">
            Hunger is affecting millions of people across America this holiday
            season. Join us in our commitment to hunger relief and help feed
            neighbors in need.
          </p>
          <a href="!#" className="btn btn-light-outline">
            Learn More
          </a>
        </div>
      </section>
    </>
  );
};

export default Learn;
