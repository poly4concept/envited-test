import React from 'react'

const Input = ({name,label, type, placeholder}) => {
    return (
        <div className="w-full relative flex flex-col items-start my-3">
            <label htmlFor={name} className="block mb-2 text-gray-1 font-medium">
                {label}
            </label>
            <input
                name={name} type={type} 
                className="w-full px-4 py-[14px] text-sm border-[#ffffff75] border-[1px] invalid:text-purple-dark text-purple-dark focus:bg-white bg-[#F2F2F2]  focus:border-pink focus:outline-none   transition ease-in-out placeholder:text-gray placeholder:font-light rounded-lg"
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input