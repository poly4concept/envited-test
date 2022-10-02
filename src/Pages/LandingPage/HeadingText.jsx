import React from 'react'

const HeadingText = () => {
    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-4xl md:text-6xl  px-10 lg:px-0 text-center lg:text-right font-bold">
                Imagine if
                <p className='bg-text-gradient text-transparent bg-clip-text'>SnapChat</p>
                had events
            </h2>

            <p className="text-gray-1 font-light text-center md:text-2xl lg:text-right">
                Easily host and share events with your friends across any social media.
            </p>
        </div>
    )
}

export default HeadingText