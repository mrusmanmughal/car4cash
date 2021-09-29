import React, { useState } from "react";
import Logo from "../../assets/CashLogo.png";
import Step2Img from "../../assets/2.png";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Add_VahicleDetails } from "../../Actions/index";
import Terms from "./Terms";
const VahicleDetails = () => {
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    milage: ``,
    Servicehistory: "",
    Mot: "",
    owners: "",
    texDue: "",
    v5book: "",
    v5inName: "",
    outstandingFinance: "",
    postalCode: "",
  });
  const {
    milage,
    Servicehistory,
    Mot,
    owners,
    texDue,
    v5book,
    v5inName,
    outstandingFinance,
    postalCode,
  } = state;
  const Handlechange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="my-3 shadow border-dark setform">
        <div className="bg-primary border-bottom border-dark border-5 ">
          <img src={Logo} alt="Cash4Car" />
          <img src={Step2Img} alt="Step 2 " />
        </div>

        <div className="container px-5 pb-3  ">
          <h2 className="mt-3 border-bottom border-dark pb-3">
            Vehicle information and details
          </h2>

          <table class="vehichle-details">
            <tbody>
              <tr>
                <th>What is the current mileage?</th>
                <tr scope="col">
                  <div class="input-group  pb-3">
                    <input
                      type="number"
                      class="form-control w-25"
                      onChange={(e) => Handlechange(e)}
                      value={milage}
                      name="milage"
                    />

                    <span class="input-group-text">.000</span>
                    <i className="ps-2  small text-secondary ">
                      ( To the nearest 1000 miles)
                    </i>
                  </div>
                </tr>
              </tr>
              <tr>
                <th>Service History</th>
                <select
                  class="form-select w-50  mb-3"
                  onChange={(e) => Handlechange(e)}
                  value={Servicehistory}
                  name="Servicehistory"
                >
                  <option>Select Value</option>
                  <option value="Full Service History ">
                    Full Service History
                  </option>
                  <option value="None">None</option>
                  <option value="Full Service History">
                    Parts Service History
                  </option>
                  <option value="Not Yet Due">Not Yet Due</option>
                </select>
              </tr>
              <tr>
                <th scope="row">Does vehicle have a current MOT?</th>

                <select
                  class="form-select w-50 mb-3"
                  onChange={(e) => Handlechange(e)}
                  value={Mot}
                  name="Mot"
                  aria-label="Default select example"
                >
                  <option selected>Select Value</option>
                  <option value=" MOT Expired">MOT Expired</option>
                  <option value="1">Under 1 Month</option>
                  <option value="1 -3">1 - 3 Months</option>
                  <option value="3 -6">3 - 6 Months</option>
                  <option value="over 6">Over 6 Months</option>
                  <option value="Not Required">Not Required</option>
                </select>
              </tr>
              <tr>
                <th scope="row">How many owners?</th>
                <select
                  class="form-select w-50 mb-3"
                  aria-label="Default select example"
                  onChange={(e) => Handlechange(e)}
                  value={owners}
                  name="owners"
                >
                  <option selected>Select Value</option>
                  <option selected>Owned from new</option>
                  <option value="1">1 Owner</option>
                  <option value="2">2 Owner</option>
                  <option value="3">3 Owner</option>
                  <option value="4">4 Owner</option>
                  <option value="more then 4">More then 4 Owner</option>
                  <option value="Don't Know">Don't Know</option>
                </select>
              </tr>
              <tr>
                <th scope="row">When is the Tax Due?</th>
                <select
                  class="form-select w-50 mb-3"
                  aria-label="Default select example"
                  onChange={(e) => Handlechange(e)}
                  value={texDue}
                  name="texDue"
                >
                  <option selected>Select Value</option>
                  <option value="Tax Expired">Tax Expired</option>
                  <option value="Under 1 month">Under 1 month</option>
                  <option value="1 - 3 Months">1 - 3 Months</option>
                  <option value="3 - 6 Months">3 - 6 Months</option>
                  <option value="Over 6 Months ">Over 6 Months </option>
                </select>
              </tr>
              <tr>
                <th scope="row">Do you have the V5 (log book)?</th>
                <select
                  class="form-select w-25 mb-3"
                  aria-label="Default select example"
                  onChange={(e) => Handlechange(e)}
                  value={v5book}
                  name="v5book"
                >
                  <option selected>Select </option>
                  <option Value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </tr>
              <tr>
                <th scope="row">Is the V5 in your name?</th>
                <select
                  class="form-select w-25 mb-3"
                  aria-label="Default select example"
                  onChange={(e) => Handlechange(e)}
                  value={v5inName}
                  name="v5inName"
                >
                  <option selected>Select </option>
                  <option Value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </tr>
              <tr>
                <th scope="row">Is there outstanding finance?</th>
                <select
                  class="form-select w-25 mb-3"
                  aria-label="Default select example"
                  onChange={(e) => Handlechange(e)}
                  value={outstandingFinance}
                  name="outstandingFinance"
                >
                  <option selected>Select </option>
                  <option selected value="No">
                    No
                  </option>
                  <option value="Yes">Yes</option>
                </select>
              </tr>
              <tr>
                <th className="">Postcode where vehicle is located</th>
                <div class="input-group border my-1 w-25">
                  <input
                    type="text"
                    class="form-control w-25"
                    placeholder="Postal Code"
                    aria-describedby="basic-addon1"
                    onChange={(e) => Handlechange(e)}
                    value={postalCode}
                    name="postalCode"
                    required
                  />
                </div>
              </tr>
            </tbody>
          </table>

          <p className="text-primary">
            Please ensure you have read and agreed with our &nbsp;
            <a
              href=""
              className="text-danger "
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Terms and Conditions.
            </a>
          </p>
          <Link to="/contactDetails">
            <button
              class="btn btn-primary btn-lg border rounded-pill fw-bold "
              onClick={() => dispatch(Add_VahicleDetails(state))}
            >
              <span className="h3 text-success">Click Here To Proceed</span>
              <i class="bi bi-arrow-right-circle-fill ps-3 h3 text-success "></i>
            </button>
          </Link>
        </div>
      </div>

      {/* Model for terms and conditions */}
      <Terms />
    </>
  );
};

export default VahicleDetails;
