import React from 'react'

export default function MediaGallery(props) {
  const { mediaItems } = props
  const [shownMediaItems, setShownMediaItems] = React.useState([...mediaItems])

  function showItemsFullDescription(item) {
    const newItems = [...shownMediaItems]
    const index = newItems.findIndex((i) => i.data[0].nasa_id === item.data[0].nasa_id)
    newItems[index].showFullDescription = !newItems[index].showFullDescription
    setShownMediaItems(newItems)
  }

  return (
    <div className='container mx-auto py-6'>
      <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
        {mediaItems?.length > 0 ? mediaItems.map((item, index) => {
          return (
            <div key={index} className="border border-gray-300 rounded-lg py-4 px-2">
              <a href={item.links[0].href} >
                <div className="aspect-video">
                  <img src={item.links[0].href} alt={item.data[0].title} className='w-full h-full rounded-lg' loading='lazy' />
                </div>
              </a>

              <div className='flex flex-wrap items-center mt-2'>
                {item.data[0]?.keywords?.length > 0 && item.data[0].keywords.map((keyword, index) => {
                  return (
                    <span key={index} className='text-xs bg-gray-300 rounded-full px-2 py-1 mr-2 mt-2 inline-block'>
                      {keyword}
                    </span>
                  )
                }
                )}
              </div>

              {item.data[0].title && <h4 className='mt-4'>
                {item.data[0].title}
              </h4>}

              {item.data[0].description && <p className={`text-sm ${item.showFullDescription ? '' : 'max-h-[60px] overflow-hidden text-ellipsis'}`}>
                {item.data[0].description}
              </p>}
              <div className='flex justify-center'>
                <button className='border border-gray-500 rounded-md mt-2 px-3 py-2' onClick={() => showItemsFullDescription(item)}>
                  {item.showFullDescription ? 'Show Less' : 'Show More'}
                </button>
              </div>
              <p className='text-sm mt-3'>
                {item.data[0].secondary_creator}
              </p>
            </div>
          )
        }) : <p className='text-2xl font-bold'>No Results</p>}
      </div>

    </div>
  )
}
