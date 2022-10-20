import React from "react";
import box1 from "../img/box-f1.jpg";
import box2 from "../img/box-f2.jpg";

const Holiday = () => {
  return (
    <>
      <section className="box box-f grid-col-2" id="gift">
        <div>
          <img src={box1} alt="" />
          <div className="bg-extra py-lg">
            <div className="box-text">
              <h2 className="text-md">Let the holiday cheer come to you</h2>
              <p className="text-xs">
                Make the moment merry. Order Starbucks® holiday favorites on
                Uber Eats.*
              </p>
              <a href="!#" className="btn btn-dark-outline">
                Order Now
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={box2} alt="" />
          <div className="bg-primary py-md-new">
            <div className="box-text">
              <h2 className="text-md">Loved Passing on Netflix?</h2>
              <p className="text-sm">
                Our new social series about film adaptations kicks off with the
                actors and directors who brought the book to life.
              </p>
              <a href="!#" className="btn btn-light-outline">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Holiday;
