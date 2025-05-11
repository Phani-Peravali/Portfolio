import { useEffect } from 'react';
import './App.css';
import ProfilePic from './Assets/Photo.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-bar a");

    const highlightNav = () => {
      let index = sections.length;

      while (--index && window.scrollY + 200 < sections[index].offsetTop) {}
      
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    };

    window.addEventListener("scroll", highlightNav);
    highlightNav();  // To highlight on page load

    return () => window.removeEventListener("scroll", highlightNav);
  }, []);

  return (
    <div className="app">
      <div className="dashboard">
        <div className="dashboard-profile">
          <h1>Phani Kumar Peravali</h1>
          <img src = {ProfilePic} alt="Profile" />
          <p>Fresher</p>
        </div>
        <div className="contact-info">
          <ul>
            <li><a href="mailto:phanikumar.peravali07@gmail.com" className="email-icon" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a></li>
            <li><a href="+91-9573478356" className="phone-icon" target="_blank" rel="noopener noreferrer"><i className="fas fa-phone"></i></a></li>
            <li><a href="https://www.linkedin.com/in/phani-kumar-peravali" className="linkedin-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/Phani-Peravali" className="github-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          </ul>
        </div>
        <div className='nav-bar'>
          <ul>
            <li>
              <a href="#about" className="nav-link about-link"><i className="fas fa-user"></i> About Me</a>
            </li>
            <li>
              <a href="#skills" className="nav-link skills-link"><i className="fas fa-cogs"></i> Skills</a>
            </li>
            <li>
              <a href="#projects" className="nav-link projects-link"><i className="fas fa-code"></i> Projects</a>
            </li>
            <li>
              <a href="#contact" className="nav-link contact-link"><i className="fas fa-envelope"></i> Contact</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="main-content">
        <h1>Phani Kumar Peravali</h1>
        <h3>Software Developer</h3>
        <p>I'am a recent B.Tech graduate in IT, specialzed in frontend and backend development for complex web appliacations. Want to know about me more? Refer the below sections.</p>
        <a 
          href="/Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-button"
        >
          📄 View Resume
        </a>
        <section id="about" className="section">
          <h2>About Me</h2>
          <h3>What I do</h3>
          <p>I'am a enthusiast Software development fresher looking for opportunities to work as a professional web development engineer with a reputed and ambitious team. Below are my skills. Check them out once.</p>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-card">
          <div className="skill">
            <i className="fab fa-html5"></i>
            <span>HTML</span>
            <p>Experienced in semantic, accessible HTML5 for web structure and SEO.</p>
          </div>
          <div className="skill">
            <i className="fab fa-css3-alt"></i>
            <span>CSS</span>
            <p>Skilled in responsive design, Flexbox, and Grid to style modern UIs.</p>
          </div>
          <div className="skill">
            <i className="fab fa-js-square"></i>
            <span>JavaScript</span>
            <p>Proficient in ES6+, DOM manipulation, and asynchronous programming.</p>
          </div>
          <div className="skill">
            <i className="fas fa-database"></i>
            <span>SQLite</span>
            <p>Experience in SQLite databases and manipulation.</p>
          </div>
          <div className="skill">
            <i className="fas fa-database"></i>
            <span>PostgreSQL</span>
            <p>Little Experience in PostgreSQL databases and manipulation.</p>
          </div>
          <div className="skill">
            <i className="fab fa-python"></i>
            <span>Python</span>
            <p>Strong in scripting, data handling, and Flask for backend development.</p>
          </div>
        </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects-container">

            <div className="project-card">
              <h3>Personal Portfolio</h3>
              <p>A website to allow viewers to get the complete portfolio.</p>
              <a href="https://github.com/Phani-Peravali/Portfolio" target="_blank" rel="noopener noreferrer" className="github-link">
                <i className="fab fa-github"></i> View on GitHub
              </a>
            </div>

            <div className="project-card">
              <h3>Voice based online examination system</h3>
              <p>A web app to help visually impaired students take online exams using voice commands. It used Text-to-Speech (TTS) and Speech-to-Text (STT) with Flask for the backend and HTML/CSS/JavaScript for the frontend. The app allowed easy voice navigation and voice input for answering questions.</p>
              <a href="https://github.com/Phani-Peravali/Voice-Enabled-Examination-Project " target="_blank" rel="noopener noreferrer" className="github-link">
                <i className="fab fa-github"></i> View on GitHub
              </a>
            </div>

          </div>
      </section>


        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="contact-container">
            <p>
              <i className="fas fa-envelope"></i>
              <span><strong>Email:</strong> <a href="mailto:phanikumar.peravali07@gmail.com">phanikumar.peravali07@gmail.com</a></span>
            </p>
            <p>
              <i className="fas fa-phone"></i>
              <span><strong>Phone:</strong> +91-9573478356</span>
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              <span><strong>Location:</strong> Hyderabad, India</span>
            </p>
            <p>
              <i className="fab fa-github"></i>
              <span><strong>GitHub:</strong> <a href="https://github.com/Phani-Peravali"  rel="noopener noreferrer">Phani-Peravali</a></span>
            </p>
            <p>
              <i className="fab fa-linkedin"></i>
              <span><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/phani-kumar-peravali" target="_blank" rel="noopener noreferrer">linkedin.com/in/phani-kumar-peravali</a></span>
            </p>
          </div>
        </section>
      </div>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="scroll-top">↑</button>
    </div>
  );
}
export default App;