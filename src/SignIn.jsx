import React, { useState, useRef } from "react";
import "./signin.css";
import { Mail, Lock } from "./assets/svg/Icons";
import CustomSlider from "./Slider";
import "slick-carousel/slick/slick.css";
import villeos from "./assets/villeos.png";
import villeosmb from "./assets/mobile_logo.png";
import sign_in_mobile from "./assets/sign_in_mobile.webp";
import { useElementDimensions } from "./utils/utils";

const SignIn = () => {
  const [numberOfCards, setNumberOfCards] = useState([1, 2, 3, 4]);
  const [width, widthRef] = useElementDimensions("width");
  const [height, heightRef] = useElementDimensions("height");
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="container-fluid tangerine s-h-full p-0" ref={widthRef}>
      <div ref={heightRef} className="h-100 w-100">
        {!showForm ? (
          <div
            className="row d-flex d-md-none justify-content-center align-items-end h-100 m-bg m-0 pd-b-1"
            style={{ fontSize: "3cqi" }}
          >
            <img src={villeosmb} style={{ width: "40vw" }} />
            <div className="col-11 bg-white round-1 text-center pd-y-5 br-1">
              <div className="text-center pd-b-1"></div>
              <CustomSlider numberOfCards={numberOfCards} />
              <button
                className="fs-20 btn w-50 solid_btn_primary br-05 mg-b-1"
                onClick={() => setShowForm(true)}
              >
                Sign in
              </button>
              <p className="fs-20 mb-0 fw-500 mg-b-1">Don’t have an account?</p>
              <a className="fw-500 a-red fs-20 mg-b-1">
                Get help with sign up or sign in.
              </a>
              <p className="fs-20 mb-0 fw-500 mg-b-1">
                Dimensions: {width} X {height}
              </p>
            </div>
          </div>
        ) : (
          
            
            <div className="row justify-content-center bg-white h-100 m-0">
              <div className="col-12 sign_in_mobile d-flex flex-column justify-content-end">
              <p className="text_p mb-0 fw-700 text-white" style={{zIndex: 1}}>Hey, welcome to Villeos! </p>
              <p className="text_mute_p_white mg-b-1 fw-400 pd-b-1" style={{zIndex: 1}}>
              Enter your login credentials here
                      </p>
              </div>
              <div className="col-10 mg-t-10">
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
                <button className="fs-20 btn w-100 mg-t-20 solid_btn_primary br-05">
                        Sign in
                      </button>
                      <p className="fs-20 mb-0 fw-500 text-center">
                          Don’t have an account?
                        </p>
                        <p className="text-center"><a className="fw-500 a-red fs-20 w-100">
                        Get help with sign up or sign in.
                        </a></p>
                        <p className="fs-20 mb-0 fw-500 mg-b-1 text-center pd-b-1">
                        Dimensions: {width} X {height}
                      </p>
              </div>
            </div>
        )}

        <div className="row h-100 d-none d-md-flex m-0">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="row h-100 pd-y-3">
              <div className="col-md-7">
                <div className="text-center pd-b-1">
                  <img src={villeos} className="img-h-3" />
                </div>
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
                          <input
                            type="password"
                            className="form-control fs-16"
                          />
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
                      <button className="fs-20 btn w-100 mg-t-4 solid_btn_primary br-05">
                        Sign in
                      </button>
                      <div className="d-flex justify-content-center mg-t-1">
                        <p className="fs-20 mb-0 me-2 fw-500">
                          Don’t have an account?
                        </p>
                        <a className="fw-500 a-red fs-20 d-flex align-items-center">
                          Sign Up
                        </a>
                      </div>
                      <div className="d-flex justify-content-center mg-t-1">
                        <p className="fs-20 mb-0 me-2 fw-500">Need help?</p>
                        <a className="fw-500 a-red fs-20 d-flex align-items-center">
                          Contact Support
                        </a>
                      </div>
                      <p className="fs-20 mb-0 fw-500 mg-b-1 text-center mg-t-05">
                        Dimensions: {width} X {height}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
