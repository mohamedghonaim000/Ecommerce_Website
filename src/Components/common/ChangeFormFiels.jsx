import React from 'react'

function ChangeFormFiels({ type, placeholder, label, name }) {
    return (
        <div className='flex flex-col sm:flex-row sm:items-center gap-3 w-full'>
            <label htmlFor={name} className="text-md font-medium text-gray-700 sm:w-36 sm:text-right pr-2">
                {label}
            </label>

            <input
                id={name}
                type={type}
                placeholder={placeholder}
                name={name}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-shadow"
            />

            <div className='sm:w-36 w-full'>
                <button
                    type="button"
                    aria-label={`Change ${label}`}
                    className='h-10 w-full flex items-center justify-center bg-[var(--primary-color)] text-white font-semibold rounded-md hover:bg-[var(--hover-color)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]'
                >
                    Change
                </button>
            </div>
        </div>
    )
}

export default ChangeFormFiels
