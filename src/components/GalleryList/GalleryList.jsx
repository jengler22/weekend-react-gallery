import React, { useState, useEffect } from "react";
import GalleryItem from "../GalleryItem/GalleryItem.jsx";



function GalleryList ({ myGalleryList, getItem}) {
    
    return(
        <div>
        <h2>Gallery List</h2>
        <p>
        {myGalleryList.map((item) => (
            <GalleryItem 
                key={item.id} 
                item={item} 
                getItem={getItem}
            />
        ))}
        </p>
    </div>
    );
}


export default GalleryList;