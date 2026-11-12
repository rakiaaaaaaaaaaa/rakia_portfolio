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
import {
  personalInfo,
  heroSkills,
  heroBadge,
  aboutText,
  skills as skillCategories,
  projects,
  experience,
  education,
  certifications,
  awards,
  conferences,
  languages,
  volunteering,
  professionalSummary,
  cvSkillsSummary,
} from "@/lib/portfolio-data"

export default function CVPage() {
  const [darkMode, setDarkMode] = useState(true)
  const [currentSkill, setCurrentSkill] = useState(0)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [showCVSection, setShowCVSection] = useState(false)
  const contactSectionRef = useRef<HTMLElement>(null)

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const downloadPDF = () => {
    const link = document.createElement("a")
    link.href = personalInfo.cvFile
    link.download = "Rakia_Souei_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % heroSkills.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
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
      transition: { staggerChildren: 0.1 },
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

        {/* ── HERO ── */}
        <section
          className="relative min-h-screen flex items-center px-4 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #020818 0%, #0a0a2e 40%, #12063a 70%, #080820 100%)" }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            className="absolute right-0 top-0 w-[70%] h-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <img
              src={personalInfo.heroPhoto}
              alt=""
              className="w-full h-full object-cover object-center"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 18%, black 42%), linear-gradient(to bottom, transparent 0%, black 6%, black 90%, transparent 100%)",
                maskComposite: "intersect",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 18%, black 42%), linear-gradient(to bottom, transparent 0%, black 6%, black 90%, transparent 100%)",
                WebkitMaskComposite: "source-in",
              }}
            />
          </motion.div>

          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, #020818 32%, rgba(2,8,24,0.75) 55%, transparent 80%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to top, #020818 0%, transparent 100%)" }} />

          <div className="relative z-10 max-w-7xl mx-auto w-full py-28">
            <div className="max-w-2xl">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-300 text-sm font-medium tracking-wide">{heroBadge}</span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-white">Hi, I&apos;m </span>
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </motion.h1>

              <motion.div
                className="text-2xl md:text-3xl mb-8 h-12 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="mr-2 text-gray-300">{currentSkill === 0 ? "An" : "A"}</span>
                <motion.span
                  key={currentSkill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-blue-400 font-semibold"
                >
                  {heroSkills[currentSkill]}
                </motion.span>
              </motion.div>

              <motion.p
                className="text-gray-200 text-lg mb-10 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Software Engineer specializing in AI and Data Science, with completed MITACS Globalink research experience in predictive modeling and explainable machine learning.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-full shadow-lg shadow-blue-900/40"
                  onClick={() => setShowCVSection(true)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-3 rounded-full border border-blue-500/50 text-blue-300 hover:bg-blue-600/20 hover:border-blue-400 bg-transparent backdrop-blur-sm"
                  onClick={scrollToContact}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ME ── */}
        <section className="py-20 px-4 overflow-hidden">
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
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Who am I?</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{aboutText.paragraph1}</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{aboutText.paragraph2}</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{aboutText.paragraph3}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* ── SKILLS ── */}
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
              <motion.div variants={fadeInUp}>
                <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-6">
                      <Code className="w-8 h-8 text-blue-600" />
                      <h3 className="text-xl font-bold">{skillCategories.programming.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillCategories.programming.items.map((skill) => (
                        <span key={skill.name} className="rounded-full bg-blue-50 px-3 py-2 text-sm font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-200">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-6">
                      <Database className="w-8 h-8 text-green-600" />
                      <h3 className="text-xl font-bold">{skillCategories.aiData.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillCategories.aiData.items.map((skill) => (
                        <span key={skill.name} className="rounded-full bg-green-50 px-3 py-2 text-sm font-medium text-green-800 dark:bg-green-950 dark:text-green-200">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-6">
                      <Settings className="w-8 h-8 text-purple-600" />
                      <h3 className="text-xl font-bold">{skillCategories.tools.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillCategories.tools.items.map((skill) => (
                        <span key={skill.name} className="rounded-full bg-purple-50 px-3 py-2 text-sm font-medium text-purple-800 dark:bg-purple-950 dark:text-purple-200">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
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
              {projects.map((project) => (
                <motion.div key={project.title} variants={fadeInUp}>
                  <Card className="group h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden rounded-t-lg bg-gray-900">
                        <img
                          src={project.image}
                          alt={`${project.title} project preview`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-25`} />
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
                          {project.github && (
                            <Button size="sm" variant="outline" className="flex-1" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          )}
                          {(project.demo || project.github) && (
                            <Button size="sm" className="flex-1" asChild>
                              <a href={project.demo || project.github} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
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
              {experience.map((job, index) => (
                <motion.div
                  key={`${job.title}-${job.company}`}
                  className="relative pl-20 pb-12"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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

        {/* ── EDUCATION & CERTIFICATIONS ── */}
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
                {education.map((edu, index) => (
                  <motion.div key={edu.degree} variants={fadeInUp}>
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-3 mb-4">
                          <GraduationCap className={`w-8 h-8 ${index === 0 ? "text-blue-600" : "text-green-600"}`} />
                          <div>
                            <h4 className="text-xl font-bold">{edu.degree}</h4>
                            <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">{edu.period}</p>
                        {edu.grade && (
                          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">{edu.grade}</p>
                        )}
                        <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certificates */}
            <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h3 className="text-2xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">
                Professional Certifications
              </h3>

              <motion.div className="mb-8" variants={fadeInUp}>
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  Technical & Development
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.technical.map((cert, index) => (
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

              <motion.div className="mb-8" variants={fadeInUp}>
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-green-600" />
                  Business & Leadership
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.business.map((cert, index) => (
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

              <motion.div className="mb-8" variants={fadeInUp}>
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-purple-600" />
                  IEEE Programs & Recognition
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.ieee.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{cert.name}</span>
                        <p className="text-sm text-purple-600 dark:text-purple-400">{cert.org}</p>
                      </div>
                      <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="mb-8" variants={fadeInUp}>
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <User className="w-5 h-5 text-indigo-600" />
                  Language & Cultural Development
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.language.map((cert, index) => (
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

              <motion.div variants={fadeInUp}>
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <Send className="w-5 h-5 text-red-600" />
                  Community Service & Training
                </h4>
                <div className="grid md:grid-cols-1 gap-4 max-w-2xl mx-auto">
                  {certifications.community.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      className="flex justify-between items-center p-4 bg-gradient-to-r from-red-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{cert.name}</span>
                        <p className="text-sm text-red-600 dark:text-red-400">{cert.org}</p>
                      </div>
                      <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── AWARDS ── */}
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
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {awards.map((award) => (
                <motion.div key={award.title} variants={fadeInUp}>
                  <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className={`h-4 bg-gradient-to-r ${award.color} rounded-t-lg mb-4 -mx-6 -mt-6`}></div>
                      <div className="flex items-start gap-4">
                        <Award className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{award.title}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{award.organization}</p>
                          <p className="text-gray-600 dark:text-gray-300 mb-3">{award.description}</p>
                          <div className="flex items-center gap-3">
                            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                              {award.year}
                            </span>
                            {award.url && (
                              <a
                                href={award.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 text-sm hover:underline flex items-center gap-1"
                              >
                                <ExternalLink className="w-3 h-3" />
                                Learn more
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CONFERENCES ── */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Globe className="w-8 h-8 text-blue-600" />
                Conferences & Workshops
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </motion.div>

            <motion.div
              className="space-y-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {conferences.map((conf) => (
                <motion.div
                  key={conf.event}
                  variants={fadeInUp}
                  className={`flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl border-l-4 ${conf.color} bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300`}
                >
                  <div className="flex-1">
                    {conf.url ? (
                      <a
                        href={conf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {conf.event}
                      </a>
                    ) : (
                      <p className="font-semibold text-gray-800 dark:text-gray-200">{conf.event}</p>
                    )}
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-2">
                      <MapPin className="w-3 h-3" /> {conf.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3 md:mt-0 md:ml-6 flex-shrink-0">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{conf.date}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      {conf.role}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section
          ref={contactSectionRef}
          className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto">
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
                I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <motion.div
                className="lg:col-span-4 hidden lg:flex items-center justify-center"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img
                  src={personalInfo.contactPhoto}
                  alt={personalInfo.name}
                  className="w-full h-auto"
                  style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 75%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
                    maskComposite: "intersect",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 75%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
                    WebkitMaskComposite: "source-in",
                  }}
                />
              </motion.div>

              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-sm">Location</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm truncate">{personalInfo.location}</p>
                    </div>
                  </div>

                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-sm">Email</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm truncate">{personalInfo.email}</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Github className="w-5 h-5 text-gray-800 dark:text-white flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-sm">GitHub</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm truncate">{personalInfo.github.replace("https://", "")}</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Linkedin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-sm">LinkedIn</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm truncate">linkedin.com/in/rakia-souei</p>
                    </div>
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
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

        {/* ── CV MODAL ── */}
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
                    &#x2715;
                  </Button>
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* Personal Info */}
                <div className="text-center border-b border-gray-200 dark:border-gray-700 pb-8">
                  <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
                  <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">
                    Software Engineering & Data Science — MITACS Globalink Researcher
                  </p>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                    <img
                      src={personalInfo.profilePhoto}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2"><Mail className="w-4 h-4" />{personalInfo.email}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{personalInfo.location}</div>
                    <div className="flex items-center gap-2"><Github className="w-4 h-4" />{personalInfo.github.replace("https://", "")}</div>
                    <div className="flex items-center gap-2"><Linkedin className="w-4 h-4" />linkedin.com/in/rakia-souei</div>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    <p>Phone: {personalInfo.phone}</p>
                  </div>
                </div>

                {/* Professional Summary */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-2">
                    Professional Summary
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{professionalSummary}</p>
                </div>

                {/* Technical Skills */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-2">
                    Technical Skills
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Languages</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">• {cvSkillsSummary.languages}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">ML & Deep Learning</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">• {cvSkillsSummary.mlDl}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Data & Analytics</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">• {cvSkillsSummary.dataAnalytics}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Tools & Platforms</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">• {cvSkillsSummary.toolsPlatforms}</p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-2">
                    Education
                  </h2>
                  <div className="space-y-4">
                    {education.map((edu) => (
                      <div key={edu.degree}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-bold">{edu.degree}</h3>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold">{edu.institution}</p>
                          </div>
                          <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                            {edu.period}
                          </span>
                        </div>
                        {edu.grade && (
                          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">{edu.grade}</p>
                        )}
                        <p className="text-sm text-gray-600 dark:text-gray-300">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Experience */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-2">
                    Professional Experience & Leadership
                  </h2>
                  <div className="space-y-6">
                    {experience.map((job) => (
                      <div key={`${job.title}-${job.company}`}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-bold">{job.title}</h3>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold">{job.company}</p>
                          </div>
                          <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                            {job.period}
                          </span>
                        </div>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                          {job.achievements.map((a, i) => (
                            <li key={i}>• {a}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Projects */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-2">
                    Key Projects
                  </h2>
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div key={project.title}>
                        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Honors & Awards */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-2">
                    Honors and Awards
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {awards.map((award) => (
                      <div key={award.title} className="p-3 bg-blue-50 dark:bg-blue-900 rounded border-l-4 border-blue-500">
                        <h3 className="font-bold">{award.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{award.organization} – {award.year}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-2">
                    Languages
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {languages.map((lang) => (
                      <div key={lang.name} className="flex justify-between items-center">
                        <span className="font-medium">{lang.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Volunteering */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-2">
                    Volunteering & Community Service
                  </h2>
                  <div className="space-y-3">
                    {volunteering.map((v) => (
                      <div key={v.role} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                        <span className="font-medium">{v.role}</span>
                        <span className="text-sm text-gray-500">{v.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* Footer */}
        <footer className="py-8 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">© 2026 {personalInfo.name}. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
