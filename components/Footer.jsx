import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 p-8 lg:px-[10vw] ' >
        <div className='mt-2 '>
          <h1 className='text-xl font-semibold mb-4' >Top Products</h1>
          <p className='mb-1' >Managed Website</p>
          <p className='mb-1' >Manage Reputation</p>
          <p className='mb-1' >Power Tools</p>
          <p className='mb-1' >Marketing Service</p>

        </div>
        <div className='mt-2 '>
          <h1 className='text-xl font-semibold mb-4' >Quick Links</h1>
          <p className='mb-1' >Jobs</p>
          <p className='mb-1' >Brand Assets</p>
          <p className='mb-1' >Invester Relations</p>
          <p className='mb-1' >Terms of Service</p>
        </div>
        <div className='mt-2 '>
          <h1 className='text-xl font-semibold mb-4' >Features</h1>
          <p className='mb-1' >Jobs</p>
          <p className='mb-1' >Brand Assets</p>
          <p className='mb-1' >Invester Relations</p>
          <p className='mb-1' >Terms of Service</p>
        </div>
        <div className='mt-2 '>
          <h1 className='text-xl font-semibold mb-4' >Resources</h1>
          <p className='mb-1' >Guides</p>
          <p className='mb-1' >Research</p>
          <p className='mb-1' >Experts</p>
          <p className='mb-1' >Agencies</p>
        </div>
        <div className='mt-2 '>
          <h1 className='text-xl font-semibold mb-4' >Newsletter</h1>
          <p className='mb-1' >Heaven fruitful doesn&apos;t over lesser in days. Appear creeping</p>
          <p className='mb-1' > <input type="text" className='p-2 rounded bg-slate-100 outline-none' placeholder='Email Address' /> <button className='btn rounded p-2 mt-2 ' >Subscribe</button> </p>
        </div>
      </div>
      <div className='text-center my-4 ' >
        <p>Copyright ©2022 All rights reserved</p>
        <p className='flex justify-center gap-10 mt-4' >
          <FaFacebookF className='hover:text-mypink' />
          <FaTwitter className='hover:text-mypink' />
          <FaInstagram className='hover:text-mypink' />
        </p>
      </div>
    </footer>
  )
}
