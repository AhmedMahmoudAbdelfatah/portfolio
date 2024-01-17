"use client"
import { useActive } from "@/hook/useActive";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";


function Nav() {
  const { active, setActive, setTimeOfLastClick } = useActive();

  return (
    <header className="z-[999] relative">
      <motion.nav
        className="nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ translateX: "-50%" }} // puting the style here to avoid frame motion overlapping with the span animation inside the link
      >
        <div className="h-full flex justify-center">
          <ul className="ul">
            {
              links.map((link) => (
                <li key={link.hash} className={`link ${active === link.name? "text-gray-950 dark:text-gray-200" : ""}`}>
                  <Link
                    href={link.hash}
                    onClick={() => {
                      setActive(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}
                    {
                      active === link.name && (
                        <motion.span
                          className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                          layoutId="active"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </motion.nav>
    </header>
  )
}

export default Nav