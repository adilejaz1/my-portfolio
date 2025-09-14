// src/components/Hero.jsx
import React from 'react'
import { motion } from 'framer-motion'
import myPhoto from '../assets/myphoto.jpg'

const Hero = () => {
  
  const handleScrollToProjects = (e) => {
    e.preventDefault()
    const el = document.getElementById('projects')
    if (!el) return
    const header = document.querySelector('header') 
    const offset = header ? header.offsetHeight : 0
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset - 16
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
     
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Adil Ejaz</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
            I create immersive digital experiences with modern technologies and innovative design.
          </p>

          <motion.a
            href="#projects"
            onClick={handleScrollToProjects}
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View My Work"
          >
            View My Work
          </motion.a>
        </motion.div>

    
        <motion.div
          className="md:w-1/2 h-80 md:h-96 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src={myPhoto}
            alt="Adil Ejaz"
            className="w-80 h-80 rounded-full object-cover object-[10%_30%] shadow-lg"
          />
        </motion.div>
      </div>

      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-indigo-300 dark:bg-indigo-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-yellow-300 dark:bg-yellow-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  )
}

export default Hero
