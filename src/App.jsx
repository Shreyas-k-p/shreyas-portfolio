import React, { useState, useEffect } from 'react';
import { 
  Cpu, Sparkles, Trophy, Award, GraduationCap, 
  ShieldCheck, BadgeCheck, Presentation, Phone, 
  MapPin, Mail, Send, Menu, X, ArrowUp, ArrowRight, 
  Download, ExternalLink, Wifi, Lightbulb, 
  FolderGit2, Users, Scroll, Eye, Wrench 
} from 'lucide-react';

// Custom SVG components for Brand Icons
const Github = ({ size = 20, ...props }) => (
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
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20, ...props }) => (
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
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


// Import Assets
import avatarImg from './assets/avatar.png';
import scan4serveImg from './assets/scan4serve.png';
import skyneticImg from './assets/skynetic.png';
import autosmpsImg from './assets/autosmps.png';
import retroImg from './assets/retro.png';

// Certificate image imports
import certTechmaghiEv from './assets/cert_techmaghi_ev.jpg';
import certQuiriozity from './assets/cert_quiriozity_2024.jpg';
import certAuctionova from './assets/cert_auctionova.jpg';
import certIedcHackathon from './assets/cert_iedc_hackathon.jpg';
import certIedcStartupSummit from './assets/cert_iedc_startup_summit.jpg';
import certIbmGenAiApps from './assets/cert_ibm_genai_python_apps.jpg';
import certKsumIprLead from './assets/cert_ksum_ipr_lead.jpg';
import certIbmPythonDataScience from './assets/cert_ibm_python_data_science.jpg';
import certIbmHtmlCssJs from './assets/cert_ibm_html_css_js.jpg';
import certIbmAiDeveloper from './assets/cert_ibm_ai_developer.jpg';
import certIbmIntroAi from './assets/cert_ibm_intro_ai.jpg';
import certIbmGenAiElevateCareer from './assets/cert_ibm_genai_elevate_career.jpg';
import certIbmSoftwareEngIntro from './assets/cert_ibm_software_eng_intro.jpg';
import certIbmDevelopingAiApps from './assets/cert_ibm_developing_ai_apps.jpg';
import certIbmGenAiIntroApps from './assets/cert_ibm_genai_intro_apps.jpg';
import certIbmSoftwareDevGuide from './assets/cert_ibm_software_dev_guide.jpg';
import certIbmGenAiPromptBasics from './assets/cert_ibm_genai_prompt_basics.jpg';
import certForageTataEsg from './assets/cert_forage_tata_esg.jpg';
import certForageFordIntermediate from './assets/cert_forage_ford_intermediate.jpg';
import certForageTataCybersecurity from './assets/cert_forage_tata_cybersecurity.jpg';
import certTinkerhubMakeathon from './assets/cert_tinkerhub_makeathon.jpg';
import certForageFordIntro from './assets/cert_forage_ford_intro.jpg';
import certForageEaPm from './assets/cert_forage_ea_pm.jpg';
import certInnoelectra2ndPrize from './assets/cert_innoelectra_2nd_prize.jpg';
import certForageGeAerospace from './assets/cert_forage_ge_aerospace.jpg';
import certAjceIprFdp from './assets/cert_ajce_ipr_fdp.jpg';
import certAicteIdeBootcamp from './assets/cert_aicte_ide_bootcamp.jpg';
import certPalsInnowah from './assets/cert_pals_innowah.jpg';
import certAstraBootcampCoordinator from './assets/cert_astra_bootcamp_coordinator.jpg';
import certIedcContentCreation from './assets/cert_iedc_content_creation.jpg';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCvModal, setShowCvModal] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);

  // Lightbox Modal State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState('');
  const [lightboxTitle, setLightboxTitle] = useState('');

  const handleOpenLightbox = (img, title) => {
    setLightboxImg(img);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Typewriter effect state
  const words = ["ECE Student", "Embedded Systems Enthusiast", "IIC Student Lead", "IPR Lead & Coordinator", "TinkerHub Co-Lead"];
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typewriter effect logic
  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullWord = words[i];
      
      if (isDeleting) {
        setDisplayText(fullWord.substring(0, displayText.length - 1));
        setTypingSpeed(60);
      } else {
        setDisplayText(fullWord.substring(0, displayText.length + 1));
        setTypingSpeed(120);
      }
      
      if (!isDeleting && displayText === fullWord) {
        timer = setTimeout(() => setIsDeleting(true), 1500); // pause at the end
        return;
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300); // pause before next word
        return;
      }
      
      timer = setTimeout(handleTyping, typingSpeed);
    };
    
    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  // Scroll Event Listeners (Active section & Scroll progress)
  useEffect(() => {
    const handleScroll = () => {
      // 1. Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      const bar = document.getElementById('scrollProgress');
      if (bar) bar.style.width = `${progress}%`;

      // 2. Active section check
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + 200; // Offset for header
      
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll-reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal, .timeline-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => observer.observe(el));
    
    // Skills section specific observer for progress bars
    const skillsSection = document.getElementById('skills');
    let skillsObserver;
    if (skillsSection) {
      skillsObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          skillsObserver.disconnect();
        }
      }, { threshold: 0.1 });
      skillsObserver.observe(skillsSection);
    }

    return () => {
      observer.disconnect();
      if (skillsObserver) skillsObserver.disconnect();
    };
  }, []);

  // Form Submission Logic
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    // Mock API Submit
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! Shreyas will get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  // Scroll to section manually helper (useful for mobile menu close)
  const handleNavLinkClick = (sectionId) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      {/* Background elements */}
      <div className="circuit-grid"></div>
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>

      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" id="scrollProgress"></div>
      </div>

      {/* Header & Navigation */}
      <header className="main-header">
        <div className="header-container">
          <button onClick={() => handleNavLinkClick('hero')} className="logo" aria-label="Logo Home">
            <span className="logo-icon">&lt;</span>
            <span className="logo-text">Shreyas.Tech</span>
            <span className="logo-icon">&gt;</span>
          </button>
          
          <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`} id="navMenu">
            <ul>
              <li>
                <button 
                  onClick={() => handleNavLinkClick('hero')} 
                  className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
                >Home</button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavLinkClick('about')} 
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                >About</button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavLinkClick('skills')} 
                  className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                >Skills</button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavLinkClick('projects')} 
                  className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                >Projects</button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavLinkClick('experience')} 
                  className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                >Experience</button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavLinkClick('certifications')} 
                  className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}
                >Certifications</button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavLinkClick('contact')} 
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                >Contact</button>
              </li>
            </ul>
          </nav>
          
          <button 
            className="menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="section-container hero-container">
          <div className="hero-content reveal-left">
            <div className="status-badge">
              <span className="pulse-dot"></span>
              <span>Open for Embedded & Core ECE Roles</span>
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight-cyan">Shreyas K P</span>
            </h1>
            <h2 className="hero-subtitle">
              <span className="typewriter-text">{displayText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              An ambitious Electronics and Communication Engineering student passionate about embedded systems. Combining a strong foundation in hardware engineering with expertise in visual storytelling, prompt engineering, and leadership.
            </p>
            <div className="hero-cta">
              <button onClick={() => handleNavLinkClick('projects')} className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </button>
              <button onClick={() => handleNavLinkClick('contact')} className="btn btn-secondary">
                <span>Contact Me</span>
                <Mail size={16} />
              </button>
            </div>
          </div>
          
          <div className="hero-image-container reveal-right">
            <div className="avatar-wrapper">
              <div className="glowing-border"></div>
              <img src={avatarImg} alt="Shreyas K P Profile Photo" className="avatar-img" />
              <div className="floating-badge badge-1">
                <Cpu size={16} />
                <span>Embedded</span>
              </div>
              <div className="floating-badge badge-2">
                <Lightbulb size={16} />
                <span>IPR Lead</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section scroll-reveal">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title"><span className="number">01.</span> About Me</h2>
            <div className="header-line"></div>
          </div>
          
          <div className="about-grid">
            <div className="about-bio">
              <p>
                I am a B.Tech Electronics and Communication Engineering student at <strong>Sree Narayana Mangalam Institute of Technology (SNMIMT)</strong> under KTU University (2023-2027). 
              </p>
              <p>
                My objective is to create impactful hardware and software solutions through interdisciplinary collaboration and cutting-edge technologies. I strive to combine rigorous core engineering principles with modern skills like prompt engineering and digital design to build smart systems.
              </p>
              <p>
                Beyond engineering, I am heavily involved in leadership and technology ecosystems. As the **IPR Lead & Coordinator** for IEDC SNMIMT and the campus **TinkerHub Co-Lead**, I regularly lead tech communities, coordinate workshops, and conduct startup-focused sessions on Intellectual Property Rights.
              </p>
              
              <div className="download-container" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="/shreyas_Resume.pdf" download="Shreyas_Resume.pdf" className="btn btn-primary">
                  <Download size={16} />
                  <span>Download CV</span>
                </a>
                <button onClick={() => setShowCvModal(true)} className="btn btn-secondary">
                  <span>View Resume Summary</span>
                </button>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-icon-wrapper cyan">
                  <GraduationCap size={22} />
                </div>
                <div className="stat-info">
                  <h3>B.Tech (2023-27)</h3>
                  <p>SNMIMT, KTU University</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon-wrapper purple">
                  <Trophy size={22} />
                </div>
                <div className="stat-info">
                  <h3>InnoElectra 2nd</h3>
                  <p>Project Competition Winner</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon-wrapper pink">
                  <Users size={22} />
                </div>
                <div className="stat-info">
                  <h3>4+ Leadership</h3>
                  <p>IIC Lead, IEDC IPR/CTO, TinkerHub & KKEM</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon-wrapper blue">
                  <Scroll size={22} />
                </div>
                <div className="stat-info">
                  <h3>20+ Certifications</h3>
                  <p>IBM, AICTE, KSUM, NASSCOM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section scroll-reveal">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title"><span className="number">02.</span> Skills & Tools</h2>
            <div className="header-line"></div>
          </div>

          <div className="skills-grid">
            {/* Professional Skills */}
            <div className="skills-column">
              <h3 className="skills-column-title">
                <Sparkles size={20} className="title-icon cyan" />
                <span>Professional Skills</span>
              </h3>
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Prompt Engineering</span>
                    <span className="skill-percentage">95%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill cyan" 
                      style={{ width: skillsVisible ? '95%' : '0%' }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Visual Storytelling</span>
                    <span className="skill-percentage">88%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill cyan" 
                      style={{ width: skillsVisible ? '88%' : '0%' }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Leadership & Coordination</span>
                    <span className="skill-percentage">92%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill cyan" 
                      style={{ width: skillsVisible ? '92%' : '0%' }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Research & Critical Thinking</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill cyan" 
                      style={{ width: skillsVisible ? '90%' : '0%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="skills-column">
              <h3 className="skills-column-title">
                <Cpu size={20} className="title-icon purple" />
                <span>Technical & ECE</span>
              </h3>
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Embedded Systems (Arduino, ESP32)</span>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill purple" 
                      style={{ width: skillsVisible ? '85%' : '0%' }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Biometric Operations & Verification</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill purple" 
                      style={{ width: skillsVisible ? '90%' : '0%' }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">C, Python & Scripting</span>
                    <span className="skill-percentage">80%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill purple" 
                      style={{ width: skillsVisible ? '80%' : '0%' }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Cybersecurity & Product Mgmt</span>
                    <span className="skill-percentage">75%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill purple" 
                      style={{ width: skillsVisible ? '75%' : '0%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="skills-column">
              <h3 className="skills-column-title">
                <Wrench size={20} className="title-icon pink" />
                <span>Tools & Tech</span>
              </h3>
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">VS Code & Arduino IDE</span>
                    <span className="skill-percentage">92%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill pink" 
                      style={{ width: skillsVisible ? '92%' : '0%' }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Git & GitHub</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill pink" 
                      style={{ width: skillsVisible ? '90%' : '0%' }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Figma & Canva</span>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill pink" 
                      style={{ width: skillsVisible ? '85%' : '0%' }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">MATLAB & Proteus</span>
                    <span className="skill-percentage">80%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill pink" 
                      style={{ width: skillsVisible ? '80%' : '0%' }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Eagle & KiCad (PCB Design)</span>
                    <span className="skill-percentage">75%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill pink" 
                      style={{ width: skillsVisible ? '75%' : '0%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section scroll-reveal">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title"><span className="number">03.</span> Featured Projects</h2>
            <div className="header-line"></div>
          </div>

          <div className="projects-grid">
            {/* Project 1: Scan4Serve SaaS */}
            <div className="project-card">
              <div className="project-thumbnail-wrapper">
                <img src={scan4serveImg} alt="Scan4Serve SaaS Platform project" className="project-thumbnail" />
                <div className="project-overlay">
                  <a href="https://github.com/Shreyas-k-p/chathan" target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                  <a href="https://chathan-ten.vercel.app" target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">Real-time Multi-tenant SaaS</span>
                <h3 className="project-card-title">Scan4Serve SaaS Platform</h3>
                <p className="project-card-desc">
                  A multi-tenant SaaS for smart restaurant management featuring QR menu ordering, multi-tenant restaurant data isolation, a strict order lifecycle state machine, real-time live Socket.io updates, and role-based dashboards.
                </p>
                <div className="project-tags">
                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>Zustand</span>
                  <span>Socket.io</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>

            {/* Project 2: Skynetic */}
            <div className="project-card">
              <div className="project-thumbnail-wrapper">
                <img src={skyneticImg} alt="Skynetic Robotic Touch project" className="project-thumbnail" />
                <div className="project-overlay">
                  <a href="https://github.com/Shreyas-k-p/Skynetic" target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                  <a href="https://github.com/Shreyas-k-p/skynetic-documentation" target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label="Documentation">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">Robotics & ESP32 Edge Computing</span>
                <h3 className="project-card-title">Skynetic: Robotic Touch</h3>
                <p className="project-card-desc">
                  Integrates flex and pressure sensors to give robots an instinctual sense of touch. Evaluates physical impact data locally on an ESP32 microcontroller, distinguishing between gentle user touch and heavy collisions.
                </p>
                <div className="project-tags">
                  <span>ESP32</span>
                  <span>C++</span>
                  <span>Robotics</span>
                  <span>Embedded C</span>
                  <span>Sensors</span>
                </div>
              </div>
            </div>

            {/* Project 3: Auto-SMPS Backup Switch */}
            <div className="project-card">
              <div className="project-thumbnail-wrapper">
                <img src={autosmpsImg} alt="Auto-SMPS Failover Switch project" className="project-thumbnail" />
                <div className="project-overlay">
                  <a href="https://github.com/Shreyas-k-p/Auto-SMPS" target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">Embedded Power Systems</span>
                <h3 className="project-card-title">Auto-SMPS Backup Switch</h3>
                <p className="project-card-desc">
                  An intelligent hardware failover system. Uses an Arduino micro-controller, optocouplers, and voltage sensing arrays to monitor dual SMPS power supplies, automatically switching output load to a backup unit when primary supply fails.
                </p>
                <div className="project-tags">
                  <span>Arduino</span>
                  <span>C++</span>
                  <span>Relays</span>
                  <span>Power Electronics</span>
                  <span>Hardware</span>
                </div>
              </div>
            </div>

            {/* Project 4: Retro Reaction Arena */}
            <div className="project-card">
              <div className="project-thumbnail-wrapper">
                <img src={retroImg} alt="Retro Reaction Arena project" className="project-thumbnail" />
                <div className="project-overlay">
                  <a href="https://github.com/Shreyas-k-p/RETRO--A-REACTIVE-AND-REACTANCES" target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">Local Multiplayer Arcade Game</span>
                <h3 className="project-card-title">Retro: 4-Player Arena</h3>
                <p className="project-card-desc">
                  A fast-paced 4-player offline reaction game. Built with instant keyboard event polling, local score tracking, dynamic SVG menus, competitive countdowns, and rich emoji animations.
                </p>
                <div className="project-tags">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>Game Dev</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Internships & Leadership Section */}
      <section id="experience" className="experience-section scroll-reveal">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title"><span className="number">04.</span> Experience & Leadership</h2>
            <div className="header-line"></div>
          </div>

          <div className="timeline">
            {/* Experience 1 */}
            <div className="timeline-item left">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2025 - Present</span>
                <h3 className="timeline-role">IPR Lead & Coordinator</h3>
                <h4 className="timeline-company">IEDC SNMIMT</h4>
                <ul className="timeline-details">
                  <li>Conducted online Intellectual Property Rights (IPR) workshops for startups and college innovators.</li>
                  <li>Initiated, conducted, and coordinated <strong>"Axiom"</strong>, a comprehensive seminar series covering startup ideation, legal steps, IPR, BMC (Business Model Canvas), marketing, capital, and prototyping.</li>
                  <li>Led a student committee in aligning activities with the Institution's Innovation Council (IIC 7.0) innovation calendar.</li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="timeline-item right">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2025 - 2026</span>
                <h3 className="timeline-role">KKEM Student Ambassador (AI/ML)</h3>
                <h4 className="timeline-company">Kerala Knowledge Economy Mission</h4>
                <ul className="timeline-details">
                  <li>Served as the college student ambassador to promote AI/ML learning initiatives, workshops, and career pathways under KKEM.</li>
                  <li>Bridged the gap between government digital employment initiatives and campus engineering students.</li>
                </ul>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="timeline-item left">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2024 - Present</span>
                <h3 className="timeline-role">IIC Student Lead</h3>
                <h4 className="timeline-company">Institution's Innovation Council (IIC) SNMIMT</h4>
                <ul className="timeline-details">
                  <li>Fostered a campus culture of design thinking, entrepreneurship, and innovation through curated seminars and hackathons.</li>
                  <li>Guided student innovators in transitioning project concepts into viable business models and prototype validation.</li>
                </ul>
              </div>
            </div>

            {/* Experience 4 */}
            <div className="timeline-item right">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2024 - 2025</span>
                <h3 className="timeline-role">Campus Co-Lead</h3>
                <h4 className="timeline-company">TinkerHub SNMIMT</h4>
                <ul className="timeline-details">
                  <li>Fostered an active tech-learning culture, coordinating coding workshops and project-building sessions for peer groups.</li>
                  <li>Collaborated on state-wide TinkerHub community challenges and technology learning tracks.</li>
                </ul>
              </div>
            </div>

            {/* Experience 5 */}
            <div className="timeline-item left">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2024 - 2025</span>
                <h3 className="timeline-role">Assistant CTO</h3>
                <h4 className="timeline-company">IEDC SNMIMT</h4>
                <ul className="timeline-details">
                  <li>Served as Assistant Chief Technology Officer, managing the technical cell and overseeing student hardware/software prototype developments.</li>
                  <li>Supported technical infrastructure setups for ideation camps, start-up bootcamps, and hackathons.</li>
                </ul>
              </div>
            </div>

            {/* Experience 6 */}
            <div className="timeline-item right">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">March 2025</span>
                <h3 className="timeline-role">Student Coordinator</h3>
                <h4 className="timeline-company">ASTRA Bootcamp SNMIMT</h4>
                <ul className="timeline-details">
                  <li>Assisted in event planning, logistics, and participant engagement during the 3-day boot camp.</li>
                  <li>Worked closely with academic faculty and industry mentors to ensure smooth execution of workshops.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section id="certifications" className="certifications-section scroll-reveal">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title"><span className="number">05.</span> Certifications & Achievements</h2>
            <div className="header-line"></div>
          </div>

          <div className="certifications-grid">
            {/* Achievement: KSUM Recognition */}
            <div className="cert-card achievement">
              <div className="cert-icon-box gold">
                <Award className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">Kerala Startup Mission (KSUM)</span>
                <h3 className="cert-title">IPR & Research Lead Recognition</h3>
                <p className="cert-desc">Officially recognized by KSUM for outstanding leadership as the IPR & Research Lead of IEDC SNMIMT (2025–2026), driving innovation and student startups.</p>
                <div className="cert-actions">
                  <button 
                    onClick={() => handleOpenLightbox(certKsumIprLead, "IPR & Research Lead Recognition")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Achievement: IIT Bombay NEC */}
            <div className="cert-card achievement">
              <div className="cert-icon-box gold">
                <Trophy className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">E-Cell, IIT Bombay</span>
                <h3 className="cert-title">Rank 108 — National Entrepreneurship Challenge 2025</h3>
                <p className="cert-desc">Secured Rank 108 in the NEC 2025 Advanced Track, a 6-month-long competition organized by E-Cell, IIT Bombay to develop entrepreneurship cells across colleges nationwide.</p>
              </div>
            </div>

            {/* Achievement: Techmaghi EV Workshop */}
            <div className="cert-card achievement">
              <div className="cert-icon-box gold">
                <Award className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">Techmaghi & Tryst'24 IIT Delhi</span>
                <h3 className="cert-title">Foundation of Electric & Hybrid Vehicles</h3>
                <p className="cert-desc">Attended a one-day workshop on the Foundation of Electric and Hybrid Vehicles organized by Techmaghi in association with Tryst'24 IIT Delhi (November 2023).</p>
                <div className="cert-actions">
                  <button 
                    onClick={() => handleOpenLightbox(certTechmaghiEv, "Foundation of Electric & Hybrid Vehicles")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Achievement: QUIrioZity 2024 Science Quiz */}
            <div className="cert-card achievement">
              <div className="cert-icon-box gold">
                <Trophy className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">SNMIMT Engineering College</span>
                <h3 className="cert-title">QUIrioZity 2024 Science Quiz</h3>
                <p className="cert-desc">Participated in the QUIrioZity 2024 Science Quiz Programme, hosted by the Department of Instrumentation & Control Engineering under the Institution's Innovation Council (February 2024).</p>
                <div className="cert-actions">
                  <button 
                    onClick={() => handleOpenLightbox(certQuiriozity, "QUIrioZity 2024 Science Quiz")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Achievement: PROMETEO Auctionova */}
            <div className="cert-card achievement">
              <div className="cert-icon-box gold">
                <Award className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">Sree Rama Government Polytechnic College</span>
                <h3 className="cert-title">AUCTIONOVA (IPL Auction) — PROMETEO</h3>
                <p className="cert-desc">Participated in the AUCTIONOVA event during PROMETEO, the state-level Tech Fest organized by the Department of Computer Engineering (Feb/March 2024).</p>
                <div className="cert-actions">
                  <button 
                    onClick={() => handleOpenLightbox(certAuctionova, "AUCTIONOVA (IPL Auction) — PROMETEO")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: IBM AI Developer */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <ShieldCheck className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">IBM (via Coursera)</span>
                <h3 className="cert-title">IBM AI Developer Professional Certificate</h3>
                <p className="cert-desc">Completed 10-course professional specialization spanning Software Engineering, Python for Data Science, Flask, GenAI, and chatbot design (Feb 2026).</p>
                <div className="cert-actions">
                  <a 
                    href="https://coursera.org/verify/professional-cert/ME4EVOD7BZZF" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-btn btn-verify"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                  <button 
                    onClick={() => handleOpenLightbox(certIbmAiDeveloper, "IBM AI Developer Professional Certificate")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: IBM Intro to Software Engineering */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <BadgeCheck className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">IBM (via Coursera)</span>
                <h3 className="cert-title">Introduction to Software Engineering</h3>
                <p className="cert-desc">Acquired core understanding of software development lifecycles (SDLC), Agile and Scrum methodologies, tools (Git/GitHub), and basic software architecture principles (Jul 2025).</p>
                <div className="cert-actions">
                  <a 
                    href="https://coursera.org/verify/RO6EMC44S8AO" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-btn btn-verify"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                  <button 
                    onClick={() => handleOpenLightbox(certIbmSoftwareEngIntro, "Introduction to Software Engineering")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: IBM GenAI App Dev */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <BadgeCheck className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">IBM (via Coursera)</span>
                <h3 className="cert-title">Building Generative AI-Powered Applications</h3>
                <p className="cert-desc">Built custom LLM-driven applications using Python, API integrations, prompt engineering parameter setups, and modern AI development frameworks (Feb 2026).</p>
                <div className="cert-actions">
                  <a 
                    href="https://coursera.org/verify/7UNY06WSTGV" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-btn btn-verify"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                  <button 
                    onClick={() => handleOpenLightbox(certIbmGenAiApps, "Building Generative AI-Powered Applications")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: IBM GenAI Elevate */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <BadgeCheck className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">IBM (via Coursera)</span>
                <h3 className="cert-title">Generative AI: Elevate your Software Development Career</h3>
                <p className="cert-desc">Leveraged Generative AI tools to boost developer productivity, code optimization, debug operations, and modern programming workflows (Feb 2026).</p>
                <div className="cert-actions">
                  <a 
                    href="https://coursera.org/verify/8J4SU3RS7V41" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-btn btn-verify"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                  <button 
                    onClick={() => handleOpenLightbox(certIbmGenAiElevateCareer, "Generative AI: Elevate your Software Development Career")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: IBM Software Dev Career & Interview */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <ShieldCheck className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">IBM (via Coursera)</span>
                <h3 className="cert-title">Software Developer Career Guide & Interview Prep</h3>
                <p className="cert-desc">Covered professional interview strategies, technical problem solving, coding test expectations, and industry developer best practices (Feb 2026).</p>
                <div className="cert-actions">
                  <a 
                    href="https://coursera.org/verify/PKX8G88UMBZH" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-btn btn-verify"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                  <button 
                    onClick={() => handleOpenLightbox(certIbmSoftwareDevGuide, "Software Developer Career Guide & Interview Prep")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: IBM HTML/CSS/JS */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <BadgeCheck className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">IBM (via Coursera)</span>
                <h3 className="cert-title">Introduction to HTML, CSS, & JavaScript</h3>
                <p className="cert-desc">Mastered HTML layout structuring, modern CSS styling, responsive grid designs, and dynamic user interface programming with JavaScript (Jan 2026).</p>
                <div className="cert-actions">
                  <a 
                    href="https://coursera.org/verify/EZTGJ0K7STR1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-btn btn-verify"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                  <button 
                    onClick={() => handleOpenLightbox(certIbmHtmlCssJs, "Introduction to HTML, CSS, & JavaScript")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: IBM Prompt Engineering */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <BadgeCheck className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">IBM (via Coursera)</span>
                <h3 className="cert-title">Generative AI: Prompt Engineering Basics</h3>
                <p className="cert-desc">Acquired core skills in prompt design, instruction tuning, dynamic content generation, context optimization, and model output controls (Dec 2025).</p>
                <div className="cert-actions">
                  <a 
                    href="https://coursera.org/verify/EJL6JWGM1GR9" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-btn btn-verify"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                  <button 
                    onClick={() => handleOpenLightbox(certIbmGenAiPromptBasics, "Generative AI: Prompt Engineering Basics")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: IBM Intro to AI */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <BadgeCheck className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">IBM (via Coursera)</span>
                <h3 className="cert-title">Introduction to Artificial Intelligence (AI)</h3>
                <p className="cert-desc">Explored standard concepts in Artificial Intelligence, including Machine Learning algorithms, Deep Learning networks, neural architectures, and ethical AI applications (Jul 2025).</p>
                <div className="cert-actions">
                  <a 
                    href="https://coursera.org/verify/75Z3K80YYQ16" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-btn btn-verify"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                  <button 
                    onClick={() => handleOpenLightbox(certIbmIntroAi, "Introduction to Artificial Intelligence (AI)")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: IBM Developing AI Apps with Python & Flask */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <BadgeCheck className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">IBM (via Coursera)</span>
                <h3 className="cert-title">Developing AI Applications with Python and Flask</h3>
                <p className="cert-desc">Completed practical course on building web applications using Flask, integrating AI models, creating RESTful APIs, and handling client-server interactions (Feb 2026).</p>
                <div className="cert-actions">
                  <a 
                    href="https://coursera.org/verify/IARQ1KS3CH43" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-btn btn-verify"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                  <button 
                    onClick={() => handleOpenLightbox(certIbmDevelopingAiApps, "Developing AI Applications with Python and Flask")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: IBM GenAI Intro & Apps */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <BadgeCheck className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">IBM (via Coursera)</span>
                <h3 className="cert-title">Generative AI: Introduction and Applications</h3>
                <p className="cert-desc">Acquired foundational knowledge of generative models, GANs, transformer architectures, LLM architectures, and their real-world application capabilities (Dec 2025).</p>
                <div className="cert-actions">
                  <a 
                    href="https://coursera.org/verify/LRXL6WQR4PG5" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-btn btn-verify"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                  <button 
                    onClick={() => handleOpenLightbox(certIbmGenAiIntroApps, "Generative AI: Introduction and Applications")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: IBM Python for Data Science & AI */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <BadgeCheck className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">IBM (via Coursera)</span>
                <h3 className="cert-title">Python for Data Science, AI & Development</h3>
                <p className="cert-desc">Mastered Python programming fundamentals, data structures, logic, functions, file handling, and libraries like Pandas and NumPy for data engineering and AI models (Feb 2026).</p>
                <div className="cert-actions">
                  <a 
                    href="https://coursera.org/verify/OTMBO3E3JXV8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-btn btn-verify"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                  <button 
                    onClick={() => handleOpenLightbox(certIbmPythonDataScience, "Python for Data Science, AI & Development")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Achievement: InnoElectra */}
            <div className="cert-card achievement">
              <div className="cert-icon-box gold">
                <Trophy className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">MES College Marampally</span>
                <h3 className="cert-title">2nd Prize — "InnoElectra"</h3>
                <p className="cert-desc">Won 2nd place in the Intercollegiate Project Competition on February 25, 2025, for designing and presenting an innovative electronics project.</p>
                <div className="cert-actions">
                  <button 
                    onClick={() => handleOpenLightbox(certInnoelectra2ndPrize, "2nd Prize — 'InnoElectra' Certificate")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Achievement: MoE Innovation Ambassador */}
            <div className="cert-card achievement">
              <div className="cert-icon-box gold">
                <Award className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">MoE's Innovation Cell & AICTE</span>
                <h3 className="cert-title">Innovation Ambassador (IA) Certification</h3>
                <p className="cert-desc">Successfully completed the Innovation Ambassador (IA) training "Foundation Level" (Total 16 sessions of 30 contact hours) conducted in online mode by Ministry of Education's Innovation Cell & AICTE during the calendar year 2024-25.</p>
              </div>
            </div>

            {/* Achievement: ASTRA Coordinator */}
            <div className="cert-card achievement">
              <div className="cert-icon-box gold">
                <Award className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">IEDC SNMIMT & TinkerHub</span>
                <h3 className="cert-title">ASTRA Bootcamp Student Coordinator</h3>
                <p className="cert-desc">Awarded a Certificate of Appreciation for serving as a Student Coordinator and exhibiting outstanding leadership and coordination for the ASTRA Bootcamp (March 2025).</p>
                <div className="cert-actions">
                  <button 
                    onClick={() => handleOpenLightbox(certAstraBootcampCoordinator, "ASTRA Bootcamp Student Coordinator Certificate")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Achievement: PALS */}
            <div className="cert-card achievement">
              <div className="cert-icon-box gold">
                <Award className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">PALS innoWAH!</span>
                <h3 className="cert-title">Finalist Participant</h3>
                <p className="cert-desc">Selected as a finalist and presented at the PALS innoWAH! Pre-Finals at MITS Kochi on February 18, 2025.</p>
                <div className="cert-actions">
                  <button 
                    onClick={() => handleOpenLightbox(certPalsInnowah, "PALS innoWAH! Pre-Finals Certificate")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: AICTE IDE */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <GraduationCap className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">AICTE IDE Bootcamp</span>
                <h3 className="cert-title">Innovation, Design & Entrepreneurship</h3>
                <p className="cert-desc">Completed AICTE IDE Bootcamp Edition 2 - Phase I at Amal Jyothi College of Engineering, Kottayam (23-27 Sept 2024).</p>
                <div className="cert-actions">
                  <button 
                    onClick={() => handleOpenLightbox(certAicteIdeBootcamp, "AICTE IDE Bootcamp Certificate")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: AJCE IPR FDP */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <GraduationCap className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">Amal Jyothi College of Engineering</span>
                <h3 className="cert-title">FDP on Intellectual Property Rights</h3>
                <p className="cert-desc">Participated in the Faculty Development Programme on Intellectual Property Rights held on 17 & 21 February 2025, organized by Amal Jyothi College of Engineering in association with Kottayam IEDC Cluster.</p>
                <div className="cert-actions">
                  <button 
                    onClick={() => handleOpenLightbox(certAjceIprFdp, "Faculty Development Programme on Intellectual Property Rights Certificate")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: IEDC District Hackathon */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <GraduationCap className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">Kerala Startup Mission (KSUM)</span>
                <h3 className="cert-title">IEDC District Cluster Level Hackathon</h3>
                <p className="cert-desc">Participated in the IEDC District Cluster Level Hackathon conducted by Kerala Startup Mission as part of the IEDC Startup Summit 2026, focused on real-world challenge solving.</p>
                <div className="cert-actions">
                  <button 
                    onClick={() => handleOpenLightbox(certIedcHackathon, "IEDC District Cluster Level Hackathon")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: IEDC Startup Summit */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <GraduationCap className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">Kerala Startup Mission & Amal Jyothi College</span>
                <h3 className="cert-title">IEDC Startup Summit 2026 Participation</h3>
                <p className="cert-desc">Participated in the state-wide IEDC Startup Summit 2026 hosted by Amal Jyothi College of Engineering and supported by the Kerala Startup Mission (March 2026).</p>
                <div className="cert-actions">
                  <button 
                    onClick={() => handleOpenLightbox(certIedcStartupSummit, "IEDC Startup Summit 2026 Participation")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: TinkerHub uSetEss Projects Makeathon */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <GraduationCap className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">TinkerHub SNMIMT</span>
                <h3 className="cert-title">uSetEss Projects — 24-Hour Makeathon</h3>
                <p className="cert-desc">Participated in the 24-hour makeathon hackathon event organized by TinkerHub SNMIMT to design and prototype innovative solutions under time constraints (Oct 2024).</p>
                <div className="cert-actions">
                  <button 
                    onClick={() => handleOpenLightbox(certTinkerhubMakeathon, "uSetEss Projects — 24-Hour Makeathon Certificate")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: IEDC Content Creation Workshop */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <GraduationCap className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">IEDC SNMIMT</span>
                <h3 className="cert-title">Content Creation Workshop</h3>
                <p className="cert-desc">Participated in the Content Creation Workshop hosted by IEDC SNMIMT cell on August 9, 2024, at SNMIMT Maliankara.</p>
                <div className="cert-actions">
                  <button 
                    onClick={() => handleOpenLightbox(certIedcContentCreation, "Content Creation Workshop Certificate")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cert: NASSCOM */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <BadgeCheck className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">NASSCOM Level 4</span>
                <h3 className="cert-title">Certified Biometric & Data Entry Operator</h3>
                <p className="cert-desc">Industry-validated certification covering electronic verification systems and hardware data structures.</p>
              </div>
            </div>

            {/* Cert: Forage */}
            <div className="cert-card">
              <div className="cert-icon-box">
                <ShieldCheck className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">Forage Virtual Simulations</span>
                <h3 className="cert-title">Completed Engineering Tracks</h3>
                <p className="cert-desc">Completed programs for Ford Digital, Tata Cybersecurity & ESG, EA Product Management, GE Aerospace (Explore Engineering), and Tata ESD.</p>
                <div className="cert-actions">
                  <button 
                    onClick={() => handleOpenLightbox(certForageFordIntro, "Ford Digital Intro Job Simulation")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>Ford Digital Intro</span>
                  </button>
                  <button 
                    onClick={() => handleOpenLightbox(certForageFordIntermediate, "Ford Digital Intermediate Job Simulation")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>Ford Digital Intermediate</span>
                  </button>
                  <button 
                    onClick={() => handleOpenLightbox(certForageTataCybersecurity, "Tata Cybersecurity Analyst Job Simulation")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>Tata Cybersecurity</span>
                  </button>
                  <button 
                    onClick={() => handleOpenLightbox(certForageTataEsg, "Tata ESG Job Simulation")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>Tata ESG</span>
                  </button>
                  <button 
                    onClick={() => handleOpenLightbox(certForageEaPm, "Electronic Arts Product Management Job Simulation")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>EA Product Management</span>
                  </button>
                  <button 
                    onClick={() => handleOpenLightbox(certForageGeAerospace, "GE Aerospace Explore Engineering Job Simulation")} 
                    className="cert-btn btn-view"
                    type="button"
                  >
                    <Eye size={12} />
                    <span>GE Aerospace</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Achievement: Workshops */}
            <div className="cert-card achievement">
              <div className="cert-icon-box gold">
                <Presentation className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-issuer">Tech Workshops</span>
                <h3 className="cert-title">AI & Startup Sessions</h3>
                <p className="cert-desc">Conducted multiple learning sessions and workshops for students on AI applications, startup scaling, and Intellectual Property Rights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section scroll-reveal">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title"><span className="number">06.</span> Get In Touch</h2>
            <div className="header-line"></div>
          </div>

          <div className="contact-grid">
            <div className="contact-info-block">
              <h3>Let's build something together!</h3>
              <p>
                I'm seeking internships, collaborative electronics projects, or tech community initiatives. Feel free to reach out if you want to connect, collaborate, or hire!
              </p>
              
              <div className="contact-details">
                <div className="detail-item">
                  <div className="detail-icon">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+918075519025">+91 80755 19025</a>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">
                    <Linkedin size={16} />
                  </div>
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://linkedin.com/in/shreyas-k-p-5016a432b" target="_blank" rel="noopener noreferrer">linkedin.com/in/shreyas-k-p</a>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <span>Kattur, Thrissur, Kerala, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-block">
              <form id="contactForm" className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required 
                    placeholder="Project Collaboration"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required 
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-submit" id="submitBtn" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send size={16} />
                </button>
                {formStatus.message && (
                  <div className={`form-feedback ${formStatus.type}`}>
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <button onClick={() => handleNavLinkClick('hero')} className="logo" aria-label="Logo Footer Home">
              <span className="logo-icon">&lt;</span>
              <span className="logo-text">Shreyas.Tech</span>
              <span className="logo-icon">&gt;</span>
            </button>
            <div className="footer-socials">
              <a href="https://github.com/Shreyas-k-p" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://linkedin.com/in/shreyas-k-p-5016a432b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="tel:+918075519025" aria-label="Phone"><Phone size={18} /></a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Shreyas K P. Built with React and CSS.</p>
            <button 
              className="back-to-top" 
              onClick={() => handleNavLinkClick('hero')} 
              aria-label="Scroll Back To Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </footer>

      {/* CV Modal Overlay */}
      <div className={`cv-modal-backdrop ${showCvModal ? 'open' : ''}`} onClick={() => setShowCvModal(false)}>
        <div className="cv-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="cv-modal-close" onClick={() => setShowCvModal(false)}>
            <X size={24} />
          </button>
          <h3 className="cv-modal-title">SHREYAS K P — Resume Summary</h3>
          
          <div className="cv-summary-section">
            <h4>Objective</h4>
            <p>
              An ambitious and resourceful Electronics and Communication Engineering student passionate about embedded systems. With a strong foundation in visual storytelling, leadership, and real-world tech application, I strive to create impactful solutions through interdisciplinary collaboration and cutting-edge technologies.
            </p>
          </div>

          <div className="cv-summary-section">
            <h4>Education</h4>
            <ul>
              <li>
                <strong>B.Tech in Electronics & Communication Engineering</strong><br />
                Sree Narayana Mangalam Institute of Technology (SNMIMT), KTU University (2023-2027)
              </li>
              <li>
                <strong>Plus Two (+2) — Domestic Biometrics Data Operator</strong><br />
                GMBVHSS School, Irinjalakuda (2021-2023)
              </li>
              <li>
                <strong>SSLC</strong><br />
                St. Dominic Convent English Medium School, Velleni
              </li>
            </ul>
          </div>

          <div className="cv-summary-section">
            <h4>Leadership & Experience</h4>
            <ul>
              <li><strong>IPR Lead & Coordinator (2025-Present)</strong> at IEDC SNMIMT. Conducted online Intellectual Property Rights workshops for startups, aligned campus calendar with IIC 7.0 guidelines.</li>
              <li><strong>IPR & Research Lead (2025-2026)</strong> recognized by Kerala Startup Mission (KSUM) for student committee management.</li>
              <li><strong>Campus Co-Lead (2024-2025)</strong> at TinkerHub SNMIMT. Coordinated programming tracks and peer-to-peer technical events.</li>
              <li><strong>Student Coordinator (March 2025)</strong> at ASTRA Bootcamp SNMIMT. Managed logistics, student coordination, and guest alignment.</li>
            </ul>
          </div>

          <div className="cv-summary-section">
            <h4>Certifications & Training</h4>
            <ul>
              <li><strong>IBM AI Developer Professional Certificate</strong> — Completed 10 courses spanning python, GenAI, web apps, chatbots, and APIs (Feb 2026)</li>
              <li><strong>Innovation Ambassador (Foundation Level)</strong> — Ministry of Education's Innovation Cell & AICTE (2024-25)</li>
              <li><strong>AICTE IDE Bootcamp</strong> — Completed Edition 2 - Phase I at Amal Jyothi College of Engineering (Sept 2024)</li>
              <li><strong>NASSCOM Level 4 Certification</strong> — Certified Biometric & Data Entry Operator</li>
              <li><strong>Forage Virtual Simulations</strong> — Completed programs for Ford Digital, Tata Cybersecurity, EA Product Management, and GE Aerospace</li>
            </ul>
          </div>

          <div className="cv-summary-section">
            <h4>Achievements & Participation</h4>
            <ul>
              <li><strong>Rank 108 — IIT Bombay National Entrepreneurship Challenge 2025</strong> in Advanced Track (E-Cell, IIT Bombay)</li>
              <li><strong>2nd Prize — "InnoElectra"</strong> Intercollegiate Project Competition, MES College Marampally (Feb 2025)</li>
              <li><strong>Finalist Participant</strong> — PALS innoWAH! Pre-Finals at MITS Kochi (Feb 2025)</li>
              <li><strong>IEDC District Cluster Level Hackathon & Startup Summit 2026</strong> — Active participation and problem solving</li>
              <li>Conducted AI & Startup Sessions and delivered online workshops on Intellectual Property Rights (IPR) for Startups</li>
            </ul>
          </div>

          <div className="cv-summary-section">
            <h4>Languages</h4>
            <p>Malayalam (94%), English (86%), Hindi (53%)</p>
          </div>

          <div className="cv-summary-section" style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span>Contact: +91 80755 19025</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a href="/shreyas_Resume.pdf" download="Shreyas_Resume.pdf" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
                <Download size={14} />
                <span>Download PDF</span>
              </a>
              <button onClick={() => window.print()} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
                <span>Print Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-backdrop open" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>
              <X size={24} />
            </button>
            <h3 className="lightbox-title">{lightboxTitle}</h3>
            <div className="lightbox-image-container">
              <img src={lightboxImg} alt={lightboxTitle} className="lightbox-img" />
            </div>
          </div>
        </div>
      )}


    </>
  );
}

export default App;
