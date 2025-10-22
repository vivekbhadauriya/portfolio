'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const AboutPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = {
    languages: ['Python','JavaScript (ES6+)', 'Java','TypeScript', 'C++', 'SQL'],
    frameworks: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Git', 'LangChain', 'Mistral LLM', 'FastAPI', 'SQLite', 'Redux', 'Vite'],
    strengths: ['Problem Solving', 'REST API Development', 'System Design Foundations', 'Responsive UI/UX', 'Debugging', 'Team Collaboration']
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-950 pt-20">
      <div className="container-max section-padding py-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Page Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-gradient-from dark:to-gradient-to mx-auto rounded-full"></div>
          </motion.div>

          {/* Bio Section - Two Column Layout */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Bio Content */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="text-lg font-medium text-primary-600 dark:text-accent-400 mb-4">
                    Crafting scalable, AI-enhanced web experiences using the MERN stack and Python.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="glass-card"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Bio</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I&apos;m a final-year Computer Science student passionate about building 
                    intelligent, scalable web applications. I specialize in the MERN stack 
                    and have hands-on experience integrating Python-based LLM agents like 
                    Mistral to create AI-powered applications such as Campus Copilot.
                  </p>
                </motion.div>
              </div>

              {/* Right Side - Professional Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="relative w-full h-96 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-dark-800 dark:to-dark-700 rounded-xl overflow-hidden shadow-lg border border-primary-200 dark:border-dark-600">
                  <Image
                    src="/me.jpg"
                    alt="Vivek Bhadauriya - Professional Photo"
                    fill
                    className="object-cover transition-all duration-300 hover:scale-105"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-purple-100 dark:from-dark-700 dark:to-dark-600">
                    <div className="text-6xl opacity-60">👨‍💻</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-gradient-from dark:to-gradient-to rounded-full opacity-20"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Experience</h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-gradient-from dark:to-gradient-to rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Web Developer Intern — Sacchi Sewa
                  </h3>
                  <p className="text-primary-600 dark:text-accent-400 font-medium mb-4">Dec 2024 – Jan 2025</p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 dark:bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Contributed to a fully responsive fundraising platform using <strong>Next.js</strong>, <strong>React</strong>, and <strong>TypeScript</strong>.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 dark:bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Improved UI/UX consistency using <strong>Tailwind CSS</strong>.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 dark:bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Integrated modular API routes and optimized data handling.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 dark:bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Collaborated closely with the design and API teams to ensure scalability and accessibility.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Skills & Expertise</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Languages */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card hover:shadow-xl transition-all duration-500 h-full"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-primary-500 to-primary-400 dark:from-accent-500 dark:to-accent-400 rounded-full mr-3"></span>
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-dark-800 dark:to-dark-700 text-primary-700 dark:text-accent-400 rounded-full text-sm font-medium border border-primary-200 dark:border-dark-600 hover:border-primary-500/50 dark:hover:border-accent-500/50 transition-colors duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Frameworks & Tools */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 h-full"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full mr-3"></span>
                  Frameworks & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="px-3 py-1 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200 hover:border-purple-300 transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Core Strengths */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 h-full"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-green-600 to-green-500 rounded-full mr-3"></span>
                  Core Strengths
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.strengths.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-green-50 to-green-100 text-green-700 rounded-full text-sm font-medium border border-green-200 hover:border-green-300 transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience Highlights */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Experience Highlights</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                variants={itemVariants}
                className="glass-card"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AI</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">AI Integration</h3>
                    <p className="text-gray-600">
                      Built intelligent applications using Python, LangChain, and Mistral LLM for personalized user experiences.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">WEB</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Full Stack Development</h3>
                    <p className="text-gray-600">
                      Developed scalable web applications using MERN stack with modern UI/UX design principles.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Let&apos;s Build Something Amazing Together</h3>
              <p className="text-lg mb-6 opacity-90">
                I&apos;m always excited to work on new projects and collaborate with fellow developers.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage
