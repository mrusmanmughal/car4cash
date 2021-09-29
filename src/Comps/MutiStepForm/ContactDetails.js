import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/CashLogo.png";
import Step3Img from "../../assets/3.png";
import { useDispatch } from "react-redux";
import { Add_contactDetails } from "../../Actions/index";
import PrivacyPolicy from "./PrivacyPolicy";

//Email js
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_qL458AsCBLpum5wzU0ADn");
const ContactDetails = () => {
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
    Title: "",
    fname: "",
    surname: "",
    email: "",
    phone: "",
  });
  const { Title, fname, surname, email, phone } = state;
  const Handlechange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="mt-3 shadow border-dark setform">
        <div className="bg-primary border-bottom border-dark border-5 py-3">
          <img src={Logo} alt="Cash4Car" />
          <img src={Step3Img} alt="Step 3 " />
        </div>
        <div className="container px-5 pb-3 ">
          <h2 className="mt-3 border-bottom border-dark pb-3">
            Contact information and details
          </h2>{" "}
          <main class="login-form ">
            <div class="cotainer">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div class="">
                    <div class="card-body">
                      <form
                        method="POST"
                        action=""
                        onSubmit={(e) =>
                          dispatch(
                            Add_contactDetails(state),
                            e.preventDefault(),
                            (e) => sendEmail(e)
                          )
                        }
                      >
                        <div class="form-group row">
                          <h4
                            for="email_address"
                            class="col-md-4   text-md-center"
                          >
                            Title
                          </h4>
                          <div class="col-md-6">
                            <select
                              class="form-select w-50 mb-3"
                              name="Title"
                              aria-label="Default select example"
                              onChange={(e) => Handlechange(e)}
                              value={Title}
                              required
                            >
                              <option>Select </option>
                              <option value="Mr">Mr</option>
                              <option value="Mrs">Mrs</option>
                              <option value="Mrs">Mrs</option>
                              <option value="Ms">Ms</option>
                              <option value="Dr">Dr</option>
                              <option value="Prof">Prof</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <h4
                            for="password"
                            class="col-md-4 col-form-label text-md-center"
                          >
                            First Name(s)
                          </h4>
                          <div class="col-md-6">
                            <input
                              type="text"
                              class="form-control mb-3"
                              name="fname"
                              value={fname}
                              onChange={(e) => Handlechange(e)}
                              required
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <h3
                            for="password"
                            class="col-md-4 col-form-label text-md-center"
                          >
                            Surname
                          </h3>
                          <div class="col-md-6">
                            <input
                              type="text"
                              class="form-control  mb-3"
                              name="surname"
                              value={surname}
                              onChange={(e) => Handlechange(e)}
                              required
                            />
                          </div>
                        </div>
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
                                onChange={(e) => Handlechange(e)}
                                name="email"
                                value={email}
                                required
                              />
                            </div>
                            <lable>
                              Please enter your correct email address as the
                              valuation will go there.
                            </lable>
                            <br />
                            <i className="bi bi-exclamation-triangle-fill fw-bold  ">
                              &nbsp; An invalid email address means no
                              valuation!
                            </i>
                          </div>
                        </div>
                        <div class="form-group row">
                          <h3 class="col-md-4 col-form-label text-md-center">
                            Mobile Number
                          </h3>
                          <div class="col-md-6">
                            <div class="input-group mb-3">
                              <span class="input-group-text">
                                <i className="bi bi-telephone-fill"></i>
                              </span>
                              <input
                                type="number"
                                class="form-control "
                                onChange={(e) => Handlechange(e)}
                                name="phone"
                                value={phone}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <Link to="/valuation">
                          <button
                            class="btn  text-success btn-primary btn-lg border rounded-pill fw-bold "
                            type="submit"
                          >
                            <span className="h3 text-success">
                              Get Your Validation
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
          <p className="my-3">
            PLEASE NOTE: Your personal details will only be used for processing
            your FREE valuation, and will not be given to any third parties.
            View our &nbsp;
            <a
              href=""
              className="text-danger "
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

      {/* privacy policy page  */}
      <PrivacyPolicy />
    </>
  );
};

export default ContactDetails;
