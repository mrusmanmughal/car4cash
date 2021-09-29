import React, { useState, createContext } from "react";
import flag from "../../assets/flag.png";
import { useDispatch } from "react-redux";
import { Add_RegNo } from "../../Actions/index";
import { useHistory } from "react-router-dom";

const Hero = () => {
  const [Show, setShow] = useState(true);
  let history = useHistory();
  const dispatch = useDispatch();
  const [registrationNumber, setstate] = useState("");

  return (
    <>
      <div className="container-fluid hero text-center">
        <div className="pt-4 ">
          <h1 className="text-white mt-5">
            Get Your
            <span className="  text-success"> FREE INSTANT</span>Car Valuation
          </h1>
          <form
            onSubmit={() =>
              dispatch(
                Add_RegNo(registrationNumber),
                history.push("/confirmVehicle")
              )
            }
          >
            <div class="form-group">
              <img src={flag} alt="flag" className="flag" />
              <input
                type="text"
                className="h5 py-3 w-25 rounded ps-5 my-3 text-uppercase"
                placeholder="Enter Your Reg Number .."
                onChange={(e) => setstate(e.target.value)}
                required
              />
            </div>

            <button
              className="btn btn-success btn-lg border-white bg-success text-primary form-group"
              type="submit"
            >
              <i class="bi bi-credit-card-fill px-2"></i>
              <span className="fw-bold h6">Value My Car</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
