import React from "react";
import step1Img from "../../assets/1-pic.png";
import step2Img from "../../assets/2pic.png";
import step3Img from "../../assets/3-pic.png";
const Step = () => {
  return (
    <>
      <div className="container my-5 pt-2">
        <h1 className="text-primary text-center my-5">
          Cash For Your Car In&nbsp;
          <span className="text-success bg-primary">3 Simple Step...</span>
        </h1>
        <div className="row text-center">
          <div className="col">
            <img src={step1Img} alt="Setp 1 " />
            <h1 className="text-primary">
              Step <span className="text-success">1</span>{" "}
            </h1>
            <p>Enter Your Registration Number and Click Value My Car</p>
          </div>
          <div className="col">
            <img src={step2Img} alt="Setp 2 " />
            <h1 className="text-primary">
              Step <span className="text-success">1</span>{" "}
            </h1>
            <p>Receive your free no obligation value vehicle valuation</p>
          </div>
          <div className="col">
            <img src={step3Img} alt="Setp 3 " />
            <h1 className="text-primary">
              Step <span className="text-success">1</span>{" "}
            </h1>
            <p>Book your appointment and well buy your car for cash</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step;
