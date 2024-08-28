"use client"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MenuItem from './MenuItem'
import ShowSaction from './ShowSaction'
import { useState } from 'react'

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState("Coffee");
  const handleItemSelection = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className='bg-gray-800 overflow-hidden w-full mt-14'>
        <div className='pb-5 w-full fixed top-0 right-0 z-40'>
          <Navbar link={"menu"}/>
        </div>

        <div style={{
          backgroundImage: 'url(/image7.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className='w-[full] h-[120vh] mb-10 flex text-center flex-col '>

          <div className="w-full h-[120vh] absolute z-0 opacity-20 backdrop-blur-md  bg-black"></div>

          <div className=' absolute bg-none h-full w-full '>

            <div className=' w-full flex justify-center'>
              <div className='text-[#EE7A19] text-3xl font-semibold p-10'>Menu</div>
            </div>

            <div className=' h-[135vh] w-full'>

              <ShowSaction onItemClick={handleItemSelection} />

              <div className=' mx-auto bg-black w-full h-[1px]'></div>
              <div className=' mb-3 mx-auto bg-none w-full h-[2px]'></div>

              <div className=' absolute flex min-w-full justify-center text-center container'>
                <MenuItem selectedItem={selectedItem} />
              </div>
            </div>

          </div>

        </div>

        <Footer />
      </div>
    </>
  )
}

export default Menu
