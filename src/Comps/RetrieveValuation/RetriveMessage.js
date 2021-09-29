import React from "react";
import Logo from "../../assets/CashLogo.png";
import Step4Img from "../../assets/4.png";
const RetriveMessage = () => {
  return (
    <>
      <div className=" my-3 shadow border-dark setform">
        <div className="bg-primary border-bottom border-dark border-5 py-3">
          <img src={Logo} alt="Cash4Car" />
          <img src={Step4Img} alt="Step 4" />
        </div>
        <div className="container px-5 pb-3 ">
          <h3 className="mt-3 border-bottom border-dark pb-3">
            Thank You - Validation Process is Completed
          </h3>
          <div className="text-center my-4 text-primary">
            <h2 className="  lh-base">
              <span className="text-success"> We would </span> love to{" "}
              <span className="text-success"> value your car </span>
              <br /> confirmation of your valuation request has sent to:
              <span className="text-success"> misterusman3@gmail.com</span>{" "}
              <br /> We will be in touch shortly to arrange an appointment for
              us to view your car and organize payment <br /> Alternatively,
              please call us on{" "}
              <span className="text-success"> 112 33 6666</span>
            </h2>
            <h5 className="my-5">
              P.S. Please don't wait too long - market prices are constantly
              changing. <br /> This valuation is only valid for 5 days.
            </h5>
            <small>
              * Valuation is subject to inspection and contract please see terms
              and conditions.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default RetriveMessage;
