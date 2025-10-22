'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme)
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return (
      <div className="relative p-2 rounded-lg bg-gray-100 dark:bg-dark-800 border border-gray-200 dark:border-dark-600">
        <div className="text-gray-600 dark:text-gray-300">
          <FaMoon className="w-4 h-4" />
        </div>
      </div>
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-dark-800 border border-gray-200 dark:border-dark-600 hover:bg-gray-200 dark:hover:bg-dark-700 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-gray-600 dark:text-gray-300"
      >
        {theme === 'light' ? (
          <FaMoon className="w-4 h-4" />
        ) : (
          <FaSun className="w-4 h-4" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
