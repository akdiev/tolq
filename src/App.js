import './App.css';
import MediaGallery from './components/media-gallery';
import Footer from './layout/footer';
import Header from './layout/header';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetails from './components/item-details';

function App() {

  return (
    <div className="font-bold">
      <ToastContainer />
      <Router>
        <Header />
        <div className='min-h-[calc(100vh-160px)] container mx-auto px-4'>
          <Routes>
            <Route path='/' element={<MediaGallery />} />
            <Route path='/search' element={<MediaGallery />} />
            <Route path='/:id' element={<ItemDetails />} />
          </Routes>
        </div>
      <Footer />

      </Router>


    </div>
  );
}

export default App;
