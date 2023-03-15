import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MediaGallery from './components/media-gallery';
import Search from './components/search';
import Footer from './layout/footer';
import Header from './layout/header';
import React from 'react';

function App() {

  const [nasaMedia, setNasaMedia] = React.useState([])


  async function searchFiles(searchTerm) {
    const response = await fetch(`https://images-api.nasa.gov/search?q=${searchTerm}`)
    console.log(response)
    const data = await response.json()
    console.log(data)
    setNasaMedia(data.collection.items)
  }

  return (
    <div className="font-bold">
      <Header />
      <div className='min-h-[calc(100vh-160px)]'>
      <Search searchNasamediaGallery={(searchTerm) => searchFiles(searchTerm)} />
        {/* <Router>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/results" element={<MediaGallery />} />
          </Routes>
        </Router> */}
        <MediaGallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
