'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectsPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Sacchi Sewa",
      subtitle: "Fundraising Platform",
      description: "Built a fully responsive web app using Next.js, React, and TypeScript. Enhanced performance and optimized frontend API calls for scalability.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "API Integration"],
      github: "https://github.com/vivekbhadauriya/sacchi-sewa",
      demo: "#",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Campus Copilot",
      subtitle: "AI-Powered Student Assistant",
      description: "Developed with Python, LangChain, and Mistral LLM Agents. Automates academic tasks and provides intelligent responses to student queries. Integrated conversational flows and document retrieval features.",
      tech: ["Python", "LangChain", "Mistral LLM", "FastAPI", "AI/ML"],
      github: "https://github.com/vivekbhadauriya/campus-copilot",
      demo: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Fresh Blooms",
      subtitle: "Flower E-Commerce Platform",
      description: "Built with MERN Stack and Stripe API for seamless order and payment management. Focused on clean UI, fast loading, and real-time order updates.",
      tech: ["MERN Stack", "Stripe API", "MongoDB", "Express", "React"],
      github: "https://github.com/vivekbhadauriya/fresh-blooms",
      demo: "#",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Expense Tracker",
      subtitle: "FastAPI + React",
      description: "Built a full-stack expense tracker using FastAPI, SQLite, and React (Vite). Implemented secure JWT authentication, CRUD operations with SQLAlchemy, and modular components. Reduced transaction logging time by 45% through filtering and optimized frontend logic.",
      tech: ["FastAPI", "SQLite", "React", "Vite", "JWT", "SQLAlchemy"],
      github: "https://github.com/vivekbhadauriya/expense-tracker",
      demo: "#",
      color: "from-purple-500 to-indigo-500"
    }
  ]

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
          className="max-w-7xl mx-auto"
        >
          {/* Page Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-dark-100 mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-dark-300 max-w-3xl mx-auto">
              A collection of projects showcasing my skills in full-stack development, 
              AI integration, and modern web technologies.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white dark:bg-dark-900/50 backdrop-blur-sm group relative overflow-hidden p-8 rounded-2xl border border-gray-100 dark:border-dark-800 shadow-sm hover:shadow-xl hover:border-primary-500/20 dark:hover:border-accent-500/20 transition-all duration-500"
              >
                {/* Project Title */}
                <div className="space-y-1 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-primary-600 dark:text-accent-400 font-medium">
                    {project.subtitle}
                  </p>
                </div>
                
                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      className="px-3 py-1 text-sm font-medium bg-gray-50 dark:bg-dark-800 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-dark-700"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center px-4 py-2 bg-gray-50 dark:bg-dark-800 text-gray-700 dark:text-gray-200 rounded-lg hover:text-primary-600 dark:hover:text-accent-400 hover:bg-gray-100 dark:hover:bg-dark-700 transition-all duration-300"
                  >
                    <FaGithub className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">GitHub</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-gradient-from dark:to-gradient-to text-white rounded-lg transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">View Project</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Projects Section */}
          <motion.div 
            variants={itemVariants} 
            className="mt-20 max-w-3xl mx-auto"
          >
            <div className="glass-card text-center p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                More Projects Coming Soon
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I&apos;m constantly working on new projects and learning new technologies. 
                Follow me on GitHub to stay updated with my latest work.
              </p>
              
              <div className="text-center">
                <motion.a
                  href="https://github.com/vivekbhadauriya"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-gradient-from dark:to-gradient-to text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaGithub className="w-5 h-5 mr-2" />
                  View All Projects on GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectsPage
