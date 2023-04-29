import React, { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';
import axios from 'axios';
import './App.css';



function App() {

  let [myGalleryList, setGalleryList] = useState([])

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
     <div>
      < Header />
      <br />
      
      
          <GalleryList
              myGalleryList={myGalleryList}
              getItems={getItems}
          />
         
      </div>
      
  
);
}

export default App;
