import React, { useEffect, useState } from "react";
import FormLogin from "./FormLogin";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="card text-center col-md-6 login-page">
            <div className="card-header">LOGIN</div>
            <div className="card-body">
              <h5 className="card-title">
                If you don't have account, please &nbsp;
                <Link to="/register">Register</Link>
              </h5>
              <FormLogin />
            </div>
            <div className="card-footer text-muted">Welcome</div>
          </div>
        </div>
      </>
    );
};

export default Login;
