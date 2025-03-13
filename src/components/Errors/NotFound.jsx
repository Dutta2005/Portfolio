import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='text-center flex flex-col justify-center items-center bg-gray-900 text-white h-screen'>
            <h1 className='text-9xl font-bold'>404</h1>
            <h2 className='text-4xl font-bold'>Page Not Found</h2>
            <p className='mt-4'>Return to 
                <Link to='/' className='text-orange-500 hover:text-orange-700'> Homepage</Link>
            </p>
        </div>
    )
}

export default NotFound