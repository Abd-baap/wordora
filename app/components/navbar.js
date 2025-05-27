import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  return (
    <nav className="flex w-[100%] items-center justify-between xl:px-8 p-2 border">
      <Link href="/" className="logo font-bold h-[100%] text-center items-center flex justify-center text-2xl gap-2">
<Image src="/logo.svg" width="50" height="50" alt="logo"></Image>
Wordora
      </Link>
      <div className="justify-center flex items-center gap-4">
       <DropdownMenu>
       <DropdownMenuTrigger> <Image src="/index.png" width="40" height="40" alt='dropdown'></Image></DropdownMenuTrigger>
       <DropdownMenuContent>
  
        <DropdownMenuItem>
          <Link href="/">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem>
          <Link href="/reader">Read</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem>
          <Link rel="nofollow" href="/other">Manage</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem>
          <Link href="/about">About</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem>
          <Link href="/support">Support</Link>
        </DropdownMenuItem>
       </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
export default Navbar
