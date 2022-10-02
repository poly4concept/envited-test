import React from 'react'
import EventDetails from './EventDetails'

const cakeImgSrc = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T210549Z&X-Amz-Expires=86400&X-Amz-Signature=a2000fa37ed9d85f8a99118cab64e9bab3a89b9767b0e9165cb1278c53f745f3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"


const EventPage = () => {
    return (
        <div className="flex flex-col w-full md:px-[15vw] lg:px-[10vw] md:pt-10 lg:flex-row-reverse lg:gap-x-20">
            <img src={cakeImgSrc} alt="cake" className="w-[500px] h-[500px]" />
            
            <EventDetails/>
        </div>
    )
}

export default EventPage