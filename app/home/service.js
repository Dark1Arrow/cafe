"use client"
import React from 'react'
import Image from 'next/image';
import Service1 from "/public/CafeService/service1.svg"
import Service2 from "/public/CafeService/service2.svg"
import Service3 from "/public/CafeService/service3.svg"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const service = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const serviceImage = [Service1, Service2, Service3]
  const service = [" Choose your favorite", "Order In Cafe", "we delivery it to you", " there are 20+ coffees for you", "Order your cofee", "there are 20+ coffees for you"]
  return (
    <div className=' w-[full] mb-32'>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        ref={ref} className=' bg-none m-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='h-[50vh] overflow-auto   flex gap-[5vw] justify-center'>
          {serviceImage.map((s, index) => (
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { y: 0, opacity: 1, transition: { delay: 0.2 * index } } }}
              key={index} className='min-w-[370px] bg-[#2C2E2D] rounded-3xl flex gap-3 flex-col justify-center items-center drop-shadow-xl'>
              <div>
                <Image alt='' className='w-[170px]' width="170" height="180" src={serviceImage[index]} />
              </div>
              <div className='flex flex-col  gap-2'>
                <h1 className='w-full text-xl font-semibold text-[#EE7A19]'> {service[index]}</h1>
                <div className='text-[#737373] text-sm px-5'>{service[index + 3]}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default service
