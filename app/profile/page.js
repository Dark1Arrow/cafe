"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Chart from './chart'
import CustomPieChart from './CustomPieChart'
import { useState, useEffect } from 'react'

const getProfile = async () => {
    try {
        const res = await fetch("/api/Profile", { cache: "no-store" });

        if (!res.ok) {
            throw new Error("Failed to fetch");
        }
        return res.json();
    } catch (error) {
        console.error(error);
    }
};

const Profile = () => {

    const [profile, setProfile] = useState([]);
    const [id, setId] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProfile();
            setProfile(data.profile || []);
        };
        fetchData();
    }, []);


    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedValue = localStorage.getItem("userdata");
            if (storedValue) {
                try {
                    const parsedValue = JSON.parse(storedValue);
                    setId(parsedValue);
                } catch (error) {
                    console.error("Failed to parse userdata:", error);
                }
            }
        }
    }, []);

    return (
        <div className={` `}>
            <div className='pb-5 w-full fixed top-0 right-0 z-40'>
                    <Navbar link={"profile"} />
                </div>
            <div className={`bg-black overflow-hidden w-full h-full ${id === null ? "" : "hidden"}`}>
                <div className=' text-white flex justify-center text-center w-screen h-screen bg-slate-600'>
<div className='w-[80vw] m-auto text-3xl'>Sorry But First Register it !</div>
                </div>
            </div>

            <div className={`bg-black overflow-hidden w-full h-full pt-14 ${id === null ? "hidden" : ""}`}>

                <div className='pb-5 w-full fixed top-0 right-0 z-40'>
                    <Navbar link={"profile"} />
                </div>

                <div className='w-full py-5 h-[60vh] lg:h-[80vh] '>

                    <div style={{
                        backgroundImage: 'url(/image8.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                    }}
                        className='w-full h-[80vh] mt-2 '>
                        <div className='z-0 bg-none relative mx-auto w-[95vw] h-[40vw]'>

                            <div className='w-full h-[15vw] bg-none'></div>
                            <div className='z-10 top-5 absolute hidden lg:flex mx:[25vw] lg:mx-[37vw] bg-black rounded-full w-[50vw] lg:w-[20vw] h-[50vw] lg:h-[20vw]'
                                style={{
                                    backgroundImage: `url('/slide1.png')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'TOP',
                                }}></div>

                            {id ? (
                                <div>
                                    <div className='w-full h-[40vh] drop-shadow-md rounded-sm bg-black/25 backdrop-blur-sm text-white '>
                                        <div className='flex pt-[15vh] justify-between text-center w-[70vw] m-auto'>
                                            <div className='font-normal text-3xl '>{id.name}</div>
                                            <div className=' font-normal text-lg '>id : {id.id}</div>
                                        </div>
                                        <div className='flex-col gap-5 mt-10 flex text-start w-[70vw] m-auto'>
                                            <div className='font-semibold flex gap-4 text-xl'>Email id : <div className='font-normal'>{id.email}</div></div>

                                            <div className='font-semibold flex gap-4 text-xl'>Phone no : <div className='font-normal'>{id.phoneNo}</div></div>
                                        </div>
                                    </div>
                                </div>) : (
                                <div>No data</div>
                            )}

                            {/* {profile.map((t) =>{ 
                            if(t.id === id){
                                return(
                            <div>
                                <div className='w-full h-[40vh] drop-shadow-md rounded-sm bg-black/25 backdrop-blur-sm text-white '>
                                    <div className='flex pt-[15vh] justify-between text-center w-[70vw] m-auto'>
                                        <div className='font-normal text-3xl '>{t.uaername}</div>
                                        <div className=' font-normal text-lg '>id : {t.id}</div>
                                    </div>
                                    <div className='flex-col gap-5 mt-10 flex text-start w-[70vw] m-auto'>
                                        <div className='font-semibold flex gap-4 text-xl'>Email id : <div className='font-normal'>{t.email}</div></div>

                                        <div className='font-semibold flex gap-4 text-xl'>Phone no : <div className='font-normal'>{t.phoneNo}</div></div>
                                    </div>
                                </div>
                            </div>)}
                            return null
                        })} */}

                            {/* <div className='hidden w-full h-[60vh] lg:flex  mt-16'>
                                <div className='pt-10 pr-10 flex flex-col justify-center text-center overflow-auto lg:flex-row drop-shadow-md w-full overflow-y-auto lg:h-full h-[90vh]  bg-black/40 backdrop-blur-sm'>
                                    <div className='w-full lg:w-[50%] flex justify-center text-center h-[90vh]'><CustomPieChart /></div>
                                    <div className='w-full lg:w-[50%] h-[90vh]'><Chart /></div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Profile
