import "./navigation.css";
import { DarkMode } from "@mui/icons-material";
import logo from "../../assets/images/logo.png";
import AOS from 'aos';
AOS.init();

function Navigation() {
  return (
    <header className="header" data-aos="fade-down">
      <div className="header_left" data-aos="fade-down" data-aos-delay="200">
        <img src={logo} alt="logo" className="logo_png"/>
        <p className="app_name">BeLoud</p>
      </div>
      <div className="header_right">
        <button className="signup_btn" data-aos="fade-down" data-aos-delay="100">Signup</button>
        <DarkMode sx={{ fontSize: 35 }} className="theme_icon" data-aos="fade-down" data-aos-delay="300" />
      </div>
    </header>
  );
}

export { Navigation };
