import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import GroupReport from "./components/GroupReport";
import TodayTodoList from "./components/TodayTodoList";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { logout, signIn } from "./redux/auth/authenticationSlice";
import { validateToken } from "./services/authentication/jwt";
import PrivateRouter from "./components/RouterComponent/PrivateRouter";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = (useSelector((state) => state.authentication.isLogged) || localStorage.getItem("isLogged"));

  const getUserByToken = async (token) => {
    if (token === "" || !token) dispatch(logout());
    else {
      let userByToken = await validateToken(token);
      console.log(userByToken);
      if (!userByToken) {
        dispatch(logout());
        navigate('/login');
      } else {
        dispatch(signIn({user: {userId: userByToken.payload.userId, userName: userByToken.payload.userName, role: userByToken.payload.role}, token: token}));
      }
    }
  };

  useEffect(() => {
    getUserByToken(localStorage.getItem("token"));
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={
            <PrivateRouter isLogged={isLogged}>
              <Home /> 
            </PrivateRouter>
        }/>
          <Route path="home" element={
            <PrivateRouter isLogged={isLogged}>
              <Home /> 
            </PrivateRouter>
        }/>
          <Route path="login" element={
              <Login /> 
        } />
          <Route path="register" element={<Register />} />
          <Route path="pastoralWork">
            <Route path="groupReport" element={
            <PrivateRouter isLogged={isLogged}>
              <GroupReport /> 
            </PrivateRouter>
        } />
            <Route path="todayToDoList" element={
            <PrivateRouter isLogged={isLogged}>
              <TodayTodoList /> 
            </PrivateRouter>
        } />
          </Route>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
