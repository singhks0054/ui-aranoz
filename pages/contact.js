import React from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import { BsHouseDoor } from 'react-icons/bs'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { AiOutlineMail } from 'react-icons/ai'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Aranoz.</title>
      </Head>
      <Hero title='Contact Us' description='We are avilable 24X7.' />
      <div className="m-4 lg:w-[80vw] lg:m-auto">
        <h1 className='text-3xl font-semibold  my-4' >Get In Touch</h1>
        <div className="grid lg:grid-cols-3 lg:gap-10 ">
          <form className='mt-4 col-span-2 ' >
            <textarea name="" id="" placeholder='Enter Message' cols="30" className='p-2 border rounded m-1 w-full  ' rows="7"></textarea>
            <div className='w-full' >
              <input type="text" placeholder='Enter Name' name="" id="" className='p-2 border rounded m-1 w-full  ' />
              <input type="email" placeholder=' Enter Email Address' name="" id="" className='p-2 border rounded m-1 w-full  ' />
            </div>
            <input type="text" placeholder='Enter Subject' name="" id="" className='p-2 border rounded m-1 w-full   ' />
            <button className='btn rounded-full py-2 px-4 mt-4 block ' >Send Message</button>
          </form>

          <div className='mt-8 lg:mt-4 ml-4'>
            <div className='items-center flex gap-4 flex-cols mt-4' >
              <BsHouseDoor className='text-4xl' />
              <div>
                <h1>Buttonwood, California.</h1>
                <p>Rosemead, CA 91770</p>
              </div>
            </div>
            <div className='items-center flex gap-4 flex-cols mt-4' >
              <IoPhonePortraitOutline className='text-4xl' />
              <div>
                <h1>00 (440) 9865 562</h1>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className='items-center flex gap-4 flex-cols mt-4' >
              <AiOutlineMail className='text-4xl' />
              <div>
                <h1>hello@aranoz.com</h1>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
