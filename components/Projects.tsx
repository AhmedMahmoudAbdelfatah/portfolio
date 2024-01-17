"use client"
import { projectsData } from '@/lib/data'
import React from 'react'
import ProjectCard from './Project'
import { useCustomInView } from '@/hook/useCustomInView';

const Projects = () => {
  const { ref } = useCustomInView("Projects", 0.3);

  return (
    <section id='projects' className='scroll-mt-28' ref={ref}>
      <h2>Projects</h2>
      <div>
        {
          projectsData.map((projectData) => (
            <ProjectCard key={projectData.title} {...projectData} />
          ))
        }
      </div>
    </section>
  )
}

export default Projects