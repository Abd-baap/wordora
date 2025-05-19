
import Image from 'next/image'
import React from 'react'

import Link from 'next/link'
const Herosection = () => {
  return (
    <section className='md:flex-row flex flex-col-reverse w-[100%] justify-between items-center  p-8 shadow-sm hover:shadow-xl rounded-md gap-6 herosection'>
      <div className="text flex flex-col gap-2 md:gap-1 xl:gap-2  text-center items-center">
        
 <div className='flex'> 
    <div className="text-3xl font-bold flex justify-center  gap-2 items-center text-center">Reader that,keeps you awake.
    </div>    </div>
    <h2 className=" try  text-xl w-[80%]">Explore, learn, and stay focused with ever-shifting text and vibrant highlights.</h2>
   <Link href='/manager' className='md:w-[30%] w-[50%]'> <button className='xl:px-8 xl:h-10  p-1 px-3 h-10 text-lg bg-black text-center text-white rounded-xl' >Get Started!</button>
   </Link>
      </div>
      <div className="image h-[80%]">                                           
        <Image src='/herosection.svg' width={310} height={310} alt='herosection image reading evironment' className='rounded-xl border border-white' ></Image>
      </div>
    </section>
  )
}

export default Herosection
