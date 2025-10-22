'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/vivekbhadauriya',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/vivekbhadauriya',
      icon: FaLinkedin,
    },
    {
      name: 'Email',
      href: 'mailto:vivekbhadauriya01@gmail.com',
      icon: FaEnvelope,
    },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700">
      <div className="container-max section-padding py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 dark:text-dark-400 text-sm"
          >
            © {currentYear} Vivek Bhadauriya — Built with ❤️ using Next.js
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((link) => {
              const isMail = typeof link.href === 'string' && link.href.startsWith('mailto:')
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={isMail ? undefined : '_blank'}
                  rel={isMail ? undefined : 'noopener noreferrer'}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-gray-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-accent-400 transition-colors duration-500 hover:bg-gray-100 dark:hover:bg-dark-800 rounded-lg"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
