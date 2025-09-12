import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="main-content">

        {/* Left Section */}
        <div className="left box">
          <h2>About us</h2>
          <div className="content">
            <p>
              I’m Satpal Singh Jadhav, a passionate Full Stack Developer skilled in HTML, CSS, JavaScript, Node.js, and MongoDB. I love creating efficient, scalable, and user-friendly applications,
              With a strong foundation in frontend and intermediate in backend development, I enjoy turning innovative ideas into functional projects. Always learning, always building.
            </p>

            <div className="social">
              <a href="https://www.linkedin.com/in/satpal-singh-jadhav-ab2875295r" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://www.instagram.com/satpal_singh_939?igsh=MTRkbnkzM2NvZ2poMA==" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://github.com/satpalsingh939" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>

        <div>
          <h2> Quick Links </h2>

          <div className="navF" >
            <a href="#home" className="linkF">Home</a>
            <a href="#about" className="linkF">About</a>
            <a href="#services" className="linkF">Services</a>
            <a href="#projects" className="linkF">Projects</a>
            {/* <a href="#contact" className="link">Contact</a> */}
          </div>

        </div>


        {/* Center Section */}
        <div className="center box">
          <h2>Address</h2>
          <div className="content">
            <div className="place">
              <MdLocationOn /> <span>Indore, Madhya Pradesh</span>
            </div>
            <div className="phone">
              <FiPhone /> <span>+91-7224925007</span>
            </div>
            <div className="email">
              <MdEmail /> <span>satpalsinghjadhav5@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bottom">
        <span className="credit">© 2025 My Personal Portfollio.</span>
        <span>
          <a href="https://github.com/satpalsingh939" target="_blank" > satpalsingh939 </a> | All rights reserved.
        </span>
      </div>
    </footer>
  );
}
