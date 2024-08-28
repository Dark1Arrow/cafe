"use client"
import Coco from '/public/Coco1.svg'
import Search from '/public/Search.svg'
import Cart from '/public/Cart.svg'
import Image from 'next/image'
import menu from '/public/menu.svg'
import cross from '/public/cross.svg'
import "./global.css";
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = ({ link }) => {

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, staggerChildren: 0.75, delay: 0.1 }}

        style={{
          backgroundImage: 'url(/navbar/image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='w-full py-3 h-full bg-gray-800 text-white drop-shadow-md'>
        <nav className='flex h-full w-full  justify-between items-center md:px-16 px-6 p-2'>
          <div>
            <Image className='w-[90px]' src={Coco} alt="" />
          </div>
          <div>
            <input className='hidden' id='sidebar' type="checkbox" />
            <label className='md:hidden relative' For="sidebar">
              <Image src={menu} alt='' />
            </label>
            <label id='overlay' htmlFor="sidebar"></label>
            <div className='homeLink  lg:gap-9 gap-2 justify-between items-center'>
              <div>
                <label className='cross py-4' For="sidebar">
                  <Image src={cross} alt='' />
                </label>
              </div>
              <motion.div >
                <ul className='link home flex gap-20 justify-between text font-medium text-xl'>
                  <motion.li
                    whileTap={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  ><Link className={`${link == "home" ? "text-[#EE7A19] scale-105" : ' '}`} href="/home">Home</Link></motion.li>
                  <motion.li
                    whileTap={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  ><Link className={`${link == "menu" ? "text-[#EE7A19] scale-105" : ' '}`} href="/menu">Menu</Link></motion.li>
                  <motion.li
                    whileTap={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  ><Link className={`${link == "profile" ? "text-[#EE7A19] scale-105" : ' '}`} href="/profile">Profile</Link></motion.li>
                </ul>
              </motion.div>
            </div>
          </div>
          <div className='md:flex hidden'>
            <Image className='w-[40px] bg-none' src={Cart} alt="" />
          </div>
        </nav>
      </motion.div>
    </>
  )
}

export default Navbar
