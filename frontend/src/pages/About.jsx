import React from "react";
import styles from "/public/css/about.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <h2 className={styles.sectionTitle}>About <span>Me</span></h2>

      <div className={styles.container}>
        {/* Left Side - Image */}
        <div className={styles.left}>
          <img src="/SATPAL.png" alt="profile" className={styles.profileImg} />
        </div>

        {/* Right Side - Content */}
        <div className={styles.right}>
          <p className={styles.aboutText}>
            Hi, I’m Satpal Singh Jadhav, a Computer Science Engineering student at Sushila Devi Bansal College of Technology, Indore (RGPV University) with 8.3 CGPA.
            I have always been passionate about technology , coding and designing. I scored 85% in 10th and 81% in 12th, which shows my dedication toward learning and hard work from the beginning.
            Currently, I am focusing on Full Stack Development (MERN Stack). I have good knowledge of HTML, CSS, JavaScript, Node.js, Express.js, UI/UX Design and MongoDB, along with working on SQL databases and the frontend project, I create modern and responsive designs, while on the backend I focus on performance, security, and scalability.
            Apart from coding, I also enjoy UI/UX designing, where I create clean, creative, and user-friendly interfaces. My goal is to make digital products that are not only functional but also easy to use and visually appealing.
          </p>

          <p className={styles.aboutText}>
            I am a hardworking, self-motivated, and problem-solving person who loves learning new skills and applying them in real-world projects. My passion lies in becoming a skilled Full Stack Developer and building applications that create real impact.
            I love building modern responsive websites
            with a strong focus on performance and UI/UX design.
          </p>

          {/* Skills Section */}
          <div className={styles.skills}>
            <div className={styles.skill}>
              <span>HTML & CSS</span>
              <div className={styles.progress}>
                <div className={styles.bar} style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span>React.js</span>
              <div className={styles.progress}>
                <div className={styles.bar} style={{ width: "85%" }}></div>
              </div>
            </div>

             <div className={styles.skill}>
              <span>UI / UX</span>
              <div className={styles.progress}>
                <div className={styles.bar} style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span>Figma</span>
              <div className={styles.progress}>
                <div className={styles.bar} style={{ width: "80%" }}></div>
              </div>
            </div>
            
            <div className={styles.skill}>
              <span>JavaScript</span>
              <div className={styles.progress}>
                <div className={styles.bar} style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span>SQL</span>
              <div className={styles.progress}>
                <div className={styles.bar} style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span>MongoDB</span>
              <div className={styles.progress}>
                <div className={styles.bar} style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span>Node.js</span>
              <div className={styles.progress}>
                <div className={styles.bar} style={{ width: "75%" }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span>Express.js</span>
              <div className={styles.progress}>
                <div className={styles.bar} style={{ width: "80%" }}></div>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className={styles.stats}>
        <div className={styles.statBox}>
          <h3>8.3</h3>
          <p>3rd Year CGPA</p>
        </div>
        <div className={styles.statBox}>
          <h3>10+</h3>
          {/* <p>Projects Completed</p> */}
          <p>Projects</p>
        </div>
        <div className={styles.statBox}>
          <h3>12+</h3>
          <p>Technology use</p>
        </div>
      </div>
    </section>
  );
}
