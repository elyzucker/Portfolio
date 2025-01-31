import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  CircleUser,
  Briefcase,
  Wrench,
  Mail as MailIcon,
  Menu as MenuIcon,
  X as XIcon,
  Instagram,
  Linkedin,
} from 'lucide-react';
import { Button } from './components/ui/button';
import { ProjectCard } from './components/ProjectCard';
import { SkillBar } from './components/SkillBar';
import { projects, skills } from './lib/data';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effects for hero section
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.8)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'home', icon: Briefcase, label: 'Portfolio' },
    { id: 'about', icon: CircleUser, label: 'About' },
    { id: 'skills', icon: Wrench, label: 'Skills' },
    { id: 'contact', icon: MailIcon, label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <motion.nav 
        className="fixed left-0 top-0 z-[100] w-full transition-shadow duration-300"
        style={{
          background: navBackground,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: isScrolled 
            ? '0 10px 30px -10px rgba(0, 0, 0, 0.1)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle cx="20" cy="20" r="18" fill="none" stroke="#3b82f6" strokeWidth="3"/>
                <path d="M12 20 L28 20 M20 12 L20 28" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-light text-slate-800 leading-none">
              Ely <span className="font-medium">Zucker</span>
            </h1>
          </motion.div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </Button>

          <div className="hidden space-x-2 lg:flex">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                className={`
                  group flex items-center gap-2 px-4 rounded-2xl transition-all duration-300
                  backdrop-blur-sm border relative overflow-hidden
                  ${
                    activeSection === section.id
                      ? 'bg-white/60 text-blue-600 border-white/50 shadow-lg shadow-white/20'
                      : 'bg-white/20 hover:bg-white/30 text-slate-600 border-white/20 hover:border-white/40'
                  }
                `}
                onClick={() => setActiveSection(section.id)}
              >
                <section.icon className={`h-4 w-4 transition-transform duration-300 ${
                  activeSection === section.id ? 'scale-110' : ''
                }`} />
                {section.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/20 bg-white/20 backdrop-blur-md lg:hidden"
            >
              <div className="flex flex-col space-y-2 p-4">
                {sections.map((section) => (
                  <Button
                    key={section.id}
                    variant="ghost"
                    className={`
                      flex items-center gap-2 justify-start rounded-2xl transition-all duration-300
                      backdrop-blur-sm border
                      ${
                        activeSection === section.id
                          ? 'bg-white/60 text-blue-600 border-white/50 shadow-lg shadow-white/20'
                          : 'bg-white/20 hover:bg-white/30 text-slate-600 border-white/20 hover:border-white/40'
                      }
                    `}
                    onClick={() => {
                      setActiveSection(section.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    <section.icon className={`h-4 w-4 transition-transform duration-300 ${
                      activeSection === section.id ? 'scale-110' : ''
                    }`} />
                    {section.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent" />
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <main className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              {/* Hero Section */}
              <motion.div 
                className="space-y-4 text-center relative z-10"
                style={{ y: heroY, opacity: heroOpacity }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
                >
                  Creating thoughtful design solutions
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600/90 leading-relaxed"
                >
                  Industrial designer specializing in sustainable and user-centered
                  products that enhance everyday experiences.
                </motion.p>
              </motion.div>

              {/* Project Grid */}
              <motion.div 
                className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* About Section */}
          {activeSection === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mx-auto max-w-3xl space-y-8"
            >
              <img
                src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80"
                alt="Profile"
                className="mx-auto h-32 w-32 sm:h-48 sm:w-48 rounded-full object-cover shadow-lg border-4 border-white/50"
              />
              <div className="space-y-6 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-800">About Me</h2>
                <div className="bg-white/30 rounded-3xl p-8 shadow-lg border border-white/20 backdrop-blur-md">
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    With over 8 years of experience in industrial design, I focus on
                    creating products that combine functionality with aesthetic
                    beauty. My approach emphasizes sustainability and user-centered
                    design principles.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mx-auto max-w-3xl space-y-8"
            >
              <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-light text-slate-800">Skills</h2>
              <div className="space-y-6">
                {skills.map((category) => (
                  <div key={category.category} className="bg-white/30 rounded-3xl p-8 shadow-lg border border-white/20 backdrop-blur-md space-y-4">
                    <h3 className="text-lg sm:text-xl font-medium text-blue-600/80">{category.category}</h3>
                    <div className="space-y-4">
                      {category.items.map((skill) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Contact Section */}
          {activeSection === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mx-auto max-w-3xl space-y-8"
            >
              <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-light text-slate-800">Get in Touch</h2>
              <div className="bg-white/30 rounded-3xl p-8 shadow-lg border border-white/20 backdrop-blur-md">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-slate-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-2xl border border-white/40 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-white/20 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-2xl border border-white/40 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-white/20 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-slate-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-2xl border border-white/40 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-white/20 backdrop-blur-sm"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-500/80 hover:bg-blue-600/80 text-white rounded-2xl backdrop-blur-sm">
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg font-light text-slate-600 italic leading-relaxed">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <p className="mt-2 text-sm text-slate-500">— Steve Jobs</p>
            </div>
            <div className="flex justify-start md:justify-end items-center gap-4">
              {[
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: MailIcon, href: 'mailto:contact@example.com', label: 'Email' }
              ].map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="group relative rounded-2xl bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all duration-300 border border-white/30 hover:border-white/50 overflow-hidden"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2"
                  >
                    <social.icon className="h-5 w-5 text-slate-600 transition-transform duration-300 group-hover:scale-110" />
                    <span className="sr-only">{social.label}</span>
                    <span className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}