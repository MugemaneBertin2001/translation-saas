import React from 'react'
import Link from 'next/link'
import logoImage from "@/Images/logo/download.jpg"
import Image from "next/image"

function Logo() {
  return (
    <Link href="https://flowbite.com/" className="flex items-center">
          <Image
            src={logoImage}
            className="h-8 w-10 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            PolyglotChat
          </span>
      </Link>
  )
}

export default Logo