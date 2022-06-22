import "./landing-page.css";
import { Navigation } from "../../components/compIndex";
import {Link} from "react-router-dom"
import primary from "../../assets/images/primary.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import logo from "../../assets/images/logo.png";
import AOS from 'aos';
AOS.init();

function LandingPage() {
  return (
    <main>
      <Navigation />
      <div className="radiant_container"></div>
      <div className="primary_container" data-aos="fade-down">
        <h1>
          Stay Loud with <span>BeLoud</span>
        </h1>
        <Link to="/login"><button className="started_btn">Get Started</button></Link>
      </div>
      <div className="secondry_container">
        <div className="first_left" data-aos="zoom-in" data-aos-delay="200">
          <img src={img3} />
          <div className="first_left-d1"></div>
        </div>
        <div className="second_left" data-aos="zoom-in" data-aos-delay="100">
          <img src={img4} />
          <div className="second_left-d1"></div>
        </div>
        <div className="middle_screen" data-aos="zoom-in">
          <img src={primary} className="primary_img" />
        </div>
        <div className="first_right" data-aos="zoom-in" data-aos-delay="200">
          <div className="first_right-d1">
            <img src={img1} />
          </div>
        </div>
        <div className="second_right" data-aos="zoom-in" data-aos-delay="100">
          <img src={img2} />
          <div className="second_right-d1"></div>
        </div>
      </div>
      <div className="animate_btn-container">
        <button className="go_down-btn animate-bounce">
          <i class="bx bx-chevrons-down"></i>
        </button>
      </div>
      <div className="final_container" data-aos="fade-down">
        <h1>Let the World feel your words</h1>
        <div className="header_left ">
          <img src={logo} alt="logo" className="logo_png primary" />
          <p className="app_name primary">BeLoud</p>
        </div>
        <h2> ⚡Connect with me⚡ </h2>
        <div className="connecting_icons">
          <a href="https://github.com/akash-1318" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/akash-sharma-0251051a1"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://twitter.com/Akasharma18" target="_blank">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
      </div>
    </main>
  );
}

export { LandingPage };
