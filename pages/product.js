import React, { useState } from 'react'
import Image from 'next/image'
import { SmallItem } from '../components/Item'

const DATA = ["/xproduct_9.webp", '/xreview-2.webp', '/xreview-3.webp', '/xreview.webp', '/xreview-2.webp', '/xreview-3.webp', '/xreview.webp']

export default function Product({ img }) {
  const initialState = {
    desc: true,
    spec: false,
    comment: false,
    review: false
  }

  const [showCard, setShowCard] = useState(initialState)

  const handleChange = (card) => {
    setShowCard({ ...showCard, [card]: true })
  }
  const active = 'bg-mypink text-white shadow-mypink border-0'

  return (
    < >
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center ">
            <Image alt="ecommerce" className=" w-full lg:h-auto h-64 object-cover object-center rounded" src={img[0]} width={600} height={600} priority />
            <div className=" w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 trackingWidest">ARANOZ.</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Faded SkyBlu Denim Jeans</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-mypink" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-mypink" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-mypink" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-mypink" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-mypink" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>


              </div>
              <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="title-font font-medium text-2xl text-gray-900"> ₹ 9990</span>
                <button className=" rounded-full bg-mypink text-white border-0 py-2 px-6  ">Add to Cart</button>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='flex gap-6 sm:pl-5 mx-4 flex-col sm:flex-row  justify-start  lg:mx-[10vw] my-10' >
        <button className={` rounded-full bg-white  text-black  border py-2 px-6 ${showCard.desc && active}`} onClick={() => handleChange('desc')} >Description</button>
        <button className={` rounded-full bg-white  text-black  border py-2 px-6 ${showCard.spec && active}`} onClick={() => handleChange('spec')} >Specification</button>
        <button className={` rounded-full bg-white  text-black  border py-2 px-6 ${showCard.review && active}`} onClick={() => handleChange('review')} >Reviews</button>
        <button className={` rounded-full bg-white  text-black  border py-2 px-6 ${showCard.comment && active}`} onClick={() => handleChange('comment')} >Comments</button>
      </div>

      {
        showCard.desc && <div className='mx-4 lg:mx-[10vw]' >
          <p>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband.</p>
          <p>It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less</p>
        </div>
      }
      {
        showCard.spec && <div className='mx-4 my-10 lg:mx-[10vw] lg:text-xl text-gray-400 flex-col gap-4'>
          <div className='flex mb-2 justify-between px-8 lg:px-15 pb-2  border-b-2' >
            <p>Width</p> <p>128mm</p>
          </div>
          <div className='flex mb-2 justify-between px-8 lg:px-15 pb-2 border-b-2' >
            <p>Height</p> <p>128mm</p>
          </div>
          <div className='flex mb-2 justify-between px-8 lg:px-15 pb-2 border-b-2' >
            <p>Depth</p> <p>128mm</p>
          </div>
          <div className='flex mb-2 justify-between px-8 lg:px-15 pb-2 border-b-2' >
            <p>Weight</p> <p>128mm</p>
          </div>
          <div className='flex mb-2 justify-between px-8 lg:px-15 pb-2 border-b-2' >
            <p>Quality Checkup</p> <p>Yes</p>
          </div>
          <div className='flex mb-2 justify-between px-8 lg:px-15 pb-2 border-b-2' >
            <p>Freshness Duration </p> <p>3 Days</p>
          </div>
          <div className='flex justify-between px-8 lg:px-15 pb-2 border-b-2' >
            <p>When Packeting</p> <p>Without touch of hand</p>
          </div>
          <div className='flex justify-between px-8 lg:px-15 pb-2 border-b-2' >
            <p>Each Box contains</p> <p>6 Pieces</p>
          </div>
        </div>
      }
      {
        showCard.review && <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 mx-4 my-10 lg:mx-[10vw] lg:flex-row' >

          <div>
            <div className='mb-2 flex justify-between items-center'>
              <p>
                <Image src={img[1]} height={50} width={50} alt='dp' />
                <span className="inline-block ml-4 ">
                  <span className='' >Blake Ruiz</span>
                  <span className='block' > 12th Feb, 2017 at 05:56 pm</span>
                </span>
              </p>
              <button className='rounded-full bg-white  text-black py-1 px-6  border  hover:bg-mypink  hover:text-white' >Reply</button>
            </div>
            <p className='text-gray-500  mb-10' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>

            <div className='mb-2 flex justify-between items-center'>
              <p>
                <Image src={img[2]} height={50} width={50} alt='dp' />
                <span className="inline-block ml-4 ">
                  <span className='' >Blake Ruiz</span>
                  <span className='block' > 12th Feb, 2017 at 05:56 pm</span>
                </span>
              </p>
              <button className='rounded-full bg-white  text-black py-1 px-6  border  hover:bg-mypink  hover:text-white' >Reply</button>
            </div>
            <p className='text-gray-500 mb-10' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>

            <div className='mb-2 flex justify-between items-center'>
              <p>
                <Image src={img[3]} height={50} width={50} alt='dp' />
                <span className="inline-block ml-4 ">
                  <span className='' >Blake Ruiz</span>
                  <span className='block' > 12th Feb, 2017 at 05:56 pm</span>
                </span>
              </p>
              <button className='rounded-full bg-white  text-black py-1 px-6  border  hover:bg-mypink  hover:text-white' >Reply</button>
            </div>
            <p className='text-gray-500  mb-10' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
          </div>

          <div className='m-4' >
            <h1 className='text-2xl font-bold' >Post a Comment</h1>
            <form action="" className='flex flex-col' >

              <input type="text" placeholder='Full Name' className='border m-2 p-2 rounded' name="" id="" />
              <input type="text" placeholder='Email Address' className='border m-2 p-2 rounded' name="" id="" />
              <input type="text" placeholder='Phone Number' className='border m-2 p-2 rounded' name="" id="" />
              <textarea type="text" rows={5} cols={40} className='border m-2 p-2 rounded' placeholder='Message' name="" id="" />
              <button className='rounded-full max-w-fit mt-4 justify-self-end bg-mypink py-1 px-6 text-white' >Submit Now</button>
            </form>

          </div>
        </div>
      }
      {
        showCard.comment && <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 mx-4 my-10 lg:mx-[10vw] lg:flex-row' >

          <div>
            <div className="grid grid-cols-2 gap-4 my-10">
              <div className='bg-[#ECFDFF] py-6 flex flex-col border border-gray justify-center items-center  ' >
                <p className="text-xl font-semibold">Overall</p>
                <p className='text-3xl font-bold text-mypink' >4.0</p>
                <p>(03 Reviews)</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Based On 3 Reviews</p>
                <p className='text-sm text-gray-400' >5 Stars &#11088; &#11088; &#11088; &#11088; &#11088; (01)</p>
                <p className='text-sm text-gray-400' >4 Stars &#11088; &#11088; &#11088; &#11088; &#11088; (01)</p>
                <p className='text-sm text-gray-400' >3 Stars &#11088; &#11088; &#11088; &#11088; &#11088; (01)</p>
                <p className='text-sm text-gray-400' >2 Stars &#11088; &#11088; &#11088; &#11088; &#11088; (01)</p>
                <p className='text-sm text-gray-400' >1 Stars &#11088; &#11088; &#11088; &#11088; &#11088; (01)</p>
              </div>
              <div></div>
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <p>
                <Image src={img[4]} height={50} width={50} alt='dp' />
                <span className="inline-block ml-4 ">
                  <span className='' >Blake Ruiz</span>
                  <span className='block' > &#11088; &#11088; &#11088; &#11088; &#11088;</span>
                </span>
              </p>
              <button className='rounded-full bg-white  text-black py-1 px-6  border  hover:bg-mypink  hover:text-white' >Reply</button>
            </div>
            <p className='text-gray-500  mb-10' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>

            <div className='mb-2 flex justify-between items-center'>
              <p>
                <Image src={img[5]} height={50} width={50} alt='dp' />
                <span className="inline-block ml-4 ">
                  <span className='' >Blake Ruiz</span>
                  <span className='block' > &#11088; &#11088; &#11088; &#11088; &#11088;</span>
                </span>
              </p>
              <button className='rounded-full bg-white  text-black py-1 px-6  border  hover:bg-mypink  hover:text-white' >Reply</button>
            </div>
            <p className='text-gray-500 mb-10' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>

            <div className='mb-2 flex justify-between items-center'>
              <p>
                <Image src={img[6]} height={50} width={50} alt='dp' />
                <span className="inline-block ml-4 ">
                  <span className='' >Blake Ruiz</span>
                  <span className='block' > &#11088; &#11088; &#11088; &#11088; &#11088;</span>
                </span>
              </p>
              <button className='rounded-full bg-white  text-black py-1 px-6  border  hover:bg-mypink  hover:text-white' >Reply</button>
            </div>
            <p className='text-gray-500  mb-10' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
          </div>

          <div className='m-4' >
            <h1 className='text-2xl font-bold' >Add a Review</h1>
            <p className='my-2 sm:text-xl font-semibold' >Your Rating : &#11088; &#11088; &#11088; &#11088; &#11088;Outstanding</p>
            <form action="" className='flex flex-col' >

              <input type="text" placeholder='Full Name' className='border m-2 p-2 rounded' name="" id="" />
              <input type="text" placeholder='Email Address' className='border m-2 p-2 rounded' name="" id="" />
              <input type="text" placeholder='Phone Number' className='border m-2 p-2 rounded' name="" id="" />
              <textarea type="text" rows={5} cols={40} className='border m-2 p-2 rounded' placeholder='Review' name="" id="" />
              <button className='rounded-full max-w-fit mt-4 justify-self-end bg-mypink py-1 px-6 text-white' >Submit Now</button>
            </form>

          </div>
        </div>
      }


      <div className='text-3xl font-bold lg:mx-[10vw] mt-5 pl-4 ' >Best Sellers <span className='text-gray-400 ml-5' >Shop</span> </div>
      <SmallItem img={['/xproduct_1.webp', '/xproduct_2.webp', '/xproduct_3.webp', '/xproduct_4.webp']} />
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