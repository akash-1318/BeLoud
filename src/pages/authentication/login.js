import "./login-and-signup.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { signinAuth } from "../../features/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
import {toast} from "react-toastify"

function Login() {
  const { authToken } = useSelector((store) => store.reduxStore);
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState(true);
  const [loginCred, setLoginCred] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/home";

  const loginHandler = ({ username, password }) => {
      if(username !== "" && password !== ""){
        dispatch(signinAuth({username, password}));
      } else {
            toast.error("Every field is require")
      }
  };

  useEffect(()=>{
      authToken && navigate(from, { replace: true })
  },[authToken])

  return (
    <div className="main__container">
      <div className="clip"></div>
      <div className="form__container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginHandler(loginCred);
          }}
        >
          <div className="credentials">
            <div className="auth__header">
              <img src={logo} />
              <p>Welcome to BeLoud</p>
            </div>
            <p className="motto__text">Giving voice</p>
            <p className="form__type">Login</p>
            <div className="cred__input-field">
              <label>Username</label>
              <input
                placeholder="Username"
                type="text"
                value = {loginCred.username}
                onChange={(e) =>
                  setLoginCred({ ...loginCred, username: e.target.value })
                }
              />
            </div>
            <div className="cred__input-field password__field">
              <label>Password</label>
              <input
                placeholder="password"
                type={passwordType ? "password" : "text"}
                value = {loginCred.password}
                onChange={(e) =>
                  setLoginCred({ ...loginCred, password: e.target.value })
                }
              />
              {passwordType ? (
                <i
                  className="bx bx-show"
                  onClick={() => setPasswordType(!passwordType)}
                ></i>
              ) : (
                <i
                  className="bx bx-hide"
                  onClick={() => setPasswordType(!passwordType)}
                ></i>
              )}
            </div>
            <button type="submit" className="primary__btn">
              Login
            </button>
            <button
              className="primary__btn"
              onClick={() => {
                setLoginCred({username : "akash1307", password : "akashsharma123"})
              }}
            >
              Login as guest
            </button>
            <Link to="/signup" className="link__style">
              <div className="create__new-account">
                create new account <i class="bx bx-right-arrow-alt"></i>{" "}
              </div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export { Login };
