import React from 'react'
import { GoCalendar } from "react-icons/go";
import { AiOutlineRight } from "react-icons/ai";

const EventDate = () => {
    return (
        <div className="flex items-center justify-between w-full mt-8">
            <div className="flex space-x-5">
                <div className="bg-white p-3.5 h-fit rounded-[10px] shadow-icon">
                    <GoCalendar/>
                </div>
                <div className="flex flex-col">
                    <p className="text-purple-dark font-bold lg:text-lg">18 August 6:00PM</p>
                    <p className="text-gray-1 text-sm font-bold lg:text-lg">to 19 August 1:00PM UTC +10</p>
                </div>
            </div>
            <AiOutlineRight/>
        </div>
    )
}

export default EventDate