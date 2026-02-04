import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
    const links = ["Home", "Shop", "About", "Contact"];

    return (
        <>
            <footer className='bg-white px-6 md:px-20 py-16 border-t'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
                    <div>
                        <h2 className='text-xl font-bold mb-10'>Shop Store</h2>
                        <p className='text-gray-400 leading-6'> 400 University Drive Suite 200<br />
                            Coral Gables,<br />
                            FL 33134 USA</p>
                    </div>
                    <div>
                        <h3 className='text-gray-400 font-medium mb-10'>Links</h3>
                        <ul className='space-y-6'>
                            {
                                links.map(link => {
                                    return (
                                        <li >
                                            <Link to={`/${link.toLowerCase()}`}>{link}</Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-gray-400 font-medium mb-10'>Help</h3>
                        <ul className='space-y-6'>
                            <li className='font-medium'>Payment Options</li>
                            <li className='font-medium'>Returns</li>
                            <li className='font-medium'>Privacy policies</li>

                        </ul>
                    </div>
                    <div>
                        <h3 className='text-gray-400 font-medium mb-10 '>Newsletter</h3>
                        <input type="email" placeholder='Enter Your Email Address' className='border-b border-black outline-none mr-3 ' />
                        <button className='border-b border-black font-semibold'>SUBSCRIBE</button>
                    </div>

                </div>
                <div className="border-t mt-14 pt-6">
                    2026 Shop Store. All rights reserved
                </div>

            </footer>
        </>
    )
}
