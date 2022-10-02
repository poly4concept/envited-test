import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Button = ({ text, url }) => {
    let history = useHistory()

    const routeToUrl = () => {
        history.push(url)
    }

    return (
        <div
            onClick={routeToUrl}
            className="w-full py-4 px-auto rounded-lg bg-button-gradient text-white my-2 text-center text-xl font-medium hover:scale-95 cursor-pointer">
                {text}
        </div>
    )
}

export default Button