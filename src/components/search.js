import React from 'react'

export default function Search(props) {
    const [searchTerm, setSearchTerm] = React.useState('')

    return (
        <div className='container mx-auto px-4 py-12'>
            <label>
                Search Nasa Gallery
            </label>
            <div className='flex h-[42px] mt-2'>
                <input type="search" placeholder="Search" className='w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500' onChange={(e) => setSearchTerm(e.target.value)} />
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg font-bold ml-2 h-full' onClick={() => props.searchNasaMediaGallery(searchTerm)}>Search</button>
            </div>


        </div>
    )
}
