import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { retrive_evaluation } from "../../Actions/index";
import Logo from "../../assets/CashLogo.png";
import { useDispatch } from "react-redux";

//Email js
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_qL458AsCBLpum5wzU0ADn");

const RetrieveValuation = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  ///Email js
  const sendEmail = (e) => {
    emailjs
      .sendForm("gmail", "HMSlive", e.target, "user_qL458AsCBLpum5wzU0ADn")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    history.push("/valuation");
  };
  const [state, setstate] = useState({
    email: "",
    postalcode: "",
    Vehiclecode: "",
  });
  const { Vehiclecode, email, postalcode } = state;
  const Handlechange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
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
                          onSubmit={(e) =>
                            dispatch(
                              retrive_evaluation(state),
                              e.preventDefault(),
                              (e) => sendEmail(e),
                              history.push("/valuation")
                            )
                          }
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
                                  onChange={(e) => Handlechange(e)}
                                  value={email}
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
                                name="postalcode"
                                onChange={(e) => Handlechange(e)}
                                required
                                value={postalcode}
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
                                name="Vehiclecode"
                                alue={Vehiclecode}
                                onChange={(e) => Handlechange(e)}
                                required
                              />
                            </div>
                          </div>

                          <button
                            class="btn  text-success  btn-primary btn-lg border rounded-pill fw-bold "
                            type="submit"
                          >
                            <span className="h3 text-success">
                              Retrieve Valuation
                            </span>
                            <i class="bi bi-arrow-right-circle-fill ps-3 h3">
                              {" "}
                            </i>
                          </button>
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
