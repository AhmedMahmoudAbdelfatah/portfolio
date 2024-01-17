"use client"
import { useCustomInView } from '@/hook/useCustomInView'
import { motion } from 'framer-motion'


const About = () => {
  const { ref } = useCustomInView("About", 1);

  return (
    <motion.section
      className='max-w-[45rem] text-center lead-8 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
      ref={ref}
    >
      <h2>About me</h2>
      <p className='mb-3'>
        I’m Ahmed Mahmoud. I have a Bachelor’s degree in{" "}
        <span className='font-medium'>Computer And Systems Engineering</span> with{" "}
        <span className='font-medium'>excellent</span> grades and{" "}
        <span className='font-medium'>honors</span> and a graduation project excellent.{" "}
        <span className='italic'>My journey</span> in web development began with a strong foundation in HTML, CSS, and JavaScript, and I&apos;ve since{" "}
        <span className='underline italic'>honed my skills</span> with expertise in modern frameworks such as{" "}
        <span className='font-medium'>React</span>.
      </p>
      <p>
        <span className='font-medium italic'>I enjoy learning</span> new technologies and tools to improve my skills and deliver better solutions. I&apos;m currently in the process of learning more about{" "}
        <span className='font-medium'>web performance and optimization techniques</span>. I&apos;m also interested in{" "}
        <span className='font-medium'>web accessibility and user experience design</span>.{" "}
        <span className='italic'>As a person</span>, I&apos;m friendly, curious, and collaborative. I like to work in a team and share ideas and feedback with others. I also value{" "}
        <span className='font-medium'>communication and transparency</span>, and I always strive to meet the expectations and{" "}
        <span className='font-medium underline'>deadlines</span> of my clients and stakeholders.
      </p>
    </motion.section>
  )
}

export default About