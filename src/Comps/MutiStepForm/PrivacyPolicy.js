import React from "react";

const PrivacyPolicy = () => {
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
        <div class="modal-dialog" role="document">
          <div class="modal-content ">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLongTitle">
                Privacy Policy
              </h3>
              <button
                type="button"
                class="close btn btn-success   "
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body lh-base">
              <p>
                Cash 4 Cars will use its best endeavours to safeguard the
                privacy of its website visitors. This policy explains the
                website data processing practices of Cash 4 Cars
              </p>
              <h3>Information collected</h3>
              <p>
                We only collect your personal details from you when you either
                complete our online contact form, contact us via email or
                telephone us. This information will be used purely to answer
                your queries regards our services. All information is collected
                lawfully and in accordance with the Data Protection Act 1998.
              </p>
              <h3>Disclosure of your information</h3>
              <p>
                At no time will information collected be passed on to any third
                parties without your prior consent.
              </p>
              <h3>Other web sites</h3>
              <p>
                Our web site may contain links to other web sites and although
                we do not provide any customer information to these websites,
                they are outside our control and are not covered by our Privacy
                Policy. If you access other sites using the links provided, the
                operators of these sites may collect information from you which
                will be used by them in accordance with their privacy policy,
                which may differ from ours.
              </p>
              <h3>Cookies</h3>
              <p>
                “Cookies” are small pieces of information that a web site
                transfers to your computer’s hard disk for record-keeping
                purposes. We may use a “cookie” to track the patterns of
                behaviour of visitors to our site. You can usually modify your
                browser to prevent this happening if you so wish. Most browsers
                are set to accept cookies. If you prefer, you can set yours to
                refuse cookies. However, you may not be able to take full
                advantage of the website functionality if you do so.
              </p>
              <h3>Access rights</h3>
              <p>
                You have a right to access the personal data held about you. To
                obtain a copy of this information, please contact us: If you
                have any questions/comments about our website Privacy Policy,
                please do not hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
