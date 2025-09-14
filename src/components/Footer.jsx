import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold">John Doe</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {['github', 'twitter', 'linkedin', 'dribbble'].map((social, index) => (
              <a 
                key={index}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social}
              >
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="font-semibold">{social[0].toUpperCase()}</span>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>© {currentYear} John Doe. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer