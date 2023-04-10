import React, { useState } from "react";
import "./index.css";
import { registerService } from "../../services/authentication/auth";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    passWord: "",
    lifeCodeMiddle: "",
    lifeCodeTail: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let lifeCode = `M06-${user.lifeCodeMiddle}-${user.lifeCodeTail}`;
    let resultRegister = await registerService({userName: user.userName, passWord: user.passWord, lifeCode: lifeCode});
    if (resultRegister.status === "success") {
      navigate("/login");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Life Code
          </label>
          <div className="group-input d-flex flex-row justify-content-center">
            <span> M06 - </span>
            <input
              type="password"
              className="form-control"
              id="life-code-middle"
              onChange={(e) =>
                setUser({ ...user, lifeCodeMiddle: e.target.value })
              }
            />
            <span> - </span>
            <input
              type="text"
              className="form-control"
              id="life-code-tail"
              onChange={(e) =>
                setUser({ ...user, lifeCodeTail: e.target.value })
              }
            />
          </div>
        </div>
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
          Register
        </button>
      </form>
    </>
  );
};

export default FormRegister;
