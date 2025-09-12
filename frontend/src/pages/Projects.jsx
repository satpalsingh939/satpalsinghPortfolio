import React from 'react'
import styles from '../css/project.module.css'

export default function Portfolio() {
  return (
    <section id="projects" className={styles.portfolioSection}>
      <h2 className={styles.portfolioTitle}>
        My <span>Projects</span>
      </h2>

      <div className={styles.portfolioGrid}>

        <div className={styles.portfolioCard}>
          <img src="/finalANGELP.png" alt="E-commerce" className={styles.portfolioImg} />
          <h4>Angel Ai [Virtual & ChatBot] Full-Stack </h4>
          <div className={styles.btnGroup}>
            <a href="http://angel-ai-assistant-1.vercel.app" target="_blank" className={styles.btn}>Live Demo</a>
            <a href="https://github.com/satpalsingh939/Angel-Ai-Assistant" target="_blank" className={styles.btnOutline}>GitHub</a>
          </div>
        </div>

        <div className={styles.portfolioCard}>
          <img src="/projectF.png" alt="E-commerce" className={styles.portfolioImg} />
          <h4>UI/UX [Soft-Drink Design] </h4>
          <div className={styles.btnGroup}>
            <a href="https://www.figma.com/proto/RELrG6nRRcA1gMABGa23Fn/FirstProject-UI-UX?node-id=32-2&starting-point-node-id=32%3A2&t=zZWQUV3MQciUOiwZ-1" target="_blank" className={styles.btn}>Live Demo</a>
          </div>
        </div>

        <div className={styles.portfolioCard}>
          <img src="/projectW.png" alt="Landing Page" className={styles.portfolioImg} />
          <h4>Weather-Website</h4>
          <div className={styles.btnGroup}>
            <a href="https://satpalsingh939.github.io/weather-web-by-S/" target="_blank" className={styles.btn}>Live Demo</a>
            <a href="https://github.com/satpalsingh939/weather-web-by-S" target="_blank" className={styles.btnOutline}>GitHub</a>
          </div>
        </div>

        <div className={styles.portfolioCard}>
          <img src="/projectD.png" alt="Dashboard UI" className={styles.portfolioImg} />
          <h4>Distance Calculator</h4>
          <div className={styles.btnGroup}>
            <a href="https://satpalsingh939.github.io/distance-calculator-by-satpal/" target="_blank" className={styles.btn}>Live Demo</a>
            <a href="https://github.com/satpalsingh939/distance-calculator-by-satpal" target="_blank" className={styles.btnOutline}>GitHub</a>
          </div>
        </div>

 <div className={styles.portfolioCard}>
          <img src="/projectself.png" alt="E-commerce" className={styles.portfolioImg} />
          <h4>Caffee Landing Page</h4>
          <div className={styles.btnGroup}>
            <a href="https://satpalsingh-portfolio.vercel.app/" target="_blank" className={styles.btn}>Live Demo</a>
            <a href="https://github.com/satpalsingh939/satpalsinghPortfolio" target="_blank" className={styles.btnOutline}>GitHub</a>
          </div>
        </div>

        <div className={styles.portfolioCard}>
          <img src="/projectC.png" alt="E-commerce" className={styles.portfolioImg} />
          <h4>Calculator</h4>
          <div className={styles.btnGroup}>
            <a href="https://satpalsingh939.github.io/calculator-by-satpal/" target="_blank" className={styles.btn}>Live Demo</a>
            <a href="https://github.com/satpalsingh939/calculator-by-satpal" target="_blank" className={styles.btnOutline}>GitHub</a>
          </div>
        </div>

        <div className={styles.portfolioCard}>
          <img src="/projectCPG.png" alt="E-commerce" className={styles.portfolioImg} />
          <h4>Color Prediction Game</h4>
          <div className={styles.btnGroup}>
            <a href="https://satpalsingh939.github.io/color-Prediction-game/" target="_blank" className={styles.btn}>Live Demo</a>
            <a href="https://github.com/satpalsingh939/color-Prediction-game" target="_blank" className={styles.btnOutline}>GitHub</a>
          </div>
        </div>

        <div className={styles.portfolioCard}>
          <img src="/homeproject.png" alt="E-commerce" className={styles.portfolioImg} />
          <h4>HouseDetails - Landing Page</h4>
          <div className={styles.btnGroup}>
            <a href="https://house-details.vercel.app/" target="_blank" className={styles.btn}>Live Demo</a>
            <a href="https://github.com/satpalsingh939/HouseDetails" target="_blank" className={styles.btnOutline}>GitHub</a>
          </div>
        </div>

        <div className={styles.portfolioCard}>
          <img src="/projectTTTG.png" alt="E-commerce" className={styles.portfolioImg} />
          <h4>Tic Tac Toe Game</h4>
          <div className={styles.btnGroup}>
            <a href="https://satpalsingh939.github.io/tik-tac-game/" target="_blank" className={styles.btn}>Live Demo</a>
            <a href="https://github.com/satpalsingh939/tik-tac-game" target="_blank" className={styles.btnOutline}>GitHub</a>
          </div>
        </div>

        <div className={styles.portfolioCard}>
          <img src="/projectLCaffe.png" alt="E-commerce" className={styles.portfolioImg} />
          <h4>Caffee Landing Page</h4>
          <div className={styles.btnGroup}>
            <a href="https://satpalsingh939.github.io/Caffee-landing-page/" target="_blank" className={styles.btn}>Live Demo</a>
            <a href="https://github.com/satpalsingh939/Caffee-landing-page" target="_blank" className={styles.btnOutline}>GitHub</a>
          </div>
        </div>



      </div>
    </section>
  )
}
