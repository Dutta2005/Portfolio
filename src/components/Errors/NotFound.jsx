import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='text-black text-center mt-10'>
            <h1 className='text-9xl font-bold'>404</h1>
            <h2 className='text-4xl font-bold'>Page Not Found</h2>
            <p className='mt-4'>Return to 
                <Link to='/' className='text-blue-400'> Homepage</Link>
            </p>
        </div>
    )
}

export default NotFound