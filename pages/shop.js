import React from 'react'
import Hero from '../components/Hero'
import Item from '../components/Item'
import { AiOutlineHeart } from 'react-icons/ai'
import Image from 'next/image'
const DATA = ['/xproduct_1.webp', '/xproduct_2.webp', '/xproduct_3.webp', '/xproduct_4.webp', '/xproduct_5.webp', '/xproduct_6.webp', '/xproduct_7.webp', '/xproduct_8.webp']
export default function shop({ img }) {
  return (
    <>
      <Hero title='Shop Category' description={'Explore all product ranges.'} />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-[10vw] justify-items-center my-10">
        <div className='text-left justify-self-start ml-4' >
          <h1 className='font-semibold text-2xl my-2' >Browse Categories</h1>
          <p className='mb-1 hover:text-mypink cursor-pointer' >Frozen Fish (250)</p>
          <p className='mb-1 hover:text-mypink cursor-pointer' >Dried Fish (250)</p>
          <p className='mb-1 hover:text-mypink cursor-pointer' >Fresh Fish (250)</p>
          <p className='mb-1 hover:text-mypink cursor-pointer' >Meat Alternatives (250)</p>
          <p className='mb-1 hover:text-mypink cursor-pointer' >Frozen Fish (250)</p>
          <p className='mb-1 hover:text-mypink cursor-pointer' >Dried Fish (250)</p>
          <p className='mb-1 hover:text-mypink cursor-pointer' >Fresh Fish (250)</p>
          <p className='mb-1 hover:text-mypink cursor-pointer' >Meat Alternatives (250)</p>

          <h1 className='font-semibold text-2xl my-2' >Product Filters</h1>
          <p className='mb-1 hover:text-mypink cursor-pointer' >Apple</p>
          <p className='mb-1 hover:text-mypink cursor-pointer' >MI</p>
          <p className='mb-1 hover:text-mypink cursor-pointer' >Samsung</p>
          <p className='mb-1 hover:text-mypink cursor-pointer' >Lenovo</p>
          <p className='mb-1 hover:text-mypink cursor-pointer' >Motorola</p>
          <h1 className='font-semibold text-2xl my-2' >Color Filter</h1>
          <p className='mb-1 hover:text-mypink cursor-pointer' >Black</p>
          <p className='mb-1 hover:text-mypink cursor-pointer' >Green</p>
          <p className='mb-1 hover:text-mypink cursor-pointer' >Red</p>
          <p className='mb-1 hover:text-mypink cursor-pointer' >Blue</p>
          <p className='mb-1 hover:text-mypink cursor-pointer' >Yellow</p>
          <h1 className='font-semibold text-2xl my-2' >Price Filter</h1>
          <div className="w-full">
            <input type="range" list="tickmarks" min="0" max="100" className="w-full " />
            <datalist id="tickmarks"   >
              <option value="0" >0</option>
              <option value="10">1000</option>
              <option value="20">2000</option>
              <option value="30">3000</option>
              <option value="40">4000</option>
              <option value="50">5000</option>
              <option value="60">6000</option>
              <option value="70">7000</option>
              <option value="80">8000</option>
              <option value="90">9000</option>
              <option value="100">10000</option>
            </datalist>
          </div>
        </div>
        <div className='col-span-2'>
          <div className=' grid grid-cols-2 sm:grid-cols-4 justify-items-start lg:mx-4 mx-4 gap-4  my-5 items-center'>
            <p><span className='text-mypink font-semibold' >10000</span> <span className="semi-bold">Product Found</span></p>
            <p><span className="semi-bold">Short By</span> : <select className='p-1' name="" id=""   >
              <option value="Select">Single </option>
              <option value="Select">Double </option>
              <option value="Select">King Size </option>
            </select></p>
            <p><span className="semi-bold">Shop</span>: &nbsp; 1 &nbsp; 2 &nbsp; 3</p>
            <p>
              <input type="text" placeholder='Search' className='pl-5 p-1 w-3/4 border rounded ' />
            </p>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 col-span-2   items-center  ">

            {
              img.map((img, index) => (
                <div className='my-4 bg-[#e2eeff] p-8  m-2 hover:shadow-xl ' key={index} >
                  <div className='flex justify-end ' >
                    <Image src={img} width={350} height={350} alt='Featured Images 1' />
                  </div>
                  <h1 className='text-2xl font-bold  mt-4' >Quartz Belt Watch</h1>
                  <p className=' mt-2' >₹ 4999</p>
                  <div className='text-mypink flex justify-between mt-4 font-semibold' >+ ADD TO CART  <AiOutlineHeart className='text-black text-xl' /> </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>

    </>
  )
}

export async function getStaticProps() {

  return {
    props: {
      img: DATA
    }
  }
}