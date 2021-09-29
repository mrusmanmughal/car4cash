import React from "react";

const Terms = () => {
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog " role="document">
          <div class="modal-content ">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Terms and conditions
              </h5>
              <button
                type="button"
                class="close btn btn-success"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <ul className="small lh-base">
                <li>
                  We reserve the right to withdraw our offer without reason.
                </li>
                <li>
                  If in our opinion the vehicle is not as described we reserve
                  the right to adjust the price accordingly.
                </li>
                <li>
                  Cars with finance can be accepted. However, we will need to
                  obtain a settlement / clearance letter from the finance
                  company before funds are released.
                </li>
                <li>
                  If the finance for the car is greater than the value of the
                  car, you agree to pay cash4cars.co.uk the outstanding balance.
                </li>
                <li>
                  We will require all documents relating to the vehicle
                  including the log book and MOT slips. If we feel there are not
                  enough documents to support your proof of ownership we will
                  withdraw our offer.
                </li>
                <li>
                  The computer generated quote you will receive is not an offer
                  to purchase but a guide price for your vehicle. Only an
                  inspection by one of our team of your vehicle and it’s
                  paperwork will give you an exact offer to purchase it.
                </li>
                <li>
                  Proof of ID will be required (e.g. driving licence) to prevent
                  fraud. This information will be passed on to the police in the
                  event that the car is stolen or involved in any other criminal
                  activity.
                </li>
                <li>
                  The online price quoted is subject to the vehicle having a
                  full and complete service history, free from bodywork defects
                  and being in a good mechanical order. It is also subject to
                  current market conditions.
                </li>
                <li>
                  All vehicles will be H.P.I / Experian checked once the
                  valuation has been agreed by both parties. We reserve the
                  right to change the terms and conditions at any time.
                </li>
                <li>
                  Payment can be made by either Cheque or transfer to your
                  account. A standard transfer takes 3 working days or you can
                  have a same day transfer that incurs a cost of £25
                </li>
                <li>
                  Home visits are subject to availability and also to our
                  discretion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
