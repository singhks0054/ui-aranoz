import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCartPlusFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdArrowDropDown } from 'react-icons/md'
export default function Navbar() {

  const [showmenu, setShowmenu] = useState(false)
  const [drop1, setDrop1] = useState(false)
  const [drop2, setDrop2] = useState(false)
  const [drop3, setDrop3] = useState(false)

  return (<>
    <nav className='bg-myblue flex justify-between items-center text-2xl lg:text-lg p-4 lg:px-[10vw]' >
      <div className='lg:hidden' >
        <GiHamburgerMenu className='text-3xl ' onClick={() => setShowmenu(prev => !prev)} />
      </div>

      <div className='font-bold ' >
        <Link href={'/'}>Aranoz.</Link>
      </div>
      <div className='hidden lg:flex gap-8' >
        <Link href='/'>Home</Link>
        <div className='cursor-pointer ' onMouseEnter={() => setDrop1(true)} onMouseLeave={() => setDrop1(false)}  > Shop<MdArrowDropDown className='inline' />
          {drop1 && <p className='bg-mypink text-sm z-10 p-4 rounded transition duration-1000 ease-linear my-2  text-white flex flex-col   absolute top-10 ' >
            <span className='p-1' > <Link href='/shop'>Shop Category</Link></span>
            <span className='p-1' > <Link href='/product'>Product Details</Link></span></p>}</div>

        <div className='cursor-pointer ' onMouseEnter={() => setDrop2(true)} onMouseLeave={() => setDrop2(false)} > Pages<MdArrowDropDown className='inline' />
          {drop2 && <p className='bg-mypink text-sm p-4 z-10 rounded transition duration-1000 ease-linear my-2  text-white flex flex-col   absolute top-10 ' >
            <span className='p-1' > <Link href='/login'>Login</Link></span>
            <span className='p-1' > <Link href='/tracking'>Tracking</Link></span>
            <span className='p-1' > <Link href='/checkout'>Product Checkout</Link></span>
            <span className='p-1' > <Link href='/cart'>Shopping Cart</Link></span>
            <span className='p-1' > <Link href='/confirmation'>Confirmation</Link></span> </p>}</div>

        <div className='cursor-pointer ' onMouseEnter={() => setDrop3(true)} onMouseLeave={() => setDrop3(false)} > Blog<MdArrowDropDown className='inline' />
          {drop3 && <p className='bg-mypink text-sm p-4 z-10 rounded transition duration-1000 ease-linear my-2  text-white flex flex-col   absolute top-10 ' >
            <span className='p-1' > <Link href='/blog'>Blog</Link></span>
            <span className='p-1' > <Link href='/single'>Single Blog</Link></span></p>}</div>
        <Link href='/contact'>Contact</Link>
      </div>
      <div className='flex gap-4' >
        <AiOutlineSearch />
        <AiOutlineHeart />
        <BsCartPlusFill />
      </div>
    </nav>

    {/* Phone SideBar */}

    {showmenu && <div className='flex flex-col p-8 text-lg z-20 absolute bg-white w-screen transition-all' >
      <span className='p-1' onClick={() => setShowmenu(false)} > <Link href='/'>Home</Link></span>
      <div className='p-1' onMouseEnter={() => setDrop1(true)} onMouseLeave={() => setDrop1(false)} > Shop<MdArrowDropDown className='inline' />
        {drop1 && <p className='bg-mypink p-4 rounded transition duration-700 ease-linear my-2  text-white flex flex-col' >
          <span className='p-1' onClick={() => setShowmenu(false)} > <Link href='/shop'>Shop Category</Link></span>
          <span className='p-1' onClick={() => setShowmenu(false)} > <Link href='/product'>Product Details</Link></span>
        </p>}</div>

      <div className='p-1' onMouseEnter={() => setDrop2(true)} onMouseLeave={() => setDrop2(false)}>Pages<MdArrowDropDown className='inline' />
        {drop2 && <p className='bg-mypink p-4 rounded transition duration-700 ease-linear my-2  text-white flex flex-col' >
          <span className='p-1' onClick={() => setShowmenu(false)} > <Link href='/login'>Login</Link></span>
          <span className='p-1' onClick={() => setShowmenu(false)} > <Link href='/tracking'>Tracking</Link></span>
          <span className='p-1' onClick={() => setShowmenu(false)} > <Link href='/checkout'>Product Checkout</Link></span>
          <span className='p-1' onClick={() => setShowmenu(false)} > <Link href='/cart'>Shopping Cart</Link></span>
          <span className='p-1' onClick={() => setShowmenu(false)} > <Link href='/confirmation'>Confirmation</Link></span>
        </p>}</div>

      <div className='p-1' onMouseEnter={() => setDrop3(true)} onMouseLeave={() => setDrop3(false)}> Blog<MdArrowDropDown className='inline' />
        {drop3 && <p className='bg-mypink p-4 rounded transition duration-700 ease-linear my-2  text-white flex flex-col' >
          <span className='p-1' onClick={() => setShowmenu(false)} > <Link href='/blog'>Blog</Link></span>
          <span className='p-1' onClick={() => setShowmenu(false)} > <Link href='/single'>Single Blog</Link></span>
        </p>}</div>

      <span className='p-1' onClick={() => setShowmenu(false)} > <Link href='/contact'>Contact</Link> </span>
    </div>}
  </>
  )
}
