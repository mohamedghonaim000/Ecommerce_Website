import React from 'react'
import cartimg from '../../assets/images/cartimg.png'
import { FaTrash } from "react-icons/fa";

function CardItem() {
    return (
        <>
            <div className="p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <img src={cartimg} alt="Asgaard sofa" width={130} className='w-32 h-24 sm:w-36 sm:h-28 object-cover rounded-md bg-[var(--secondry-color)]' />

                    <div className='font-normal text-lg flex-1 flex flex-col gap-4 text-[var(--productDetail-text-color)]'>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h2 className="font-semibold text-lg truncate max-w-[240px]">Asgaard sofa</h2>
                            <span className="text-sm sm:text-base font-medium">Rs. 250,000.00</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <label htmlFor="quantity" className="sr-only">Quantity</label>
                            <input type="number" value={1} name="quantity" id="quantity" className='border rounded-md w-14 text-center py-1 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[var(--secondry-color)]' />

                            <span className='text-black ml-auto font-medium'>Rs. 250,000.00</span>

                            <button aria-label="Remove item" title="Remove item" className='ml-3 p-2 rounded-md hover:bg-gray-100 transition-colors text-[var(--primary-color)]'>
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardItem
