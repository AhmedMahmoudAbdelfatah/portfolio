"use client"
import { useActive } from "@/hook/useActive"
import { useCustomInView } from "@/hook/useCustomInView"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare, FaWhatsapp } from "react-icons/fa"
import { HiDownload } from 'react-icons/hi'



const Intro = () => {
  const { ref } = useCustomInView("Home", 1);
  const { setActive, setTimeOfLastClick } = useActive();

  return (
    <section id="home" className="max-w-[45rem] text-center scroll-mt-96" ref={ref}>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2
            }}
          >
            <Image
              src="/images/Ahmed Portrait.jpg"
              alt="persnal image"
              width={192}
              height={192}
              priority={true}
              quality={95}
              className="w-24 aspect-square sm:w-32 rounded-full border-[0.35rem] border-white object-cover object-top"
            />
          </motion.div>
          
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Ahmed.</span> I&apos;m a{" "}
        <span className="font-bold">junior front-end developer</span> I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >
        <Link href="#contact"
          className="btn group bg-gray-900 text-white px-7 py-3"
          onClick={(() => {
            setActive("Contact")
            setTimeOfLastClick(Date.now());
          })}
        >
          Contact me here
          <BsArrowRight
            className="opacity-70 group-hover:-rotate-45 transition-all"
          />
        </Link>
        <a
          className="btn bg-white px-7 py-3 flex items-center dark:bg-white/10"
          href="/documents/Ahmed Mahmoud Resume.pdf"
          download={true}
        >
          Download CV <HiDownload />
        </a>
        <a
          className="btn bg-white p-4 text-lg dark:bg-white/10"
          href="https://www.linkedin.com/in/ahmedmahmoudabdelfatah"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="btn bg-white p-4 text-[1.25rem] dark:bg-white/10"
          href="https://github.com/AhmedMahmoudAbdelfatah"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="btn bg-white p-4 text-[1.25rem] dark:bg-white/10"
          href="https://api.whatsapp.com/send?phone=01091325300"
          target="_blank"
        >
          <FaWhatsapp />
        </a>
      </motion.div>
    </section>
  )
}

export default Intro