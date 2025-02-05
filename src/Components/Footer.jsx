import React from 'react'
import { Link } from 'react-router-dom'
import { Socialmedia } from './Socialmedia'

export const Footer = () => {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex flex-col pt-10 px-10 md:flex-row gap-10 justify-evenly bg-darkgrey w-full h-fit'>
          <div>
            <h1 className='text-white text-2xl font-semibold'>Information</h1>
            <div className='my-5 h-[2px] w-[50px] md:w-[100px] bg-[#797979]'></div>
            <ul className='flex flex-col items-start text-base text-white'>
              <li className='py-2 flex items-center transition-all delay-100 ease-in-out text-white hover:text-primary'>
                <Link to="/">Home</Link>
              </li>
              <li className='py-2 flex items-center transition-all delay-100 ease-in-out text-white hover:text-primary'>
                <Link to="/about">About Us</Link>
              </li>
              <li className='py-2 flex items-center transition-all delay-100 ease-in-out text-white hover:text-primary'>
                <Link to="/certificates">Certificates</Link>
              </li>
              <li className='py-2 flex items-center transition-all delay-100 ease-in-out text-white hover:text-primary'>
                <Link to="/products">Products Range</Link>
              </li>
              <li className='py-2 flex items-center transition-all delay-100 ease-in-out text-white hover:text-primary'>
                <Link to="/contact">Become Supplier</Link>
              </li>
              <li className='py-2 flex items-center transition-all delay-100 ease-in-out text-white hover:text-primary'>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className='py-2 flex items-center transition-all delay-100 ease-in-out text-white hover:text-primary'>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className='text-white text-2xl font-semibold'>Products Range</h1>
            <div className='my-5 h-[2px] w-[50px] md:w-[100px] bg-[#797979]'></div>
            <ul className='flex flex-col items-start text-base text-white'>
              <li className='py-2 flex items-center transition-all delay-100 ease-in-out text-white hover:text-primary'>
                <Link to="/products/agriculturalproducts">Agriculture Products</Link>
              </li>
              <li className='py-2 flex items-center transition-all delay-100 ease-in-out text-white hover:text-primary'>
                <Link to="/products/dairyproducts">Dairy Products</Link>
              </li>
              <li className='py-2 flex items-center transition-all delay-100 ease-in-out text-white hover:text-primary'>
                <Link to="/products/tomatoprocessesproducts">Tomato Processed Products</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className='text-white text-2xl font-semibold'>Contact Details</h1>
            <div className='my-5 h-[2px] w-[50px] md:w-[100px] bg-[#797979]'></div>
              <ul className='flex flex-col items-start text-base text-white'>
                <li className='flex'>
                  <div className='flex p-2'>
                    <img className='h-[20px]' src="src\assets\location.svg"/>
                  </div>
                  <div>
                    <h1 className="py-2 flex items-center transition-all delay-100 ease-in-out text-white">Registered Address</h1>
                    <h1 className="py-2 flex items-center transition-all delay-100 ease-in-out text-white">
                      Deloitte Private Limited
                      <br/>
                      Pune
                      <br/> Tal : Haveli, Dist: Pune
                    </h1>
                  </div>
                </li>
                <li className='flex'>
                  <div className='flex p-2'>
                    <img className='h-[20px]' src="src\assets\email.svg"/>
                  </div>
                  <div>
                    <h1 className="py-2 flex items-center transition-all delay-100 ease-in-out text-white">Email</h1>
                    <h1 className="py-2 flex items-center transition-all delay-100 ease-in-out text-white">
                      www.deloitte.com
                    </h1>
                  </div>
                </li>
                <li className='flex'>
                  <div className='flex p-2'>
                    <img className='h-[20px]' src="src\assets\phone.svg"/>
                  </div>
                  <div>
                    <h1 className="py-2 flex items-center transition-all delay-100 ease-in-out text-white">Phone Number</h1>
                    <h1 className="py-2 flex items-center transition-all delay-100 ease-in-out text-white">
                      7628636523
                    </h1>
                  </div>
                </li>
              </ul>
          </div>
        </div>
        <div className='flex bg-darkgrey items-center justify-center p-5'>
          <Socialmedia />
        </div>
      </div>
    </>
  )
}
