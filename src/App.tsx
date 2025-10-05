import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Code, Award, Briefcase, Menu, X } from 'lucide-react';
import profileImg from './Assets/IMG_1709.jpg';
function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Full-stack e-commerce solution with real-time inventory and payment processing',
      image: '🛍️',
      tech: ['React', 'Node.js', 'Stripe'],
      gradient: 'from-emerald-400 to-teal-600'
    },
    {
      title: 'Analytics Dashboard',
      category: 'design',
      description: 'Beautiful data visualization dashboard for business intelligence',
      image: '📊',
      tech: ['Vue.js', 'D3.js', 'Python'],
      gradient: 'from-blue-400 to-indigo-600'
    },
    {
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking with biometric authentication',
      image: '💳',
      tech: ['React Native', 'Firebase'],
      gradient: 'from-purple-400 to-pink-600'
    },
    {
      title: 'AI Content Generator',
      category: 'web',
      description: 'ML-powered content creation tool for marketers',
      image: '🤖',
      tech: ['Next.js', 'OpenAI', 'Python'],
      gradient: 'from-orange-400 to-red-600'
    },
    {
      title: 'Social Media Manager',
      category: 'design',
      description: 'Schedule and manage posts across multiple platforms',
      image: '📱',
      tech: ['React', 'GraphQL', 'Redis'],
      gradient: 'from-cyan-400 to-blue-600'
    },
    {
      title: 'Fitness Tracker',
      category: 'mobile',
      description: 'Track workouts, nutrition, and progress with AI coaching',
      image: '💪',
      tech: ['Flutter', 'Firebase', 'ML Kit'],
      gradient: 'from-green-400 to-emerald-600'
    }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Ganesh Khot
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#work" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Work</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Skills</a>
              <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all">
                Contact
              </a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#work" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Work</a>
              <a href="#skills" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <a href="#contact" className="block py-2 text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                Full Stack Developer
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Ganesh Khot</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                A passionate software engineer crafting beautiful, functional web experiences.
                I turn ideas into reality through clean code and thoughtful design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#work" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all text-center font-medium">
                  View My Work
                </a>
                <a href="#contact" className="px-8 py-4 bg-white text-blue-600 rounded-full hover:shadow-lg transition-all border-2 border-blue-600 text-center font-medium">
                  Get In Touch
                </a>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="https://github.com/Ganeshakhot" className="p-3 bg-white rounded-full hover:bg-blue-50 transition-colors shadow-md">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ganesh-khot-28b169252/" className="p-3 bg-white rounded-full hover:bg-blue-50 transition-colors shadow-md">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:ganeshaakhot@gmail.com" className="p-3 bg-white rounded-full hover:bg-blue-50 transition-colors shadow-md">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="w-full aspect-square max-w-md mx-auto lg:max-w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl transform rotate-6 opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-3xl transform -rotate-6 opacity-20"></div>
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="relative rounded-3xl shadow-2xl w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              1.6+ years of turning coffee into code and ideas into impactful digital products
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-xl transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Software Engineer at top tech companies, shipped products serving millions of users
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-xl transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Full-stack development, Diffrent architecture, and modern web technologies
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl hover:shadow-xl transition-all sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Philosophy</h3>
              <p className="text-gray-600 leading-relaxed">
                Clean code, user-first design, and continuous learning drive everything I build
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              A selection of my recent work
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {['all', 'web', 'mobile', 'design'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all ${activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className={`h-48 sm:h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl sm:text-7xl`}>
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:gap-2 transition-all">
                    <span>View Project</span>
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Tools and technologies I work with
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Angular'], color: 'from-blue-500 to-indigo-600' },
              { title: 'Backend', skills: ['Node.js', 'C# .Net', 'Java Spring Boot', 'MySQL', 'Microsoft Sql Server'], color: 'from-purple-500 to-pink-600' },
              { title: 'DevOps', skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'], color: 'from-orange-500 to-red-600' }
            ].map((category, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-xl transition-all">
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-lg mb-4 font-bold text-sm sm:text-base`}>
                  {category.title}
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-sm sm:text-base">
                      <span className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3`}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Let's Work Together</h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 opacity-90">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a
              href="mailto:ganeshaakhot@gmail.com"
              className="px-8 py-4 bg-white text-blue-600 rounded-full hover:shadow-2xl hover:scale-105 transition-all font-bold flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ganesh-khot-28b169252/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-all font-bold flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-t">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm sm:text-base">© 2025 Ganesh Khot. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:alex@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
