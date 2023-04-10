import React from "react";
import FormRegister from "./FormRegister";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card text-center col-md-6 register-page">
          <div className="card-header">REGISTER</div>
          <div className="card-body">
            <h5 className="card-title">If you have account, &nbsp;
              <Link to="/login">Login</Link>
            </h5>
            <FormRegister/>
          </div>
          <div className="card-footer text-muted">Welcome</div>
        </div>
      </div>
    </>
  );
};

export default Register;
