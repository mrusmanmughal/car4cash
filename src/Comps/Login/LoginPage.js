import React, { useState } from "react";

import Logo from "../../assets/CashLogo.png";
import { useHistory } from "react-router-dom";
const LoginPage = () => {
  let history = useHistory();
  const [Show, setShow] = useState(true);
  const [state, setstate] = useState({
    user: "",
    password: "",
  });
  const { user, password } = state;
  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    if (state.user === "usman" && state.password === "12345") {
      history.push("/admin/dashboard");
    } else {
      setShow(!true);
    }
  };

  return (
    <>
      <div className="mt-3 shadow border-dark setform">
        <div className="bg-primary border-bottom border-dark border-5 py-3">
          <img src={Logo} alt="Cash4Car" />
        </div>
        <div className="container px-5 pb-5 ">
          <h2 className="mt-3 border-bottom border-dark pb-3 text-center text-uppercase">
            Login here !
          </h2>
          <div class="d-flex justify-content-center form_container">
            <form>
              <div class="input-group mb-3">
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i className="bi bi-person-fill"></i>
                  </span>
                </div>
                <input
                  type="email"
                  name="user"
                  class="form-control input_user"
                  value={user}
                  placeholder="User Name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div class="input-group mb-2">
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i className="bi bi-eye-fill"></i>
                  </span>
                </div>
                <input
                  type="password"
                  name="password"
                  class="form-control input_pass"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <p hidden={Show} className="text-danger text-start small   h5">
                Enter a valid User Name / Password
              </p>

              <div class="d-flex justify-content-center mt-3 login_container">
                <button
                  className="btn  text-success btn-primary btn-lg border rounded-pill fw-bold  "
                  onClick={(e) => login(e)}
                >
                  <span className="h3 text-success">Login</span>
                  <i className="bi bi-arrow-right-circle-fill ps-3 h3"> </i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* form  */}
    </>
  );
};

export default LoginPage;
