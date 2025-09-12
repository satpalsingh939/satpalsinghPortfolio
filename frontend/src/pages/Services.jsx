import React from 'react'
import styles from '/public/css/Services.module.css'

export default function Services(){
  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.servicesTitle}>
        My <span>Services</span>
      </h2>
      
      <div className={styles.servicesGrid}>
  <div className={styles.serviceCard}>
    <h4>Frontend Development</h4>
    <p>
      I will create modern, responsive, and user-friendly websites using HTML, CSS, 
      and JavaScript. With React.js, I build fast and interactive single-page 
      applications that deliver a smooth user experience.
    </p>
  </div>

  <div className={styles.serviceCard}>
    <h4>UI/UX & Web Design</h4>
    <p>
      I am also design clean, creative, and user-focused interfaces. From wireframes 
      to final design, I focus on making digital products easy to use, 
      visually appealing, and fully responsive across all devices.
    </p>
  </div>

  <div className={styles.serviceCard}>
    <h4>Backend Development</h4>
    <p>
      I build secure and scalable backend systems using Node.js and Express. 
      I work with MongoDB to handle databases efficiently and implement 
      authentication, APIs, and data management for complete web solutions.
    </p>
  </div>
</div>


    </section>
  )
}
