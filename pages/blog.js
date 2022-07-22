import React from 'react'
import BlogCard from '../components/BlogCard'
import Hero from '../components/Hero'
import PostCard from '../components/PostCard'

const DATA = ['/xsingle_blog_1.webp', '/xsingle_blog_2.webp', '/xsingle_blog_3.webp', '/xsingle_blog_4.webp', '/xpost_1.webp', '/xpost_2.webp', '/xpost_3.webp', '/xpost_4.webp']

export default function blog({ img }) {
  return (
    <div>

      <Hero title={'Our Blog'} description={'Get to Know about our latest Products.'} />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 lg:mx-[10vw] mx-4 my-10 ">
        <div className='col-span-2 ' >
          <BlogCard img={img[0]} title='Google inks pact for new 35-storey office' description="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying." data1=' Travel, Lifestyle' data2='03 Comments' />
          <BlogCard img={img[1]} title='Google inks pact for new 35-storey office' description="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying." data1=' Travel, Lifestyle' data2='03 Comments' />
          <BlogCard img={img[2]} title='Google inks pact for new 35-storey office' description="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying." data1=' Travel, Lifestyle' data2='03 Comments' />
          <BlogCard img={img[3]} title='Google inks pact for new 35-storey office' description="That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying." data1=' Travel, Lifestyle' data2='03 Comments' />
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
              <PostCard img={img[4]} title={'From life was you fish...'} description={'January 12, 2019'} />
              <PostCard img={img[5]} title={'The Amazing Hubble'} description={'02 Hours ago'} />
              <PostCard img={img[6]} title={'Astronomy Or Astrology'} description={'03 Hours ago'} />
              <PostCard img={img[7]} title={'Asteroids telescope'} description={'01 Hours ago'} />

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
    </div>
  )
}
export async function getStaticProps() {

  return {
    props: {
      img: DATA
    }
  }
}