import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/CashLogo.png";

const RetrieveValuation = () => {
  return (
    <>
      <div className="mt-3 shadow border-dark setform">
        <div className="bg-primary border-bottom border-dark border-5 py-3">
          <img src={Logo} alt="Cash4Car" />
        </div>
        <div className="container px-5 pb-5 ">
          <h2 className="mt-3 border-bottom border-dark pb-3">
            Retrieve A Previous Valuation
          </h2>
          <small>
            To retrieve your most recent valuation for a specific vehicle,
            please enter your email address, postcode and registration number,
            and click 'Retrieve Valuation'.
          </small>
          <div className>
            <table class="text-center m-auto  ">
              <tbody>
                <tr>
                  <th scope="row">Email Address</th>
                  <td scope="col">
                    <div class="input-group  ">
                      <span class="input-group-text">
                        <i className="bi bi-envelope-fill"></i>
                      </span>
                      <input
                        type="email"
                        class="form-control "
                        placeholder="Enter Your E-mail"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row"> </th>
                  <td scope="col" className="text-start font-italic">
                    <br />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Your Postcode</th>
                  <td scope="col">
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control "
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="Enter Postal Code"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Vehicle Reg :</th>
                  <td scope="col">
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control "
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="Enter Reg No"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link to="/RetriveMessage">
            <button class="btn  text-success btn-primary btn-lg border rounded-pill fw-bold ">
              <span className="h3 text-success">
                Click Here To Retrieve Valuation
              </span>
              <i class="bi bi-arrow-right-circle-fill ps-3 h3"> </i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RetrieveValuation;
