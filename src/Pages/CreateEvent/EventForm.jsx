import React from 'react'
import Input from '../../Components/Input'
import ImageUploader from './ImageUploader';
import Button from '../../Components/Button';

const EventForm = () => {
    return (
        <form className="w-full px-5 md:px-[10vw] lg:px-[20vw] ">
            <Input label="Event Name" placeholder="Name of the event" type="text" name="eventName"/>
            <Input label="Host Name" placeholder="Name of the host" type="text" name="hostName" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
                <Input label="Start Date" type="date" name="startDate"/>
                <Input label="End Date" type="date" name="endDate" />
            </div>
            <Input label="Event Location" placeholder="location of the event" type="text" name="eventLocation" />
            <ImageUploader />
            
            <Button text="Next" url="/event"/>
        </form>
    )
}

export default EventForm