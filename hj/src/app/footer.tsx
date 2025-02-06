import React from 'react'

function Footer() {
  return (
    
    <footer className="bg-gray-800 text-gray-400 py-6">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <h3 className="text-white font-semibold">Links</h3>
        <ul className="mt-2 space-y-1">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-semibold">Help</h3>
        <ul className="mt-2 space-y-1">
          <li>Payment Options</li>
          <li>Returns</li>
          <li>Privacy Policies</li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-semibold">Newsletter</h3>
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="mt-2 px-4 py-2 w-full border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
    <p className="text-center text-gray-500 mt-4">
      © 2022 Meubel House. All rights reserved.
    </p>
  </footer>
  )
}

export default Footer