import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import React from "react";
import "./login.css";
import twiter from "./twiter.svg";
import apple from "./apple.svg";
// import google from './google.svg'
const App = () => {
  return (
    <>
      <div className="ht-100 row-cols-md-2 d-md-flex flex-row">
        <div className="ms-5 col d-md-flex align-items-md-center justify-content-md-center">
          <img
            className="p-md-5 p-2 twiter img-fluid "
            src={twiter}
            alt="hello"
          />
        </div>
        <div className="col  flex-column">
          <h1 className="happen text-center me-md-5">Happening Now</h1>

          <div className="d-flex flex-column mt-4 align-items-center justify-content-center">
            <div className="fs-md-5 fs-1 fw-bold wd-300 mb-2">Join Today</div>
            <div className="bg-white mt-3 every-center rounded-pill wd-300 ht-50 text-center text-dark">
              <img
                alt="google svg from iconscout.com "
                className="me-2 apple"
                id="dimg_1"
                src="data:image/jpeg;base64,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"
                data-csiid="12"
                data-atf="1"
              />
              Sign up with Google
            </div>
            <div className="bg-white mt-3 every-center rounded-pill wd-300 ht-50 text-center text-dark ">
              <img src={apple} className="me-2 apple bg-white" alt="" />
              Sign up with Apple
            </div>
            <div className="every-center wd-300 ht-50">
              <div className="line bg-white"></div>
              <div className="ps-2 pe-2 fs-4 mb-2">or</div>
              <div className="bg-white line"></div>
            </div>
            <div className="bg-primary mt-3 wd-300 every-center rounded-pill wd-300 ht-50 text-center fw-bold text-white ">
              Create Account
            </div>
            <div className="wd-300">
              <p className="plighter">
                By signing up, you agree to the{" "}
                <span className="text-primary"> Terms of Service </span>and{" "}
                <span className="text-primary">Privacy Policy</span>, including{" "}
                <span className="text-primary">Cookie Use.</span>
              </p>
            </div>
            <div className="bg-lighter border border-1 sign-in mt-3 every-center rounded-pill wd-300 ht-50 text-center text-primaary fw-bold">
              Sign in
            </div>
          </div>
        </div>
      </div>
      {/* <p className="mt-5 text-white every-center"><div className="lastpara fw-lighter" style={{maxWidth:'900px',wordSpacing:"20px"}}>About
Download the X app
Help Center
Terms of Service
Privacy Policy
Cookie Policy
Accessibility
Ads info
Blog
Careers
Brand Resources
Advertising
Marketing
X for Business
Developers
Directory
Settings
© 2024 X Corp.</div></p> */}
    </>
  );
};

export default App;
