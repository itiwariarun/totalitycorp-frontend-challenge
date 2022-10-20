import React from "react";
import main3 from "../img/main3.jpg";

const Order = () => {
  return (
    <>
      <section id="order" className="box box-d bg-primary grid-col-2">
        <img src={main3} alt="" />
        <div className="box-text">
          <h2 className="text-xl">Purfectly Pumpkin</h2>
          <p className="text-lg-bold padding">
            Savor the season with a Pumpkin Spice Latte or Pumpkin Cream Cold
            Brew.
          </p>
          <a href="!#" className="btn btn-light-outline">
            Order Now
          </a>
        </div>
      </section>
    </>
  );
};

export default Order;
