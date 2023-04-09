import React, { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import './App.css';

function App() {

  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getItems()
  }, [])

  const getItems = () => {
    axios.get('/gallery')
    .then(response => {
      setGalleryList(response.data)
    }).catch(error => {
      alert('error in get');
      console.log(error);
    })
  }

    return (
      <body>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        
        <GalleryList
             galleryList={galleryList}
             getItems={getItems}
        />     
        
        {/* <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/> */}
      </div>
      </body>
    );
}

export default App;
