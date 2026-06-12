import { useState } from 'react';
import { HashRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  Code2,
  Server,
  Database,
  Cpu,
  Menu,
  X,
  Layers,
  Globe,
  CheckCircle2,
  FileCheck,
  Terminal,
  Activity,
  Shield
} from 'lucide-react';
import profileImg from './assets/profile.jpeg';
import './App.css';

const projectsData = [
  {
    id: 'asvanna',
    title: 'ASVANNA (අස්වැන්න) — Zero-Waste Marketplace',
    tag: 'Academic Capstone',
    shortDesc: 'A collaborative digital agricultural platform stabilizing the upcountry Sri Lankan crop economy by tracking regional cultivation data to prevent over-planting and utilizing a geo-fenced marketplace for direct surplus sales.',
    description: 'ASVANNA solves the "trend planting" price-trap cycle for farmers in Bandarawela and Nuwara Eliya. By comparing local planting reports with CROPIX national demand statistics, the platform flags crop risk states and suggests alternative varieties. The local P2P marketplace lets farmers sell perishable surpluses to buyers in a 5 km radius. The system supports proxy entries via agricultural Divisional Officers for offline smartphone-less farmers.',
    techStack: {
      frontend: ['React.js', 'Flutter (Dart)', 'Chart.js', 'Figma'],
      backend: ['Node.js', 'Express.js', 'REST APIs', 'Firebase Admin'],
      database: ['PostgreSQL', 'Firebase Realtime DB', 'Local SQLite Cache'],
      infrastructure: ['AWS Cloud', 'Firebase Cloud Messaging (FCM)', 'SMS Gateway API']
    },
    features: [
      'Real-time regional planting volume maps and density charts.',
      'Predictive Risk Engine tracking crop saturation parameters.',
      'Smart Crop recommendations generated dynamically based on price metrics and soil suitability.',
      'Geo-fenced marketplace connecting farmers and local buyers (5 km radius).',
      'Divisional Officer console with proxy data logging features.',
      'Local SQLite cache databases on Flutter clients for offline support.',
      'Multilingual interface (Sinhala, Tamil, and English).'
    ],
    github: '',
    deployed: ''
  },
  {
    id: 'careerpath',
    title: 'CareerPath Suggestion Platform',
    tag: 'Web Application',
    shortDesc: 'An AI-free MERN suggestion system directing students into technology careers through structured assessments, visual skill matrix scoring, and detailed roadmaps.',
    description: 'CareerPath provides transparent career routing by assessing user responses against technology skills rather than black-box algorithms. It charts courses, lists certifications, recommends free study guides, and tracks tech sector market indices.',
    techStack: {
      frontend: ['React.js (Vite)', 'Vanilla CSS3', 'HTML5', 'React Router'],
      backend: ['Node.js', 'Express.js', 'JSON Web Tokens (JWT)'],
      database: ['MongoDB (Mongoose)', 'Local Storage Cache'],
      infrastructure: ['Render Cloud', 'Google OAuth APIs', 'Firebase Phone OTP']
    },
    features: [
      'Interactive questionnaires mapping skill indicators.',
      'Tech salary index charts and hiring trend analyses.',
      'Curriculums and study paths linking verified learning materials.',
      'Google Login OAuth integrations and Firebase Phone SMS OTP verification.',
      'Production deployment presenting responsive layout structures.'
    ],
    github: '',
    deployed: 'https://careerpath.fwh.is'
  },
  {
    id: 'erp-assets',
    title: 'ERP Asset Management System',
    tag: 'Enterprise System',
    shortDesc: 'A decoupled enterprise platform managing physical hardware inventory, tracking employee equipment hand-overs, and scheduling repair histories.',
    description: 'Designed as a robust decoupled system, this platform contains a Go REST server that performs automated PostgreSQL migrations at startup, and a Vue 3 composition client. It automates inventory logging, allocation records, and asset value calculations.',
    techStack: {
      frontend: ['Vue 3 (Composition API)', 'Vite', 'Pinia Store', 'Axios'],
      backend: ['Go (Golang)', 'Gin Gonic', 'JWT Middleware'],
      database: ['PostgreSQL', 'GORM (Object Relational Mapper)'],
      infrastructure: ['Docker Engine', 'Docker Compose', 'Linux Environment']
    },
    features: [
      'Relational PostgreSQL schema managed inside Docker container environments.',
      'Asset Depreciation Engine calculating real-time value decay of capital assets over time.',
      'Checkout and check-in equipment assignment workflows with employee transaction history.',
      'Maintenance repair schedules and maintenance log ledgers.',
      'Token-based API protection with custom Gin route auth middleware.'
    ],
    github: 'https://github.com/NirMAN-15/ERP-Asset-Management-module',
    deployed: ''
  },
  {
    id: 'car-sale-mta',
    title: 'Car Sale MTA Form Generator',
    tag: 'Automation Tool',
    shortDesc: 'A full-stack automation app that maps details onto official Sri Lankan Department of Motor Traffic MTA6 and MTA8 vehicle transfer forms with pixel-perfect precision.',
    description: 'Replaces manual typing errors on official transfer paperwork. The web UI captures transferee, transferor, and witness data, sending a JSON payload to a Python engine. The engine stamps coordinates perfectly into the standard official form template.',
    techStack: {
      frontend: ['React.js (Vite)', 'Vanilla CSS (Glassmorphism)', 'HTML5'],
      backend: ['Python', 'Flask API', 'Flask-CORS'],
      database: ['JSON Coordinate Maps', 'Local Filesystem'],
      infrastructure: ['PyMuPDF (fitz)', 'ReportLab Plotting Toolkits']
    },
    features: [
      'Elegant dark glassmorphism styling built completely using Vanilla CSS properties.',
      'Coordinate mapping engine aligning letters character-by-character inside PDF boxes.',
      'Automated line wrapping algorithms preventing address text overflows.',
      'Direct in-browser PDF download pipelines.'
    ],
    github: '',
    deployed: ''
  },
  {
    id: 'dms-logistics',
    title: 'Distribution Management System (DMS)',
    tag: 'Full-Stack Startup',
    shortDesc: 'A logistics and sales synchronization platform tracking warehouse stocks, retail store registers, and rep orders between web administrators and offline mobile agents.',
    description: 'Built by a 5-member team. This platform links warehouse operations to representatives on the field. Field reps capture shop coordinates and place orders offline using SQLite, which batch-sync back to the primary Supabase Postgres database.',
    techStack: {
      frontend: ['React.js (Vite)', 'Axios Interceptors', 'Flutter (Dart)', 'SQLite'],
      backend: ['Node.js', 'Express.js', 'Role-Based Access Control (RBAC)'],
      database: ['Supabase (PostgreSQL)', 'Local SQL Storage'],
      infrastructure: ['Supabase Cloud APIs', 'Git Workflows', 'bcrypt Hashing']
    },
    features: [
      'Modular REST APIs for Product, Shop, Order, and User CRUD controls.',
      'Strict Role-Based Access Control (RBAC) preventing unauthorized operations.',
      'SQLite offline order queues syncing automatically upon network detection.',
      'GPS mapping integrations capturing retail store locations during onboarding.',
      'Supervisor dashboard compiled reporting metrics.'
    ],
    github: 'https://github.com/NirMAN-15/DMS-backend',
    deployed: ''
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar" role="navigation" aria-label="Main Navigation">
          <div className="container">
            <Link to="/" className="logo-container" onClick={handleNavClick}>
              <span>Nirman Achintha</span>
              <span className="logo-dot" aria-hidden="true"></span>
            </Link>

            <ul className="nav-links">
              <li>
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={handleNavClick}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={handleNavClick}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={handleNavClick}>
                  About & Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={handleNavClick}>
                  Contact
                </NavLink>
              </li>
            </ul>

            <button 
              className="menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="mobile-drawer" style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0,
            width: '100%',
            backgroundColor: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 32px',
            gap: '16px'
          }}>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={handleNavClick}>Home</NavLink>
            <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={handleNavClick}>Projects</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={handleNavClick}>About & Skills</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={handleNavClick}>Contact</NavLink>
          </div>
        )}

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container footer-wrapper">
            <p className="footer-copy">
              © {new Date().getFullYear()} W. Nirman Achintha. All rights reserved.
            </p>
            
            <div className="footer-socials">
              <a href="https://github.com/NirMAN-15" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="GitHub">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/w-nirman-achintha/" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="mailto:nirmanachintha1313@gmail.com" className="footer-icon" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      <section id="home" className="section container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <span className="hero-greeting">DevOps & Cloud Engineer</span>
            <h1 className="hero-title">
              Automating Pipelines <br />
              & Scaling Infrastructure
            </h1>
            <p className="hero-desc">
              Hi, I am <strong>W. Nirman Achintha</strong>, an Information Technology student at the University of Moratuwa. I specialize in designing continuous integration pipelines, containerizing application clusters, and optimizing relational databases across cloud structures.
            </p>
            
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                View Projects <ChevronRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Let's Talk
              </Link>
            </div>
          </div>

          <div className="hero-illustration">
            <div className="hero-photo-wrapper">
              <img src={profileImg} alt="W. Nirman Achintha" className="hero-photo" />
              <div className="hero-photo-overlay" aria-hidden="true"></div>
              <div className="hero-photo-glow" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section container">
        <div className="section-header">
          <span className="section-num">01 / SELECTED PROJECTS</span>
          <h2 className="section-title">Case Studies</h2>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <Link 
              key={project.id} 
              to="/projects"
              className="project-card"
              onClick={() => window.scrollTo(0, 0)}
              aria-label={`View details of ${project.title}`}
            >
              <div className="project-card-info">
                <span className="project-tag">{project.tag}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.shortDesc}</p>
                
                <div className="project-tech-tags">
                  {[...project.techStack.frontend.slice(0, 1), ...project.techStack.backend.slice(0, 1), ...project.techStack.database.slice(0, 1), ...project.techStack.infrastructure.slice(0, 2)].map((tech) => (
                    <span key={tech} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-card-footer">
                <span>Explore Specifications</span>
                <ChevronRight size={16} aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectsPage() {
  return (
    <section id="all-projects" className="section container">
      <div className="section-header">
        <span className="section-num">01 / ALL PROJECTS</span>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="projects-detail-list">
        {projectsData.map((project, index) => (
          <article key={project.id} className="project-detail-card">
            <div className="project-detail-header">
              <div className="project-detail-number">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <span className="project-tag">{project.tag}</span>
                <h3 className="project-detail-title">{project.title}</h3>
              </div>
            </div>

            <div className="project-detail-body">
              <div className="project-detail-overview">
                <h4 className="project-detail-section-title">
                  <Cpu size={15} aria-hidden="true" /> Overview
                </h4>
                <p>{project.description}</p>
              </div>

              <div className="project-detail-tech">
                <h4 className="project-detail-section-title">
                  <Layers size={15} aria-hidden="true" /> Tech Stack
                </h4>
                <div className="project-detail-tech-grid">
                  {Object.keys(project.techStack).map((key) => (
                    <div key={key} className="project-detail-tech-row">
                      <span className="project-detail-tech-label">{key}</span>
                      <div className="project-detail-tech-items">
                        {project.techStack[key].map((tech) => (
                          <span key={tech} className="project-detail-tech-badge">{tech}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-detail-features">
                <h4 className="project-detail-section-title">
                  <FileCheck size={15} aria-hidden="true" /> Core Features
                </h4>
                <ul className="project-detail-feature-list">
                  {project.features.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={14} className="project-detail-check" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {(project.github || project.deployed) && (
              <div className="project-detail-actions">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    <Github size={16} aria-hidden="true" /> Source Code
                  </a>
                )}
                {project.deployed && (
                  <a 
                    href={project.deployed} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary"
                  >
                    <Globe size={16} aria-hidden="true" /> Live Site
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}


function AboutPage() {
  return (
    <section id="about" className="section container">
      <div className="section-header">
        <span className="section-num">02 / PROFILE & TOOLKIT</span>
        <h2 className="section-title">About & Skills</h2>
      </div>
      
      <div className="bento-grid">
        <div className="bento-card bento-bio">
          <div className="bento-content">
            <h3 className="bento-title">Nirman Achintha</h3>
            <p className="bento-tagline">DevOps & Cloud Associate | NDT IT Student</p>
            <p className="bento-desc">
              Focusing on automating development pipelines, containerizing platform architectures, and configuring resilient cloud databases. My goal is to build scalable, fault-tolerant infrastructure.
            </p>
            <div className="education-mini-box">
              <div className="timeline-dot" aria-hidden="true"></div>
              <div>
                <span className="edu-title">NDT in Information Technology</span>
                <span className="edu-desc">University of Moratuwa • Semester III</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bento-card bento-languages">
          <div className="bento-icon-wrapper">
            <Terminal size={24} className="bento-icon" />
          </div>
          <div className="bento-content">
            <h4>Core Languages</h4>
            <div className="bento-tags">
              <span>Go (Golang)</span>
              <span>Python</span>
              <span>JavaScript (ES6+)</span>
              <span>Bash</span>
              <span>SQL</span>
            </div>
          </div>
        </div>

        <div className="bento-card bento-frameworks">
          <div className="bento-icon-wrapper">
            <Database size={24} className="bento-icon" />
          </div>
          <div className="bento-content">
            <h4>Frameworks & Databases</h4>
            <div className="bento-tags">
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>React.js (Vite)</span>
              <span>Vue 3</span>
              <span>Express.js</span>
              <span>Gin Gonic</span>
            </div>
          </div>
        </div>

        <div className="bento-card bento-cloud">
          <div className="bento-icon-wrapper">
            <Server size={24} className="bento-icon" />
          </div>
          <div className="bento-content">
            <h4>Cloud & Infrastructure</h4>
            <div className="bento-tags">
              <span>AWS (EC2, RDS, S3)</span>
              <span>Supabase</span>
              <span>Firebase</span>
              <span>Render</span>
            </div>
          </div>
        </div>

        <div className="bento-card bento-cicd">
          <div className="bento-icon-wrapper">
            <Layers size={24} className="bento-icon" />
          </div>
          <div className="bento-content">
            <h4>Containers & CI/CD</h4>
            <div className="bento-tags">
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>GitHub Actions</span>
              <span>Nginx Server</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setFormStatus('');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section container">
      <div className="section-header">
        <span className="section-num">03 / INQUIRIES</span>
        <h2 className="section-title">Contact</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p className="contact-desc">
            If you have an opening for a DevOps or cloud engineering internship, want to discuss automation pipelines, or have questions about my containerized projects, feel free to send a message.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon-box" aria-hidden="true">
                <Mail size={18} />
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p><a href="mailto:nirmanachintha1313@gmail.com">nirmanachintha1313@gmail.com</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box" aria-hidden="true">
                <Phone size={18} />
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p><a href="tel:0788597202">0788597202</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box" aria-hidden="true">
                <Linkedin size={18} />
              </div>
              <div className="contact-text">
                <h4>LinkedIn</h4>
                <p><a href="https://www.linkedin.com/in/w-nirman-achintha/" target="_blank" rel="noopener noreferrer">w-nirman-achintha</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box" aria-hidden="true">
                <PinMapIcon size={18} />
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Colombo / Moratuwa, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-box">
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-field">
              <label htmlFor="input-name">Full Name</label>
              <input
                type="text"
                id="input-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your name"
                disabled={formStatus === 'sending'}
              />
              {formErrors.name && <span className="form-error">{formErrors.name}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="input-email">Email Address</label>
              <input
                type="email"
                id="input-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="name@example.com"
                disabled={formStatus === 'sending'}
              />
              {formErrors.email && <span className="form-error">{formErrors.email}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="input-subject">Subject</label>
              <input
                type="text"
                id="input-subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Internship Opportunity"
                disabled={formStatus === 'sending'}
              />
              {formErrors.subject && <span className="form-error">{formErrors.subject}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="input-message">Message</label>
              <textarea
                id="input-message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Type your message here..."
                disabled={formStatus === 'sending'}
              ></textarea>
              {formErrors.message && <span className="form-error">{formErrors.message}</span>}
            </div>

            {formStatus === 'success' && (
              <div className="form-success-banner" role="alert">
                <CheckCircle2 size={16} aria-hidden="true" style={{ color: 'var(--success)' }} />
                <span>Your message has been sent successfully. I will get back to you shortly.</span>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function PinMapIcon({ size = 18 }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default App;
