"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { useState } from "react";  // Import useState to handle the search input
function Some() {
  
  const [searchQuery, setSearchQuery] = useState("");  // State to store search query

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);  // Update search query state
  };
  
  return (
    <div>
      {/* Hero Section */}
       {/* Search Bar */}
       <div className="flex justify-center mt-6 mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="p-2 w-1/3 border rounded-md"
        />
      </div>
      <header className="bg-yellow-100 py-10 h-screen">
        <div className="flex ml-96  gap-6 text-centre text-black">
         
          <Link className=" ml-52" href="/">Home</Link>
          <Link className='font-roboto'href="/shop">Shop</Link>
          <Link className='font-roboto' href="/apro">All product</Link>
          <Link className='font-roboto' href="/account">account</Link>
          <Link className='font-roboto' href="/check">checkout</Link>
          <Link className='font-roboto' href="/cntct">contact</Link>
          <Link className='font-roboto' href="/blog">our blogs</Link>
        </div>
        <nav className="flex justify-between items-center px-10">

          <div className="flex gap-4">
            <i className="fas fa-user"></i>
            <i className="fas fa-search"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-shopping-cart"></i>
          </div>
        </nav>
        <div className="flex flex-col items-center text-center mt-10">
          <div className="flex flex-row items-center  ml-11 justify-center">
            <div className='flex flex-col'>
              <h1 className="text-4xl font-bold font-Montserrat mr-4">Rocket single seater</h1><br />
              <div className="text-2xl font-bold mr-4 border-b-2 border-black  w-[150px]">Shop Now</div>
            </div>

            <Image
              src="/hsofa.png"
              alt="Hero Chair"
              width={500}
              height={500}
              className="mt-6 "
            />
          </div>



        </div>
      </header>
     
      

      


      

     

      


    </div>
  )
}

export default Some