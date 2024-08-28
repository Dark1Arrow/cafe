"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
    hidden: { opacity: 0, x: 100 },
    show: {
        opacity: 1, x: 0,
        transition: {
            staggerChildren: 0.5,
            delay: 0.2,
            ease: "easeInOut",
        },
    },
};

const pramium = ({ t, index }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <motion.div className='overflow-auto'
            variants={variants}
            initial="hidden"
            animate="show"
            ref={ref}>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <motion.div variants={{ hidden: { opacity: 0, x: 100 }, show: { x: 0, opacity: 1, transition: { delay: 0.5 * index } } }} className='drop-shadow-lg m-3 mx-10 bg-black/20 backdrop-blur-sm h-[450px] flex flex-col '>
                    <div className=' w-full min-h-[65%]'
                        style={{

                            backgroundImage: `url(${t.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}></div>

                    <div className='grid grid-cols-2 gap-1 pt-3 w-[80%] h-[50%] mx-auto'>
                        <div>
                            <div className='text-start font-normal text-2xl '>{t.title}</div>
                            <div className='mt-1 text-start text-[#d7d7d7] font-extralight text-sm sm:text-[12px] text-balance '>{t.description}</div>
                        </div>

                        <div cla>
                            <div className='text-center text-xl'>{t.price}$</div>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1, color: "#E0E0E0" }}
                                transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                                className='mt-2 bg-[#EE7A19] text-white text-lg p-2 rounded-[30px] px-8' >Buy</motion.button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default pramium
