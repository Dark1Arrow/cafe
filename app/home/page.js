"use client"
import React from 'react'
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Slider from './Slider';
import Service from './service';
import Pramium from './pramium';
import Review from './review';
import "@/app/components/global.css";
import Login from '../components/Login';
import { useState, useEffect } from 'react';


const getProduct = () => {
    return fetch("Product.json", {
        cache: "no-store",
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to fetch");
            }
            console.log("done");
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        });
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
const Home = function () {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProduct()
            .then((data) => {
                setProduct(data.users); // Adjust to match the structure of your JSON file
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error in Home function:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product || product.length === 0) {
        return <div>No products available</div>;
    }

    return (
        <div className='bg-gray-800 overflow-hidden w-full mt-14'>
            <Login />
            <div className='pb-5 w-full fixed top-0 right-0 z-40'>
                <Navbar link={"home"} />
            </div>

            <Slider />

            <div style={{
                backgroundImage: 'url(/image5.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} className='min-h-[100vh]  mb-8 flex flex-col text-center justify-between'>
                <div className='flex flex-col justify-center pt-12'>
                    <div className='m-auto '>
                        <h1 className=' text-[#EE7A19] flex gap-3 text-4xl font-semibold'>Cafe<p className='text-white'>Services</p></h1>
                    </div>
                </div>
                <div>
                    <Service />
                </div>
            </div>

            <div style={{
                backgroundImage: 'url(/image6.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
                className=' min-w-full min-h-[125vh] mb-10'>

                <div className='absolute w-full min-h-[105vh]'>
                    <div className='mx-auto  w-full lg:w-[20vw] my-6 font-medium text-3xl flex  gap-2 text-[#EE7A19]'>
                        <div>Special </div>
                        <div className='text-white'>menu for you</div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='bg-white mx-auto my-4 min-h-[1px] min-w-[90vw]'></div>
                    </div>

                    <div className='flex justify-center text-center h-[100vh] lg:h-[110vh ] overflow-y-auto overflow-x-hidden '>
                        <div className='text-white grid 2xl:grid-cols-3 lg:grid-cols-2 m-3 w-[100vw]'>
                            {product.map((t, index) => (
                                <div key={index} >

                                    <div>
                                        <Pramium t={t} index={index} />
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <Review />
            </div>

            <div className='mt-8'>
                <Footer />
            </div>
        </div>
    )
}

export default Home
