import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
    return (
        <Link to="/create" role="button"
            className="bg-button-gradient py-4 px-5 md:px-20 rounded-lg text-white font-bold mx-12 md:mx-0 md:text-xl lg:w-fit hover:scale-95">
            🎉 Create my event
        </Link>
    )
}

export default Button