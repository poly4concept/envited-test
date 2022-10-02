import React from 'react'
import EventForm from './EventForm'

const CreateEvent = () => {
    return (
        <div className="flex flex-col items-center pt-10 pb-4">
            <h2 className="text-purple-dark font-bold text-3xl mb-2">Create Event</h2>

            <EventForm/>
        </div>
    )
}

export default CreateEvent