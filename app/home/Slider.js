"use client"
import React, { useEffect, useState } from 'react'
import slide1 from '/public/slide1.png'
import slide2 from '/public/slide2.png'
import slide3 from '/public/slide3.png'
import right from '/public/right.svg'
import left from '/public/left.svg'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion';

const Slider = () => {
  const [cur, setcur] = useState(0)
  const [ismouted, setismouted] = useState(false)
  const [disabled, setdisabled] = useState(false);
  const [value, setvalue] = useState(1500);


  useEffect(() => {
    const update = () => {

      if (window.innerWidth < 648) {
        setvalue(430);
      } else if (window.innerWidth < 768) {
        setvalue(648);
      } else if (window.innerWidth < 1280) {
        setvalue(768);
      } else if (window.innerWidth < 1500) {
        setvalue(1200);
      } else {
        setvalue(1500)
      }
    };

    update();
  }, [])


  const slide = [slide1, slide2, slide3]
  const head = ['Experience the Essence of Luxury:', ' Chai:', 'Ice Cream:', 'Premium Coffee', 'The Timeless Comfort of Chai', 'A Sweet Indulgence']
  const para = ['Enjoy Premium Coffee at Minimal Cost – Visit Us Today!', 'Chai, a blend of tea, spices, and milk, offers warmth and comfort.', 'Ice cream, with its creamy texture and endless flavors, is a beloved treat.']

  const prev = () => {
    if (!disabled) {
      setdisabled(true);
      setcur((cur) => (cur === 0 ? slide.length - 1 : cur - 1))
      setTimeout(() => setdisabled(false), 1000);
    }
  }
  const next = () => {
    if (!disabled) {
      setdisabled(true);
      setcur((cur) => (cur === slide.length - 1 ? 0 : cur + 1))
      setTimeout(() => setdisabled(false), 1000);
    }
  }

  useEffect(() => {
    setismouted(true);
  }, []);

  return (
    <div className='z-0 mb-10 h-[90vh] transition-transform ease-out duration-500'>
      <AnimatePresence>
        <motion.div
          key={cur}
          initial={ismouted ? { x: value } : false}
          animate={{ x: 0 }}
          exit={{ x: -value }}
          transition={{ duration: 1 }}
          className="z-0 absolute w-full min-h-[90vh] bg-cover bg-center "
          style={{
            backgroundImage: `url(${slide[cur].src})`,

          }} />
      </AnimatePresence>
      <div className='absolute opacity-40 z-0 bg-black  w-full min-h-[90vh] '>sdf</div>
      <div className=' z-10'>
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1, color: "#E0E0E0" }}
          transition={{ bounceDamping: 10, bounceStiffness: 600 }}
          onClick={prev} disabled={disabled} className={`bg-white absolute top-[50vh] left-5  w-9 h-9 rounded-full ${disabled ? "opacity-50 cursor-not-allowed" : ''}`} ><Image className='w-3 m-auto' src={left} alt='' /></motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1, color: "#E0E0E0" }}
          transition={{ bounceDamping: 10, bounceStiffness: 600 }}
          onClick={next} disabled={disabled} className={`bg-white absolute top-[50vh] right-5  w-9 h-9 rounded-full ${disabled ? 'opacity-50 cursor-not-allowed' : ''} `} ><Image className='w-3 m-auto' src={right} alt='' /></motion.button>
      </div>
      <div className='z-10 m-auto top-56 w-[70vw] relative flex-col justify-center text-center'>
        <motion.div key={head[cur]} initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{delay:0.2, duration:0.5}} className='my-5 m-auto w-[38vw] flex justify-center text-center'>
          <h1 className='text-5xl font-boldbold text-white'><p className='text-[#EE7A19] text-5xl font-boldbold'>{`${head[cur]}`}</p> {`${head[cur + 3]}`}</h1>
        </motion.div>
        <motion.div key={para[cur]} initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} transition={{delay:0.2, duration:0.5}} className='my-5'>
          <p className='text-white'>{`${para[cur]}`}</p>
        </motion.div>
        <div className='z-10 my-5 m-auto flex gap-5  justify-center'>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1, color: "#E0E0E0" }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className='font-semiboldbold text-xl text-white border-2 border-[#1DD244] py-2 px-5 rounded-full'>Buy now</motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1, color: "#E0E0E0" }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className='font-semiboldbold text-xl text-white border-2 border-[#1DD244] bg-[#1DD244] py-2 px-5 rounded-full '>Visit us</motion.button>
        </div>
      </div>
      <div className='z-10 absolute flex items-center gap-2 right-0 left-0 lg:bottom-10 bottom-10 justify-center'>
        {slide.map((_, i) => (
          <div key={i} className={`
          transition-all w-3 h-3 bg-[#00CE2D] rounded-full ${cur === i ? "p-2" : "bg-opacity-50"}
          `} />
        ))}
      </div>

    </div>
  )
}

export default Slider
