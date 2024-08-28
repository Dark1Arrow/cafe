"use client"
import { set } from 'mongoose';
import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';

const ShowSaction = ({ onItemClick }) => {
    const [item, setItem] = useState("Coffee");
    const menuItems = ['Coffee', 'Chai', 'Beverages', 'Drinks', 'Snacks', 'Pastries'];

    const handleItemClick = (item) => {
        onItemClick(item)
        setItem(item);
        console.log(item);
    };

    return (
            <motion.div
            variants={{
                hidden:{opacity:0},
                show:{
                    opacity:1,
                    transition:{
                        staggerChildren:0.50,
                    },
                },
            }}
            initial="hidden"
            animate="show"
            >
                <div className=' sm:w-full w-[100vw] overflow-auto h-16'>
                    <ul className='grid grid-cols-6 w-[180vw] sm:w-full'>
                        {menuItems.map((menuItem, index) => (
                            <li className='text-lg font-normal text-[#d1d1d1] cursor-pointer' key={index}>
                                <motion.button variants={{hidden:{opacity:0},show:{opacity:1}}} className={`hover:font-semibold ${item === menuItem ? 'font-bold scale-105 text-[#EE7A19]' : ""}` } onClick={() => handleItemClick(menuItem)}>{menuItem}</motion.button>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
    );
};

export default ShowSaction;
