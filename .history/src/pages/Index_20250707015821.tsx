import React, { useEffect, useState } from 'react';
import { Github, ExternalLink, Mail, Linkedin, Menu, X, ChevronDown, MapPin, Calendar, Award, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import CursorEffect from '@/components/CursorEffect';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDarkMode);
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  const projects = [
    {
      title: "Quick Deck",
      date: "May 2025",
      description: "AI-powered slide generator using Next.js and Gemini API with PDF/PPTX export and dark mode support. Implemented secure auth and route protection with Firebase and middleware.",
      tech: ["Next.js", "Firebase", "Gemini API", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
      github: "#",
      demo: "#",
      image: "https://i.ibb.co/9m5CQvMt/Presentation-AI.png"
    },
    {
      title: "Smart Bill Manager",
      date: "Dec 2024",
      description: "Utilized Redux for efficient state management, reducing API calls by 30%. Designed interactive charts using Chart.js to visualize billing trends effectively.",
      tech: ["React.js", "Redux", "Chart.js", "CSS"],
      github: "#",
      demo: "#",
      image: "https://i.ibb.co/JwcBjjcL/0de99809-ce96-469f-92df-db4efc766a14.png"
    },
    {
      title: "Motion-Note Making Website",
      date: "Feb 2024",
      description: "Note-taking application with secure authentication using Clerk. Enhanced user experience by 20% with dark/light modes, advanced search, and hierarchical document management.",
      tech: ["Next.js", "Tailwind CSS", "React", "Convex", "TypeScript", "Clerk"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
    }
  ];

  const skills = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" }
  ];

  const achievements = [
    {
      title: "Pre-finalist, Tally CodeBrewers 2023",
      description: "Top 200 out of 12000+ registered teams",
      date: "July 2023",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: "Postman API Fundamentals Student Expert",
      description: "Certified by Postman",
      date: "June 2025",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <div className={`transition-colors duration-300 ${isDarkMode ? 'bg-navy text-slate-light' : 'bg-white text-slate-800'} min-h-screen`}>
      <CursorEffect isDarkMode={isDarkMode} />
      
      {/* Skip to main content link */}
      <a 
        href="#main" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-bright text-navy px-4 py-2 rounded-md z-50 font-medium"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${isDarkMode ? 'bg-navy/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDarkMode ? 'border-slate-darker' : 'border-gray-200'} z-40 transition-colors duration-300 hover-target`} role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-cyan-bright hover:text-cyan-bright/80 transition-colors duration-300"
              aria-label="Go to top of page"
            >
              Prateek Gupta
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.id ? 'text-cyan-bright' : isDarkMode ? 'text-slate-light hover:text-cyan-bright' : 'text-slate-600 hover:text-cyan-600'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-bright transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                    activeSection === item.id ? 'scale-x-100' : ''
                  }`}></span>
                </button>
              ))}
              <ThemeToggle isDark={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle isDark={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
              <button
                className={`p-2 ${isDarkMode ? 'text-slate-light hover:text-cyan-bright' : 'text-slate-600 hover:text-cyan-600'} transition-colors duration-300`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`md:hidden py-6 border-t ${isDarkMode ? 'border-slate-darker' : 'border-gray-200'} transition-colors duration-300`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-3 text-base font-medium transition-colors duration-300 ${
                    activeSection === item.id ? 'text-cyan-bright' : isDarkMode ? 'text-slate-light hover:text-cyan-bright' : 'text-slate-600 hover:text-cyan-600'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main id="main">
        {/* Hero Section */}
        <section id="hero" className={`min-h-screen flex items-center ${isDarkMode ? 'bg-gradient-to-br from-navy via-slate-darker to-navy' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'} pt-20 transition-colors duration-300`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in hover-target">
                <p className={`text-lg mb-4 ${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'} font-medium tracking-wide`}>
                  Hi, my name is
                </p>
                <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold ${isDarkMode ? 'text-slate-lightest' : 'text-slate-800'} mb-6 leading-tight`}>
                  Prateek Gupta.
                </h1>
                <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${isDarkMode ? 'text-slate-muted' : 'text-slate-600'} mb-8 leading-tight`}>
                  I build full-stack web applications with modern technologies.
                </h2>
                <p className={`text-xl ${isDarkMode ? 'text-slate-muted' : 'text-slate-600'} mb-8 max-w-2xl leading-relaxed`}>
                  I'm a graduate from NIT Rourkela with a strong focus on full-stack web development. I specialize in building performant and scalable web applications using modern technologies like React, Next.js, and Node.js. 
                </p>
                
                <div className="mb-8 space-y-2">
                  <div className="flex items-center gap-3 text-lg">
                    <Mail className={`w-5 h-5 ${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'}`} />
                    <a href="mailto:prateekgupta23090@gmail.com" className={`${isDarkMode ? 'text-slate-light hover:text-cyan-bright' : 'text-slate-600 hover:text-cyan-600'} transition-colors duration-300`}>
                      prateekgupta23090@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <MapPin className={`w-5 h-5 ${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'}`} />
                    <span className={`${isDarkMode ? 'text-slate-muted' : 'text-slate-600'}`}>NIT Rourkela, India</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button 
                    size="lg"
                    className="group bg-transparent border-2 border-cyan-bright text-cyan-bright hover:bg-cyan-bright hover:text-navy font-medium px-8 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-bright/25 hover-target"
                    onClick={() => scrollToSection('projects')}
                  >
                    <span className="group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                      View My Work
                    </span>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg" 
                    className={`border-2 ${isDarkMode ? 'border-slate-muted text-slate-muted hover:border-cyan-bright hover:text-cyan-bright' : 'border-slate-400 text-slate-600 hover:border-cyan-600 hover:text-cyan-600'} bg-transparent px-8 py-4 text-lg transition-all duration-300 hover:shadow-lg hover-target`}
                    asChild
                  >
                    <a href="mailto:prateekgupta23090@gmail.com" className="inline-flex items-center gap-2">
                      <Mail size={20} />
                      Get In Touch
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-20 -mt-1 md:-mt-4 animate-fade-in">
                <div className="relative hover-target">
                  <div className="w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-cyan-bright/20 shadow-2xl shadow-cyan-bright/10 hover:shadow-cyan-bright/20 transition-all duration-500 hover:scale-105">
                    <img 
                      src="https://i.ibb.co/Z1TzNghM/Prateek-1.png" 
                      alt="Professional headshot of Prateek Gupta" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-cyan-bright rounded-full opacity-30"></div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 border-4 border-cyan-bright rounded-full opacity-20"></div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-20">
              <button 
                onClick={() => scrollToSection('about')}
                className={`${isDarkMode ? 'text-cyan-bright hover:text-cyan-bright/80' : 'text-cyan-600 hover:text-cyan-500'} transition-colors duration-300 animate-bounce`}
                aria-label="Scroll to about section"
              >
                <ChevronDown size={32} />
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-32 ${isDarkMode ? 'bg-slate-darker/50' : 'bg-gray-50'} transition-colors duration-300`}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <h2 className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? 'text-slate-lightest' : 'text-slate-800'} mb-4`}>
                <span className={`${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'} font-mono text-xl mr-4`}>01.</span>
                About Me
              </h2>
              <div className={`w-80 h-px ${isDarkMode ? 'bg-slate-muted' : 'bg-slate-300'} ml-20`}></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                <p className={`text-lg ${isDarkMode ? 'text-slate-muted' : 'text-slate-600'} leading-relaxed`}>
                  I'm a graduate from NIT Rourkela with a passion for building scalable web applications. 
                  With experience as a Web Development Intern at CodSoft, I've enhanced performance by 15% through optimization techniques 
                  and improved user engagement by 20% through thoughtful UI/UX improvements.
                </p>
                <p className={`text-lg ${isDarkMode ? 'text-slate-muted' : 'text-slate-600'} leading-relaxed`}>
                  <strong className={`${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'}`}>I specialize in full-stack development</strong> with 
                  expertise in React.js, Next.js, Node.js, and modern state management solutions. I enjoy solving complex problems 
                  and have experience with data structures, algorithms, and database management.
                </p>
                <p className={`text-lg ${isDarkMode ? 'text-slate-muted' : 'text-slate-600'} leading-relaxed`}>
                  Actively participating in coding competitions and building projects 
                  that showcase AI integration, performance optimization, and user-centric design.
                </p>
              </div>

              <div>
                <div className="mb-8">
                  <h3 className={`text-lg ${isDarkMode ? 'text-slate-light' : 'text-slate-700'} mb-4 font-medium`}>
                    Education
                  </h3>
                  <div className={`${isDarkMode ? 'bg-slate-darker' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-slate-muted/20' : 'border-gray-200'}`}>
                    <h4 className={`font-bold ${isDarkMode ? 'text-slate-lightest' : 'text-slate-800'} mb-2`}>
                      National Institute of Technology, Rourkela
                    </h4>
                    <p className={`${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'} font-medium mb-1`}>
                      Bachelor of Technology in Computer Science
                    </p>
                    <p className={`${isDarkMode ? 'text-slate-muted' : 'text-slate-600'} text-sm mb-2`}>
                      2021 - 2025 | CGPA: 7.83
                    </p>
                  </div>
                </div>

                <div>
                  <p className={`text-lg ${isDarkMode ? 'text-slate-light' : 'text-slate-700'} mb-6 font-medium`}>
                    Core Technologies:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {['React.js & Next.js', 'Node.js & Express.js', 'JavaScript & TypeScript', 'MongoDB & MySQL', 'Redux & Context API', 'RESTful APIs', 'Git & GitHub', 'Tailwind CSS'].map((tech) => (
                      <div key={tech} className="flex items-center gap-3">
                        <span className={`w-2 h-2 ${isDarkMode ? 'bg-cyan-bright' : 'bg-cyan-600'} rounded-full`}></span>
                        <span className={`${isDarkMode ? 'text-slate-muted' : 'text-slate-600'} text-sm font-mono`}>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <h2 className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? 'text-slate-lightest' : 'text-slate-800'} mb-4`}>
                <span className={`${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'} font-mono text-xl mr-4`}>02.</span>
                Experience
              </h2>
              <div className={`w-80 h-px ${isDarkMode ? 'bg-slate-muted' : 'bg-slate-300'} ml-20`}></div>
            </div>

            <div className={`${isDarkMode ? 'bg-slate-darker' : 'bg-white'} p-8 rounded-lg border ${isDarkMode ? 'border-slate-muted/20' : 'border-gray-200'} shadow-lg hover-target`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-slate-lightest' : 'text-slate-800'} mb-2`}>
                    Web Development Intern
                  </h3>
                  <p className={`${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'} font-medium text-lg mb-2`}>
                    CodSoft
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className={`flex items-center gap-2 ${isDarkMode ? 'text-slate-muted' : 'text-slate-600'}`}>
                      <Calendar className="w-4 h-4" />
                      July 2024 – Sep 2024
                    </span>
                    <span className={`flex items-center gap-2 ${isDarkMode ? 'text-slate-muted' : 'text-slate-600'}`}>
                      <MapPin className="w-4 h-4" />
                      Remote
                    </span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-4">
                <li className={`flex items-start gap-4 ${isDarkMode ? 'text-slate-muted' : 'text-slate-600'}`}>
                  <span className={`w-2 h-2 ${isDarkMode ? 'bg-cyan-bright' : 'bg-cyan-600'} rounded-full mt-3 flex-shrink-0`}></span>
                  <span className="leading-relaxed">
                    Enhanced web applications using React.js, Redux, and Node.js, optimizing performance by <strong className={`${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'}`}>15%</strong> through lazy loading and memoization.
                  </span>
                </li>
                <li className={`flex items-start gap-4 ${isDarkMode ? 'text-slate-muted' : 'text-slate-600'}`}>
                  <span className={`w-2 h-2 ${isDarkMode ? 'bg-cyan-bright' : 'bg-cyan-600'} rounded-full mt-3 flex-shrink-0`}></span>
                  <span className="leading-relaxed">
                    Integrated state management (Redux, Context API) to streamline data flow, reducing unnecessary re-renders.
                  </span>
                </li>
                <li className={`flex items-start gap-4 ${isDarkMode ? 'text-slate-muted' : 'text-slate-600'}`}>
                  <span className={`w-2 h-2 ${isDarkMode ? 'bg-cyan-bright' : 'bg-cyan-600'} rounded-full mt-3 flex-shrink-0`}></span>
                  <span className="leading-relaxed">
                    Collaborated with UX designers to improve UI consistency, leading to a <strong className={`${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'}`}>20%</strong> increase in user engagement.
                  </span>
                </li>
                <li className={`flex items-start gap-4 ${isDarkMode ? 'text-slate-muted' : 'text-slate-600'}`}>
                  <span className={`w-2 h-2 ${isDarkMode ? 'bg-cyan-bright' : 'bg-cyan-600'} rounded-full mt-3 flex-shrink-0`}></span>
                  <span className="leading-relaxed">
                    Debugged and resolved <strong className={`${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'}`}>30+</strong> issues related to rendering performance and API integration.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-32 ${isDarkMode ? 'bg-slate-darker/50' : 'bg-gray-50'} transition-colors duration-300`}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <h2 className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? 'text-slate-lightest' : 'text-slate-800'} mb-4`}>
                <span className={`${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'} font-mono text-xl mr-4`}>03.</span>
                Featured Projects
              </h2>
              <div className={`w-80 h-px ${isDarkMode ? 'bg-slate-muted' : 'bg-slate-300'} ml-20`}></div>
            </div>

            <div className="space-y-24">
              {projects.map((project, index) => (
                <article 
                  key={index}
                  className={`group relative grid lg:grid-cols-12 gap-4 lg:gap-8 items-center hover-target project-card ${index % 2 === 1 ? 'lg:text-right' : ''}`}
                >
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''} relative`}>
                    <div className="aspect-video overflow-hidden rounded-lg shadow-2xl group-hover:shadow-cyan-bright/10 transition-all duration-500">
                      <img 
                        src={project.image} 
                        alt={`Screenshot of ${project.title}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 mix-blend-multiply group-hover:mix-blend-normal"
                      />
                      <div className={`absolute inset-0 ${isDarkMode ? 'bg-cyan-bright/20' : 'bg-cyan-600/20'} group-hover:bg-transparent transition-colors duration-300`}></div>
                    </div>
                  </div>

                  <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-4 relative z-10`}>
                    <p className={`font-mono text-sm ${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'}`}>Featured Project</p>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-slate-lightest' : 'text-slate-800'} group-hover:text-cyan-bright transition-colors duration-300`}>
                      {project.title}
                    </h3>
                    <p className={`font-mono text-sm ${isDarkMode ? 'text-slate-muted' : 'text-slate-600'}`}>
                      {project.date}
                    </p>
                    <div className={`${isDarkMode ? 'bg-slate-darker' : 'bg-white'} p-6 rounded-lg shadow-xl relative z-10`}>
                      <p className={`${isDarkMode ? 'text-slate-muted' : 'text-slate-600'} leading-relaxed`}>
                        {project.description}
                      </p>
                    </div>
                    <div className={`flex flex-wrap gap-3 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`font-mono text-sm ${isDarkMode ? 'text-slate-muted' : 'text-slate-600'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className={`flex gap-6 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                      <a
                        href={project.github}
                        className={`${isDarkMode ? 'text-slate-light hover:text-cyan-bright' : 'text-slate-600 hover:text-cyan-600'} transition-colors duration-300 hover:transform hover:scale-110`}
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        className={`${isDarkMode ? 'text-slate-light hover:text-cyan-bright' : 'text-slate-600 hover:text-cyan-600'} transition-colors duration-300 hover:transform hover:scale-110`}
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <h2 className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? 'text-slate-lightest' : 'text-slate-800'} mb-4`}>
                <span className={`${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'} font-mono text-xl mr-4`}>04.</span>
                Skills & Technologies
              </h2>
              <div className={`w-80 h-px ${isDarkMode ? 'bg-slate-muted' : 'bg-slate-300'} ml-20`}></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`group ${isDarkMode ? 'bg-slate-darker' : 'bg-white'} rounded-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border ${isDarkMode ? 'border-slate-muted/20 hover:border-cyan-bright/50' : 'border-gray-200 hover:border-cyan-400/50'} hover:shadow-lg ${isDarkMode ? 'hover:shadow-cyan-bright/10' : 'hover:shadow-cyan-400/10'} hover-target skill-card`}
                >
                  <div className="w-12 h-12 mx-auto mb-4 group-hover:transform group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={skill.logo} 
                      alt={`${skill.name} logo`}
                      className="w-full h-full object-contain"
                      style={{ filter: isDarkMode ? 'brightness(0.9)' : 'brightness(1)' }}
                    />
                  </div>
                  <h3 className={`${isDarkMode ? 'text-slate-light' : 'text-slate-700'} font-medium text-sm group-hover:text-cyan-bright transition-colors duration-300`}>
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className={`py-32 ${isDarkMode ? 'bg-slate-darker/50' : 'bg-gray-50'} transition-colors duration-300`}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <h2 className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? 'text-slate-lightest' : 'text-slate-800'} mb-4`}>
                <span className={`${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'} font-mono text-xl mr-4`}>05.</span>
                Achievements
              </h2>
              <div className={`w-80 h-px ${isDarkMode ? 'bg-slate-muted' : 'bg-slate-300'} ml-20`}></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`${isDarkMode ? 'bg-slate-darker' : 'bg-white'} p-8 rounded-lg border ${isDarkMode ? 'border-slate-muted/20' : 'border-gray-200'} shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 hover-target`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'} mt-1`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${isDarkMode ? 'text-slate-lightest' : 'text-slate-800'} mb-2`}>
                        {achievement.title}
                      </h3>
                      <p className={`${isDarkMode ? 'text-slate-muted' : 'text-slate-600'} mb-3 leading-relaxed`}>
                        {achievement.description}
                      </p>
                      <p className={`font-mono text-sm ${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'}`}>
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center hover-target">
            <div className="mb-16">
              <h2 className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? 'text-slate-lightest' : 'text-slate-800'} mb-4`}>
                <span className={`${isDarkMode ? 'text-cyan-bright' : 'text-cyan-600'} font-mono text-xl mr-4`}>06.</span>
                What's Next?
              </h2>
            </div>

            <h3 className={`text-4xl sm:text-5xl font-bold ${isDarkMode ? 'text-slate-lightest' : 'text-slate-800'} mb-8`}>
              Get In Touch
            </h3>
            <p className={`text-xl ${isDarkMode ? 'text-slate-muted' : 'text-slate-600'} mb-16 max-w-2xl mx-auto leading-relaxed`}>
              I'm currently looking for new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
              <Button 
                size="lg"
                className="bg-transparent border-2 border-cyan-bright text-cyan-bright hover:bg-cyan-bright hover:text-navy font-medium px-12 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-bright/25 group hover-target"
                asChild
              >
                <a href="mailto:prateekgupta23090@gmail.com" className="inline-flex items-center gap-3">
                  <Mail size={20} />
                  <span className="group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                    Say Hello
                  </span>
                </a>
              </Button>
            </div>

            <div className="flex justify-center gap-8">
              <a 
                href="https://www.linkedin.com/in/prateek-gupta-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-slate-muted hover:text-cyan-bright' : 'text-slate-500 hover:text-cyan-600'} transition-all duration-300 p-3 hover:transform hover:scale-110 hover-target`}
                aria-label="Connect on LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="https://github.com/PraTEEkgUpTa2" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-slate-muted hover:text-cyan-bright' : 'text-slate-500 hover:text-cyan-600'} transition-all duration-300 p-3 hover:transform hover:scale-110 hover-target`}
                aria-label="Follow on GitHub"
              >
                <Github size={28} />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`${isDarkMode ? 'bg-slate-darker' : 'bg-gray-100'} py-16 border-t ${isDarkMode ? 'border-slate-muted/20' : 'border-gray-200'} transition-colors duration-300 hover-target`}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className={`flex flex-col sm:flex-row justify-between items-center pt-8 border-t ${isDarkMode ? 'border-slate-muted/20' : 'border-gray-200'} gap-4`}>
              <p className={`${isDarkMode ? 'text-slate-muted' : 'text-slate-500'} text-sm`}>
                © 2024 Prateek Gupta. Building the future with code.
              </p>
              <div className="flex items-center gap-4">
                <span className={`${isDarkMode ? 'text-slate-muted' : 'text-slate-500'} text-sm`}>
                  Mobile: +91-8299592263
                </span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
