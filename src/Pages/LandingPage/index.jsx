import React from 'react'
import Button from './CreateButton'
import EventCard from './EventCard'
import HeadingText from './HeadingText'

const LandingPage = () => {
    return (
        <div className="px-6 md:px-32 lg:px-20 pt-14 pb-4">
            {/* this shows on mobile and medium screen */}
            <div className="flex flex-col items-center space-y-9 lg:hidden">
                <HeadingText/>
                <EventCard />
                <Button/>
            </div>
            {/* this shows on large screen*/}
            <div className="hidden lg:grid grid-cols-2">
                <EventCard />
                <div className="flex flex-col justify-center items-end space-y-12">
                    <HeadingText />
                    <Button/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage