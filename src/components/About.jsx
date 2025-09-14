import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import myPhoto from '../assets/myphoto.jpg'
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <div className="relative w-80 h-80 mx-auto">

              <div className="absolute inset-0 rounded-full bg-indigo-600 blur-2xl opacity-20"></div>


              <img
                src={myPhoto}
                alt="Profile"
                className="w-80 h-80 rounded-full object-cover object-[10%_30%] shadow-lg relative z-10"
              />
            </div>

          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Crafting Digital Experiences
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate full-stack developer with over 5 years of experience creating
              digital solutions that make a difference. I specialize in React, Node.js, and
              modern web technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              My approach combines technical expertise with creative problem-solving to
              deliver applications that are both functional and delightful to use.
            </p>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {['Web Development', 'UI/UX Design', 'DevOps', 'MERN Stack', 'Ai Engineer'].map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About