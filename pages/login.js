import React from 'react'
import Hero from '../components/Hero'
export default function login() {
  return (
    <>
      <Hero title='Tracking Order' description={'Track Your all Orders here.'} />

      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center mx-4 gap-6 my-10 items-center lg:mx-[10vw] py-10 ">
        <div className='bg-gradient-to-r from-[#ff005a] to-[#ff5d2d] text-white text-center gap-5 lg:py-24  py-16 flex flex-col justify-center items-center' >
          <h1 className='font-extrabold text-2xl' >New To Our Shop ?</h1>
          <p className='px-4' >There are advances being made in science and technology everyday, and a good example of this is the Aranoz.</p>
          <button className='border py-2 px-4 hover:bg-white hover:text-black rounded-full' >Create An Account</button>
        </div>
        <div className='py-10 flex flex-col justify-start ' >
          <h1 className='text-3xl font-bold mb-8' >Welcome Back !  Please Sign in now</h1>
          <form action="">
            <input className='block border-b-2 p-2 mb-4 m-2 w-full' type="email" name="" placeholder='Username' id="" />
            <input className='block border-b-2 p-2 mb-4 m-2 w-full' type="password" name="" placeholder='Password' id="" />
            <p className='m-2 mb-4' >
              <input type="checkbox" name="" id="" />
              <label htmlFor='Check' > Remember me</label>
            </p>
            <button className=' text-white py-2 px-4 bg-mypink w-full block rounded-full' >Log In</button>
            <p className='m-2 text-end' >Forget Password ?</p>
          </form>
        </div>

      </div>
    </>
  )
}
