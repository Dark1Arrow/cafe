"use client"
import React, { useEffect, useState } from 'react';
import { easeInOut, motion } from 'framer-motion';

const getMenu = async () => {
    try {
        const res = await fetch("/item.json", { cache: "no-store" }); // Adjust the path to your JSON file

        if (!res.ok) {
            throw new Error("Failed to fetch");
        }
        return res.json();
    } catch (error) {
        console.error(error);
    }
};


const MenuItem = ({ selectedItem }) => {
    const [menu, setMenu] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getMenu();
            setMenu(data.menu || []); // Adjust to match the structure of your JSON file
        };
        fetchData();
        console.log("Current selected item:", selectedItem);
    }, [selectedItem]);

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.75,
                        ease: "easeInOut"
                    },
                },
            }}
            initial="hidden"
            animate="show"
            className=' w-full flex justify-center text-center h-[95vh] overflow-auto '>
            <div className='grid 2xl:grid-cols-3 lg:grid-cols-2 gap-4 m-3 w-full'>
                {menu.map((t, i) => {
                    if (t.name === selectedItem) {
                        return (
                            <motion.div key={i}  variants={{ hidden: { opacity: 0, x: 100 }, show: { opacity: 1, x: 0, transition: { delay: 0.2 * i / 5 } } }} className='drop-shadow-lg m-3 mx-10 backdrop-blur-lg bg-black/20 h-[400px] flex flex-col'>
                                <div className='w-full min-h-[70%] mx-auto '
                                    style={{
                                        backgroundImage: `url(${t.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}>
                                </div>
                                <div className='grid grid-cols-2 gap-1 pt-3 w-[80%] min-h-[30%] mx-auto'>
                                    <div>
                                        <div className='text-start font-normal text-xl text-white'>{t.title}</div>
                                        <div className='mt-1 text-start text-[#d8d8d8] font-extralight text-[8px] sm:text-[10px] h-[6vh] truncate text-balance'>{t.description}</div>
                                    </div>
                                    <div>
                                        <div className='text-center text-xl text-white'>{t.price}$</div>
                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            whileHover={{ scale: 1.1, color: "#E0E0E0" }}
                                            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                                            className='mt-2  bg-[#EE7A19] text-white p-1 rounded-[30px] px-8 text-xl'>Buy</motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    }
                    return null;
                })}
            </div>
        </motion.div>
    );
};

export default MenuItem;
