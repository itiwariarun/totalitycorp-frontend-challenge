import React, { useState } from "react";
import { About, About1, About2, About3, About4 } from "../Footer.js";

const FooterLink = () => {
  const [checked1, setchecked1] = useState(true);
  const [checked2, setchecked2] = useState(true);
  const [checked3, setchecked3] = useState(true);
  const [checked4, setchecked4] = useState(true);
  const [checked, setchecked] = useState(true);

  const click = (e) => {
    e.persist();
    setchecked(!checked);
  };
  const click1 = (e) => {
    e.persist();
    setchecked1(!checked1);
  };
  const click2 = (e) => {
    e.persist();
    setchecked2(!checked2);
  };
  const click3 = (e) => {
    e.persist();
    setchecked3(!checked3);
  };
  const click4 = (e) => {
    e.persist();
    setchecked4(!checked4);
  };
  return (
    <>
      <section className="footer1">
        <div className="div">
          <div className="col">
            <h2 className="h2">About Us</h2>
            <ul>
              {About.map((list) => (
                <li key={list.id}>{list.li1}</li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h2 className="h2">Careers</h2>
            <ul>
              {About1.map((list) => (
                <li key={list.id}>{list.li1}</li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h2 className="h2">Social Impact</h2>
            <ul>
              {About2.map((list) => (
                <li key={list.id}>{list.li1}</li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h2 className="h2">For Business Partner</h2>
            <ul>
              {About3.map((list) => (
                <li key={list.id}>{list.li1}</li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h2 className="h2">Order and Pickup</h2>
            <ul>
              {About4.map((list) => (
                <li key={list.id}>{list.li1}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* <!-- mobile view --> */}
        <div className="div2">
          <ul>
            <li className="focus">
              <input type="checkbox" checked={checked} onChange={click} />
              <i></i>
              <h2>About Us</h2>
              <p>
                {About.map((list) => (
                  <span key={list.id}>{list.li1}</span>
                ))}
              </p>
            </li>
            <li className="focus">
              <input type="checkbox" checked={checked4} onChange={click4} />
              <i></i>
              <h2>Careers</h2>
              <p>
                {About1.map((list) => (
                  <span key={list.id}>{list.li1}</span>
                ))}
              </p>
            </li>
            <li className="focus">
              <input type="checkbox" checked={checked3} onChange={click3} />
              <i></i>
              <h2>Social Impact</h2>
              <p>
                {About2.map((list) => (
                  <span key={list.id}>{list.li1}</span>
                ))}
              </p>
            </li>
            <li className="focus">
              <input type="checkbox" checked={checked2} onChange={click2} />
              <i></i>
              <h2>For Business Partner</h2>
              <p>
                {About3.map((list) => (
                  <span key={list.id}>{list.li1}</span>
                ))}
              </p>
            </li>
            <li className="focus">
              <input type="checkbox" checked={checked1} onChange={click1} />
              <i></i>
              <h2>Order and Pickup</h2>
              <p>
                {About4.map((list) => (
                  <span key={list.id}>{list.li1}</span>
                ))}
              </p>
            </li>
          </ul>
        </div>
        {/* <!-- mobile view --> */}
      </section>
    </>
  );
};

export default FooterLink;
