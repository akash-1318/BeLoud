import "./navigation.css";
import logo from "../../assets/images/logo.png";
import AOS from 'aos';
import { useNavigate } from "react-router-dom";
AOS.init();

function Navigation() {
  const navigate = useNavigate();
  return (
    <header className="header" data-aos="fade-down">
      <div className="header_left" data-aos="fade-down" data-aos-delay="200">
        <img src={logo} alt="logo" className="logo_png"/>
        <p className="app_name">BeLoud</p>
      </div>
      <div className="header_right">
        <button className="signup_btn" data-aos="fade-down" data-aos-delay="100" onClick={() => {
          navigate("/signup")
        }}>Signup</button>
      </div>
    </header>
  );
}

export { Navigation };
