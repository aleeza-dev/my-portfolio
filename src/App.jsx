import { useEffect, useRef, useState } from "react";
import "./App.css";

const projects = [
  {
    title: "Notes App",
    description:
      "A full-stack notes management application with authentication, Google Login, CRUD operations, search functionality and protected routes.",
    tech: "React • Node.js • Express.js • MongoDB • JWT",
    live: "https://notes-app-gxt2.vercel.app/",
    github: "https://github.com/aleeza-dev/Notes-app",
  },

  {
    title: "Quick AI – AI-Powered Chatbot Application",
    description:
      "An AI-powered chatbot application designed to provide intelligent and interactive responses.",
    tech: "React • JavaScript • AI",
    github: "#",
  },

  {
    title: "Coding Interview Preparation Quiz Application",
    description:
      "An interactive quiz application designed to help users prepare for coding interviews through practice questions and assessments.",
    tech: "React • Node.js • Express.js • MongoDB • Google API • Gemini AI",
    live: "https://codeprep-ten.vercel.app",
    github: "https://github.com/aleeza-dev/CodePrep-Frontend",
  },

  {
    title: "Weather Application",
    description:
      "A weather application that provides weather information through API integration with a responsive and user-friendly interface.",
    tech: "HTML • CSS • JavaScript • Weather API",
    github: "#",
  },
];

function App() {
  // =========================
  // REFS
  // =========================

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);

  // =========================
  // STATES
  // =========================

  const [aboutVisible, setAboutVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [certificatesVisible, setCertificatesVisible] = useState(false);

  // =========================
  // SCROLL ANIMATIONS
  // =========================

  useEffect(() => {
    const createObserver = (ref, setVisible) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        },
        {
          threshold: 0.2,
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    };

    const aboutObserver = createObserver(aboutRef, setAboutVisible);
    const skillsObserver = createObserver(skillsRef, setSkillsVisible);
    const projectsObserver = createObserver(projectsRef, setProjectsVisible);
    const certificatesObserver = createObserver(
      certificatesRef,
      setCertificatesVisible
    );

    return () => {
      aboutObserver.disconnect();
      skillsObserver.disconnect();
      projectsObserver.disconnect();
      certificatesObserver.disconnect();
    };
  }, []);

  return (
    <div>
      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">
        <h2>Aleeza Amjad</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* =========================
          HERO
      ========================= */}

      <section className="hero">
        <div className="hero-content">
        <div>
          <p className="intro">Hello, I'm</p>

          <h1>Aleeza Amjad</h1>

          
          <h2 className="typing-title">
          <span>Computer Engineer</span>
          <span>Web Developer</span>
          </h2>

          <div className="buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a
              href="https://github.com/aleeza-dev"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              GitHub
            </a>

            <a
              href="/Aleeza Amjad CV.pdf"
              className="btn"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      
      <div className="hero-image">
      <img
        src="/profile.png"
        alt="Aleeza Amjad"
      />
    </div>

     </div>
      </section>

      {/* =========================
          ABOUT
      ========================= */}

      <section
        id="about"
        className={`section about-section ${
          aboutVisible ? "about-animate" : ""
        }`}
        ref={aboutRef}
      >
        <h2>About Me</h2>

        <p className="about-item">
          I am a Computer Engineering graduate with a strong interest in web
          development and software engineering. I enjoy turning ideas into
          practical, responsive and user-friendly applications using modern
          technologies.
        </p>

        <p className="about-item">
          I have hands-on experience working with frontend technologies such as
          HTML, CSS, JavaScript and React.js, along with backend technologies
          including Node.js, Express.js and MongoDB. I also have experience
          with REST APIs, authentication, CRUD operations and deploying web
          applications.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>💻 Web Development</h3>

            <p>
              Building responsive frontend interfaces and full-stack web
              applications.
            </p>
          </div>

          <div className="about-card">
            <h3>🚀 Continuous Learning</h3>

            <p>
              Exploring new technologies and improving my skills through
              practical projects.
            </p>
          </div>

          <div className="about-card">
            <h3>🧩 Problem Solving</h3>

            <p>
              Enjoy solving technical problems and developing practical
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          SKILLS
      ========================= */}

      <section
        id="skills"
        className={`section skills-section ${
          skillsVisible ? "skills-animate" : ""
        }`}
        ref={skillsRef}
      >
        <h2>Skills</h2>

        <div className="skills">
          {/* Frontend & Programming */}

          <div className="skill-box">
            <h3>Frontend & Programming</h3>

            <p>HTML • CSS • JavaScript • React.js • Python</p>
          </div>

          {/* Backend & Databases */}

          <div className="skill-box">
            <h3>Backend & Databases</h3>

            <p>
              Node.js • Express.js • MongoDB • MySQL • PostgreSQL
            </p>
          </div>

          {/* Tools & Technologies */}

          <div className="skill-box">
            <h3>Tools & Technologies</h3>

            <p>
              Git • GitHub • Postman • Vercel • Railway • Firebase • Google
              API • Stripe Payments • VS Code • Microsoft Office
            </p>
          </div>

          {/* AI & Machine Learning */}

          <div className="skill-box">
            <h3>AI & Machine Learning</h3>

            <p>
              Artificial Intelligence • Machine Learning • AI/ML Model
              Deployment in Embedded Systems
            </p>
          </div>

          {/* Professional Skills */}

          <div className="skill-box">
            <h3>Professional Skills</h3>

            <p>
              Problem-Solving • Team Collaboration • Client Communication •
              Multitasking • Leadership
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          PROJECTS
      ========================= */}

      <section
        id="projects"
        className={`section projects-section ${
          projectsVisible ? "projects-animate" : ""
        }`}
        ref={projectsRef}
      >
        <h2>Projects</h2>

        <div className="projects">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <div className="project-buttons">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}

                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          CERTIFICATES
      ========================= */}

      <section
        id="certificates"
        className={`section certificates ${
          certificatesVisible ? "certificates-animate" : ""
        }`}
        ref={certificatesRef}
      >
        <h2>Certificates</h2>

  <p className="certificates-intro">
    Professional certifications and achievements that reflect my
    continuous learning and technical development.
  </p>

  <div className="certificate-cards">

    {/* Certificate 1 */}
    <div className="certificate-card">
      <span className="certificate-date">01/10/2025</span>

      <h3>Full Stack Web Development</h3>

      <p className="certificate-organization">
        Hello World Technologies
      </p>
    </div>

    {/* Certificate 2 */}
    <div className="certificate-card">
      <span className="certificate-date">24/01/2026</span>

      <h3>Foundations of Digital Marketing & E-Commerce</h3>

      <p className="certificate-organization">
        Google
      </p>
    </div>

    {/* Certificate 3 */}
    <div className="certificate-card">
      <span className="certificate-date">25/08/2025</span>

      <h3>Building RESTful APIs with Node.js and Express</h3>

      <p className="certificate-organization">
        LinkedIn Learning
      </p>
    </div>

    {/* Certificate 4 */}
    <div className="certificate-card">
      <span className="certificate-date">11/01/2026</span>

      <h3>Master Modern Frontend Development</h3>

      <p className="certificate-organization">
        SkillSprint30
      </p>
    </div>

    {/* Certificate 5 */}
    <div className="certificate-card">
      <span className="certificate-date">06/02/2026</span>

      <h3>Certificate of Membership</h3>

      <p className="certificate-organization">
        Pakistan Freelancers Association (PAFLA)
      </p>
    </div>

  </div>

        <a
          href="https://drive.google.com/drive/folders/1cGmdwtQNYTSdOm-CKXzBUNiKKN9NrDwK"
          target="_blank"
          rel="noreferrer"
          className="btn primary"
        >
          View All Certificates
        </a>
      </section>

      {/* =========================
          CONTACT
      ========================= */}

      <section id="contact" className="section contact">
        <h2>Let's Connect</h2>

        <p>
          I'm open to opportunities, collaborations and interesting projects.
        </p>

        <div className="contact-links">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=alizaamjad597@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/aleeza-amjad-544379264/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/aleeza-dev"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer>
        <p>© 2026 Aleeza Amjad. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;