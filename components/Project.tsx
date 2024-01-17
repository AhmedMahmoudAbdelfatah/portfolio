"use client"
import { projectsData } from '@/lib/data'
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react'
import "@/styles/project.css"
import { motion, useScroll, useTransform } from 'framer-motion';

type ProjectPropsType = typeof projectsData[number];

const ProjectCard = (props: ProjectPropsType) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.article
      className='group'
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <div className='text-container'>
        <h3 className='text-xl font-semibold'>
          {props.title}
        </h3>
        <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{props.description}</p>
        <ul className='flex flex-wrap py-6 gap-2 sm:mt-auto'>
          {
            props.tags.map((tag) => (
              <li
                key={tag}
                className='tag'
              >
                {tag}
              </li>
            ))
          }
        </ul>
        <div className='links-container'>
          <Link href={props.github} target='_blank' className='btn bg-gray-800 text-white flex-1 py-2 max-w-28  dark:text-white/70'>Github</Link>
          {
            props.live && <Link href={props.live} target='_blank' className='btn bg-white flex-1 py-2 max-w-60 dark:bg-white/10'>Live Demo</Link>
          }
        </div>
      </div>
      <Image
        src={props.imageUrl}
        alt={props.title}
        quality={95}
        className='image'
      />
    </motion.article>
  )
}

export default ProjectCard