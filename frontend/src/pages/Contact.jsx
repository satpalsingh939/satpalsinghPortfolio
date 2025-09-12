import React, { useState } from 'react'
import axios from 'axios'
import styles from '/css/contact.module.css'
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // await axios.post('http://localhost:5000/contact', form)
      await axios.post('https://satpalsinghportfolio.onrender.com/contact', form)

      // setStatus('✅ Message sent successfully!')
      alert('✅ Message sent successfully!')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      // setStatus('❌ Failed to send. Please check backend.')
      alert('❌ Failed to send. Please check backend.')
    }
  }

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.contactTitle}>
        Let’s <span>Talk</span>
      </h2>

      <div className={styles.contactContainer}>
        {/* Left Info */}
        <div className={styles.contactInfo}>
          <div className={styles.contactD}>
            <MdEmail /> <span>I'm available for job, Contact me....</span>
          </div>


          <div className={styles.contactD}>

            <h4 className={styles.mainH}>💼 Full-Time Job Opportunities</h4>

            I’m currently available for full-time job opportunities.
            If you’re looking for a Full Stack Developer, MERN Stack Developer, or UI/UX Designer, I am excited to be a part of your team.

          </div>

          <div className={styles.contactD}>

            <h4 > 🕒 Part-Time Job, Internship & Freelancing</h4>

            I’m also available for Part-time jobs, Internships, Freelancing, and Custom Project Work.
            I can help you build modern, responsive, and user-friendly websites with clean UI/UX design and backend solutions.

          </div>
          <div className="">
            <MdLocationOn /> <span>Indore, Madhya Pradesh</span>
          </div>
          <div className="">
            <FiPhone /> <span>+91-7224925007</span>
          </div>
          <div className="">
            <MdEmail /> <span>satpalsinghjadhav5@gmail.com</span>
          </div>
          {/* </div> */}



        </div>

        {/* Right Form */}
        <div className={styles.contactFormWrapper}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className={styles.btn}>Submit Now</button>
            {status && <p className={styles.status}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
