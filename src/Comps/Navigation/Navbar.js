import React from "react";
import Logo from "../../assets/CashLogo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src={Logo} alt="Logo " className="fluid-img" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <Link to="/retrievevaluation">
                  <button
                    type="button"
                    className="btn btn-outline-light  rounded-pill px-4 me-3 fw-bold"
                  >
                    <i class="bi bi-currency-pound h6 fw-bold"></i>
                    Retrieve Valuation
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/changeappointment">
                  <button
                    type="button"
                    className=" btn btn-outline-light  rounded-pill px-4  h6 me-2 fw-bold"
                  >
                    <i class="bi bi-building h6 fw-bold me-1"></i>
                    Change Appointment
                  </button>
                </Link>
              </li>
            </ul>
            <Link to="/login">
              <i class="bi bi-person-fill h3 text-white "></i>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
