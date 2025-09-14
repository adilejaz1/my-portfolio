import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: 'React', level: 70 },
    { name: 'Node.js', level: 70 },
    { name: 'Express.js', level: 80 },
    { name: 'CSS/Tailwind', level: 85 },
    { name: 'MongoDB', level: 70 },
    { name: 'Kotlin', level: 70 },
    { name: 'Data science', level: 60 },
    { name: 'Python', level: 70 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="mb-6"
              variants={itemVariants}
            >
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <motion.div 
                  className="bg-indigo-600 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {['React', 'Node', 'MongoDB', 'Express', 'CSS/Tailwind', 'Git', 'Data Science', 'Kotlin','Python'].map((tech, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex items-center justify-center flex-col"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-2">
                <span className="text-xl font-bold text-indigo-600 dark:text-indigo-300">{tech[0]}</span>
              </div>
              <span className="text-gray-700 dark:text-gray-300">{tech}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills