import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal, ExternalLink, Edit3 } from 'lucide-react';


export function RecentProjects({ onProjectClick }) {
  const projects = [
    {
      id: '1',
      name: 'Creative Designer Portfolio',
      status: 'Published',
      views: '1,234',
      lastModified: '2 hours ago',
      template: 'Modern Creative',
      color: 'bg-chart-1/20 text-chart-1',
      framework: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sarah Johnson - Creative Designer</title>
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <section class="hero">
        <div class="container">
            <h1>Sarah Johnson</h1>
            <p>Creative Designer & Visual Storyteller</p>
            <a href="#portfolio" class="btn">View My Work</a>
        </div>
    </section>
    <section class="portfolio" id="portfolio">
        <div class="container">
            <h2>My Portfolio</h2>
            <div class="grid">
                <div class="card">
                    <div class="card-image">Brand Identity</div>
                    <div class="card-content">
                        <h3>Brand Identity Design</h3>
                        <p>Complete brand identity for a tech startup including logo, colors, and guidelines.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="scripts/main.js"></script>
</body>
</html>`,
      files: {
        'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sarah Johnson - Creative Designer</title>
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <section class="hero">
        <div class="container">
            <h1>Sarah Johnson</h1>
            <p>Creative Designer & Visual Storyteller</p>
            <a href="#portfolio" class="btn">View My Work</a>
        </div>
    </section>
    <section class="portfolio" id="portfolio">
        <div class="container">
            <h2>My Portfolio</h2>
            <div class="grid">
                <div class="card">
                    <div class="card-image">Brand Identity</div>
                    <div class="card-content">
                        <h3>Brand Identity Design</h3>
                        <p>Complete brand identity for a tech startup including logo, colors, and guidelines.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-image">Web Design</div>
                    <div class="card-content">
                        <h3>Modern Web Design</h3>
                        <p>Responsive website design with focus on user experience and modern aesthetics.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-image">Print Design</div>
                    <div class="card-content">
                        <h3>Print Design Collection</h3>
                        <p>Various print materials including brochures, business cards, and promotional materials.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="scripts/main.js"></script>
</body>
</html>`,
        'styles/main.css': `* { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
}

body { 
    font-family: 'Arial', sans-serif; 
    line-height: 1.6; 
    color: #333; 
}

.hero { 
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
    color: white; 
    padding: 100px 0; 
    text-align: center; 
}

.hero h1 { 
    font-size: 3rem; 
    margin-bottom: 1rem; 
}

.hero p { 
    font-size: 1.2rem; 
    margin-bottom: 2rem; 
}

.btn { 
    display: inline-block; 
    padding: 12px 30px; 
    background: #ff6b6b; 
    color: white; 
    text-decoration: none; 
    border-radius: 5px; 
    transition: background 0.3s; 
}

.btn:hover { 
    background: #ff5252; 
}

.portfolio { 
    padding: 80px 0; 
    background: #f8f9fa; 
}

.container { 
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 0 20px; 
}

.grid { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
    gap: 30px; 
    margin-top: 50px; 
}

.card { 
    background: white; 
    border-radius: 10px; 
    overflow: hidden; 
    box-shadow: 0 5px 15px rgba(0,0,0,0.1); 
    transition: transform 0.3s; 
}

.card:hover { 
    transform: translateY(-5px); 
}

.card-image { 
    width: 100%; 
    height: 200px; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    color: white; 
    font-weight: bold; 
    background: linear-gradient(45deg, #ff6b6b, #ffa726); 
}

.card-content { 
    padding: 20px; 
}

.card h3 { 
    margin-bottom: 10px; 
    color: #333; 
}`,
        'scripts/main.js': `// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});`,
      },
      previewUrl:
        'data:text/html;base64,' +
        btoa(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sarah Johnson - Creative Designer</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 100px 0; text-align: center; }
        .hero h1 { font-size: 3rem; margin-bottom: 1rem; }
        .hero p { font-size: 1.2rem; margin-bottom: 2rem; }
        .btn { display: inline-block; padding: 12px 30px; background: #ff6b6b; color: white; text-decoration: none; border-radius: 5px; transition: background 0.3s; }
        .btn:hover { background: #ff5252; }
        .portfolio { padding: 80px 0; background: #f8f9fa; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 50px; }
        .card { background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: transform 0.3s; }
        .card:hover { transform: translateY(-5px); }
        .card-content { padding: 20px; }
        .card h3 { margin-bottom: 10px; color: #333; }
    </style>
</head>
<body>
    <section class="hero">
        <div class="container">
            <h1>Sarah Johnson</h1>
            <p>Creative Designer & Visual Storyteller</p>
            <a href="#portfolio" class="btn">View My Work</a>
        </div>
    </section>
    <section class="portfolio" id="portfolio">
        <div class="container">
            <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 20px;">My Portfolio</h2>
            <div class="grid">
                <div class="card">
                    <div style="width: 100%; height: 200px; background: linear-gradient(45deg, #ff6b6b, #ffa726); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Brand Identity</div>
                    <div class="card-content">
                        <h3>Brand Identity Design</h3>
                        <p>Complete brand identity for a tech startup including logo, colors, and guidelines.</p>
                    </div>
                </div>
                <div class="card">
                    <div style="width: 100%; height: 200px; background: linear-gradient(45deg, #4fc3f7, #29b6f6); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Web Design</div>
                    <div class="card-content">
                        <h3>Modern Web Design</h3>
                        <p>Responsive website design with focus on user experience and modern aesthetics.</p>
                    </div>
                </div>
                <div class="card">
                    <div style="width: 100%; height: 200px; background: linear-gradient(45deg, #ab47bc, #8e24aa); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Print Design</div>
                    <div class="card-content">
                        <h3>Print Design Collection</h3>
                        <p>Various print materials including brochures, business cards, and promotional materials.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`),
    },
    {
      id: '2',
      name: 'Software Engineer Resume',
      status: 'Draft',
      views: '0',
      lastModified: '1 day ago',
      template: 'Tech Professional',
      color: 'bg-chart-2/20 text-chart-2',
      framework: 'nextjs',
      code: `// Main page component
export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  )
}`,
      files: {
        'app/page.tsx': `import { Header } from '@/components/header'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { ExperienceSection } from '@/components/experience-section'
import { ContactSection } from '@/components/contact-section'

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  )
}`,
        'app/layout.tsx': `import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alex Chen - Software Engineer',
  description: 'Professional resume and portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}`,
        'app/globals.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-gray-50 text-gray-900;
  }
}

@layer components {
  .section-card {
    @apply bg-white rounded-lg shadow-lg p-8 mb-8;
  }
  
  .section-title {
    @apply text-3xl font-bold text-slate-800 border-b-2 border-blue-500 pb-4 mb-6;
  }
}`,
        'components/header.tsx': `export function Header() {
  return (
    <header className="bg-slate-800 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Alex Chen</h1>
        <p className="text-xl opacity-90">Senior Software Engineer</p>
        <div className="mt-6 flex justify-center space-x-4">
          <a 
            href="#about" 
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg transition-colors"
          >
            About Me
          </a>
          <a 
            href="#contact" 
            className="border border-white hover:bg-white hover:text-slate-800 px-6 py-2 rounded-lg transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}`,
        'components/about-section.tsx': `export function AboutSection() {
  return (
    <section id="about" className="section-card">
      <h2 className="section-title">About</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Passionate software engineer with 5+ years of experience building scalable web applications 
            and leading development teams. Expertise in full-stack development with a focus on modern 
            JavaScript frameworks and cloud technologies.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I thrive in collaborative environments and enjoy mentoring junior developers while 
            continuously learning new technologies to solve complex problems.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Quick Stats</h3>
          <div className="space-y-2">
            <p><span className="font-semibold">5+</span> Years Experience</p>
            <p><span className="font-semibold">50+</span> Projects Completed</p>
            <p><span className="font-semibold">10+</span> Technologies Mastered</p>
          </div>
        </div>
      </div>
    </section>
  )
}`,
        'components/skills-section.tsx': `export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'GraphQL']
    },
    {
      title: 'Database & Cloud',
      skills: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes']
    }
  ]

  return (
    <section className="section-card">
      <h2 className="section-title">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-slate-700">{category.title}</h3>
            <div className="space-y-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="block bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}`,
        'components/experience-section.tsx': `export function ExperienceSection() {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp Inc.',
      period: '2021 - Present',
      location: 'San Francisco, CA',
      achievements: [
        'Led development of microservices architecture serving 1M+ users',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2019 - 2021',
      location: 'Remote',
      achievements: [
        'Built responsive web applications using React and Node.js',
        'Implemented automated testing increasing code coverage to 90%',
        'Collaborated with design team to create user-friendly interfaces',
        'Reduced API response times by 50% through database optimization'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'WebSolutions Ltd.',
      period: '2018 - 2019',
      location: 'New York, NY',
      achievements: [
        'Developed and maintained client websites using modern web technologies',
        'Participated in agile development processes and daily standups',
        'Contributed to open-source projects and internal tool development'
      ]
    }
  ]

  return (
    <section className="section-card">
      <h2 className="section-title">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <p className="text-gray-600 italic mb-4">{exp.company} • {exp.location}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}`,
        'components/contact-section.tsx': `import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

export function ContactSection() {
  const contacts = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'alex.chen@email.com',
      href: 'mailto:alex.chen@email.com'
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '(555) 123-4567',
      href: 'tel:+15551234567'
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'San Francisco, CA',
      href: '#'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: 'linkedin.com/in/alexchen',
      href: 'https://linkedin.com/in/alexchen'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      value: 'github.com/alexchen',
      href: 'https://github.com/alexchen'
    }
  ]

  return (
    <section id="contact" className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-8 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact) => {
          const IconComponent = contact.icon
          return (
            <a
              key={contact.label}
              href={contact.href}
              className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <IconComponent className="w-5 h-5 text-blue-400" />
              <div>
                <h3 className="font-semibold">{contact.label}</h3>
                <p className="text-sm text-gray-300">{contact.value}</p>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}`,
        'package.json': `{
  "name": "alex-chen-resume",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "^18",
    "react-dom": "^18",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "eslint": "^8",
    "eslint-config-next": "14.0.0"
  }
}`,
      },
      previewUrl: '/api/preview/nextjs-resume',
    },
    {
      id: '3',
      name: 'Marketing Specialist Site',
      status: 'Published',
      views: '856',
      lastModified: '3 days ago',
      template: 'Business Pro',
      color: 'bg-chart-3/20 text-chart-3',
      framework: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emma Rodriguez - Marketing Specialist</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">Emma Rodriguez</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    
    <section class="hero" id="home">
        <div class="container">
            <h1>Marketing That Converts</h1>
            <p>I help businesses grow through strategic marketing campaigns that drive real results and measurable ROI.</p>
            <a href="#contact" class="btn">Let's Work Together</a>
        </div>
    </section>
    
    <section class="services" id="services">
        <div class="container">
            <h2 class="section-title">My Services</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">CHART</div>
                    <h3>Digital Strategy</h3>
                    <p>Comprehensive digital marketing strategies tailored to your business goals and target audience.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">MOBILE</div>
                    <h3>Social Media Marketing</h3>
                    <p>Engaging social media campaigns that build brand awareness and drive customer engagement.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">GRAPH</div>
                    <h3>Analytics & Reporting</h3>
                    <p>Data-driven insights and detailed reporting to measure campaign performance and ROI.</p>
                </div>
            </div>
        </div>
    </section>
    
    <section class="contact" id="contact">
        <div class="container">
            <h2>Ready to Grow Your Business?</h2>
            <p>Let's discuss how I can help you achieve your marketing goals.</p>
            <div class="contact-info">
                <div class="contact-item">
                    <h3>Email</h3>
                    <p>emma@marketingpro.com</p>
                </div>
                <div class="contact-item">
                    <h3>Phone</h3>
                    <p>(555) 987-6543</p>
                </div>
                <div class="contact-item">
                    <h3>LinkedIn</h3>
                    <p>linkedin.com/in/emmarodriguez</p>
                </div>
            </div>
        </div>
    </section>
    
    <script src="assets/js/main.js"></script>
</body>
</html>`,
      files: {
        'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emma Rodriguez - Marketing Specialist</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">Emma Rodriguez</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    
    <section class="hero" id="home">
        <div class="container">
            <h1>Marketing That Converts</h1>
            <p>I help businesses grow through strategic marketing campaigns that drive real results and measurable ROI.</p>
            <a href="#contact" class="btn">Let's Work Together</a>
        </div>
    </section>
    
    <section class="services" id="services">
        <div class="container">
            <h2 class="section-title">My Services</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">CHART</div>
                    <h3>Digital Strategy</h3>
                    <p>Comprehensive digital marketing strategies tailored to your business goals and target audience.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">MOBILE</div>
                    <h3>Social Media Marketing</h3>
                    <p>Engaging social media campaigns that build brand awareness and drive customer engagement.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">GRAPH</div>
                    <h3>Analytics & Reporting</h3>
                    <p>Data-driven insights and detailed reporting to measure campaign performance and ROI.</p>
                </div>
            </div>
        </div>
    </section>
    
    <section class="contact" id="contact">
        <div class="container">
            <h2>Ready to Grow Your Business?</h2>
            <p>Let's discuss how I can help you achieve your marketing goals.</p>
            <div class="contact-info">
                <div class="contact-item">
                    <h3>Email</h3>
                    <p>emma@marketingpro.com</p>
                </div>
                <div class="contact-item">
                    <h3>Phone</h3>
                    <p>(555) 987-6543</p>
                </div>
                <div class="contact-item">
                    <h3>LinkedIn</h3>
                    <p>linkedin.com/in/emmarodriguez</p>
                </div>
            </div>
        </div>
    </section>
    
    <script src="assets/js/main.js"></script>
    <script src="assets/js/analytics.js"></script>
</body>
</html>`,
        'assets/css/style.css': `* { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
}

body { 
    font-family: 'Arial', sans-serif; 
    line-height: 1.6; 
    color: #333; 
}

.navbar { 
    background: #fff; 
    box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
    padding: 1rem 0; 
    position: fixed; 
    width: 100%; 
    top: 0; 
    z-index: 1000; 
}

.nav-container { 
    max-width: 1200px; 
    margin: 0 auto; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 0 20px; 
}

.logo { 
    font-size: 1.5rem; 
    font-weight: bold; 
    color: #e74c3c; 
}

.nav-links { 
    display: flex; 
    list-style: none; 
    gap: 30px; 
}

.nav-links a { 
    text-decoration: none; 
    color: #333; 
    font-weight: 500; 
    transition: color 0.3s; 
}

.nav-links a:hover { 
    color: #e74c3c; 
}

.hero { 
    background: linear-gradient(135deg, #e74c3c 0%, #f39c12 100%); 
    color: white; 
    padding: 150px 0 100px; 
    text-align: center; 
}

.hero h1 { 
    font-size: 3.5rem; 
    margin-bottom: 1rem; 
}

.hero p { 
    font-size: 1.3rem; 
    margin-bottom: 2rem; 
    max-width: 600px; 
    margin-left: auto; 
    margin-right: auto; 
}

.btn { 
    display: inline-block; 
    padding: 15px 35px; 
    background: #fff; 
    color: #e74c3c; 
    text-decoration: none; 
    border-radius: 30px; 
    font-weight: bold; 
    transition: all 0.3s; 
}

.btn:hover { 
    transform: translateY(-2px); 
    box-shadow: 0 5px 15px rgba(0,0,0,0.2); 
}

.services { 
    padding: 100px 0; 
    background: #f8f9fa; 
}

.container { 
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 0 20px; 
}

.section-title { 
    text-align: center; 
    font-size: 2.5rem; 
    margin-bottom: 50px; 
    color: #333; 
}

.services-grid { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
    gap: 40px; 
}

.service-card { 
    background: white; 
    padding: 40px; 
    border-radius: 10px; 
    text-align: center; 
    box-shadow: 0 5px 15px rgba(0,0,0,0.1); 
    transition: transform 0.3s; 
}

.service-card:hover { 
    transform: translateY(-5px); 
}

.service-icon { 
    width: 80px; 
    height: 80px; 
    background: #e74c3c; 
    border-radius: 50%; 
    margin: 0 auto 20px; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    color: white; 
    font-size: 1rem; 
    font-weight: bold; 
}

.contact { 
    padding: 100px 0; 
    background: #2c3e50; 
    color: white; 
    text-align: center; 
}

.contact h2 { 
    font-size: 2.5rem; 
    margin-bottom: 20px; 
}

.contact p { 
    font-size: 1.2rem; 
    margin-bottom: 30px; 
}

.contact-info { 
    display: flex; 
    justify-content: center; 
    gap: 50px; 
    flex-wrap: wrap; 
}

.contact-item { 
    text-align: center; 
}

.contact-item h3 { 
    margin-bottom: 10px; 
    color: #e74c3c; 
}`,
        'assets/css/responsive.css': `@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .hero p {
        font-size: 1.1rem;
    }
    
    .nav-links {
        display: none;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .contact-info {
        flex-direction: column;
        gap: 20px;
    }
}

@media (max-width: 480px) {
    .hero {
        padding: 120px 0 80px;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    .service-card {
        padding: 20px;
    }
    
    .container {
        padding: 0 15px;
    }
}`,
        'assets/js/main.js': `// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Service cards animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});`,
        'assets/js/analytics.js': `// Simple analytics tracking
class SimpleAnalytics {
    constructor() {
        this.startTime = Date.now();
        this.events = [];
        this.init();
    }
    
    init() {
        this.trackPageView();
        this.trackScrollDepth();
        this.trackClicks();
    }
    
    trackPageView() {
        this.events.push({
            type: 'page_view',
            timestamp: Date.now(),
            url: window.location.href
        });
    }
    
    trackScrollDepth() {
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
            );
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                if (maxScroll % 25 === 0) {
                    this.events.push({
                        type: 'scroll_depth',
                        depth: maxScroll,
                        timestamp: Date.now()
                    });
                }
            }
        });
    }
    
    trackClicks() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('a, button, .btn')) {
                this.events.push({
                    type: 'click',
                    element: e.target.tagName,
                    text: e.target.textContent.trim(),
                    timestamp: Date.now()
                });
            }
        });
    }
    
    getSessionData() {
        return {
            duration: Date.now() - this.startTime,
            events: this.events,
            userAgent: navigator.userAgent
        };
    }
}

// Initialize analytics
const analytics = new SimpleAnalytics();

// Send data before page unload
window.addEventListener('beforeunload', () => {
    const sessionData = analytics.getSessionData();
    console.log('Session Analytics:', sessionData);
});`,
      },
      previewUrl:
        'data:text/html;base64,' +
        btoa(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emma Rodriguez - Marketing Specialist</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .navbar { background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.1); padding: 1rem 0; position: fixed; width: 100%; top: 0; z-index: 1000; }
        .nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; }
        .logo { font-size: 1.5rem; font-weight: bold; color: #e74c3c; }
        .nav-links { display: flex; list-style: none; gap: 30px; }
        .nav-links a { text-decoration: none; color: #333; font-weight: 500; transition: color 0.3s; }
        .nav-links a:hover { color: #e74c3c; }
        .hero { background: linear-gradient(135deg, #e74c3c 0%, #f39c12 100%); color: white; padding: 150px 0 100px; text-align: center; }
        .hero h1 { font-size: 3.5rem; margin-bottom: 1rem; }
        .hero p { font-size: 1.3rem; margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto; }
        .btn { display: inline-block; padding: 15px 35px; background: #fff; color: #e74c3c; text-decoration: none; border-radius: 30px; font-weight: bold; transition: all 0.3s; }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
        .services { padding: 100px 0; background: #f8f9fa; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .section-title { text-align: center; font-size: 2.5rem; margin-bottom: 50px; color: #333; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
        .service-card { background: white; padding: 40px; border-radius: 10px; text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: transform 0.3s; }
        .service-card:hover { transform: translateY(-5px); }
        .service-icon { width: 80px; height: 80px; background: #e74c3c; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1rem; font-weight: bold; }
        .contact { padding: 100px 0; background: #2c3e50; color: white; text-align: center; }
        .contact h2 { font-size: 2.5rem; margin-bottom: 20px; }
        .contact p { font-size: 1.2rem; margin-bottom: 30px; }
        .contact-info { display: flex; justify-content: center; gap: 50px; flex-wrap: wrap; }
        .contact-item { text-align: center; }
        .contact-item h3 { margin-bottom: 10px; color: #e74c3c; }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">Emma Rodriguez</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    
    <section class="hero" id="home">
        <div class="container">
            <h1>Marketing That Converts</h1>
            <p>I help businesses grow through strategic marketing campaigns that drive real results and measurable ROI.</p>
            <a href="#contact" class="btn">Let's Work Together</a>
        </div>
    </section>
    
    <section class="services" id="services">
        <div class="container">
            <h2 class="section-title">My Services</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">CHART</div>
                    <h3>Digital Strategy</h3>
                    <p>Comprehensive digital marketing strategies tailored to your business goals and target audience.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">MOBILE</div>
                    <h3>Social Media Marketing</h3>
                    <p>Engaging social media campaigns that build brand awareness and drive customer engagement.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">GRAPH</div>
                    <h3>Analytics & Reporting</h3>
                    <p>Data-driven insights and detailed reporting to measure campaign performance and ROI.</p>
                </div>
            </div>
        </div>
    </section>
    
    <section class="contact" id="contact">
        <div class="container">
            <h2>Ready to Grow Your Business?</h2>
            <p>Let's discuss how I can help you achieve your marketing goals.</p>
            <div class="contact-info">
                <div class="contact-item">
                    <h3>Email</h3>
                    <p>emma@marketingpro.com</p>
                </div>
                <div class="contact-item">
                    <h3>Phone</h3>
                    <p>(555) 987-6543</p>
                </div>
                <div class="contact-item">
                    <h3>LinkedIn</h3>
                    <p>linkedin.com/in/emmarodriguez</p>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`),
    },
    {
      id: '4',
      name: 'Photography Portfolio',
      status: 'Review',
      views: '432',
      lastModified: '5 days ago',
      template: 'Visual Artist',
      color: 'bg-chart-4/20 text-chart-4',
      framework: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maya Patel - Photography Portfolio</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/gallery.css">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="logo">MAYA PATEL</div>
            <ul class="nav-links">
                <li><a href="#home">HOME</a></li>
                <li><a href="#gallery">GALLERY</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
    </header>
    
    <section class="hero" id="home">
        <div class="hero-content">
            <h1>MAYA PATEL</h1>
            <p>Capturing moments that tell stories</p>
            <a href="#gallery" class="btn">VIEW PORTFOLIO</a>
        </div>
    </section>
    
    <section class="gallery" id="gallery">
        <div class="container">
            <h2 class="section-title">PORTFOLIO</h2>
            <div class="gallery-grid">
                <div class="gallery-item">
                    <div class="gallery-placeholder">Portrait Session</div>
                    <div class="gallery-overlay">
                        <div>
                            <h3>Portrait Photography</h3>
                            <p>Professional headshots and personal portraits</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="about" id="about">
        <div class="container">
            <div class="about-content">
                <h2>ABOUT</h2>
                <p>I'm a passionate photographer with over 8 years of experience capturing life's most precious moments.</p>
            </div>
        </div>
    </section>
    
    <script src="js/main.js"></script>
    <script src="js/gallery.js"></script>
</body>
</html>`,
      files: {
        'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maya Patel - Photography Portfolio</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/gallery.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="logo">MAYA PATEL</div>
            <ul class="nav-links">
                <li><a href="#home">HOME</a></li>
                <li><a href="#gallery">GALLERY</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            <div class="mobile-menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
    
    <section class="hero" id="home">
        <div class="hero-content">
            <h1>MAYA PATEL</h1>
            <p>Capturing moments that tell stories</p>
            <a href="#gallery" class="btn">VIEW PORTFOLIO</a>
        </div>
    </section>
    
    <section class="gallery" id="gallery">
        <div class="container">
            <h2 class="section-title">PORTFOLIO</h2>
            <div class="gallery-filter">
                <button class="filter-btn active" data-filter="all">ALL</button>
                <button class="filter-btn" data-filter="portrait">PORTRAIT</button>
                <button class="filter-btn" data-filter="wedding">WEDDING</button>
                <button class="filter-btn" data-filter="landscape">LANDSCAPE</button>
                <button class="filter-btn" data-filter="street">STREET</button>
            </div>
            <div class="gallery-grid">
                <div class="gallery-item" data-category="portrait">
                    <div class="gallery-placeholder">Portrait Session</div>
                    <div class="gallery-overlay">
                        <div>
                            <h3>Portrait Photography</h3>
                            <p>Professional headshots and personal portraits</p>
                        </div>
                    </div>
                </div>
                <div class="gallery-item" data-category="wedding">
                    <div class="gallery-placeholder">Wedding Day</div>
                    <div class="gallery-overlay">
                        <div>
                            <h3>Wedding Photography</h3>
                            <p>Capturing your special moments</p>
                        </div>
                    </div>
                </div>
                <div class="gallery-item" data-category="landscape">
                    <div class="gallery-placeholder">Nature Scene</div>
                    <div class="gallery-overlay">
                        <div>
                            <h3>Landscape Photography</h3>
                            <p>Natural beauty in every frame</p>
                        </div>
                    </div>
                </div>
                <div class="gallery-item" data-category="street">
                    <div class="gallery-placeholder">Street Life</div>
                    <div class="gallery-overlay">
                        <div>
                            <h3>Street Photography</h3>
                            <p>Urban stories and candid moments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="about" id="about">
        <div class="container">
            <div class="about-content">
                <h2>ABOUT</h2>
                <div class="about-grid">
                    <div class="about-text">
                        <p>I'm a passionate photographer with over 8 years of experience capturing life's most precious moments. My work spans across portrait, wedding, landscape, and street photography.</p>
                        <p>Based in San Francisco, I believe that every photograph should tell a story and evoke emotion. My approach combines technical expertise with artistic vision to create images that stand the test of time.</p>
                        <div class="about-stats">
                            <div class="stat">
                                <h3>500+</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div class="stat">
                                <h3>8+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div class="stat">
                                <h3>50+</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-image">
                        <div class="photographer-placeholder">Maya Patel</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="contact" id="contact">
        <div class="container">
            <h2>GET IN TOUCH</h2>
            <div class="contact-grid">
                <div class="contact-info">
                    <div class="contact-item">
                        <h3>EMAIL</h3>
                        <p>maya@mayapatel.com</p>
                    </div>
                    <div class="contact-item">
                        <h3>PHONE</h3>
                        <p>(555) 123-4567</p>
                    </div>
                    <div class="contact-item">
                        <h3>LOCATION</h3>
                        <p>San Francisco, CA</p>
                    </div>
                </div>
                <div class="contact-form">
                    <form>
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit" class="btn">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
    <script src="js/main.js"></script>
    <script src="js/gallery.js"></script>
    <script src="js/contact.js"></script>
</body>
</html>`,
        'css/main.css': `* { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
}

:root {
    --primary-color: #f39c12;
    --dark-bg: #000;
    --light-text: #fff;
    --gray-bg: #111;
    --gray-text: #ccc;
}

body { 
    font-family: 'Inter', sans-serif; 
    line-height: 1.6; 
    color: #333; 
    background: var(--dark-bg); 
    color: var(--light-text);
}

.header { 
    position: fixed; 
    top: 0; 
    width: 100%; 
    background: rgba(0,0,0,0.9); 
    backdrop-filter: blur(10px); 
    z-index: 1000; 
    padding: 20px 0; 
}

.nav { 
    max-width: 1200px; 
    margin: 0 auto; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 0 20px; 
}

.logo { 
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem; 
    font-weight: bold; 
    letter-spacing: 2px; 
}

.nav-links { 
    display: flex; 
    list-style: none; 
    gap: 30px; 
}

.nav-links a { 
    color: var(--light-text); 
    text-decoration: none; 
    font-size: 0.9rem; 
    letter-spacing: 1px; 
    transition: color 0.3s; 
    font-weight: 300;
}

.nav-links a:hover { 
    color: var(--primary-color); 
}

.mobile-menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.mobile-menu-toggle span {
    width: 25px;
    height: 2px;
    background: var(--light-text);
    margin: 3px 0;
    transition: 0.3s;
}

.hero { 
    height: 100vh; 
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), 
                radial-gradient(circle at 30% 20%, #444 0%, #222 50%, #000 100%); 
    background-size: cover; 
    background-position: center; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    text-align: center; 
}

.hero-content h1 { 
    font-family: 'Playfair Display', serif;
    font-size: 4rem; 
    margin-bottom: 1rem; 
    font-weight: 400; 
    letter-spacing: 3px; 
}

.hero-content p { 
    font-size: 1.2rem; 
    margin-bottom: 2rem; 
    opacity: 0.9; 
    font-weight: 300;
}

.btn { 
    display: inline-block; 
    padding: 12px 30px; 
    border: 2px solid var(--primary-color); 
    color: var(--primary-color); 
    text-decoration: none; 
    letter-spacing: 1px; 
    transition: all 0.3s; 
    font-weight: 400;
    background: transparent;
    cursor: pointer;
}

.btn:hover { 
    background: var(--primary-color); 
    color: var(--dark-bg); 
}

.container { 
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 0 20px; 
}

.section-title { 
    text-align: center; 
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem; 
    margin-bottom: 50px; 
    font-weight: 400; 
    letter-spacing: 2px; 
}

.about { 
    padding: 100px 0; 
    background: #222; 
}

.about-content { 
    max-width: 1000px; 
    margin: 0 auto; 
}

.about h2 { 
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem; 
    margin-bottom: 30px; 
    font-weight: 400; 
    text-align: center;
}

.about-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 60px;
    align-items: center;
    margin-top: 40px;
}

.about-text p { 
    font-size: 1.1rem; 
    line-height: 1.8; 
    margin-bottom: 20px; 
    color: var(--gray-text);
    font-weight: 300;
}

.about-stats {
    display: flex;
    gap: 40px;
    margin-top: 40px;
}

.stat {
    text-align: center;
}

.stat h3 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 5px;
}

.stat p {
    font-size: 0.9rem;
    color: var(--gray-text);
    margin: 0;
}

.about-image {
    display: flex;
    justify-content: center;
}

.photographer-placeholder {
    width: 250px;
    height: 300px;
    background: linear-gradient(135deg, #333, #555);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--light-text);
    font-size: 1.2rem;
    border-radius: 10px;
}

.contact {
    padding: 100px 0;
    background: var(--dark-bg);
}

.contact h2 {
    font-family: 'Playfair Display', serif;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 50px;
    font-weight: 400;
    letter-spacing: 2px;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    max-width: 1000px;
    margin: 0 auto;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.contact-item h3 {
    font-size: 1rem;
    letter-spacing: 1px;
    color: var(--primary-color);
    margin-bottom: 10px;
}

.contact-item p {
    font-size: 1.1rem;
    color: var(--gray-text);
}

.contact-form form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contact-form input,
.contact-form textarea {
    background: #222;
    border: 1px solid #444;
    color: var(--light-text);
    padding: 15px;
    border-radius: 5px;
    font-family: inherit;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}`,
        'css/gallery.css': `.gallery { 
    padding: 100px 0; 
    background: var(--gray-bg); 
}

.gallery-filter {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.filter-btn {
    background: transparent;
    border: 1px solid #444;
    color: var(--gray-text);
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s;
    letter-spacing: 1px;
    font-size: 0.9rem;
}

.filter-btn:hover,
.filter-btn.active {
    border-color: var(--primary-color);
    color: var(--primary-color);
}

.gallery-grid { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
    gap: 20px; 
}

.gallery-item { 
    position: relative; 
    overflow: hidden; 
    aspect-ratio: 4/3; 
    background: #333; 
    border-radius: 10px;
    cursor: pointer;
}

.gallery-placeholder {
    width: 100%; 
    height: 100%; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    color: var(--light-text); 
    font-size: 1.2rem;
    background: linear-gradient(45deg, #2c3e50, #34495e);
    transition: transform 0.3s;
}

.gallery-item:hover .gallery-placeholder { 
    transform: scale(1.05); 
}

.gallery-overlay { 
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0; 
    background: rgba(0,0,0,0.8); 
    opacity: 0; 
    transition: opacity 0.3s; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    text-align: center;
    padding: 20px;
}

.gallery-item:hover .gallery-overlay { 
    opacity: 1; 
}

.gallery-overlay h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--primary-color);
}

.gallery-overlay p {
    color: var(--gray-text);
    font-size: 0.9rem;
    line-height: 1.4;
}`,
        'css/responsive.css': `@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
    
    .mobile-menu-toggle {
        display: flex;
    }
    
    .hero-content h1 {
        font-size: 2.5rem;
    }
    
    .hero-content p {
        font-size: 1rem;
    }
    
    .gallery-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }
    
    .about-grid {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }
    
    .about-stats {
        justify-content: center;
        gap: 30px;
    }
    
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .gallery-filter {
        gap: 10px;
    }
    
    .filter-btn {
        padding: 8px 15px;
        font-size: 0.8rem;
    }
}

@media (max-width: 480px) {
    .hero-content h1 {
        font-size: 2rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .about h2,
    .contact h2 {
        font-size: 2rem;
    }
    
    .container {
        padding: 0 15px;
    }
    
    .gallery {
        padding: 60px 0;
    }
    
    .about,
    .contact {
        padding: 60px 0;
    }
}`,
        'js/main.js': `// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.gallery-item, .about-content, .contact-grid');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});`,
        'js/gallery.js': `// Gallery filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Gallery item click handler for lightbox (placeholder)
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log('Gallery item clicked - lightbox functionality would go here');
            // Here you would implement lightbox functionality
        });
    });
});

// Masonry-like layout adjustment
function adjustGalleryLayout() {
    const grid = document.querySelector('.gallery-grid');
    if (!grid) return;
    
    // Simple responsive adjustment
    const items = grid.querySelectorAll('.gallery-item');
    const containerWidth = grid.offsetWidth;
    const itemWidth = 350;
    const gap = 20;
    const columns = Math.floor((containerWidth + gap) / (itemWidth + gap));
    
    if (columns > 1) {
        grid.style.gridTemplateColumns = \`repeat(\${columns}, 1fr)\`;
    }
}

// Adjust layout on resize
window.addEventListener('resize', adjustGalleryLayout);
document.addEventListener('DOMContentLoaded', adjustGalleryLayout);`,
        'js/contact.js': `// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'SENDING...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
});

// Contact info click handlers
document.addEventListener('DOMContentLoaded', function() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        const text = item.querySelector('p').textContent;
        
        item.addEventListener('click', () => {
            if (text.includes('@')) {
                // Email
                window.location.href = \`mailto:\${text}\`;
            } else if (text.includes('(') || text.includes('-')) {
                // Phone
                window.location.href = \`tel:\${text.replace(/[^\d]/g, '')}\`;
            }
        });
        
        // Add cursor pointer for clickable items
        if (text.includes('@') || text.includes('(') || text.includes('-')) {
            item.style.cursor = 'pointer';
        }
    });
});`,
      },
      previewUrl:
        'data:text/html;base64,' +
        btoa(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maya Patel - Photography Portfolio</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Georgia', serif; line-height: 1.6; color: #333; background: #000; color: #fff; }
        .header { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.9); backdrop-filter: blur(10px); z-index: 1000; padding: 20px 0; }
        .nav { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; }
        .logo { font-size: 1.8rem; font-weight: bold; letter-spacing: 2px; }
        .nav-links { display: flex; list-style: none; gap: 30px; }
        .nav-links a { color: #fff; text-decoration: none; font-size: 0.9rem; letter-spacing: 1px; transition: color 0.3s; }
        .nav-links a:hover { color: #f39c12; }
        .hero { height: 100vh; background: radial-gradient(circle at 30% 20%, #444 0%, #222 50%, #000 100%); display: flex; align-items: center; justify-content: center; text-align: center; }
        .hero-content h1 { font-size: 4rem; margin-bottom: 1rem; font-weight: 300; letter-spacing: 3px; }
        .hero-content p { font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9; }
        .btn { display: inline-block; padding: 12px 30px; border: 2px solid #f39c12; color: #f39c12; text-decoration: none; letter-spacing: 1px; transition: all 0.3s; }
        .btn:hover { background: #f39c12; color: #000; }
        .gallery { padding: 100px 0; background: #111; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .section-title { text-align: center; font-size: 2.5rem; margin-bottom: 50px; font-weight: 300; letter-spacing: 2px; }
        .gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 20px; }
        .gallery-item { position: relative; overflow: hidden; aspect-ratio: 4/3; background: #333; border-radius: 10px; }
        .gallery-item:hover img { transform: scale(1.05); }
        .gallery-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); opacity: 0; transition: opacity 0.3s; display: flex; align-items: center; justify-content: center; text-align: center; }
        .gallery-item:hover .gallery-overlay { opacity: 1; }
        .about { padding: 100px 0; background: #222; }
        .about-content { max-width: 800px; margin: 0 auto; text-align: center; }
        .about h2 { font-size: 2.5rem; margin-bottom: 30px; font-weight: 300; }
        .about p { font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px; }
    </style>
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="logo">MAYA PATEL</div>
            <ul class="nav-links">
                <li><a href="#home">HOME</a></li>
                <li><a href="#gallery">GALLERY</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
    </header>
    
    <section class="hero" id="home">
        <div class="hero-content">
            <h1>MAYA PATEL</h1>
            <p>Capturing moments that tell stories</p>
            <a href="#gallery" class="btn">VIEW PORTFOLIO</a>
        </div>
    </section>
    
    <section class="gallery" id="gallery">
        <div class="container">
            <h2 class="section-title">PORTFOLIO</h2>
            <div class="gallery-grid">
                <div class="gallery-item">
                    <div style="width: 100%; height: 100%; background: linear-gradient(45deg, #2c3e50, #34495e); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem;">Portrait Session</div>
                    <div class="gallery-overlay">
                        <div>
                            <h3>Portrait Photography</h3>
                            <p>Professional headshots and personal portraits</p>
                        </div>
                    </div>
                </div>
                <div class="gallery-item">
                    <div style="width: 100%; height: 100%; background: linear-gradient(45deg, #8e44ad, #9b59b6); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem;">Wedding Day</div>
                    <div class="gallery-overlay">
                        <div>
                            <h3>Wedding Photography</h3>
                            <p>Capturing your special moments</p>
                        </div>
                    </div>
                </div>
                <div class="gallery-item">
                    <div style="width: 100%; height: 100%; background: linear-gradient(45deg, #e67e22, #f39c12); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem;">Nature Scene</div>
                    <div class="gallery-overlay">
                        <div>
                            <h3>Landscape Photography</h3>
                            <p>Natural beauty in every frame</p>
                        </div>
                    </div>
                </div>
                <div class="gallery-item">
                    <div style="width: 100%; height: 100%; background: linear-gradient(45deg, #27ae60, #2ecc71); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem;">Street Life</div>
                    <div class="gallery-overlay">
                        <div>
                            <h3>Street Photography</h3>
                            <p>Urban stories and candid moments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="about" id="about">
        <div class="container">
            <div class="about-content">
                <h2>ABOUT</h2>
                <p>I'm a passionate photographer with over 8 years of experience capturing life's most precious moments. My work spans across portrait, wedding, landscape, and street photography.</p>
                <p>Based in San Francisco, I believe that every photograph should tell a story and evoke emotion. My approach combines technical expertise with artistic vision to create images that stand the test of time.</p>
            </div>
        </div>
    </section>
</body>
</html>`),
    },
  ];

  return (
    <Card className='bg-card/50 border-border'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle className='text-foreground'>Recent Projects</CardTitle>
        <Button
          variant='ghost'
          size='sm'
          className='text-muted-foreground hover:text-foreground'
        >
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => onProjectClick?.(project)}
              className='flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer'
            >
              <div className='flex items-center space-x-4'>
                <div
                  className={`w-10 h-10 rounded-lg ${project.color} flex items-center justify-center`}
                >
                  <span className='text-sm font-semibold'>
                    {project.name
                      .split(' ')
                      .map((word) => word[0])
                      .join('')
                      .slice(0, 2)}
                  </span>
                </div>
                <div>
                  <div className='flex items-center space-x-2'>
                    <h3 className='font-medium text-foreground'>
                      {project.name}
                    </h3>
                    {project.framework === 'nextjs' && (
                      <Badge
                        variant='outline'
                        className='text-xs bg-black text-white border-black'
                      >
                        Next.js
                      </Badge>
                    )}
                  </div>
                  <div className='flex items-center space-x-2 mt-1'>
                    <Badge
                      variant={
                        project.status === 'Published' ? 'default' : 'secondary'
                      }
                      className='text-xs'
                    >
                      {project.status}
                    </Badge>
                    <span className='text-xs text-muted-foreground'>
                      {project.views} views • {project.lastModified}
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex items-center space-x-2'>
                <Button variant='ghost' size='sm'>
                  <Edit3 className='w-4 h-4' />
                </Button>
                <Button variant='ghost' size='sm'>
                  <ExternalLink className='w-4 h-4' />
                </Button>
                <Button variant='ghost' size='sm'>
                  <MoreHorizontal className='w-4 h-4' />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
