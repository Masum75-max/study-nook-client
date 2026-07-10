"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/studynook_logo.png';
import { Button } from '@heroui/react';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

     const {data} = authClient.useSession()

     const user = data?.user

     

   

   
  
    return (
        <nav className="bg-white  h-30 border-b border-gray-200 sticky top-0 z-50 px-4 py-3 md:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                
              
                <div className="flex justify-between w-full md:w-auto md:justify-start items-center gap-4">
                    
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-700 focus:outline-none p-1"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            // Cross Icon
                            <svg className="w-6 height-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger Icon
                            <svg className="w-6 height-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>

                    {/* Logo */}
                    <Link href="/">
                        <Image 
                            src={logo} 
                            height={100} 
                            width={220} 
                            alt="Book-Nook-Logo" 
                           
                        />
                    </Link>
                </div>

                {/* ২. ডেক্সটপ লিংকসমূহ (Medium screen bounds standard desktop-e dekhabe) */}
                <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                    <Link href="/" className="hover:text-blue-600 transition">Home</Link>
                    <Link href="/rooms" className="hover:text-blue-600 transition">Rooms</Link>
                    {
                        user?
                        <>
                         <Link className='hover:text-blue-600 transition' href={'/mybookings'}> My Bookings</Link>
                         <Link className='hover:text-blue-600 transition' href={'/addRoom'}> Add Room</Link>

                        </>:
                        <>
                        </>
                    }
                </div>

                {/* ৩. ডেক্সটপ বাটনসমূহ */}
                {
                    user?
                    <>
                       <div className="hidden md:flex items-center gap-3">
                          
                           <Image className='rounded-full' src={user?.image} height={50} width={50} alt={'user er image'}></Image>
                            <p className='text-2xl p-3 bg-cyan-400 rounded-2xl'>{user?.name}</p>

                           <Button onClick={()=>authClient.signOut()}>Log Out</Button>
                           
                       </div>
                    </>

                    :
                    <>
                 <div className="hidden md:flex items-center gap-3">
                    <Button variant="primary"> <Link href="/login">Log In </Link></Button>
                    <Button variant="primary"> <Link href="/signup">Register </Link></Button>
                   
                </div>
                    </>
                }

                

            </div>

            {/* ৪. মোবাইল ড্রপডাউন মেনু (Hamburger-e click korle active hobe) */}
            {isOpen && (
                <div className="md:hidden mt-3 pt-3 border-t border-gray-100 flex flex-col gap-4 bg-white animate-fadeIn">
                    <Link 
                        href="/" 
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 font-medium px-2 py-1 hover:bg-gray-50 rounded"
                    >
                        Home
                    </Link>
                    <Link 
                        href="/rooms" 
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 font-medium px-2 py-1 hover:bg-gray-50 rounded"
                    >
                        Rooms
                    </Link>

                      {
                        user?
                        <>
                         <Link className='hover:text-blue-600 transition ml-2' href={'/mybookings'}> My Bookings</Link>
                         <Link className='hover:text-blue-600 transition ml-2' href={'/addRoom'}> Add Room</Link>

                        </>:
                        <>
                        </>
                    }

                    {
                        user?<>
                         <div className="flex flex-col gap-2 pt-2 border-t border-gray-100 ml-3">
                            <div className='flex gap-2 items-center'>
                                

                              <Image className='rounded-full' src={user?.image} height={50} width={50} alt='User er image'></Image>
                               <p className='text-2xl p-3 bg-cyan-400 rounded-2xl'>{user?.name}</p>
                              
                            </div>
                             <Button className={'mb-5'} onClick={()=>authClient.signOut()}>Log Out</Button>
                         </div>
                        
                        </>:
                        <>
                        <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
                        <Button variant="primary"> <Link href="/login">Log In </Link></Button>
                         <Button variant="primary"> <Link href="/signup">Register </Link></Button>
                        
                    </div>
                        
                        </>
                    }
                    
                  
                </div>
            )}
        </nav>
    );
};

export default Navbar;