import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  let [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    getItems()
  }, [])

  const getItems = () => {
    axios.get('/gallery')
    .then(response => {
      setGalleryItems(response.data)
    }).catch(error => {
      alert('error in get');
      console.log(error);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
