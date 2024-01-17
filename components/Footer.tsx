import React from 'react'

const Footer = () => {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 text-xs block'>
        Copyright &copy; 2024 Ahmed. All Rights Reserved.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website: </span> built with React & Next.js (app Router & Server Actions), TypeScript, Tailwind css, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  )
}

export default Footer