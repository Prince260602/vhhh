import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { mainContext } from "../../Context";
import { toast } from "react-hot-toast";
import "./Navbar.css";

const Nav = () => {
  const navigate = useNavigate();
  const context = useContext(mainContext);
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [user, setUser] = useState(context);

  useEffect(() => {
    const storedUser = localStorage.getItem('userid');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [context]);

  const token = localStorage.getItem('token');
  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const closeNavbar = () => {
    setIsNavbarActive(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    navigate('/');
    toast.success("Logged out successfully!");
    closeNavbar();
  };

  return (
    <div className={`App ${isNavbarActive ? "active" : ""}`}>
      <header
        className="header flex"
        style={{
          boxShadow:
            "0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Link to="/" onClick={closeNavbar}>
          <img
            src="https://i.ibb.co/6J6F1zY/the-entrepreneurship-network-cover.jpg"
            alt="ten logo"
            className="logo"
          />
        </Link>

        <nav className={`navbar ${isNavbarActive ? "active" : ""}`}>
          <ul className="navbar-list">
            <Link className="navbar-link" to="/" onClick={closeNavbar}>
              Home
            </Link>
            <div className="dropdown">
              <a href="#" className="nav-link-navbar">
                About <i className="fa fa-caret-down"></i>
              </a>
              <div className="dropdown-content">
                <Link
                  to="/About-us"
                  onClick={closeNavbar}
                >
                  About Us
                </Link>
                <Link
                  to="/LeadershipPrinciplesFooter"
                  onClick={closeNavbar}
                >
                  Leadership Principles
                </Link>
                <Link
                  to="/Layers"
                  onClick={closeNavbar}
                >
                  Our Layers
                </Link>
              </div>
            </div>

            <Link className="navbar-link" to="https://ten-academy.vercel.app/" onClick={closeNavbar}>
              Ten academy
            </Link>

              {/* <div className="dropdown">
                <a href="#" className="nav-link-navbar">
                  Courses <i className="fa fa-caret-down"></i>
                </a>
                <div className="dropdown-content">
                  <Link to="/Courses" onClick={closeNavbar}>
                  Courses
                  </Link>
                  <Link to="/Testimonial" onClick={closeNavbar}>
                  Testimonials
                  </Link>
                  <a
                  // href="https://halloffame.entrepreneurshipnetwork.net/"
                  href="/hall-of-fame"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  Hall of Fame
                </a>
                  <Link to="/Interview" onClick={closeNavbar}>
                   PAP 
                  </Link>
                </div>
              </div> */}


            <div className="dropdown">
              <a href="#" className="nav-link-navbar">
                Career <i className="fa fa-caret-down"></i>
              </a>
              <div className="dropdown-content">
                <a
                  href="https://career.entrepreneurshipnetwork.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  Career
                </a>
                <a
                  href="https://jobs.entrepreneurshipnetwork.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                 TEN Jobs
                </a>
                <a
                  href="https://ten-internship.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                 TEN Internship
                </a>
              </div>
            </div>
                
            <Link className="navbar-link" to="/contact-us" onClick={closeNavbar}>
              Contact
            </Link>
            
            <div className="dropdown">
              <a href="#" className="nav-link-navbar">
                Hackathon <i className="fa fa-caret-down"></i>
              </a>
              <div className="dropdown-content">
                <a
                  href="https://hackathon.entrepreneurshipnetwork.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  Hackathon
                </a>
                <a
                  href="https://ideathon.entrepreneurshipnetwork.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                 Ideathon
                </a>
              </div>
            </div>

            <div className="dropdown">
              <a href="#" className="nav-link-navbar">
                Our Tools <i className="fa fa-caret-down"></i>
              </a>
              <div className="dropdown-content"> 
                <Link to="/Ten_mentor" onClick={closeNavbar}>
                  Ten Mentor
                </Link>
                <Link to="/Resume_Building" onClick={closeNavbar}>  
                  Resume Building
                </Link>
                <Link to="/Influencer_Marketing" onClick={closeNavbar}>  
                  Influencer Marketing
                </Link>
                <Link to="/Ten_ai_consulting_labs" onClick={closeNavbar}>  
                  TEN AI consulting labs
                </Link>
                <Link to="/HRMS" onClick={closeNavbar}>
                  HRMS
                </Link>
                <Link to="/AI-Labs" onClick={closeNavbar}>
                  TEN AI labs
                </Link>

                <Link to="/Ten_social_network" onClick={closeNavbar}>  
                  Ten social network
                </Link>

                <Link to="/Idea-Engine" onClick={closeNavbar}>
                  TEN Idea Engine
                </Link>
                <Link
                  to={token ? '/investor' : '/login'}
                  onClick={closeNavbar}
                >
                  TEN Investors
                </Link>
                <a
                  href="https://discord.com/invite/wdgH95JY6a"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  Virtual Campus
                </a>
                <a
                  href="https://godengine.entrepreneurshipnetwork.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  God Engine
                </a>
                <a
                  href="https://employeemanagement.entrepreneurshipnetwork.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  Employee Management System
                </a>
                <a
                  href="https://ten-news-vert.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  Newsin10
                </a>
              </div>
            </div>

            {!token ? (
              <div className="navbar-buttons">
                <Link to="/Login" onClick={closeNavbar}>
                  <button className="login-btn">Log in</button>
                </Link>
                <Link to="/Sign_Up" onClick={closeNavbar}>
                  <button className="signup-btn">Sign Up</button>
                </Link>
              </div>
            ) : (
              <div className="flex gap-4 justify-center items-center">
                <Link to={`/profile/${user.id}`} onClick={closeNavbar}>
                  <p className="text-white text-md">{user.name}</p>
                </Link>
                <button className="text-md py-1 px-4 bg-gray-500 text-white" onClick={handleLogout}>
                  LogOut
                </button>
              </div>
            )}
          </ul>
        </nav>

        <div className="mobile-navbar-btn" onClick={toggleNavbar}>
          <div className={`toggle_btn ${isNavbarActive ? "open" : ""}`}></div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
