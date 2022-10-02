import React from 'react'

const ImgSrc = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T210538Z&X-Amz-Expires=86400&X-Amz-Signature=56d3c29cac4f8a198d9c22bce7ee715c0f786781ac666478f5de98b5b3ceb95b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"


const EventCard = () => {
    return (
        <div className="px-14 md:px-10">
            <img src={ImgSrc} alt="event card" className="drop-shadow-image rounded-xl object-cover lg:h-[600px]" />
        </div>
    )
}

export default EventCard