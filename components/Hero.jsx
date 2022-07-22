import React from 'react'
import Image from 'next/image'
export default function Hero({ title, description, button }) {
  return (
    <>
      <div className='grid grid-cols-2 bg-myblue items-center justify-items-center py-5 px-4 ' >

        <div>
          <h1 className='font-bold text-2xl lg:text-4xl mb-2' >{title}</h1>
          <p>{description}</p>
          {button && <button className='btn rounded p-2' >BUY NOW</button>}
        </div>
        <span className='p-8 '>
          <Image width={300} height={300} src='/xfeature1.webp' alt='Featured Image' />
        </span>
      </div>
    </>
  )
}
