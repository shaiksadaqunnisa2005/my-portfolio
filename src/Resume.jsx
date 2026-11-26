
import { useEffect, useState } from 'react'
import './Resume.css'

function Resume() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const skills = [
    'Python', 'SQL', 'Excel', 'Power BI',
    'Tableau', 'Pandas', 'NumPy', 'Machine Learning',
    'HTML', 'CSS', 'JavaScript', 'GitHub'
  ]

  const projects = [
    {
      title: 'SchoolMind AI',
      description: 'Educational application built using React, FastAPI and SQLite.'
    },
    {
      title: 'Iris Flower Classification',
      description: 'Machine learning classification using Logistic Regression, KNN and Decision Tree.',
      achievement: 'Accuracy: 93.33%'
    },
    {
      title: 'Car Price Prediction',
      description: 'Car price prediction using Random Forest and Gradio.',
      achievement: 'R² Score: 0.920'
    },
    {
      title: 'Sales Prediction',
      description: 'Predictive analytics project using historical sales data.',
      achievement: 'R² Score: 0.953'
    }
  ]

  const certifications = [
    { name: 'IBM + AICTE', detail: '6-Week Data Analytics with AI Internship' },
    { name: 'Zetheta', detail: 'Data Analyst Project Work Experience' },
    { name: 'XYlofy AI', detail: '4-Week AI & Data Science Internship' },
    { name: 'NPTEL', detail: 'English Language for Competitive Exams', score: '85% · Top 5%' },
    { name: 'NPTEL', detail: 'Fundamentals of Quantum Mechanics for Computing', score: '80%' },
    { name: 'Qubitech + WISER', detail: '4-Week Quantum Fundamentals Program' },
    { name: 'TCS iON', detail: 'Career Edge – Young Professional' },
    { name: 'MongoDB', detail: 'CRUD Operations in MongoDB' },
    { name: 'Simplilearn', detail: 'Introduction to SQL' },
    { name: 'Infosys Springboard', detail: 'Introduction to Data Science' },
    { name: 'NASSCOM', detail: 'Digital Application Fundamentals (STEM)' }
  ]

  const achievements = [
    { name: 'Adobe University Hackathon', detail: 'Hackathon participation' },
    { name: 'QuizOff 2026', detail: 'CampusCrew + Unstop' },
    { name: 'Smart India Hackathon 2026', detail: 'KLMCEW Internal Hackathon' }
  ]

  const downloadResume = () => {
    window.print()
  }

  return (
    <div className="resume-page">

      <header className="resume-header">
        <a href="/" className="resume-logo">S.</a>

        <nav className="resume-nav">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="/" className="back-link">← Portfolio</a>
      </header>

      <main>
        <section className="resume-hero">
          <p className="resume-label">MY PROFESSIONAL PROFILE</p>

          <h1>Shaik <span>Sadaqunnisa</span></h1>

          <h2>Aspiring Data Analyst | AI & Data Science Student</h2>

          <p>
            Passionate about transforming data into meaningful insights
            and building practical solutions using technology.
          </p>

          <div className="resume-actions">
            <button className="download-button" onClick={downloadResume}>
              ↓ Download Resume PDF
            </button>

            <a href="mailto:shaiksadaqunnisa2005@gmail.com">
              Contact Me ↗
            </a>

            <a href="https://www.linkedin.com/in/shaik-sadaqunnisa-6944a5358/"
              target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </section>

        <section className="resume-section" id="about">
          <h2>About Me</h2>
          <p>
            I am a final-year B.Tech student specializing in Artificial
            Intelligence and Data Science at KLM College of Engineering
            for Women. I enjoy working with data, exploring machine learning
            and developing technology-based solutions. I am looking forward
            to growing as a Data Analyst.
          </p>
        </section>

        <section className="resume-section" id="education">
          <h2>Education</h2>
          <div className="resume-card">
            <h3>B.Tech – Artificial Intelligence & Data Science</h3>
            <p>KLM College of Engineering for Women</p>
            <p>2023 – 2027</p>
            <strong>CGPA: 8.5</strong>
          </div>
        </section>

        <section className="resume-section" id="skills">
          <h2>Technical Skills</h2>
          <p>Technologies and tools I have worked with.</p>

          <div className="skill-bars">
            {skills.map((skill, index) => (
              <div className="skill-bar-item" key={skill}>
                <div className="skill-bar-heading">
                  <span>{skill}</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className={`skill-bar-fill ${animate ? 'active' : ''}`}
                    style={{ transitionDelay: `${index * 90}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section" id="projects">
          <h2>Projects</h2>
          <div className="resume-project-grid">
            {projects.map((project) => (
              <article className="resume-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.achievement && <strong>{project.achievement}</strong>}
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section" id="certifications">
          <h2>Certifications & Programs</h2>
          <div className="resume-project-grid">
            {certifications.map((certificate, index) => (
              <article className="resume-card" key={index}>
                <span className="certificate-number">
                  CERTIFICATE {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{certificate.name}</h3>
                <p>{certificate.detail}</p>
                {certificate.score && <strong>{certificate.score}</strong>}
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Hackathons & Achievements</h2>
          {achievements.map((item) => (
            <div className="resume-card" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </section>

        <section className="resume-section" id="contact">
          <h2>Let's Connect</h2>
          <div className="resume-card">
            <p>Email: shaiksadaqunnisa2005@gmail.com</p>
            <p>
              GitHub: <a href="https://github.com/shaiksadaqunnisa2005">
                View Profile ↗
              </a>
            </p>
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/shaik-sadaqunnisa-6944a5358/">
                View Profile ↗
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="resume-footer">
        © 2026 Shaik Sadaqunnisa · Built with curiosity & creativity ✳
      </footer>
    </div>
  )
}

export default Resume
