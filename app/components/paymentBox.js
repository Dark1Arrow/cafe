"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const paymentBox = () => {
    const [count,setCount] = useState(1)

    const Increse = () =>{
        setCount(count + 1)
    }

    const Decrese = () =>{
        if(count > 1){
        setCount(count - 1)
        }
    }

    return (
        <div className='w-screen h-screen'>
            <div className='w-screen h-screen flex justify-center text-center'>
                <div className='w-screen h-screen absolute top-0 z-0 bg-black/25 '></div>
                <div className='z-10 m-auto w-[95vw] sm:w-[80vw] xl:w-[40vw] h-[95vh] sm:h-[90vh] bg-white rounded-lg'>
                    <div className='flex flex-col bg-slate-600 w-full h-[30vh]'>
                        <div className='w-10 h-10 ml-auto m-2'>
                            <Image width={25} height={25} alt="" src="/cross.svg" />
                        </div>

                        <div className='bg-gray-800 flex justify-center text-center p-3 text-white font-medium text-2xl w-[50vw] xl:w-[18vw] mt-auto h-14 rounded-tr-[30px]'>Coffe Name</div>
                    </div>

                    <div className='w-full flex justify-center text-center p-5 bg-[#808080] h-[15vh] sm:h-[10vh]'><div className='text-xl font-semibold text-[#EE7A19] w-auto'>Description</div><div className='w-auto text-xl font-light text-white'> : Smooth fruit flavor with a kick of caffeine and sweet cream.</div></div>

                    <div className=' flex flex-col justify-between text-cneter w-[full] h-[35vh]  mx-14'>
                        <div className='font-semibold text-2xl p-3'>ORDER BILL</div>

                        <div className=' flex flex-col  rounded-lg  bg-[#F2F2F2] w-full p-2 h-[28vh] overflow-auto'>
                            <div>
                                <div className=' flex justify-between text-center w-full p-3 h-12  rounded-lg  bg-[#D9D9D9]'>
                                    <div className='text-xl'>Cofee name</div>
                                    <div className='text-xl'>${count * 20 }</div>
                                </div>
                            </div>

                            <div>
                                <div className=' flex justify-between text-center w-full p-3 h-12 '>
                                    <div className='text-xl'>Total amount</div>
                                    <div className='text-xl'>${count * 20 }</div>
                                </div>
                            </div>
                            <div className='w-full gap-3 h-full flex justify-center text-center'>
                                <button onClick={Decrese} className='my-auto'><Image alt='' width={20} height={20} src="/increse.svg"/></button>
                                <div className='my-auto w-14 p-1 h-8 bg-[#D9D9D9]'>{count}</div>
                                <button onClick={Increse} className='my-auto'><Image alt='' width={20} height={20} src="/decrese.svg"/></button>
                            </div>
                        </div>

                    </div>
                    <div className='w-[full] h-[15vh] flex justify-center'>
                        <button className='bg-[#52cb6c] text-white w-[170px] h-[45px]  m-auto rounded-full text-xl font-semibold'>Payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default paymentBox
