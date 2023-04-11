import React, { useEffect, useState } from "react";
import { FcManager } from "react-icons/fc";
import { BsFillPersonLinesFill, BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authenticationSlice";

const Header = ({userProp}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogged = localStorage.getItem("isLogged");
  const [user, setUser] = useState({});
  const userStore = useSelector((state) => state.authentication.user);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    if(userProp) setUser(userProp);
    else if (userStore) setUser(userStore); 
  }, [userStore])
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-custom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="img-logo"
              src="/WorldMissionSociety_ChurchofGod_Symbol_Logo.png"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {isLogged && (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#!"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pastoral Work
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/pastoralWork/groupReport"
                      >
                        Group Report
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/pastoralWork/todayTodoList"
                      >
                        Another action
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="profile dropdown">
                <a className="nav-link dropdown-toggle" type="button"
                    id="navbarDropdown1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false" href="#!">
                  <FcManager className="profile-icon"/>
                  <span className="user-name">Hello, {user.userName}</span>
                </a>
                  <ul
                    className="dropdown-menu dropdown-menu-lg-end"
                    aria-labelledby="navbarDropdown1"
                  >
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                        <BsFillPersonLinesFill className="group-icon-user" />
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/"
                        onClick={handleLogout}
                      >
                        Logout
                        <BsBoxArrowInRight className="group-icon-user" />
                      </a>
                    </li>
                  </ul>
                
              </div>
            </div>
          )}

          {!isLogged && (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                Welcome
              </ul>
              <div className="profile ">
                <Link to="login" className="btn btn-custom">
                  Login <AiOutlineLogin className="group-icon-user" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
