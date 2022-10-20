import React from "react";
import main2 from "../img/main2.webp";

const Link = () => {
  return (
    <>
      <section
        className="box box-b bg-extra grid-col-2 grid-reversed style1"
        id="rewards"
      >
        <img width="100%" src={main2} alt="" />
        <div className="box-text padding style2">
          <h2 className="text-xl-bold">A new way to earn sips and trips</h2>
          <p className="text-lg-light">
            Now you can link your Starbucks® Rewards + Delta SkyMiles® accounts
            to get:
          </p>
          <ul className="text-lg-light">
            <li>&#x25CF; 150 Stars + 500 miles when you link before 12/31</li>
            <li>&#x25CF; Double Stars on Delta travel days</li>
            <li>
              &#x25CF; 1 mile per $1 spent at Starbucks (excludes taxes and
              gratuities)**
            </li>
          </ul>

          <a href="!#" className="btn btn-dark-outline">
            Link Accounts
          </a>
        </div>
      </section>
    </>
  );
};

export default Link;
