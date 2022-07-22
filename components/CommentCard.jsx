import React from 'react'
import Image from 'next/image'
export default function CommentCard({ img, title, description }) {
  return (
    <div className='my-8 ' >
      <div className='flex gap-5 p-4 ' >
        <Image src={img} height={100} width={100} alt="blog Image" />
        <p>

          <span className='text-gray-400' >
            Second divided from form fish beast made. Every of seas all gathered use saying you&apos;re, he our dominion twon Second divided from
          </span>
          <span className='text-sm block mt-3' >
            Harvard milan December 4, 2017 at 3:12 pm
          </span>
        </p>
      </div>

    </div>
  )
}
