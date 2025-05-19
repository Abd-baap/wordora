import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <nav className="flex w-[100%] items-center justify-between xl:px-8 p-2 border">
      <Link href="/" className="logo font-bold h-[100%] text-center items-center flex justify-center text-2xl gap-2">
<Image src="/logo.svg" width="50" height="50" alt="logo"></Image>
Wordora
      </Link>
      <div className="justify-center flex items-center gap-4">
        <button className='p-2 xl:px-6 bg-black text-white rounded-xl'>Sign-in</button>
        <Image src="/index.png" width="40" height="40" alt='dropdown'></Image>
      </div>
    </nav>
  )
}
export default Navbar
