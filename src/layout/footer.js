import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className='h-[80px] shadow-xl bg-blue-300'>
                <div className='container mx-auto flex items-center justify-between'>
                    <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="NASA Logo" className="h-20 w-40" />
                    <h3 className='-ml-8'>
                        NASA Media Library
                    </h3>
                </div>
            </div>
        </footer>
    )
}
