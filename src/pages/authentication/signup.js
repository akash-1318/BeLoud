import "./login-and-signup.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { signupAuth } from "../../features/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
import {toast} from "react-toastify"

function Signup() {
  const { authToken } = useSelector((store) => store.reduxStore);
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState(true);
  const [signupCred, setSignupCred] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/home";

  const signupHandler = (signupCred) => {
    if(signupCred.firstname !== "" && signupCred.lastname !== "" && signupCred.username !== "" && signupCred.password !== ""){
        dispatch(signupAuth(signupCred));
    } else{
        toast.error("Every field is require")
    }
  }

  useEffect(()=>{
      authToken && navigate(from, { replace: true });
  },[authToken])

  return (
    <div className="main__container">
      <div className="clip"></div>
      <div className="form__container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signupHandler(signupCred)
          }}
        >
          <div className="credentials signup__form">
            <div className="auth__header">
              <img src={logo} />
              <p>Welcome to BeLoud</p>
            </div>
            <p className="motto__text">Giving voice</p>
            <p className="form__type">Signup</p>
            <div className="name__input">
              <div className="cred__input-field">
                <label>First Name</label>
                <input
                  placeholder="first name"
                  type="text"
                  value = {signupCred.firstname}
                  onChange={(e) =>
                    setSignupCred({ ...signupCred, firstname: e.target.value })
                  }
                />
              </div>
              <div className="cred__input-field">
                <label>Last Name</label>
                <input
                  placeholder="last name"
                  type="text"
                  value = {signupCred.lastname}
                  onChange={(e) =>
                    setSignupCred({ ...signupCred, lastname: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="cred__input-field">
              <label>Username</label>
              <input
                placeholder="Username"
                type="text"
                value = {signupCred.username}
                onChange={(e) =>
                  setSignupCred({ ...signupCred, username: e.target.value })
                }
              />
            </div>
            <div className="cred__input-field password__field">
              <label>Password</label>
              <input
                placeholder="password"
                type={passwordType ? "password" : "text"}
                value = {signupCred.password}
                onChange={(e) =>
                  setSignupCred({ ...signupCred, password: e.target.value })
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
              Signup
            </button>
            <Link to="/login" className="link__style">
              <div className="create__new-account">
                Already have an account{" "}
                <i className="bx bx-right-arrow-alt"></i>{" "}
              </div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export { Signup };
