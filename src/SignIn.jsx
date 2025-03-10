import React, { useState } from "react";
import "./signin.css";
import { Mail, Lock } from "./assets/svg/Icons";
import CustomSlider from "./Slider";
import "slick-carousel/slick/slick.css";
import villeos from  "./assets/villeos.png"

const SignIn = () => {
  const [numberOfCards, setNumberOfCards] = useState([
    1, 2, 3, 4
  ]);
  return (
    <div className="container-fluid tangerine s-h-full">
      <div className="row d-flex d-md-none justify-content-center align-items-center h-100" style={{fontSize: "3cqi"}}>
        This only works for desktop....!
      </div>
      <div className="row h-100 d-none d-md-flex">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row h-100 pd-y-3">
            <div className="col-md-7">
              <div className="text-center pd-b-1"><img src={villeos} className="img-h-3"/></div>
            <CustomSlider numberOfCards={numberOfCards} />
            </div>
            <div className="col-md-5 bg-white round-1">
              <div className="row justify-content-center pd-y-5 h-100">
                <div className="col-8 d-flex flex-column justify-content-between">
                  <div>
                    <p className="text_p mb-0 fw-700">Welcome to Villeos</p>
                    <p className="text_mute_p mg-b-1 fw-400">
                      Sign in to continue your home buying journey!
                    </p>
                    <div>
                      <label
                        for="basic-url"
                        className="form-label fs-20 fw-500 mg-b-05"
                      >
                        Email Address
                      </label>
                      <div className="input-group mg-b-1">
                        <span className="input-group-text">
                          <Mail />
                        </span>
                        <input type="email" className="form-control fs-16" />
                      </div>
                    </div>
                    <div>
                      <label
                        for="basic-url"
                        className="form-label fs-20 fw-500 mg-b-05"
                      >
                        Password
                      </label>
                      <div className="input-group mg-b-1">
                        <span className="input-group-text">
                          <Lock />
                        </span>
                        <input type="password" className="form-control fs-16" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="form-check form-switch d-flex align-items-center">
                        <input
                          className="form-check-input w-20 h-1 me-2"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        />
                        <label
                          className="form-check-label fs-20 fw-500"
                          for="flexSwitchCheckDefault"
                        >
                          Keep me signed in
                        </label>
                      </div>
                      <div className="d-flex align-items-center">
                        <a className="fw-500 a-red fs-20 d-flex align-items-center">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="fs-20 btn w-100 mt-4 solid_btn_primary">
                      Sign in
                    </button>
                    <div className="d-flex justify-content-center mg-t-1">
                      <p className="fs-20 mb-0 me-2 fw-500">Don’t have an account?</p>
                      <a className="fw-500 a-red fs-20 d-flex align-items-center">Sign Up</a>
                    </div>
                    <div className="d-flex justify-content-center mg-t-1">
                      <p className="fs-20 mb-0 me-2 fw-500">Need help?</p>
                      <a className="fw-500 a-red fs-20 d-flex align-items-center">
                        Contact Support
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default SignIn;
