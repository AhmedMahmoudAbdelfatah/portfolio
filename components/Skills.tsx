"use client"
import { useCustomInView } from "@/hook/useCustomInView"
import { skillsData } from "@/lib/data"
import { motion } from "framer-motion"

const variants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
}

const Skills = () => {
  const { ref } = useCustomInView("Skills", 1);

  return (
    <section id="skills" className="max-w-[50rem] scroll-mt-28 text-center" ref={ref}>
      <h2>Skills</h2>
      <ul className="flex flex-wrap justify-center gap-2 text-gray-800">
        {
          skillsData.map((skill, index) => (
            <motion.li
              key={skill}
              className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 dark:bg-white/10 dark:text-white/80"
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))
        }
      </ul>
    </section>
  )
}

export default Skills