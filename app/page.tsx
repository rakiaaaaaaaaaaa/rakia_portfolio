"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  MapPin,
  Calendar,
  Sun,
  Moon,
  Code,
  Database,
  Settings,
  Briefcase,
  GraduationCap,
  User,
  FolderOpen,
  Send,
  Award,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function CVPage() {
  const [darkMode, setDarkMode] = useState(true)
  const [currentSkill, setCurrentSkill] = useState(0)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const skills = ["Software Engineering Student", "AI Enthusiast", "data scientist", "Community Leader"]

  const [showCVSection, setShowCVSection] = useState(false)
  const contactSectionRef = useRef<HTMLElement>(null)

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const downloadPDF = () => {
    // Download the PDF file from the public folder
    const link = document.createElement("a")
    link.href = "/rakia_souei_2025.pdf"
    link.download = "Rakia_Souei_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [skills.length])

  useEffect(() => {
    // Apply dark mode by default on initial load
    document.documentElement.classList.add("dark")

    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform-origin-0 z-50"
        style={{ scaleX }}
      />

      {/* Dark Mode Toggle */}
      <motion.button
        className="fixed top-6 right-6 z-40 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
        onClick={() => setDarkMode(!darkMode)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
      </motion.button>

      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/1.png"
                  alt="Rakia Souei - Software Engineering Student"
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm Rakia Souei
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="mr-2">A</span>
              <motion.span
                key={currentSkill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-blue-600 dark:text-blue-400 font-semibold"
              >
                {skills[currentSkill]}
              </motion.span>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full"
                onClick={() => setShowCVSection(true)}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                onClick={scrollToContact}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <User className="w-8 h-8 text-blue-600" />
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <Card className="p-8 h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Who am I ?</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      I’m Rakia Souei, a final-year Software Engineering and Information Systems student passionate about innovation, leadership, and social impact. As Founder and President of the Association de Recherche Scientifique et Innovation en Informatique ISIMG 2025 and the IEEE ISIMG Student Branch, I’ve led initiatives connecting technology, research, and community.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Recognized with awards like DevHack 2nd Place, IEEE CS Region 8 “Share Your Journey” Winner (2024), and IEEE Region 8 Inspiring Technology Ambassador (2025), I’m skilled in AI, Machine Learning, Deep Learning, Data Science, creating data-driven solutions that drive innovation and positive social impact.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-8 h-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">Quick Facts</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-purple-500" />
                        <span>AI and Data Science Enthusiast</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-purple-500" />
                        <span>President of the Association de Recherche Scientifique et Innovation en Informatique ISIMG 2025</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-purple-500" />
                        <span>IEEE Contest Winner 2024</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Briefcase className="w-5 h-5 text-orange-500" />
                        <span>Student Entrepreneur Nominee 2025</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-red-500" />
                        <span>Community Volunteer & Leader</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Settings className="w-8 h-8 text-blue-600" />
                Skills
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Programming & Development */}
              <motion.div variants={fadeInUp}>
                <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-6">
                      <Code className="w-8 h-8 text-blue-600" />
                      <h3 className="text-xl font-bold">Programming & Development</h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        { name: "Python", level: 90 },
                        { name: "Java", level: 80 },
                        { name: "JavaScript", level: 85 },
                        { name: "Django & Symfony", level: 80 },
                        { name: "React.js & Flutter", level: 70 },
                        { name: "SQL & Databases", level: 80 },
                        { name: "Git & GitHub", level: 90 },
                        { name: "PHP", level: 75 },
                        { name: "HTML & CSS", level: 95 },
                        { name: "Testing", level: 70 },
                      ].map((skill, index) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* AI & Data Science */}
              <motion.div variants={fadeInUp}>
                <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-6">
                      <Database className="w-8 h-8 text-green-600" />
                      <h3 className="text-xl font-bold">AI & Data Science</h3>
                    </div>
                    <div className="space-y-4">
                      {[
       { name: "Deep Learning", level: 85 },
          { name: "Generative AI", level: 80 },
          { name: "Natural Language Processing (NLP)", level: 75 },
          { name: "NVIDIA Diffusion Models", level: 70 },
          { name: "Predictive Analytics", level: 80 },
          { name: "Data Visualization", level: 85 },
          { name: "TensorFlow & Keras", level: 80 },
          { name: "PyTorch", level: 70 },
          { name: "Scikit-learn", level: 75 },
          { name: "Power BI & Tableau", level: 75 },
          { name: "Matplotlib & Seaborn", level: 80 },
                      ].map((skill, index) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Tools & Technologies */}
              <motion.div variants={fadeInUp}>
                <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-6">
                      <Settings className="w-8 h-8 text-purple-600" />
                      <h3 className="text-xl font-bold">Tools & Technologies</h3>
                    </div>
                    <div className="space-y-4">
                      {[
          { name: "WordPress", level: 85 },
          { name: "Figma & Photoshop", level: 85 },
          { name: "Canva", level: 80 },
          { name: "Big Data", level: 75 },
          { name: "Cloud", level: 75 },
          { name: "Power BI", level: 70 },
          { name: "Agile & Scrum", level: 80 },
          { name: "ERP Systems", level: 70 },
          { name: "Financial Modeling", level: 70 },
          { name: "Business Intelligence", level: 75 },
          { name: "Project Management", level: 80 },
                      ].map((skill, index) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
<section className="py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
        <FolderOpen className="w-8 h-8 text-blue-600" />
        Featured Projects
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
    </motion.div>

    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {[
        {
          title: "Deep Learning Spinal Cord Segmentation",
          description:
            "Developed a full pipeline for automated spinal cord segmentation in 3D MRI using U-Net, achieving 85.53% Dice and 87.42% IoU. Integrated CSA prediction, demographic modeling, and a Flutter mobile app for clinical deployment.",
          tags: ["Deep Learning", "U-Net", "Medical AI", "Flutter", "3D MRI"],
          color: "from-blue-500 to-purple-600",
          github:
            "https://github.com/rakiaaaaaaaaaaa/Deep-Learning-Spinal-Cord-Segmentation",
        },
        {
          title: "IoT Smart House System",
          description:
            "Simulated an IoT-based smart home using Arduino, Blynk, and PicsimLab. Automated temperature, garden lighting, and water management with a real-time mobile dashboard.",
          tags: ["IoT", "Arduino", "Blynk", "Automation", "Smart Home"],
          color: "from-green-500 to-blue-600",
          github: "https://github.com/rakiaaaaaaaaaaa/Iot_Smart_house",
        },
        {
          title: "Breast Cancer Detection using Deep Learning",
          description:
            "Built a medical image classification model for breast cancer detection and integrated it into an interactive web-based visualization platform.",
          tags: ["Deep Learning", "Medical AI", "Cancer Detection", "Web App"],
          color: "from-red-500 to-pink-600",
          github: "https://github.com/rakiaaaaaaaaaaa/Breast-cancer-AI",
        },
        {
          title: "Skin Cancer Detection using CNN",
          description:
            "Developed a CNN-based classifier for skin lesion images, achieving high diagnostic accuracy with a user-friendly web demo interface.",
          tags: ["CNN", "Medical AI", "Skin Cancer", "Classification"],
          color: "from-orange-500 to-red-600",
          github:
            "https://github.com/rakiaaaaaaaaaaa/skin-cancer-classification",
        },
        {
          title: "IEEE ISIMG IAS Chapter Website",
          description:
            "Designed and developed the official IEEE ISIMG IAS website using React.js and Tailwind CSS. Includes responsive layout, interactive sections, and real-time event updates.",
          tags: ["React.js", "Tailwind CSS", "IEEE", "Responsive Design"],
          color: "from-purple-500 to-pink-600",
          github: "https://ias-isimg.ieee.tn/",
        },
        {
          title: "IEEE ISIMG Student Branch Website",
          description:
            "Created the official IEEE ISIMG Student Branch website to centralize events, news, and member engagement with a dynamic and accessible design.",
          tags: ["Web Development", "IEEE", "Community", "Events"],
          color: "from-indigo-500 to-purple-600",
          github: "https://isimg.ieee.tn/",
        },
      ].map((project) => (
        <motion.div key={project.title} variants={fadeInUp}>
          <Card className="group h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <CardContent className="p-0">
              <div
                className={`h-48 bg-gradient-to-br ${project.color} rounded-t-lg flex items-center justify-center`}
              >
                <Code className="w-16 h-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


        {/* Experience Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Briefcase className="w-8 h-8 text-blue-600" />
                Experience & Leadership
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </motion.div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

              {[
  {
    title: "Django Developer Intern",
    company: "Squad Crafter - Gabes, Tunisia",
    period: "July 2025",
    achievements: [
      "Contributed to the development of a smart university educational platform using Django, Vue.js, and AI",
      "Designed features enhancing accessibility, interactivity, and overall user experience",
      "Strengthened expertise in full-stack development and AI-driven educational applications",
    ],
  },
  {
    title: "Software Development Intern",
    company: "TS Import Tunisia",
    period: "June 2025 - August 2025",
    achievements: [
      "Developed the backend of an E-commerce platform using Django and REST APIs",
      "Implemented database models, authentication systems, and data validation mechanisms",
      "Improved performance and security of backend services through clean code practices",
    ],
  },
  {
    title: "Agile and Business Intern",
    company: "MG MAXI - Gabes, Tunisia",
    period: "August 2024",
    achievements: [
      "Explored ERP system implementation and digital transformation strategies",
      "Created Excel-based financial dashboards and data visualization tools",
      "Enhanced business optimization and performance tracking through data-driven insights",
    ],
  },
  {
    title: "IoT and Embedded Systems Intern",
    company: "Emertxe - India",
    period: "July 2024 - August 2024",
    achievements: [
      "Built a smart home automation system using Arduino, PICSimLab, and Blynk",
      "Integrated sensors and actuators for temperature, lighting, and security control",
      "Developed practical IoT solutions aligned with real-world automation needs",
    ],
  },
    {
    title: "Founder and President",
    company: "ARSII – Association de Recherche Scientifique et Innovation en Informatique",
    period: "2024 - 2025",
    achievements: [
      "Founded ARSII to promote scientific research and innovation in computer science and AI",
      "Led projects in AI, robotics, and software development to foster student-led research",
      "Organized national hackathons and conferences to encourage collaboration and innovation",
    ],
  },
  {
    title: "Founder and Chairwoman",
    company: "IEEE ISIMG IAS Student Branch Chapter",
    period: "2024 - 2025",
    achievements: [
      "Founded and led the IEEE IAS Chapter at ISIMG",
      "Organized technical workshops, hackathons, and professional development events",
      "Managed a multidisciplinary team and fostered collaboration among students",
    ],
  },
  {
    title: "Founder and Chair",
    company: "IEEE SIGHT (Special Interest Group on Humanitarian Technology) – ISIMG",
    period: "2024 - 2025",
    achievements: [
      "Established and led the IEEE SIGHT group at ISIMG to promote technology-based humanitarian innovation",
      "Launched community-driven projects integrating AI, IoT, and sustainability solutions",
      "Collaborated with local and international IEEE groups to expand humanitarian impact",
    ],
  },

  {
    title: "Vice Chair",
    company: "IEEE ISIMG Student Branch",
    period: "2024",
    achievements: [
      "Assisted in branch operations and coordinated technical and social events",
      "Mentored new IEEE members and strengthened community engagement",
      "Supported project planning and collaboration across IEEE chapters",
    ],
                },
              ].map((job, index) => (
                <motion.div
                  key={job.title}
                  className="relative pl-20 pb-12"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{job.title}</h3>
                          <p className="text-lg font-semibold">{job.company}</p>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                          {job.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certificates Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                Education & Certifications
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="mb-16"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Education</h3>
              <div className="space-y-6">
                <motion.div variants={fadeInUp}>
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-3 mb-4">
                        <GraduationCap className="w-8 h-8 text-blue-600" />
                        <div>
                          <h4 className="text-xl font-bold">Software Engineering</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            Higher Institute of Computing and Multimedia of Gabès
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">September 2023 - Current</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Final-year software engineering student specializing in AI, data science, and modern software
                        development practices.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-3 mb-4">
                        <GraduationCap className="w-8 h-8 text-green-600" />
                        <div>
                          <h4 className="text-xl font-bold">Preparatory Cycle</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            Higher Institute of Computing and Multimedia of Gabès
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">September 2021 - June 2023</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Completed preparatory studies in mathematics, physics, and computer science fundamentals.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* Certificates */}
            <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h3 className="text-2xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">
                Professional Certifications
              </h3>

              {/* Technical Certifications */}
              <motion.div className="mb-8" variants={fadeInUp}>
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  Technical & Development
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "NVIDIA: Generative AI with Diffusion Models", org: "NVIDIA" },
                    { name: "The Hashgraph Developer Course", org: "Hashgraph" },
                    { name: "Python 101 for Data Science", org: "IBM" },
                    { name: "Flutter Training Bootcamp", org: "IEEE Computer Society" },
                    { name: "Dar Blockchain Friday Program Certificate", org: "Dar Blockchain" },
                    { name: "General IA Basics and NLP", org: "The NGB" },
                  ].map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{cert.name}</span>
                        <p className="text-sm text-blue-600 dark:text-blue-400">{cert.org}</p>
                      </div>
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Business & Leadership */}
              <motion.div className="mb-8" variants={fadeInUp}>
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-green-600" />
                  Business & Leadership
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "Innovation and Entrepreneurship", org: "Avila University" },
                    { name: "Scrum Fundamentals Certified (SFC)", org: "ScrumStudy" },
                    { name: "Training in Negotiation Techniques", org: "4C FSG" },
                    { name: "Fostering Diversity, Equity and Inclusion", org: "IEEE" },
                    { name: "Integrating Sustainability in Your Career", org: "IEEE" },
                    { name: "Soft Skills", org: "WeYouth" },
                  ].map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{cert.name}</span>
                        <p className="text-sm text-green-600 dark:text-green-400">{cert.org}</p>
                      </div>
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* IEEE Programs & Awards */}
              <motion.div className="mb-8" variants={fadeInUp}>
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-purple-600" />
                  IEEE Programs & Recognition
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Computer Society R8 Share Your Journey Contest Winner",
                      org: "IEEE Computer Society",
                      isAward: false,
                    },
                    { name: "Region 8 Humanitarian Ambassadors Program", org: "IEEE" },
                    { name: "Computer Society Mentorship Program", org: "IEEE" },
                    { name: "PES HAC CONGRESS Ambassador", org: "IEEE PES" },
                  ].map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      className={`flex justify-between items-center p-4 ${cert.isAward ? "bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900" : "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700"} rounded-lg hover:shadow-md transition-shadow duration-300`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{cert.name}</span>
                        <p
                          className={`text-sm ${cert.isAward ? "text-yellow-600 dark:text-yellow-400" : "text-purple-600 dark:text-purple-400"}`}
                        >
                          {cert.org}
                        </p>
                      </div>
                      <div className={`w-3 h-3 ${cert.isAward ? "bg-yellow-600" : "bg-purple-600"} rounded-full`}></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Language & Cultural */}
              <motion.div className="mb-8" variants={fadeInUp}>
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <User className="w-5 h-5 text-indigo-600" />
                  Language & Cultural Development
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "English Language Course", org: "Elite School" },
                    { name: "English Training", org: "Center Asia World" },
                    { name: "French Training", org: "Center Asia World" },
                    { name: "Step for Future", org: "AIESEC" },
                  ].map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{cert.name}</span>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400">{cert.org}</p>
                      </div>
                      <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Community Service */}
              <motion.div variants={fadeInUp}>
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <Send className="w-5 h-5 text-red-600" />
                  Community Service & Training
                </h4>
                <div className="grid md:grid-cols-1 gap-4 max-w-2xl mx-auto">
                  <motion.div
                    className="flex justify-between items-center p-4 bg-gradient-to-r from-red-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">Initiation Training</span>
                      <p className="text-sm text-red-600 dark:text-red-400">Tunisian Red Crescent</p>
                    </div>
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-blue-600" />
                Honors & Awards
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "DevHACH AI Hackathon - Second Place Winner",
                  organization: "Gabes University",
                  year: "2024",
                  description: "Achieved second place in AI hackathon competition",
                  color: "from-yellow-500 to-orange-600",
                },
                {
                  title: "IEEE R8 Computer Society SYP Contest Winner",
                  organization: "IEEE Computer Society",
                  year: "2024",
                  description: "Winner of the Share Your Journey contest in Region 8, attending in person in Cairo, Egypt.",
                  color: "from-blue-500 to-purple-600",
                },
                {
                  title: "Student Entrepreneur Status",
                  organization: "University of Gabès",
                  year: "2025",
                  description: "Nominated for student entrepreneur recognition",
                  color: "from-green-500 to-teal-600",
                },
                {
                  title: "Inspiring Student Ambassador",
                  organization: "IEEE Region 8 SIGHT on Humanitarian Technology",
                  year: "2024",
                  description: "Selected as ambassador for humanitarian technology initiatives",
                  color: "from-purple-500 to-pink-600",
                },
              ].map((award, index) => (
                <motion.div key={award.title} variants={fadeInUp}>
                  <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className={`h-4 bg-gradient-to-r ${award.color} rounded-t-lg mb-4 -mx-6 -mt-6`}></div>
                      <div className="flex items-start gap-4">
                        <Award className={`w-8 h-8 text-yellow-600 flex-shrink-0 mt-1`} />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{award.title}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{award.organization}</p>
                          <p className="text-gray-600 dark:text-gray-300 mb-3">{award.description}</p>
                          <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                            {award.year}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={contactSectionRef}
          className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Send className="w-8 h-8 text-blue-600" />
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology and innovation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <div className="space-y-6">
                  <motion.a
                    href="mailto:rakia.souei@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">rakia.souei@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com/rakiaaaaaaaaaaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Github className="w-6 h-6 text-gray-800 dark:text-white" />
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <p className="text-gray-600 dark:text-gray-300">github.com/rakiaaaaaaaaaaa</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/rakia-souei-b98a0822b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Linkedin className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/rakia-souei</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://rakia-souei.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Globe className="w-6 h-6 text-purple-600" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <p className="text-gray-600 dark:text-gray-300">rakia-souei.vercel.app</p>
                    </div>
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                    <form className="space-y-4">
                      <div className="relative">
                        <Input type="text" placeholder="Your Name" className="peer placeholder-transparent" />
                        <label className="absolute left-3 -top-2.5 bg-white dark:bg-gray-800 px-1 text-sm text-gray-600 dark:text-gray-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600">
                          Your Name
                        </label>
                      </div>

                      <div className="relative">
                        <Input type="email" placeholder="Your Email" className="peer placeholder-transparent" />
                        <label className="absolute left-3 -top-2.5 bg-white dark:bg-gray-800 px-1 text-sm text-gray-600 dark:text-gray-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600">
                          Your Email
                        </label>
                      </div>

                      <div className="relative">
                        <Textarea
                          placeholder="Your Message"
                          rows={4}
                          className="peer placeholder-transparent resize-none"
                        />
                        <label className="absolute left-3 -top-2.5 bg-white dark:bg-gray-800 px-1 text-sm text-gray-600 dark:text-gray-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600">
                          Your Message
                        </label>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detailed CV Section */}
        {showCVSection && (
          <motion.section
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* CV Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Curriculum Vitae</h2>
                <div className="flex gap-2">
                  <Button onClick={downloadPDF} className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowCVSection(false)}
                    className="border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    ✕
                  </Button>
                </div>
              </div>

              {/* CV Content */}
              <div className="p-8 space-y-8">
                {/* Personal Information */}
                <div className="text-center border-b border-gray-200 dark:border-gray-700 pb-8">
                  <h1 className="text-4xl font-bold mb-2">Rakia Souei</h1>
                  <p className="text-xl text-blue-600 dark:text-blue-400 mb-4"> Ai and Software Engineering Student</p>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                    <img
                      src="/1.png"
                      alt="Rakia Souei"
                      className="w-full h-full object-cover"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      rakia.souei@gmail.com
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Tunisia
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      github.com/rakiaaaaaaaaaaa
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      linkedin.com/in/rakia-souei
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      rakia-souei.vercel.app
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    <p>Phone: (+216) 51137455</p>
                 
                  </div>
                </div>

                {/* Professional Summary */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-2">
                    Professional Summary
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
 Final-year Software Engineering and Information Systems student with demonstrated leadership as Founder and President
 of the Association de Recherche Scientifique et Innovation en Informatique ISIMG 2025, and the IEEE ISIMG Student
 Branch, including its IAS Chapter and SIGHT Group. Recipient of multiple international awards, including DevHack 2nd
 Place, IEEE Computer Society Region 8 “Share Your Journey” Winner (Egypt, 2024), IEEE Region 8 Inspiring Technology
 Ambassador (2025), and Student Entrepreneur of the Year (2025). Skilled in AI, Machine Learning, Deep Learning, Data
 Science, Django, with a strong focus on innovation, entrepreneurship, and social impact.
                  </p>
                
                </div>

                {/* Technical Skills */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-2">
                    Technical Skills
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Programming Languages</h3>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Python, Java, JavaScript, PHP, HTML, CSS, SQL</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Frameworks & Technologies</h3>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• React.js, Flutter, Symfony, WordPress, Deep Learning, Generative AI, Natural Language Processing</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Tools & Methodologies</h3>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Git & GitHub, Figma, Photoshop, Canva, ISTQB Basics, AGILE Principles, Scrum Fundamentals</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-2">
                    Education
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold">Software Engineering</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">
                            Higher Institute of Computing and Multimedia of Gabès
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                          Sep 2023 - Current
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Final-year student specializing in software engineering with focus on AI, Web3, and modern
                        development practices.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold">Preparatory Cycle</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">
                            Higher Institute of Computing and Multimedia of Gabès
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                          Sep 2021 - Jun 2023
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Completed preparatory studies in mathematics, physics, and computer science fundamentals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Professional Experience */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-2">
                    Professional Experience & Leadership
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold">Founder and President</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">
                            ARSII ISIMG - Association de Recherche et d'Innovation en Informatique
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                          2025 - 2026
                        </span>
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                        <li>• Founded and leading a research and innovation association in computer science</li>
                        <li>• Organizing workshops and seminars on emerging technologies</li>
                        <li>• Building partnerships with industry professionals and academic institutions</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold">Software Development Intern</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">Squad Crafter - Gabes, Tunisia</p>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                          Jul 2025
                        </span>
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                        <li>• Contributed to the development of a smart university educational platform using Django, Vue.js, and AI</li>
                        <li>• Designed features to improve accessibility, interactivity, and learning outcomes</li>
                        <li>• Strengthened expertise in full-stack development and AI-driven applications for education</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold">Founder and Chairwoman</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">
                            IEEE ISIMG IAS Student Branch Chapter
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                          2024 - 2025
                        </span>
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                        <li>• Established and managing IEEE Industry Applications Society student chapter</li>
                        <li>• Organizing technical events and professional development workshops</li>
                        <li>• Leading a team of student volunteers and coordinating chapter activities</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold">Software Development Intern</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">MG MAXI - Gabes, Tunisia</p>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                          Aug 2024
                        </span>
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                        <li>• Supported ERP-related tasks and contributed to digital transformation initiatives</li>
                        <li>• Applied programming skills to address local business requirements</li>
                        <li>• Enhanced understanding of business processes and software integration in administration and management contexts</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold">Software Engineering Intern</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">Emertex - India</p>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                          Jul 2024 - Aug 2024
                        </span>
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                        <li>• Worked on software development projects in an international environment</li>
                        <li>• Gained experience in agile development methodologies</li>
                        <li>• Collaborated with cross-cultural teams on technical solutions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Key Projects */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-2">
                    Key Projects
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold mb-1">Deep Learning Spinal Cord Segmentation</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        Developed a comprehensive pipeline for automated spinal cord segmentation in 3D MRI using a U-Net architecture, achieving 85.53% Dice coefficient and 87.42% IoU. Integrated CSA prediction with demographic modeling and developed a Flutter mobile app for clinical usage.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                          Deep Learning
                        </span>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">
                          U-Net
                        </span>
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">
                          Medical AI
                        </span>
                        <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded text-xs">
                          Flutter
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-1">IoT Smart House System</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        Simulated a smart home automation system using Arduino, Blynk IoT platform, and Picsimlab simulator. Features include temperature monitoring with automated heater/cooler control, LDR-based garden lighting, and water tank management with a real-time mobile interface.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                          IoT
                        </span>
                        <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-xs">
                          Arduino
                        </span>
                        <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded text-xs">
                          Blynk
                        </span>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">
                          Smart Home
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-1">Breast Cancer Detection using Deep Learning</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        Developed a deep learning model for breast cancer classification using medical imaging datasets. Integrated model into a web interface for live demo and visualization.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                          Deep Learning
                        </span>
                        <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-xs">
                          Medical AI
                        </span>
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">
                          Cancer Detection
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-1">Skin Cancer Detection using Deep Learning</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        Implemented a convolutional neural network to classify various types of skin lesions using image datasets. Achieved high accuracy and deployed as an interactive web demo.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                          CNN
                        </span>
                        <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-xs">
                          Medical AI
                        </span>
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">
                          Classification
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-1">IEEE ISIMG IAS Chapter Website</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        Developed the official website for the IEEE ISIMG IAS Chapter, using React.js, Tailwind CSS, and JavaScript to create a dynamic, responsive, and user-friendly platform for members and visitors.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                          React.js
                        </span>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">
                          Tailwind CSS
                        </span>
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">
                          IEEE
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-1">IEEE ISIMG Student Branch Website</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        Designed and developed the official website for the IEEE ISIMG Student Branch, serving as a hub for events, announcements, and member engagement.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                          Web Development
                        </span>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">
                          IEEE
                        </span>
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">
                          Community
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Honors and Awards */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-2">
                    Honors and Awards
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-yellow-50 dark:bg-yellow-900 rounded border-l-4 border-yellow-500">
                      <h3 className="font-bold">DevHACH AI Hackathon - Second Place Winner</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Gabes University - 2024</p>
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-900 rounded border-l-4 border-blue-500">
                      <h3 className="font-bold">IEEE R8 CS SYP Contest Winner</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">IEEE Computer Society - 2024</p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-900 rounded border-l-4 border-green-500">
                      <h3 className="font-bold">Student Entrepreneur Status</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">University of Gabès - Nominated 2025</p>
                    </div>
                    <div className="p-3 bg-purple-50 dark:bg-purple-900 rounded border-l-4 border-purple-500">
                      <h3 className="font-bold">Inspiring Student Ambassador</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">IEEE Region 8 SIG - 2024</p>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-2">
                    Languages
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Arabic</span>
                      <span className="text-sm text-gray-500">Native</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">English</span>
                      <span className="text-sm text-gray-500">Fluent</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">French</span>
                      <span className="text-sm text-gray-500">Intermediate</span>
                    </div>
                  </div>
                </div>

                {/* Volunteering */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-2">
                    Volunteering & Community Service
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                      <span className="font-medium">Content Creator - IEEE WIE Collaboratec</span>
                      <span className="text-sm text-gray-500">2025</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                      <span className="font-medium">Member - JCI Gabès</span>
                      <span className="text-sm text-gray-500">2025</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                      <span className="font-medium">Member - AIESEC Tacapes</span>
                      <span className="text-sm text-gray-500">2022 - 2024</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                      <span className="font-medium">Tunisian Red Crescent Volunteer</span>
                      <span className="text-sm text-gray-500">2019 & 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* Footer */}
        <footer className="py-8 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              © 2025 Rakia Souei. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
