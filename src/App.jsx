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
    title: "Nexa AI – AI-Powered Chatbot Application",
    description:
      "An AI-powered chatbot application designed to provide intelligent and interactive responses.",
    tech: "React • JavaScript • AI",
    live: "https://chatbotfrontend-mu.vercel.app/",
    github: "https://github.com/aleeza-dev/chatbot_frontend",
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
  const servicesRef = useRef(null);

  const projectRefs = useRef([]);

  // =========================
  // STATES
  // =========================

  const [aboutVisible, setAboutVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [certificatesVisible, setCertificatesVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);

  const [activeProject, setActiveProject] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [projectCount, setProjectCount] = useState(0);

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

    const aboutObserver = createObserver(
      aboutRef,
      setAboutVisible
    );

    const skillsObserver = createObserver(
      skillsRef,
      setSkillsVisible
    );

    const projectsObserver = createObserver(
      projectsRef,
      setProjectsVisible
    );

    const certificatesObserver = createObserver(
      certificatesRef,
      setCertificatesVisible
    );

    const servicesObserver = createObserver(
      servicesRef,
      setServicesVisible
    );

    return () => {
      aboutObserver.disconnect();
      skillsObserver.disconnect();
      projectsObserver.disconnect();
      certificatesObserver.disconnect();
      servicesObserver.disconnect();
    };
  }, []);

  // =========================
  // PROJECT ACTIVE SCROLL
  // =========================

  useEffect(() => {
    const observers = projectRefs.current.map(
      (projectElement, index) => {
        if (!projectElement) {
          return null;
        }

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveProject(index);
            }
          },
          {
            threshold: 0.5,
          }
        );

        observer.observe(projectElement);

        return observer;
      }
    );

    return () => {
      observers.forEach((observer) => {
        if (observer) {
          observer.disconnect();
        }
      });
    };
  }, []);

  // =========================
  // DARK MODE
  // =========================

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);


  // =========================
// PROJECT COUNT ANIMATION
// =========================

useEffect(() => {
  let current = 0;

  const counter = setInterval(() => {
    current += 1;

    setProjectCount(current);

    if (current === 10) {
      clearInterval(counter);
    }
  }, 80);

  return () => clearInterval(counter);
}, []);

  return (
    <div>
      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">

        {/* Profile Picture */}
        <a href="#home" className="nav-profile">
          <img
            src="/profile.png"
            alt="Aleeza Amjad"
          />
        </a>

        {/* Right Side Controls */}
        <div className="nav-actions">

          {/* Let's Talk */}
          <a
            href="#contact"
            className="lets-talk"
          >
            Let's Talk
          </a>

          {/* Light / Dark Mode */}
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀" : "☾"}
          </button>

          {/* Hamburger */}
          <button
            className={`menu-toggle ${
              menuOpen ? "active" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>

      {/* =========================
          SIDE NAVIGATION
      ========================= */}

      <div
        className={`side-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        <button
          className="side-menu-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        <div className="side-menu-links">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="#certificates"
            onClick={() => setMenuOpen(false)}
          >
            Certificates
          </a>

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

        </div>
      </div>

      {/* Sidebar Overlay */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* =========================
          HERO
      ========================= */}

      <section
        id="home"
        className="hero"
      >
        <div className="hero-content">

          <div>

            <p className="intro">
              Hello, I'm
            </p>

            <h1>
              Aleeza Amjad
            </h1>

            <h2 className="typing-title">
              <span>
                Computer Engineer
              </span>

              <span>
                Web Developer
              </span>
            </h2>

            <div className="buttons">

              <a
                href="#projects"
                className="btn primary"
              >
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
            <div className="project-count">

  <strong>
    {projectCount}+
  </strong>

  <span>
    Projects Completed
  </span>

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
          aboutVisible
            ? "about-animate"
            : ""
        }`}
        ref={aboutRef}
      >

        <div className="about-glass">

          <h2>
            About Me
          </h2>

          <p className="about-item">
            I’m a Computer Engineer and Full-Stack Developer
            specializing in modern web applications, backend systems,
            and AI-powered digital solutions. I combine engineering
            fundamentals with practical development experience to
            build products that are responsive, intuitive, and
            designed around real-world requirements.
          </p>


          <p className="about-item">
            I focus on writing maintainable code, creating seamless
            user experiences, and turning complex requirements into
            practical digital products. My goal is to build solutions
            that are not only visually polished, but also functional,
            reliable, and ready to scale.
          </p>

        </div>

      </section>

      {/* =========================
          SKILLS
      ========================= */}

      <section
        id="skills"
        className={`section skills-section ${
          skillsVisible
            ? "skills-animate"
            : ""
        }`}
        ref={skillsRef}
      >

        <h2>
          Skills
        </h2>

        <div className="skills">

          <div className="skill-box">

            <h3>
             ✧ Frontend & Programming
            </h3>

            <p>
              HTML • CSS • JavaScript • React.js • Python
            </p>

          </div>

          <div className="skill-box">

            <h3>
              ✧ Backend & Databases
            </h3>

            <p>
              Node.js • Express.js • MongoDB • MySQL • PostgreSQL
            </p>

          </div>

          <div className="skill-box">

            <h3>
              ✧ Tools & Technologies
            </h3>

            <p>
              Git • GitHub • Postman • Vercel • Railway • Firebase •
              Google API • Stripe Payments • VS Code • Microsoft Office
            </p>

          </div>

          <div className="skill-box">

            <h3>
              ✧ AI & Machine Learning
            </h3>

            <p>
              Artificial Intelligence • Machine Learning • AI/ML
              Model Deployment in Embedded Systems
            </p>

          </div>

          <div className="skill-box">

            <h3>
              ✧ Professional Skills
            </h3>

            <p>
              Problem-Solving • Team Collaboration • Client
              Communication • Multitasking • Leadership
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
          projectsVisible
            ? "projects-animate"
            : ""
        }`}
        ref={projectsRef}
      >

        <h2>
          Projects
        </h2>

        <div className="projects">

          {projects.map((project, index) => (

            <div
              className={`project-timeline-item ${
                activeProject === index
                  ? "active"
                  : ""
              }`}
              key={index}
            >

              <div className="project-marker-line">

                <span className="project-marker">
                  ✧
                </span>

                <span className="project-line"></span>

              </div>

              <div
                className="project-card"
                ref={(element) => {
                  projectRefs.current[index] = element;
                }}
              >

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <span>
                  {project.tech}
                </span>

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

                  {project.github &&
                    project.github !== "#" && (
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
          certificatesVisible
            ? "certificates-animate"
            : ""
        }`}
        ref={certificatesRef}
      >

        <h2>
          Certificates
        </h2>

        <p className="certificates-intro">
          Professional certifications and achievements that reflect
          my continuous learning and technical development.
        </p>

        <div className="certificate-cards">

          <div className="certificate-card">

            <span className="certificate-date">
              01/10/2025
            </span>

            <h3>
              Full Stack Web Development
            </h3>

            <p className="certificate-organization">
              Hello World Technologies
            </p>

          </div>

          <div className="certificate-card">

            <span className="certificate-date">
              24/01/2026
            </span>

            <h3>
              Foundations of Digital Marketing & E-Commerce
            </h3>

            <p className="certificate-organization">
              Google
            </p>

          </div>

          <div className="certificate-card">

            <span className="certificate-date">
              25/08/2025
            </span>

            <h3>
              Building RESTful APIs with Node.js and Express
            </h3>

            <p className="certificate-organization">
              LinkedIn Learning
            </p>

          </div>

          <div className="certificate-card">

            <span className="certificate-date">
              11/01/2026
            </span>

            <h3>
              Master Modern Frontend Development
            </h3>

            <p className="certificate-organization">
              SkillSprint30
            </p>

          </div>

          <div className="certificate-card">

            <span className="certificate-date">
              01/07/2026
            </span>

            <h3>
              SEO & Digital Marketing
            </h3>

            <p className="certificate-organization">
              Navttc
            </p>

          </div>

          <div className="certificate-card">

            <span className="certificate-date">
              01/07/2026
            </span>

            <h3>
              Artificial Intelligence in Python
            </h3>

            <p className="certificate-organization">
              Builtin soft
            </p>

          </div>

        </div>

      </section>

      {/* =========================
          SERVICES
      ========================= */}

      <section
        id="services"
        className={`section services-section ${
          servicesVisible
            ? "services-animate"
            : ""
        }`}
        ref={servicesRef}
      >

        <h2>
          Services
        </h2>

        <p className="services-intro">
          I provide modern digital solutions focused on
          performance, usability, scalability, and real-world
          business requirements.
        </p>

        <div className="services">

          <div className="service-card">

            <div className="service-icon">
              ⌘
            </div>

            <h3>
              Full-Stack Web Development
            </h3>

            <p>
              Building complete web applications with modern
              frontend, backend, databases, authentication,
              APIs, and deployment.
            </p>

          </div>

          <div className="service-card">

            <div className="service-icon">
              &lt;/&gt;
            </div>

            <h3>
              Frontend Development
            </h3>

            <p>
              Creating responsive and interactive user
              interfaces using React, JavaScript, HTML,
              and CSS with a strong focus on usability and
              modern design.
            </p>

          </div>

          <div className="service-card">

            <div className="service-icon">
              ⚙
            </div>

            <h3>
              Backend & API Development
            </h3>

            <p>
              Developing secure REST APIs, server-side
              functionality, database integration,
              authentication, and reliable backend systems.
            </p>

          </div>

          <div className="service-card">

            <div className="service-icon">
              ✦
            </div>

            <h3>
              AI-Powered Applications
            </h3>

            <p>
              Integrating AI capabilities into web
              applications to create intelligent chatbots,
              assistants, automation tools, and interactive
              digital experiences.
            </p>

          </div>

          <div className="service-card">

            <div className="service-icon">
              ↗
            </div>

            <h3>
              Website Optimization
            </h3>

            <p>
              Improving website responsiveness, performance,
              usability, structure, and overall user
              experience across different devices.
            </p>

          </div>

        </div>

      </section>

      {/* =========================
          CONTACT
      ========================= */}

      <section
        id="contact"
        className="section contact"
      >

        <h2>
          Let's Connect
        </h2>

        <p>
          I'm open to opportunities, collaborations and
          interesting projects.
        </p>

        <div className="contact-links">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=alizaamjad597@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Gmail"
          >
            <img
              src="/gmail.png"
              alt="Gmail"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/aleeza-amjad-544379264/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="/linkedin.png"
              alt="LinkedIn"
            />
          </a>

          <a
            href="https://github.com/aleeza-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <img
              src="/github.png"
              alt="GitHub"
            />
          </a>

          <a
            href="https://wa.me/qr/7PJ5RVWRTAMAA1"
            target="_blank"
            rel="noreferrer"
            aria-label="Whatsapp"
          >
            <img
              src="/whatsapp.png"
              alt="WhatsApp"
            />
          </a>

        </div>

      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer>
        <p>
          © 2026 Aleeza Amjad. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;