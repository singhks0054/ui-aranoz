import React from 'react'
import Hero from '../components/Hero'

export default function tracking() {
  return (
    <>
      <Hero title='Tracking Order' description={'Track Your all Orders here.'} />
      <p className='lg:mx-[10vw] mx-4 my-10' >To track your order please enter your Order ID in the box below and press the &quot;Track&quot; button. This was given to you on your receipt and in the confirmation email you should have received.</p>
      <form action="" className='flex flex-col lg:mx-[10vw] mx-4 my-10 ' >
        <input type="text" placeholder='Order Id' className='m-2 p-2 border' />
        <input type="text" placeholder='Billing Email Address' className='m-2 p-2 border' name="" id="" />
        <button className=' text-white py-2 mt-4 ml-2 max-w-fit px-4 bg-mypink w-full block rounded-full' >TRACK ORDER</button>
      </form>

    </ >
  )
}
// 