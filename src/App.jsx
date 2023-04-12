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
import toast, { Toaster } from 'react-hot-toast';
import AdminDashboard from "./components/Admin/Dashboard";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = (useSelector((state) => state.authentication.isLogged) || localStorage.getItem("isLogged"));
  const [user, setUser] = useState({});

  const notify = () => toast.error('Phiên hoạt động kết thúc', {
    duration: 4000,
    style: {
      width: "300px"
    },
    position: 'top-center',
  });

  const getUserByToken = async (token) => {
    if (token === "" || !token) dispatch(logout());
    else {
      let userByToken = await validateToken(token);
      console.log(userByToken);
      if (!userByToken) {
        notify();
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch(logout());
        navigate('/login');
      } else {
        setUser(userByToken.payload);
        dispatch(signIn({user: {userId: userByToken.payload.userId, userName: userByToken.payload.userName, role: userByToken.payload.role}, token: token}));
      }
    }
  };

  useEffect(() => {
    getUserByToken(localStorage.getItem("token"));
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header user={user}/>
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
              <GroupReport user={user}/> 
            </PrivateRouter>
        } />
            <Route path="todayToDoList" element={
            <PrivateRouter isLogged={isLogged}>
              <TodayTodoList /> 
            </PrivateRouter>
        } />
          </Route>

          <Route path="admin">
              <Route path="dashboard" element={<AdminDashboard/>}/>
          </Route>
        </Routes>
      </div>
      <Footer/>
      <Toaster/>
    </div>
  );
}

export default App;
