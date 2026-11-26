
import './App.css'
import Resume from './Resume'

function App() {
  // Open the interactive resume at /resume
  if (window.location.pathname === '/resume') {
    return <Resume />
  }

  const skills = [
    'Python', 'SQL', 'Excel', 'Power BI', 'Tableau',
    'Pandas', 'NumPy', 'Machine Learning',
    'HTML', 'CSS', 'JavaScript', 'GitHub'
  ]

  const projects = [
    {
      number: '01',
      title: 'SchoolMind AI',
      category: 'ARTIFICIAL INTELLIGENCE',
      description: 'An educational application built using React, FastAPI and SQLite.',
      tech: 'React · FastAPI · SQLite',
      link: 'https://github.com/shaiksadaqunnisa2005'
    },
    {
      number: '02',
      title: 'Iris Flower Classification',
      category: 'MACHINE LEARNING',
      description: 'A machine learning classification project using different algorithms.',
      tech: 'Python · Scikit-learn · Pandas',
      link: 'https://github.com/shaiksadaqunnisa2005'
    },
    {
      number: '03',
      title: 'Car Price Prediction',
      category: 'MACHINE LEARNING',
      description: 'A machine learning model that predicts car prices using vehicle features.',
      tech: 'Python · Random Forest · Gradio',
      link: 'https://github.com/shaiksadaqunnisa2005'
    },
    {
      number: '04',
      title: 'Sales Prediction',
      category: 'DATA SCIENCE',
      description: 'A predictive analytics project using historical sales data.',
      tech: 'Python · Pandas · Machine Learning',
      link: 'https://github.com/shaiksadaqunnisa2005'
    }
  ]

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">S<span>.</span></a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="/resume" className="nav-button">My Resume ↗</a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span>
              OPEN TO OPPORTUNITIES
            </p>

            <p className="intro">HELLO, I'M</p>

            <h1>Shaik <span>Sadaqunnisa.</span></h1>

            <h2>Turning data into <span>meaningful insights.</span></h2>

            <p className="hero-description">
              I'm a final-year Artificial Intelligence & Data Science student
              passionate about data analytics, machine learning and building
              solutions that make a difference.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work ↗
              </a>
              <a href="#about" className="secondary-button">
                More About Me ↓
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/shaiksadaqunnisa2005"
                target="_blank" rel="noreferrer">GitHub ↗</a>

              <a href="https://www.linkedin.com/in/shaik-sadaqunnisa-6944a5358/"
                target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>

          <div className="hero-art">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="data-card card-one">
              <span>DATA</span>
              <strong>01</strong>
            </div>

            <div className="data-card card-two">
              <span>INSIGHTS</span>
              <strong>∞</strong>
            </div>

            <div className="center-orb">
              <span>AI</span>
              <strong>&</strong>
              <span>DATA</span>
            </div>

            <div className="floating-dot dot-one"></div>
            <div className="floating-dot dot-two"></div>
          </div>

          <div className="hero-bottom">
            <span>AI & DATA SCIENCE</span>
            <span>CREATIVITY × ANALYSIS × INNOVATION</span>
            <span>INDIA · 2026</span>
          </div>
        </section>

        <section className="section about" id="about">
          <p className="section-label">01 / ABOUT ME</p>

          <h2>Curious mind.<br /><span>Analytical thinker.</span></h2>

          <p className="section-description">
            I'm Shaik Sadaqunnisa, pursuing B.Tech in Artificial Intelligence
            and Data Science. I enjoy exploring data, discovering patterns
            and transforming ideas into practical projects. I'm continuously
            learning and looking forward to growing as a Data Analyst.
          </p>

          <div className="stats">
            <div><strong>8.5</strong><span>CGPA</span></div>
            <div><strong>4</strong><span>PROJECTS</span></div>
            <div><strong>2027</strong><span>GRADUATION</span></div>
          </div>
        </section>

        <section className="section skills" id="skills">
          <p className="section-label">02 / MY TOOLKIT</p>

          <h2>Skills & <span>Technologies.</span></h2>

          <p className="section-description">
            Tools I use to explore, analyse and build.
          </p>

          <div className="skill-grid">
            {skills.map((skill) => (
              <div className="skill-item" key={skill}>
                <span className="skill-star">✳</span>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <p className="section-label">03 / SELECTED WORK</p>

          <h2>Things I've <span>built.</span></h2>

          <p className="section-description">
            A selection of my machine learning and data science projects.
          </p>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.category}</span>
                  <span>{project.number}</span>
                </div>

                <div className="project-symbol">✳</div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <span className="tech-stack">{project.tech}</span>

                <a href={project.link} target="_blank" rel="noreferrer">
                  View on GitHub ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section education">
          <p className="section-label">04 / EDUCATION</p>

          <h2>My learning <span>journey.</span></h2>

          <div className="education-card">
            <span>2023 — 2027</span>
            <h3>B.Tech · Artificial Intelligence & Data Science</h3>
            <p>KLM College of Engineering for Women</p>
            <strong>CGPA: 8.5</strong>
          </div>
        </section>

        <section className="section contact" id="contact">
          <p className="section-label">05 / GET IN TOUCH</p>

          <h2>Have an idea?<br /><span>Let's connect.</span></h2>

          <p className="section-description">
            I'm open to internships, entry-level opportunities
            and exciting collaborations.
          </p>

          <a className="primary-button"
            href="mailto:shaiksadaqunnisa2005@gmail.com">
            Say Hello ↗
          </a>

          <div className="contact-links">
            <a href="mailto:shaiksadaqunnisa2005@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/shaik-sadaqunnisa-6944a5358/"
              target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/shaiksadaqunnisa2005"
              target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Shaik Sadaqunnisa</span>
        <span>Designed with curiosity & creativity ✳</span>
      </footer>
    </div>
  )
}

export default App
