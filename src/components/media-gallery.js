import React from 'react'
import Search from './search'
import { toast } from 'react-toastify'
import config from '../config'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function MediaGallery(props) {
  const [shownMediaItems, setShownMediaItems] = React.useState()
  const [unfilteredMediaItems, setUnfilteredMediaItems] = React.useState()
  const location = useLocation()


  async function searchFiles(search) {
    const response = await fetch(`${config.baseUrl}/search${search}`)
    if (response.status !== 200) return toast.error('Something went wrong, please try again later')
    const data = await response.json()
    setShownMediaItems(data?.collection?.items)
    console.log(data)
    setUnfilteredMediaItems(data?.collection?.items)
  }


  function showItemsFullDescription(item) {
    const newItems = [...shownMediaItems]
    const index = newItems.findIndex((i) => i.data[0].nasa_id === item.data[0].nasa_id)
    if (!newItems[index]?.showFullDescription) {
      newItems[index] = { ...newItems[index], showFullDescription: true }
    } else {
      newItems[index].showFullDescription = !newItems[index].showFullDescription
    }
    setShownMediaItems(newItems)
  }

  async function filterByDate(startYear, endYear) {
    const response = await fetch(`${config.baseUrl}/search?media_type=image&year_start=${startYear}&year_end=${endYear}`)
    if (response.status !== 200) return toast.error('Something went wrong, please try again later')
    const data = await response.json()
    console.log(data.collection.items)
    setShownMediaItems(data.collection.items)
    setUnfilteredMediaItems(data.collection.items)
  }

  React.useEffect(() => {
    if (!location.search) return;
    searchFiles(location.search)
  }, [location.search])

  return (
    <div className='container mx-auto py-6'>
      <Search searchNasaMediaGallery={(searchTerm) => searchFiles(searchTerm)} filterByDate={(filters) => filterByDate(filters.startYear, filters.endYear)} />
      <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
        {shownMediaItems?.length > 0 ? shownMediaItems.map((item, index) => {
          return (
            <div key={index} className="border border-gray-300 rounded-lg py-4 px-2">
              <Link to={`/${item.data[0].nasa_id}`}>
                <div className="aspect-video">
                  <img src={item.links[0].href} alt={item.data[0].title} className='w-full h-full rounded-lg object-cover' loading='lazy' />
                </div>
              </Link>

              {item.data[0].title && <h4 className='mt-4'>
                {item.data[0].title}
              </h4>}

              {item.data[0].photographer && <p className='text-sm mt-3'>
                Photographer:{item.data[0].photographer}
              </p>}

              {item.data[0].location && <p className='text-sm mt-3'>
                Location: {item.data[0].location}
              </p>}
            </div>
          )
        }) : <p className='text-2xl font-bold'>No Results</p>}
      </div>

    </div>
  )
}
