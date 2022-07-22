import React from 'react'
import Hero from '../components/Hero'
import Image from 'next/image'

const DATA = ['/xcart1.webp']

export default function cart({ img }) {
  return (
    <>
      <Hero title={'Your Cart'} description={'Match Your All Products.'} />

      <div className="flex flex-col mx-4 lg:mx-[10vw] ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Product </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Title</th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Price</th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Quantity </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <Image src={img[0]} height={100} width={100} alt='Cart Image' />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Minimalistic shop</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">360.00</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <input type="number" name="" defaultValue={4} className='w-1/2 p-2' id="" />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">720.00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <Image src={img[0]} height={100} width={100} alt='Cart Image' />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Minimalistic shop</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">360.00</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <input type="number" name="" defaultValue={4} className='w-1/2 p-2' id="" />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">720.00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <Image src={img[0]} height={100} width={100} alt='Cart Image' />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Minimalistic shop</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">360.00</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <input type="number" name="" defaultValue={4} className='w-1/2 p-2' id="" />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">720.00</td>
                  </tr>

                  <tr className=" ">
                    <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">Subtotal </td>
                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap"></td>
                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">2160 </td>
                  </tr>
                  <tr className=" ">
                    <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">Shipping </td>
                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap"></td>
                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">50 </td>
                  </tr>
                  <tr className=" border-t">
                    <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">Quantity</td>
                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap"> </td>
                    <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">... </td>
                  </tr>
                  <tr className=" border-t">
                    <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">Total</td>
                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap"> </td>
                    <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">... </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
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