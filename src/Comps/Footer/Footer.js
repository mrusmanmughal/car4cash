import React from "react";
import footerLogo from "../../assets/CashLogo.png";
const Footer = () => {
  return (
    <>
      <div className="container  border border-dark border-2 my-3 text-center text-white bg-primary">
        <img src={footerLogo} alt="footer logo " width="260" height="40" />
        <ul className="list-unstyled d-inline">
          <li class="d-inline">| Home |</li>
          <li class="d-inline"> How it works |</li>
          <li class="d-inline"> About us |</li>
          <li class="d-inline"> Faq |</li>
          <li class="d-inline"> Branches |</li>
          <li class="d-inline"> Contact us |</li>
          <li class="d-inline"> Term | </li>
          <li class="d-inline"> Privacy </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
