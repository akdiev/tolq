import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MediaGallery from './components/media-gallery';
import Search from './components/search';
import Footer from './layout/footer';
import Header from './layout/header';
import React from 'react';
import DateFilter from './components/dateFilter';

function App() {

  const [nasaMedia, setNasaMedia] = React.useState([])

  async function searchFiles(searchTerm) {
    const response = await fetch(`https://images-api.nasa.gov/search?q=${searchTerm}`)
    const data = await response.json()
    console.log(data.collection.items)
    setNasaMedia(data.collection.items)
  }

  return (
    <div className="font-bold">
      <Header />
      <div className='min-h-[calc(100vh-160px)] container mx-auto px-4'>
        <Search searchNasaMediaGallery={(searchTerm) => searchFiles(searchTerm)} />

        <DateFilter />

        <MediaGallery mediaItems={nasaMedia} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
