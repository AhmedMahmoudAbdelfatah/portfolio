"use client"
import { useTheme } from '@/hook/useTheme';
import { motion } from 'framer-motion';
import { BsMoon, BsSun } from 'react-icons/bs'


const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button type='button' role='button' title='theme' className='fixed bg-white bottom-5 right-5 md:top-7 md:right-[calc(50%-22rem)] w-12 h-12 bg-opacity-80 backdrop-blur-sm border border-white border-opacity-40 shadow-xl rounded-full flex items-center justify-center hover:scale-[1.15] focus:scale-[1.15] active:scale-105 transition-transform dark:bg-gray-950 dark:bg-opacity-80'
      onClick={toggleTheme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{
        delay: 0.25,
        duration: 1
      }}
    >
      {
        theme === "light" ? <BsSun /> : <BsMoon />
      }
      
    </motion.button>
  )
}

export default ThemeButton