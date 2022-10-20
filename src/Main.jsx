/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import Win from "./Components/Win";
import Link from "./Components/Link";
import Header from "./Components/Header";
import Note from "./Components/Note";
import Order from "./Components/Order";
import { fafa, terms } from "./Footer.js";
import FooterLink from "./Components/FooterLink";
import Learn from "./Components/Learn";
import Holiday from "./Components/Holiday";

const Main = () => {
  return (
    <>
      <div className="wrapper">
        <div className="wrap">
          <Header />
          <main>
            {/* <!-- Box B --> */}
            <div className="page" id="home">
              <Win />
              {/* <!-- Box C --> */}
              <Link />
              {/* <!-- Box D --> */}
              <Order />
              {/* <!-- Box E --> */}
              <Learn />
              {/* <!-- Box F --> */}
              <Holiday />
              <Note />
            </div>
            <div className="divider"></div>
            <FooterLink />
          </main>
        </div>
      </div>
      <footer className="footer">
        <div className="divider"></div>
        <div className="footer-container">
          <div className="social">
            <ul>
              {fafa.map((fa) => (
                <li>
                  {" "}
                  <a href={fa.to} key={fa.id}>
                    <i className={fa.fa}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="copyright">
            <p>
              {terms.map((term) => (
                <a href={term.to} className={term.class}>
                  <span> {term.term}</span>
                </a>
              ))}
            </p>
            <p>© 2022 Starbucks Coffee Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;
