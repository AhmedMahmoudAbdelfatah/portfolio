"use client"
import { sendEmail } from '@/actions/sendEmail'
import { useCustomInView } from '@/hook/useCustomInView'
import { motion } from 'framer-motion'
import React from 'react'
import SubmitButton from './SubmitButton'
import toast from 'react-hot-toast'


const Contact = () => {
  const { ref } = useCustomInView("Contact", 0.7);

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%, 40rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className='mb-2'>Contact Me</h2>
      <p className='text-gray-700 dark:text-white/80'>Please contact me directly at{" "}
        <a href='mailto:ahmedmahmoud1999Y@gmail.com' className='underline'>ahmedmahmoud1999Y@gmail.com</a> or though this form.
      </p>

      <form className='mt-10 flex flex-col dark:text-black' action={async(formData) => {
        const { error } = await sendEmail(formData);
        if (error) toast.error(error);
        else toast.success("Email sent successfully!");
      }}>
        <input type='email' name="email" required autoComplete='off' spellCheck="false" maxLength={500} className='h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' placeholder='Email'/>
        <textarea required maxLength={5000} name="message" spellCheck="false" className='h-52 my-3 p-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' placeholder='Message'/>
        <SubmitButton /> 
      </form>
    </motion.section>
  )
}

export default Contact