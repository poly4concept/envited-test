import React from 'react'
import EventDate from './EventDate';
import EventLocation from './EventLocation';

const EventDetails = () => {
    return (
        <div className="flex flex-col px-5 pt-3 lg:w-1/2">
            <p className="text-purple-dark font-bold text-3xl md:text-5xl">Birthday Bash</p>
            <small className="text-gray-2 text-sm md:text-lg">Hosted by Elysia</small>

            <EventDate />
            <EventLocation/>
        </div>
    )
}

export default EventDetails