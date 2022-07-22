import React from 'react'
import Hero from '../components/Hero'
export default function confirmation() {
  return (
    <>
      <Hero title={'Order Confirmation'} description={'Check Your All Orders With Us.'} />
      <div className="grid grid-cols-1 lg:grid-cols-3 my-10 mx-4 gap-5 lg:mx-[10vw]">
        <div className='bg-[#ECFDFF] py-5 px-4' >
          <h1 className='font-bold text-xl border-b-2 mb-2' >Order Info</h1>
          <div className='flex justify-between'> <p className='text-gray-400' > Order Number : </p><p> 60235</p></div>
          <div className='flex justify-between'> <p className='text-gray-400' > Data : </p><p> Oct 03, 2017</p></div>
          <div className='flex justify-between'> <p className='text-gray-400' > Total : </p><p> USD 2210</p></div>
          <div className='flex justify-between'> <p className='text-gray-400' > Payment Methord : </p><p> Online</p></div>
        </div>
        <div className='bg-[#ECFDFF] py-5 px-4' >
          <h1 className='font-bold text-xl border-b-2 mb-2' >Billing Address</h1>
          <div className='flex justify-between' > <p className='text-gray-400' > Street : </p><p> 56/8</p></div>
          <div className='flex justify-between' > <p className='text-gray-400' > City : </p><p> Los Angeles</p></div>
          <div className='flex justify-between' > <p className='text-gray-400' > Country : </p><p> United States</p></div>
          <div className='flex justify-between' > <p className='text-gray-400' > PostCode : </p><p> 36952</p></div>
        </div>
        <div className='bg-[#ECFDFF] py-5 px-4' >
          <h1 className='font-bold text-xl border-b-2 mb-2' >Shipping Address</h1>
          <div className='flex justify-between' > <p className='text-gray-400' > Street : </p><p> 56/8</p></div>
          <div className='flex justify-between' > <p className='text-gray-400' > City : </p><p> Los Angeles</p></div>
          <div className='flex justify-between' > <p className='text-gray-400' > Country : </p><p> United States</p></div>
          <div className='flex justify-between' > <p className='text-gray-400' > PostCode : </p><p> 36952</p></div>
        </div>
      </div>
      <div className='bg-[#ECFDFF] py-5 px-4 mx-4 lg:mx-[10vw]' >
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
      </div>
    </>
  )
}
