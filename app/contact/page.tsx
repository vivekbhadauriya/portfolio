'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const ContactPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
    alert('Thank you for your message! I\'ll get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'vivekbhadauriya01@gmail.com',
      href: 'mailto:vivekbhadauriya01@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 93115 36630',
      href: 'tel:+919311536630',
      color: 'text-green-500'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Noida',
      href: '#',
      color: 'text-blue-500'
    }
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
      href: 'https://linkedin.com/in/vivekbhadauriya',
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
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-dark-100 mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-dark-300 max-w-3xl mx-auto">
              I&apos;m always excited to work on new projects and collaborate with fellow developers. 
              Let&apos;s discuss how we can work together!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-card">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-6">Send me a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-dark-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border-card text-gray-900 dark:text-dark-100 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-primary-500 dark:focus:border-accent-500 transition-all duration-300 min-w-[220px]"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-dark-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border-card text-gray-900 dark:text-dark-100 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-primary-500 dark:focus:border-accent-500 transition-all duration-300 min-w-[220px]"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-dark-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-card border-card text-gray-900 dark:text-dark-100 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-primary-500 dark:focus:border-accent-500 transition-all duration-300 resize-none min-w-[220px]"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <div className="glass-card">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info) => {
                    const isMail = typeof info.href === 'string' && info.href.startsWith('mailto:')
                    if (isMail) {
                      // Use plain anchor for mailto
                      return (
                        <a
                          key={info.label}
                          href={info.href}
                          className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-200"
                        >
                          <motion.span whileHover={{ x: 5 }} style={{ display: 'inline-block' }}>
                            <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center ${info.color}`}>
                              <info.icon className="w-6 h-6" />
                            </div>
                          </motion.span>
                          <div>
                            <p className="text-sm text-gray-700 dark:text-dark-200 font-semibold">{info.label}</p>
                            <p className="text-base text-gray-900 dark:text-dark-100 font-bold break-all">{info.value}</p>
                          </div>
                        </a>
                      )
                    } else {
                      return (
                        <motion.a
                          key={info.label}
                          href={info.href}
                          whileHover={{ x: 5 }}
                          className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-200"
                        >
                          <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center ${info.color}`}>
                            <info.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-700 dark:text-dark-200 font-semibold">{info.label}</p>
                            <p className="text-base text-gray-900 dark:text-dark-100 font-bold break-all">{info.value}</p>
                          </div>
                        </motion.a>
                      )
                    }
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-6">Follow Me</h2>
                
                <div className="flex space-x-4">
                  {socialLinks.map((link) => {
                    const isMail = typeof link.href === 'string' && link.href.startsWith('mailto:')
                    if (isMail) {
                      // Use plain anchor for mailto
                      return (
                        <a
                          key={link.name}
                          href={link.href}
                          className={`p-4 text-gray-600 dark:text-dark-400 ${link.color} transition-all duration-300 hover:bg-gray-100 dark:hover:bg-dark-800 rounded-xl`}
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
                          className={`p-4 text-gray-600 dark:text-dark-400 ${link.color} transition-all duration-300 hover:bg-gray-100 dark:hover:bg-dark-800 rounded-xl`}
                          aria-label={link.name}
                        >
                          <link.icon className="w-6 h-6" />
                        </motion.a>
                      )
                    }
                  })}
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Quick Response</h3>
                <p className="text-primary-100 mb-4">
                  I typically respond to messages within 24 hours. For urgent matters, 
                  feel free to reach out via phone or LinkedIn.
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://linkedin.com/in/vivekbhadauriya"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-4 py-2 bg-card border-card text-primary-600 font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <FaLinkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </motion.a>
                  
                  <a
                    href="mailto:vivekbhadauriya01@gmail.com"
                    className="inline-flex items-center px-4 py-2 bg-card border-card text-primary-600 font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <FaEnvelope className="w-4 h-4 mr-2" />
                      Email
                    </motion.span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage
