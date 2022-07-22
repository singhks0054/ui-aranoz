import React from 'react'
import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'


export default function Item({ img }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  items-center my-10 lg:px-[10vw]">
      {
        img && img?.map((img, index) => (
          <div className='my-4 bg-[#e2eeff] p-8  m-4 hover:shadow-xl ' key={index} >
            <div className='flex justify-end ' >
              <Image src={img} width={300} height={300} alt='Featured Images 1' />
            </div>
            <h1 className='text-2xl font-bold  mt-4' >Quartz Belt Watch</h1>
            <p className=' mt-2' >₹ 4999</p>
            <div className='text-mypink flex justify-between mt-4 font-semibold' >+ ADD TO CART  <AiOutlineHeart className='text-black text-xl' /> </div>
          </div>
        ))
      }


    </div>
  )
}
export function SmallItem({ img }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  items-center my-10 lg:px-[10vw]">

      {
        img && img.map((img, index) => (
          <div className='my-4 bg-[#e2eeff] p-8  m-4 hover:shadow-xl ' key={index} >
            <div className='flex justify-end ' >
              <Image src={img} width={300} height={300} alt='Featured Images 1' />
            </div>
            <h1 className='text-2xl font-bold  mt-4' >Quartz Belt Watch</h1>
            <p className=' mt-2' >₹ 4999</p>
            <div className='text-mypink flex justify-between mt-4 font-semibold' >+ ADD TO CART  <AiOutlineHeart className='text-black text-xl' /> </div>
          </div>
        ))
      }


    </div>
  )
}
