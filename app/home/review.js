"use client"
import React from 'react'
import { easeOut, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const review = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
    return (
        <motion.div ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className='w-full h-[100vh] flex bg-[#2D271F] bg-image drop-shadow-2xl'>
            <div className='w-full h-full bg-black absolute z-0 opacity-40'></div>

            <motion.div  initial={{ opacity: 0, y:100 }}
        animate={inView ? { opacity: 1, y:0} : { opacity: 0,y:100 }}
        transition={{ duration: 1, delay: 0.4 }}
                className='w-3/4 h-[30vh] flex text-center justify-center m-auto'>
                <div className='absolute z-10  w-3/4 h-[30vh] bg-white/30 backdrop-blur-sm'></div>
                <div className='absolute z-20 w-3/4 h-[30vh] flex flex-col gap-2 text-center justify-center'>

                    <div className='text-4xl font-semibold text-[#EE7A19]'>Reviews</div>
                    <div className='text-white w-2/4 mx-auto'>We bring the season’s best mix of organic produce and hand-crafted farm products conveniently to your door by growing and partnering with local farms and artisans in your area.</div>
                    <div className='text-white text-xl mx-auto'>– Loo Hudson</div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default review
