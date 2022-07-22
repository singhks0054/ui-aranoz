import React from 'react'
import Hero from '../components/Hero'
export default function checkout() {
  return (
    <>
      <Hero title={'Product Checkout'} description={'Get Your Orders.'} />

      <div className='my-10 mx-4 lg:mx-[10vw]' >
        <h1 className='bg-[#ECFDFF] p-2' >Returning Customer? Login Here !</h1>
        <p className='py-4' >If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
        <form action="">
          <p>
            <input className='block lg:inline border  p-2 mb-4 m-2 w-full  lg:w-1/2' type="email" name="" placeholder='Username' id="" />
            <input className='block lg:inline  border  p-2 mb-4 m-2 w-full lg:w-1/2 ' type="password" name="" placeholder='Password' id="" />
          </p>
          <p className='m-2 mb-4' >
            <input type="checkbox" name="" id="" />
            <label htmlFor='Check' > Remember me</label>
          </p>
          <button className=' text-white py-2 px-4 bg-mypink w-full block lg:inline-block  rounded-full lg:max-w-fit' >Log In</button>
          <button className=' text-black border mt-4 hover:bg-mypink hover:text-white lg:max-w-fit py-2 px-4 bg-white w-full block  lg:inline  rounded-full' >Create Account</button>
          <p className='m-2 text-end lg:text-start' >Forget Password ?</p>
        </form>
      </div>
      <div className='my-10 mx-4 lg:mx-[10vw]' >
        <h1 className='bg-[#ECFDFF] p-2' >Have A Coupon ?</h1>
        <input className='block lg:inline border  p-2 mb-4 m-2 w-full lg:w-1/2' type="email" name="" placeholder='Enter Coupon Code' id="" />
        <button className=' text-black border mt-4 hover:bg-mypink hover:text-white lg:max-w-fit py-2 px-4 bg-white w-full block  lg:inline  rounded-full' >Apply Coupon</button>
      </div>
      <h1 className=' text-2xl my-3 mx-4 lg:mx-[10vw] '>Billing Details</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2  my-3 mx-4 gap-10 lg:mx-[10vw] ' >



        <div>
          <form action="" className='flex flex-col ' >
            <p>
              <input className='block lg:inline border  p-2 mb-4 m-2 w-full ' type="text" name="" placeholder='First Name*' id="" />
              <input className='block lg:inline  border  p-2 mb-4 m-2 w-full ' type="text" name="" placeholder='Lasst Name*' id="" />
            </p>
            <input className='block lg:inline  border  p-2 mb-4 m-2 w-full ' type="text" name="" placeholder='Company Name' id="" />
            <p>
              <input className='block lg:inline border  p-2 mb-4 m-2 w-full ' type="text" name="" placeholder=' Phone Number' id="" />
              <input className='block lg:inline  border  p-2 mb-4 m-2 w-full ' type="email" name="" placeholder='Email Address' id="" />
            </p>
            <input className='block lg:inline  border  p-2 mb-4 m-2 w-full ' type="text" name="" placeholder='Address Line 1*' id="" />
            <input className='block lg:inline  border  p-2 mb-4 m-2 w-full ' type="text" name="" placeholder='Address Line 2*' id="" />
          </form>
          <h1 className=' text-2xl my-2 '>Shipping Details</h1>
          <form action="" className='flex flex-col my-5' >
            <input className='block lg:inline  border  p-2 mb-4 m-2 w-full ' type="text" name="" placeholder='Address Line 1*' id="" />
            <input className='block lg:inline  border  p-2 mb-4 m-2 w-full ' type="text" name="" placeholder='Address Line 2*' id="" />
            <input className='block lg:inline border  p-2 mb-4 m-2 w-full ' type="text" name="" placeholder=' Phone Number' id="" />
          </form>
        </div>
        <div className='bg-[#ECFDFF] py-5 px-2 lg:w-3/4 justify-self-end' >
          <h1 className='font-bold text-xl border-b-2 mb-2' >Order Detail</h1>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr>
                        {/* <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left"> SNo. </th> */}
                        <th scope="col" className="text-sm font-medium text-gray-900 px-1 py-4 text-left"> Product</th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-1 py-4 text-left"> Quantity </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-1 py-4 text-left"> Tool</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td> */}
                        <td className="text-sm text-gray-900  px-1 py-4 whitespace-nowrap">Pixelstore Fresh Blackberry</td>
                        <td className="text-sm text-gray-900 font-bold px-1 py-4 whitespace-nowrap">X02</td>
                        <td className="text-sm text-gray-900  px-1 py-4 whitespace-nowrap">7200.00</td>
                      </tr>
                      <tr className="border-b">
                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td> */}
                        <td className="text-sm text-gray-900  px-1 py-4 whitespace-nowrap">Pixelstore Fresh Blackberry</td>
                        <td className="text-sm text-gray-900 font-bold px-1 py-4 whitespace-nowrap">X02</td>
                        <td className="text-sm text-gray-900  px-1 py-4 whitespace-nowrap">7200.00 </td>
                      </tr>
                      <tr className="border-b">
                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td> */}
                        <td className="text-sm text-gray-900  px-1 py-4 whitespace-nowrap">Pixelstore Fresh Blackberry </td>
                        <td className="text-sm text-gray-900 font-bold px-1 py-4 whitespace-nowrap">X02 </td>
                        <td className="text-sm text-gray-900  px-1 py-4 whitespace-nowrap">7200.00 </td>
                      </tr>
                      <tr className=" ">
                        <td className="text-sm text-gray-900 font-bold px-1 py-2 whitespace-nowrap">Subtotal </td>
                        <td className="text-sm text-gray-900  px-1 py-2 whitespace-nowrap"></td>
                        <td className="text-sm text-gray-900  px-1 py-2 whitespace-nowrap">2160 </td>
                      </tr>
                      <tr className=" ">
                        <td className="text-sm text-gray-900 font-bold px-1 py-2 whitespace-nowrap">Shipping </td>
                        <td className="text-sm text-gray-900  px-1 py-2 whitespace-nowrap"></td>
                        <td className="text-sm text-gray-900  px-1 py-2 whitespace-nowrap">Flat Rate : 50 </td>
                      </tr>
                      <tr className=" border-t">
                        <td className="text-sm text-gray-900 font-bold px-1 py-2 whitespace-nowrap">Quantity</td>
                        <td className="text-sm text-gray-900  px-1 py-2 whitespace-nowrap"> </td>
                        <td className="text-sm text-gray-900 font-bold px-1 py-2 whitespace-nowrap">Total </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>

          <h1 className='font-bold text-xl border-b-2 mb-2' >Checkout Payment</h1>
          <p className='m-2 mb-4' >
            <input type="checkbox" name="" id="" />
            <label htmlFor='Check' > Remember me</label>
          </p>
          <button className=' text-white  py-2 px-4 bg-mypink w-full block lg:inline-block  rounded-full lg:max-w-fit' >Proceed For Payment</button>
        </div>
      </div>
    </>
  )
}
