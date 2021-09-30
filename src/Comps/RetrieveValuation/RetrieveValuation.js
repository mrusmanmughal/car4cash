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
            <main class="login-form">
              <div class="cotainer">
                <div class="row justify-content-center">
                  <div class="col-md-8">
                    <div class="">
                      <div class="card-body">
                        <form
                          method="POST"
                          action=""
                          // onSubmit={(e) =>
                          //   dispatch(
                          //     Add_contactDetails(state),
                          //     e.preventDefault(),
                          //     (e) => sendEmail(e),
                          //     history.push("/valuation")
                          //   )
                          // }
                        >
                          <div class="form-group row">
                            <h3
                              for="password"
                              class="col-md-4 col-form-label text-md-center"
                            >
                              Email Address
                            </h3>
                            <div class="col-md-6">
                              <div class="input-group mb-3">
                                <span class="input-group-text">
                                  <i className="bi bi-envelope-fill"></i>
                                </span>
                                <input
                                  type="email"
                                  class="form-control "
                                  name="email"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-group row">
                            <h4
                              for="password"
                              class="col-md-4 col-form-label text-md-center"
                            >
                              Your PostalCode
                            </h4>
                            <div class="col-md-6">
                              <input
                                type="text"
                                class="form-control mb-3 w-50"
                                name="fname"
                                required
                              />
                            </div>
                          </div>
                          <div class="form-group row">
                            <h3
                              for="password"
                              class="col-md-4 col-form-label text-md-center"
                            >
                              Vehicle Reg:
                            </h3>
                            <div class="col-md-6">
                              <input
                                type="text"
                                class="form-control  mb-3 w-50 "
                                name="surname"
                                required
                              />
                            </div>
                          </div>
                          <Link to="/RetriveMessage">
                            <button class="btn  text-success  btn-primary btn-lg border rounded-pill fw-bold ">
                              <span className="h3 text-success">
                                Click Here To Retrieve Valuation
                              </span>
                              <i class="bi bi-arrow-right-circle-fill ps-3 h3">
                                {" "}
                              </i>
                            </button>
                          </Link>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default RetrieveValuation;
