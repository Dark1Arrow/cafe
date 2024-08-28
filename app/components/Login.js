"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { set } from 'mongoose'

const Login = () => {
    const [close, setClose] = useState(false)
    const [change, setChange] = useState(false)
    const [userdata,setuserData] = useState({name: '', id:'', email:'', phoneNo:''})

    const handleChange = () => {
        setClose(true)
        setChange(false)
    }

    const handleChangefor = () => {
        setChange(true)
        setClose(true)
    }
    const handleChangeNor = () => {
        setChange(false)
        setClose(false)
    } 
    const handleId = () =>{
        if (typeof window !== 'undefined') {
            localStorage.setItem("userdata" , JSON.stringify(userdata));
            handleChangeNor();
          }
    }
    return (
        <div>
            <div className={`w-screen h-screen flex justify-center z-20 fixed top-0 right-0 ${change ? "" : "hidden"}`}>
                <div className='z-0 w-full h-full backdrop-blur-lg bg-black/20 fixed top-0 right-0'> </div>
                <div className='z-20 w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[25vw] h-[80vh] m-auto rounded-3xl bg-[#F4F4F4]'>
                    <div className='flex justify-center text-center'>
                        <div className='text-2xl p-6 font-semibold m-auto'>Sign up</div>
                        <div className='py-5 pr-5 cursor-pointer'><Image onClick={handleChange} width={20} height={20} src="/cross.svg" /></div>
                    </div>

                    <div className='w-full h-[2px] bg-[#C1C1C1]'></div>
                    <div className='w-full h-[1px] bg-[#ffffff]'></div>

                    <div className='flex flex-col gap-3 justify-center w-[85vw] sm:w-[65vw] md:w-[45vw] lg:w-[35vw] xl:w-[20vw] h-[50vh] m-auto  '>
                        <div>
                            <label htmlFor="username"></label>
                            <input value={userdata.name} id= "username" onChange={(e) => setuserData({...userdata,name: e.target.value})} placeholder='Username' className='bg-[#F4F4F4] p-1 px-3 w-[85vw] sm:w-[65vw] md:w-[45vw] lg:w-[35vw] xl:w-[20vw] h-10 rounded-lg' type="text" />
                            <div className='my-1 w-full h-[2px] bg-[#C1C1C1]'></div>
                        </div>

                        <div>
                            <label htmlFor="Id"></label>
                            <input value={userdata.id} onChange={(e) => setuserData({...userdata,id: e.target.value})}  placeholder='Id' className='bg-[#F4F4F4] p-1 px-3 w-[85vw] sm:w-[65vw] md:w-[45vw] lg:w-[35vw] xl:w-[20vw] h-10 rounded-lg' type="text" />
                            <div className='my-1 w-full h-[2px] bg-[#C1C1C1]'></div>
                        </div>

                        <div>
                            <label htmlFor="email"></label>
                            <input value={userdata.email} onChange={(e) => setuserData({...userdata,email: e.target.value})}  placeholder='email' className='bg-[#F4F4F4] p-1 px-3 w-[85vw] sm:w-[65vw] md:w-[45vw] lg:w-[35vw] xl:w-[20vw] h-10 rounded-lg' type="text" />
                            <div className='my-1 w-full h-[2px] bg-[#C1C1C1]'></div>
                        </div>

                        <div>
                            <label htmlFor="Phone no"></label>
                            <input value={userdata.phoneNo} onChange={(e) => setuserData({...userdata,phoneNo: e.target.value})}  placeholder='Phone no' className='bg-[#F4F4F4] p-1 px-3 w-[85vw] sm:w-[65vw] md:w-[45vw] lg:w-[35vw] xl:w-[20vw] h-10 rounded-lg' type="text" />
                            <div className='my-1 w-full h-[2px] bg-[#C1C1C1]'></div>
                        </div>

                        <button className='text-[#BCBCBC] ml-3 mr-auto hover:scale-105'>Forget Password?</button>
                    </div>

                    <div className='flex justify-center'>
                        <button className='bg-white w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[15vw] xl:w-[8vw] h-10 text-[18px] rounded-3xl shadow-lg hover:scale-105 hover:bg-[#f9f9f9]' onClick={handleId}>Sign up</button>
                    </div>

                    <div className='w-full flex mt-5 gap-3 justify-center'>
                        <div className='text-[#BCBCBC]'>If not a member?</div>
                        <button onClick={handleChangeNor} className='text-[#0092FB] hover:scale-105 hover:text-[#309be8]'>Login</button>
                    </div>
                </div>
            </div>

            <div className={`w-screen h-screen flex justify-center z-20 fixed top-0 right-0 ${close ? "hidden" : " "}`}>
                <div className='z-0 w-full h-full bg-black opacity-50 fixed top-0 right-0'> </div>
                <div className='z-20 w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[25vw] h-[60vh] m-auto rounded-3xl bg-[#F4F4F4]'>
                    <div className='flex justify-center text-center'>
                        <div className='text-2xl p-6 font-semibold m-auto'>Login</div>
                        <div className='py-5 pr-5 cursor-pointer'><Image onClick={handleChange} width={20} height={20} src="/cross.svg" /></div>
                    </div>

                    <div className='w-full h-[2px] bg-[#C1C1C1]'></div>
                    <div className='w-full h-[1px] bg-[#ffffff]'></div>

                    <div className='flex flex-col gap-3 justify-center w-[85vw] sm:w-[65vw] md:w-[45vw] lg:w-[35vw] xl:w-[20vw] h-[30vh] m-auto  '>
                        <div>
                            <label htmlFor="username"></label>
                            <input placeholder='Username' className='bg-[#F4F4F4] p-1 px-3 w-[85vw] sm:w-[65vw] md:w-[45vw] lg:w-[35vw] xl:w-[20vw] h-10 rounded-lg' type="text" />
                            <div className='my-1 w-full h-[2px] bg-[#C1C1C1]'></div>
                        </div>

                        <div>
                            <label htmlFor="Password"></label>
                            <input placeholder='Password' className='bg-[#F4F4F4] p-1 px-3 w-[85vw] sm:w-[65vw] md:w-[45vw] lg:w-[35vw] xl:w-[20vw] h-10 rounded-lg' type="text" />
                            <div className='my-1 w-full h-[2px] bg-[#C1C1C1]'></div>
                        </div>

                        <button className='text-[#BCBCBC] ml-3 mr-auto hover:scale-105'>Forget Password?</button>
                    </div>

                    <div className='flex justify-center'>
                        <button className='bg-white w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[15vw] xl:w-[8vw] h-10 text-[18px] rounded-3xl shadow-lg hover:scale-105 hover:bg-[#f9f9f9]' onClick={handleId}>Login</button>
                    </div>

                    <div className='w-full flex mt-5 gap-3 justify-center'>
                        <div className='text-[#BCBCBC]'>If not a member?</div>
                        <button onClick={handleChangefor} className='text-[#0092FB] hover:scale-105 hover:text-[#309be8]'>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
