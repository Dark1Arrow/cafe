"use client"
import React from 'react'
import Image from 'next/image'
import Coco from '/public/Coco.svg'
import Coco2 from '/public/Coco2.svg'
import Chai from '/public/Chai.svg'
import Arrow from '/public/Arrow.svg'
import "./global.css";
import Link from 'next/link'
import { easeOut, motion } from 'framer-motion'


const varient = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.75,
    },
  },
  wait: {
    duration: 0.9,
    ease: "easeOut",
    delay: 0.2
  },
}

const AnimatedText = ({ text }) => {
  const words = text.split('');

  return (
    <div
     className='mt-5'>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className='text-[20px] mt-10 lg:hidden font-semibold text-[#ffffff]'
          initial={{ opacity: 0, y: 20, x:20 }}
          animate={{ opacity: 1, y: 0 ,x:0 }}
          transition={{ duration: 0.5, ease:easeOut , delay:1.5 + index * 0.1 }}>
          {word}
        </motion.span>
      ))}
    </div>
  )
}

const Intro = () => {

  return (
    <>
      <motion.div className='bg-black'
        variants={varient}
        initial="hidden"
        animate="show"
        transition="wait"
      >
        <motion.div initial={{ y: "-50vh" }} animate={{ y: "0vh" }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }} className='flex justify-center text-center bgg min-h-screen min-w-screen' >
          <motion.div initial={{ y: "50vh" }} animate={{ y: "0vh" }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }} className='z-0 absolute right-0 left-0  bg-black lg:opacity-[40%] opacity-[85%] min-h-screen min-w-screen'> </motion.div>
          <div className='z-30 p-5 lg:w-auto w-[90vw]'>
            <motion.div initial={{ y: "-50vw" }} animate={{ y: "0vh" }} transition={{ duration: 1, ease: "easeOut", delay: 0.7 }} >
              <Image className='lg:hidden absolute top-5 left-5 w-[100px]' src={Coco2} alt="" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: "50vh" }} animate={{ opacity: 1, y: "0vh" }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }} className='rounded-3xl lg:mt-0 mt-40 bg lg:h-full lg:w-[95vw] w-80vw sm:h-[30vh] h-[20vh]'>
              <div className=' flex flex-col gap-[50vh] justify-between text-center'>
                <motion.nav initial={{ y: "-50vw" }} animate={{ y: "0vh" }} transition={{ duration: 1, ease: "easeOut", delay: 0.7 }} className='lg:flex hidden  p-5  justify-between'>
                  <div>
                    <Image className='w-[100px]' src={Coco} alt="" />
                  </div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut", delay: 1.8 }} className='mx-10 p-3 rounded-2xl backdrop-blur-lg  border-2 border-[#c1c1c1] flex gap-2 xl:w-[18vw] w-[25vw]'>
                    <Image className='w-[40px]' src={Chai} alt="" />
                    <p className='text-[20px] font-semibold text-[#9F4100]'>Welcome to Coaco, where every cup tells a story.</p>
                  </motion.div>
                </motion.nav>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut", delay: 1.8 }} className='animate-bounce m-auto lg:flex hidden  '>
                  <Link href="/home"><button className='cursor-pointer'><Image className=' w-[60px]' src={Arrow} alt="" /></button></Link>
                </motion.div>
              </div>
            </motion.div>

            <AnimatedText text=" Welcome to Coaco, where every cup tells a story. " />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut", delay: 1.8 }} className=' m-auto absolute lg:hidden left-[45vw] bottom-10 animate-bounce'>
              <Link href="/home"><button className='cursor-pointer'><Image className=' w-[60px]' src={Arrow} alt="" /></button></Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Intro
