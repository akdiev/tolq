import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ItemDetails() {
    const params = useParams();
    const [metaData, setMetaData] = React.useState([]);
    const [images, setImages] = React.useState([]);
    const navigate = useNavigate()
    const [showFullDescription, setShowFullDescription] = React.useState(false)

    useEffect(() => {
        (async () => {
            const metaResponse = await fetch(`https://images-api.nasa.gov/search?q=${params.id}`)
            const meta = await metaResponse.json();
            setMetaData(meta.collection.items[0].data[0])
            setImages(meta.collection.items[0].links)
        })()
    }, [params.id])

    return (
        <div className='my-12 flex flex-col gap-y-2'>
            <button onClick={() => navigate(-1)} className='flex gap-x-2 items-center mb-6'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back
            </button>
            <h2>
                {metaData.title}
            </h2>



            {metaData.photographer && (
                <p>
                    {metaData.photographer}
                </p>
            )}

            <p className={`text-sm ${showFullDescription ? '' : 'max-h-[80px] overflow-hidden text-ellipsis'}`}>
                {metaData.description}
            </p>



            {metaData.keywords && (
                <div className='flex flex-wrap items-center mt-2'>
                    {metaData.keywords?.length > 0 && metaData.keywords.map((keyword, index) => {
                        return (
                            <span key={index} className='text-xs bg-gray-300 rounded-full px-2 py-1 mr-2 mt-2 inline-block'>
                                {keyword}
                            </span>
                        )
                    }
                    )}
                </div>
            )}

            <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                {metaData.location && (
                    <p className='text-xl'>
                        {metaData.location}
                    </p>
                )}

                {metaData.date_created && (
                    <p>
                        {new Date(metaData.date_created).toDateString().split(' ').slice(1).join(' ')}
                    </p>
                )}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6'>
                {images.length > 0 && images.map((item, index) => (
                    <div className='aspect-square rounded-lg overflow-hidden' key={index}>
                        <img src={item.href} alt="collection" className=' object-cover' />
                    </div>
                ))}
            </div>




        </div>
    )
}
