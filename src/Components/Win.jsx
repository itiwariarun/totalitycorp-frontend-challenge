import React from "react";
import main1 from "../img/main1.jpg";

const Win = () => {
  return (
    <>
      {" "}
      <section className="box box-b bg-extra grid-col-2">
        <img src={main1} alt="" />
        <div className="box-text">
          <h2 className="text-xl">Win a thousand stars</h2>
          <p className="text-lg padding">
            We’re giving away 1,000 Stars to 1,000 Starbucks® Rewards members in
            our Million Stars Giveaway and much more all week!*
          </p>
          <a href="!#" className="btn btn-dark-outline">
            Play to win
          </a>
        </div>
      </section>
    </>
  );
};

export default Win;
