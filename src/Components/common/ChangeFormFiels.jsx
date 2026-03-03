import React from 'react'

function ChangeFormFiels({ type, placeholder, label, name, ...props }) {
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
                {...props}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-shadow"
            />

            
        </div>
    )
}

export default ChangeFormFiels
