'use client'
/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Typewriter from '../components/Typewriter'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa'

const HomePage = () => {
  const roles = [
    "Full Stack Developer",
    "Python & LLM Enthusiast", 
    "Problem Solver",
    "Tech Explorer"
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/vivekbhadauriya',
      icon: FaGithub,
      color: 'hover:text-gray-900',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vivek-singh-bhadauriya-183809258',
      icon: FaLinkedin,
      color: 'hover:text-blue-600',
    },
    {
      name: 'Email',
      href: 'mailto:vivekbhadauriya01@gmail.com',
      icon: FaEnvelope,
      color: 'hover:text-red-500',
    },
  ]


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-950">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding pt-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-dark-100 mb-4">
                Hi, I&apos;m{' '}
                <span className="gradient-text">
                  Vivek Bhadauriya
                </span>
              </h1>
            </motion.div>

            {/* Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-dark-300">
                <Typewriter 
                  texts={roles}
                  speed={100}
                  deleteSpeed={50}
                  pauseTime={2000}
                />
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-lg font-medium text-primary-600 dark:text-accent-400 mb-4">
                Crafting scalable, AI-enhanced web experiences using the MERN stack and Python.
              </p>
            </motion.div>

            {/* Intro Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-dark-300 mb-12 max-w-3xl mx-auto leading-relaxed font-space"
            >
              I&apos;m a final-year CSE student passionate about building
              seamless, scalable web applications. I specialize in the MERN stack
              and have hands-on experience integrating Python-based LLM agents to
              create AI-powered applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/projects"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-gradient-from dark:via-gradient-via dark:to-gradient-to text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary-500/30 dark:hover:shadow-accent-500/30 transition-all duration-500"
                >
                  View My Work
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-dark-600 text-gray-700 dark:text-dark-300 font-semibold rounded-full hover:border-primary-600 dark:hover:border-accent-500 hover:text-primary-600 dark:hover:text-accent-400 hover:bg-primary-50 dark:hover:bg-dark-800 transition-all duration-500"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center justify-center space-x-6"
            >
              {socialLinks.map((link) => {
                const isMail = typeof link.href === 'string' && link.href.startsWith('mailto:')
                if (isMail) {
                  // Use plain anchor for mailto
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`p-3 text-gray-600 dark:text-dark-400 ${link.color} transition-all duration-500 hover:bg-gray-100 dark:hover:bg-dark-800 hover:shadow-lg rounded-full`}
                      aria-label={link.name}
                    >
                      <motion.span whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                        <link.icon className="w-6 h-6" />
                      </motion.span>
                    </a>
                  )
                } else {
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 text-gray-600 dark:text-dark-400 ${link.color} transition-all duration-500 hover:bg-gray-100 dark:hover:bg-dark-800 hover:shadow-lg rounded-full`}
                      aria-label={link.name}
                    >
                      <link.icon className="w-6 h-6" />
                    </motion.a>
                  )
                }
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Background Animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  )
}

export default HomePage
