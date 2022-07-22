import React from 'react'
import Hero from '../components/Hero'
import PostCard from '../components/PostCard'
import Image from 'next/image'
import { AiOutlineUser } from 'react-icons/ai'
import { TiMessages } from 'react-icons/ti'
import CommentCard from '../components/CommentCard'

const DATA = ['/xsingle_blog_1.webp', '/xreview.webp']

export default function blog({ data }) {
  return (
    <>

      <Hero title={'Our Blog'} description={'Get to Know about our latest Products.'} />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-[10vw] lg:gap-10 mx-4 my-10 ">
        <div className='col-span-2  ' >
          <Image src={data[0]} height={450} width={750} alt="blog Image" />
          <h1 className='text-xl font-bold pt-4 ' >Second divided from form fish beast made every of seas all gathered us saying he our</h1>
          <p className='my-2'><AiOutlineUser className='inline ' /> Travel, Lifestyle <span className="mx-3">|</span><TiMessages className='inline' /> 03 Comments </p>
          <p className='mb-4' >
            MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
          <p>
            MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually
          </p>

          <div className='bg-[#FBF9FF] p-8 my-8' >
            <p className='italic border-l-2 p-4 bg-white' >MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.</p>

          </div>

          <p className='mb-4'>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
          <p>
            MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually</p>

          <div className='bg-[#FBF9FF] py-8 my-8 border-y-2' >
            <div className='flex gap-5 p-4 ' >
              <Image src={data[1]} height={80} width={80} alt="blog Image" />
              <p>
                <span className='text-semibold text-xl block' >
                  Harvard milan
                </span>
                <span>
                  Second divided from form fish beast made. Every of seas all gathered use saying you&apos;re, he our dominion twon Second divided from
                </span>
              </p>
            </div>

          </div>

          <h1 className='text-xl' >Comments</h1>
          <CommentCard img={'/xreview.webp'} />
          <CommentCard img={'/xreview-2.webp'} />
          <CommentCard img={'/xreview-3.webp'} />
          <div className='' >
            <h1 className='text-xl' >Leave a Reply</h1>
            <form action="" className='flex flex-col my-5' >
              <textarea cols={30} rows={10} className='block lg:inline  border  p-2 mb-4 m-2 w-full ' type="text" name="" placeholder='Write Your Comment' id="" />
              <input className='block lg:inline  border  p-2 mb-4 m-2 w-full ' type="text" name="" placeholder='Enter Name' id="" />
              <button className='bg-mypink rounded-full py-2 px-4 max-w-fit text-white' >SEND MESSAGE</button>
            </form>
          </div>
        </div>


        <div className='my-10' >
          <div className='bg-[#FBF9FF] my-10 py-5' >
            <form className='flex flex-col' >
              <input type="text" placeholder='Search Keyword' className='p-2 border mx-4 mt-4 ' name="" id="" />
              <button className='bg-mypink text-white py-2 mx-4 mt-4 ' >SEARCH</button>
            </form>
          </div>
          <div className='bg-[#FBF9FF] my-10 py-5' >
            <h1 className='text-3xl pl-2 font-bold border-b-2 pb-2 mx-4 my-5'>Category</h1>
            <div className='m-4' >
              <p className='p-1 border-b text-lg hover:text-mypink ' > Resaurant food(37)</p>
              <p className='p-1 border-b text-lg hover:text-mypink ' > Travel news(10)</p>
              <p className='p-1 border-b text-lg hover:text-mypink ' > Modern technology(03)</p>
              <p className='p-1 border-b text-lg hover:text-mypink ' > Product(11)</p>
              <p className='p-1 border-b text-lg hover:text-mypink ' > Inspiration(21)</p>
              <p className='p-1 border-b text-lg hover:text-mypink ' > Health Care (21)</p>
            </div>
          </div>
          <div className='bg-[#FBF9FF] my-10 py-5' >
            <h1 className='text-3xl pl-2 font-bold border-b-2 pb-2 mx-4 my-5'>Recent Post</h1>
            <div className='m-4' >
              <PostCard img={'/xpost_1.webp'} title={'From life was you fish...'} description={'January 12, 2019'} />
              <PostCard img={'/xpost_2.webp'} title={'The Amazing Hubble'} description={'02 Hours ago'} />
              <PostCard img={'/xpost_3.webp'} title={'Astronomy Or Astrology'} description={'03 Hours ago'} />
              <PostCard img={'/xpost_4.webp'} title={'Asteroids telescope'} description={'01 Hours ago'} />

            </div>
          </div>
          <div className='bg-[#FBF9FF] my-10 py-5' >
            <h1 className='text-3xl pl-2 font-bold border-b-2 pb-2 mx-4 my-5'>Tag Cloud</h1>
            <div className='m-4 flex flex-wrap gap-2' >
              <button className='py-1 px-4 hover:bg-mypink hover:text-black bg-white text-black ' >project</button>
              <button className='py-1 px-4 hover:bg-mypink hover:text-black bg-white text-black ' >love</button>
              <button className='py-1 px-4 hover:bg-mypink hover:text-black bg-white text-black ' >technology</button>
              <button className='py-1 px-4 hover:bg-mypink hover:text-black bg-white text-black ' >restaurant</button>
              <button className='py-1 px-4 hover:bg-mypink hover:text-black bg-white text-black ' >life</button>
              <button className='py-1 px-4 hover:bg-mypink hover:text-black bg-white text-black ' >style</button>
              <button className='py-1 px-4 hover:bg-mypink hover:text-black bg-white text-black ' >design</button>
              <button className='py-1 px-4 hover:bg-mypink hover:text-black bg-white text-black ' >illustration</button>

            </div>
          </div>
          <div className='bg-[#FBF9FF] my-10 py-5' >

            <form className='flex flex-col' >
              <input type="text" placeholder='Enter Email' className='p-2 border mx-4 mt-4 ' name="" id="" />
              <button className='bg-mypink text-white py-2 mx-4 mt-4 ' >SUBSCRIBE FOR NEWSLETTER</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {

  return {
    props: {
      data: DATA
    }
  }
}