"use client"
import React from 'react'
import Image from 'next/image'
import Coco from "/public/Coco1.svg"
import Facebook from "/public/Facebook.svg"
import Instagram from "/public/Instagram.svg"
import Twiter from "/public/Twiter.svg"
import Youtube from "/public/Youtube.svg"
import Linkdin from "/public/Linkdin.svg"
import link from "/public/footer/link.svg"
import chai from "/public/footer/chai.svg"
import { easeOut, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const AnimatedText = ({ text }) => {
    const words = text.split('');
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
    return (
      <div ref={ref}
       className='mt-5'>
        {words.map((word, index) => (
          <motion.span
            key={index}
            className=' text-xl font-medium text-center '
            initial={{ opacity: 0, y: 20, x:20 }}
            animate={inView ? { opacity: 1,y: 0 ,x:0  } : { opacity: 0,y: 0 ,x:0  }}
            transition={{ duration: 0.5, ease:easeOut , delay:0.5 + index * 0.1 }}>
            {word}
          </motion.span>
        ))}
      </div>
    )
  }  

const variants = {
    hidden: { opacity: 0, },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            delay: 0.1,
            ease: "easeInOut",
        }, 
    },
};

const Footer = () => {

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <motion.div ref={ref}
            initial={{ opacity: 0, }}
            animate={inView ? { opacity: 1, } : { opacity: 0, }}
            transition={{ duration: 0.3, delay: 0.2 }}
            style={{
                backgroundImage: 'url(/footer/image.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className='w-full h-[90vh] sm:h-[80vh] xl:h-[60vh] mt-1'>
            <div className='absolute z-0 bg-black opacity-80 w-full h-[90vh] sm:h-[80vh] xl:h-[60vh]'></div>
            <motion.div
                variants={variants}
                initial="hidden"
                animate="show"
                className=' absolute z-10 bg-none pb-10 right-0 left-0 my-5'>
                <div className='p-5 px-14 sm:flex-row gap-5 flex-col flex justify-between items-center'>
                    <motion.div initial={{ opacity: 0, y:-50}}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y:-50 }}
                        transition={{ duration: 0.5, delay: 0.2 }} >
                        <Image className='md:w-[120px] w-[90px]' src={Coco} alt="" />
                    </motion.div>
                </div>

                <div className=' w-[80vw] mt-12 mx-auto'>
                    <div className='m-auto '>
                        <div className='text-white text-xl font-medium text-center'><AnimatedText text="Experience the taste of joy with every sip and bite."/><div className='text-[#EE7A19]'>
                            <AnimatedText text="Come and savor our delightful beverages and treats!"/>
                            </div></div>
                    </div>

                    <div className=' mt-20 flex xl:flex-row gap-10 flex-col justify-between align-middle'>
                        <motion.div 
                        initial={{ opacity: 0, y:-50}}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y:-50 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='xl:w-2/5 w-[80vw] sm:w-[60vw] sm:h-[15vh] h-[18vh] mx-auto  bg-white/10 p-5 backdrop-blur-sm drop-shadow-md'>
                            <div className='flex flex-col  justify-center gap-5 text-center'>
                                <div className='flex justify-center gap-14'>
                                    <Image className='w-[20px]' src={link} alt="" />
                                    <div className='text-[#C1C1C1] text-2xl'>online contact</div>
                                </div>
                                <div className='flex justify-between text-center w-[60vw] sm:w-[30vw] xl:w-[13vw] mx-auto'>
                                    <Image className='w-[25px]' src={Facebook} alt="" />
                                    <Image className='w-[25px]' src={Instagram} alt="" />
                                    <Image className='w-[25px]' src={Twiter} alt="" />
                                    <Image className='w-[25px]' src={Linkdin} alt="" />
                                    <Image className='w-[25px]' src={Youtube} alt="" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0, y:-50}}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y:-50 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                         className='xl:w-2/5 w-[80vw] sm:w-[60vw] sm:h-[15vh] h-[18vh] mx-auto bg-white/10 backdrop-blur-sm drop-shadow-md'>
                            <div className='flex flex-col py-5 justify-center gap-2 text-center'>
                                <div className='flex justify-center gap-14'>
                                    <Image className='w-[20px]' src={chai} alt="" />
                                    <div className='text-[#C1C1C1] text-2xl'>our cafe Address</div>
                                </div>
                                <div className='flex justify-between text-center w-[70vw] sm:w-[40vw] xl:w-[20vw] mx-auto text-[#C1C1C1]'> Chai Street Spice Town, Mumbai, Maharashtra 400001</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Footer
