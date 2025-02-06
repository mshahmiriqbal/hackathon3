import React from 'react'
import Image from 'next/image';

function Newarival() {
  return (
    
    <section className="bg-gray-50 py-10 text-center grid grid-cols-2 justify-center align-middle items-center">
    <div>
      <Image
        src="/hsofa.png"
        alt="Hero Chair"
        width={800}
        height={800}
        className="mt-6 "
      />

    </div>
    <div>

      <h2 className="text-xl font-bold">New Arrivals</h2>
      <h3 className="text-4xl font-bold text-black">Asgaard Sofa</h3>
      <button className="mt-4 px-14 py-2 border-2 text-black border-black rounded">Order Now</button>
    </div>
  </section>
  )
}

export default Newarival