import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
<<<<<<< HEAD
import styles from "../css/home.module.css";
=======
import styles from "/css/home.module.css";
>>>>>>> a9f47c60f82b1b92e9d49953eed1df5335767df4

export default function Home() {
  const roles = ["Full Stack Developer" , "UI/UX Designer" , "MERN Stack Developer"];
  const [currentRole, setCurrentRole] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [print, setPrint] = useState(true);

  useEffect(() => {
    if (index === roles.length) return;

    const timeout = setTimeout(() => {
      setCurrentRole(
        roles[index].substring(0, subIndex + (print ? 1 : -1))
      );

      if (print) {
        if (subIndex + 1 === roles[index].length) {
          setPrint(false);
          setTimeout(() => { }, 1000);
        } else {
          setSubIndex(subIndex + 1);
        }
      } else {
        if (subIndex === 0) {
          setPrint(true);
          setIndex((prev) => (prev + 1) % roles.length);
        } else {
          setSubIndex(subIndex - 1);
        }
      }
    }, print ? 120 : 70);

    return () => clearTimeout(timeout);
  }, [subIndex, index, print, roles]);

  return (
    <section id="home" className={styles.box}>
      {/* Left Side */}
      <div className={styles.boxL}>
        <h2 className={styles.subtitle}>Hello, I'm</h2>
        <h1 className={styles.title}>SATPAL SINGH JADHAV</h1>
        <h3 className={styles.role}>
          And I'm a <span className={styles.highlight}>{currentRole}</span>
          {/* <span className={styles.highlight}>"Full Stack Developer" , "UI/UX Designer" , "MERN Stack Developer"</span> */}
        </h3>
        <p className={styles.desc}>
          {/* I build modern, responsive websites with focus on performance and UI/UX. */}
          I’m a Full Stack & MERN Developer. I create fast, responsive websites with clean code and smooth user experience. I also design simple and creative UI/UX that make digital products easy to use and visually appealing.
        </p>

        <div className={styles.socials}>
          {/* <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a> */}

          <a href="https://www.linkedin.com/in/satpal-singh-jadhav-ab2875295r" target="_blank" ><FaLinkedin /></a>
          <a href="https://www.instagram.com/satpal_singh_939?igsh=MTRkbnkzM2NvZ2poMA==" target="_blank" ><FaInstagram /></a>
          <a href="https://github.com/satpalsingh939" target="_blank" ><FaGithub /></a>

        </div>

        <div className={styles.cta}>
          <a className={styles.btn} href="/resume.pdf" target="_blank">My Resume</a> 
          <a className={styles.btn} href="#contact" >Hire Me</a>
        </div>
      </div>

      {/* Right Side */}
      <div className={styles.boxR}>
        <div className={styles.hexWrapper}>
          <img src="/profile2.png" alt="profile" className={styles.profileImg} />
        </div>
      </div>
    </section>
  );
}
