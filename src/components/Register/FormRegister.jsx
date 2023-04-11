import React, { useState } from "react";
import "./index.css";
import { registerService } from "../../services/authentication/auth";
import { onlyNumberKey, validatePassWord } from "../../services/validation/inputValidation";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

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
    if (!onlyNumberKey(user.lifeCodeMiddle) || !onlyNumberKey(user.lifeCodeTail)) {
      toast.error("Mã số SS chỉ được nhập số", {
        style: {
          width: "300px",
        }
      })
      return;
    }
    if (validatePassWord(user.passWord).status === "warning") {
      toast.error(`${validatePassWord(user.passWord).msg}`, {
        style: {
          width: "400px",
        }
      })
      return;
    }
    let lifeCode = `M06-${user.lifeCodeMiddle}-${user.lifeCodeTail}`;
    let resultRegister = registerService({userName: user.userName, passWord: user.passWord, lifeCode: lifeCode});
    toast.promise(
      resultRegister,
      {
        loading: 'Loading',
        success: (data) => {
          navigate("/login");
          return `Register successfully`;
        },
        error: (err) => `${err.msg}`,
      },
      {
        style: {
          minWidth: '250px',
        },
        success: {
          duration: 5000,
          icon: '😍',
        },
        position: 'top-center',
      }
    );
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
              required
            />
            <span> - </span>
            <input
              type="text"
              className="form-control"
              id="life-code-tail"
              onChange={(e) =>
                setUser({ ...user, lifeCodeTail: e.target.value })
              }
              required
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
            required
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
            required
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
