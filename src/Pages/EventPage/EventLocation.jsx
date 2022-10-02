import React from 'react'
import { GoLocation } from "react-icons/go";
import { AiOutlineRight } from "react-icons/ai";

const EventLocation = () => {
    return (
        <div className="flex items-center justify-between w-full mt-4">
            <div className="flex space-x-5">
                <div className="bg-white h-fit p-3.5 rounded-[10px] shadow-icon">
                    <GoLocation/>
                </div>
                <div className="flex flex-col">
                    <p className="text-purple-dark font-bold md:text-lg">Street name</p>
                    <p className="text-gray-1 text-sm md:text-lg">Suburb, State, Postcode</p>
                </div>
            </div>
            <AiOutlineRight/>
        </div>
    )
}

export default EventLocation