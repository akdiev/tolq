import React from 'react'
import { useNavigate } from 'react-router-dom'
import DateFilter from './dateFilter'

export default function Search(props) {
    const [searchTerm, setSearchTerm] = React.useState('')
    const [hasErrors, setHasErrors] = React.useState(null)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        if (searchTerm === '') return setHasErrors(true)

        navigate('/search?q=' + searchTerm + '&media_type=image')
        setHasErrors(false)
    }

    return (
        <div className='container mx-auto pt-12 mb-4'>
            <label>
                Search Nasa Gallery
            </label>
            <div className='flex mt-2 w-full'>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className='flex w-full items-center h-[42px]'>
                        <input type="search" placeholder="Search" className='w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500' onChange={(e) => setSearchTerm(e.target.value)} />
                        <button className='search-button' type='submit'>Search</button>
                    </div>

                    {/* ErrorMessage */}
                    <p className='text-red-400 text-sm mt-1'>
                        {!hasErrors === false ? 'Please enter a search term' : ''}
                    </p>
                </form>
            </div>

        <DateFilter filterItems={(filters) => props.filterByDate(filters)}/>

        </div>
    )
}
