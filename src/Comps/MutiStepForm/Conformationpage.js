import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../../assets/CashLogo.png";
import Step1Img from "../../assets/1.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Conformationpage = () => {
  const [state, setstate] = useState({});
  const { id } = useParams();
  const regNo = useSelector((state) => state.RegNoReducer.RegNo);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const loadData = await axios.get(`http://localhost:3007/car`);
    setstate(loadData.data[0]);
    console.log(loadData.data);
  };

  return (
    <>
      <div className="mt-3 shadow border-dark setform">
        <div className="bg-primary border-bottom border-success border-5 py-3">
          <img src={Logo} alt="Cash4Car" />
          <img src={Step1Img} alt="Step 1 " />
        </div>
        <div className="container px-5 pb-3">
          <h2 className="mt-3 border-bottom border-dark pb-3">
            Please Confirm Your Vehicle
          </h2>

          <table class="table ">
            <tbody>
              <tr>
                <th scope="row">Registration</th>
                <td>{state.registrationNumber}</td>
              </tr>
              <tr>
                <th scope="row">Model</th>
                <td>{state.make}</td>
              </tr>
              <tr>
                <th scope="row">Manufecturer</th>
                <td>{state.make}</td>
              </tr>
              <tr>
                <th scope="row">Gears</th>
                <td>{state.wheelplan}</td>
              </tr>
              <tr>
                <th scope="row">Date Registered</th>
                <td>{state.monthOfFirstRegistration}</td>
              </tr>
              <tr>
                <th scope="row">Colour</th>
                <td>{state.colour}</td>
              </tr>
            </tbody>
          </table>
          <hr />

          <Link to="/vahicleDetails">
            <button class="btn btn-primary btn-lg border rounded-pill fw-bold ">
              <span className="h3 text-success">Yes this is my Car</span>
              <i class="bi bi-arrow-right-circle-fill ps-3 h3 text-success fw-bold"></i>
            </button>
          </Link>
          <p className="my-2 text-primary ">
            If this description does not match your car then please call 112 33
            6666
          </p>
        </div>
      </div>
    </>
  );
};

export default Conformationpage;
