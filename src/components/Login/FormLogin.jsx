import React, { useState } from "react";
import { loginService } from "../../services/authentication/auth";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../redux/auth/authenticationSlice";
import { useDispatch } from "react-redux";

const FormLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        userName: "",
        passWord: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        let resultLogin = await loginService(user);
        console.log(resultLogin);
        if (resultLogin) {
            dispatch(signIn({user: resultLogin.user, token: resultLogin.accessToken}));
            navigate("/home");
        }
    } 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setUser({ ...user, passWord: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-custom">
          Login
        </button>
      </form>
    </>
  );
};


export default FormLogin;
