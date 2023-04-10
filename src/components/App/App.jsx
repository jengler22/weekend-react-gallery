import React, { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import './App.css';

function App() {

  let [galleryList, setGalleryList] = useState([])

  const getItems = () => {
    axios.get('/gallery').then((response) => {
      setGalleryList(response.data);
    }).catch((error) => {
      console.log(`error in get ${error}`);
    })
  };

  useEffect(() => {
    getItems();
  }, []);

  

    return (
      <>
      <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <br />
      <div className="App">
          <GalleryList
              galleryList={galleryList}
              getItems={getItems}
          />
      </div>
      </>
  
);
}

export default App;
