import React from "react";
import Logo from "../../assets/CashLogo.png";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <div className="my-3 shadow border-dark setform">
        <div className="bg-primary border-bottom border-dark border-5 ">
          <img src={Logo} alt="Cash4Car" />
        </div>

        <div className="container px-5 pb-3  ">
          <h2 className="mt-3 border-bottom border-dark pb-3">
            Sorry, an error has occurred
          </h2>
          <p>
            <strong> Error Details : </strong> The registration number you have
            entered appears to be invalid. Please ensure that the registration
            number contains only alphabetical and numeric characters.
          </p>
          <h3>A problem has occurred during the valuation process.</h3>
          <p>
            Please ensure you have correctly chosen to value a Van or a Car by
            selecting the appropriate button.
          </p>
          <p>
            If you have any further questions or need assistance please call
            07789 558332
          </p>
          <p>
            {" "}
            <Link to="/">Click Here </Link> to return to the home page and try
            again.
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
