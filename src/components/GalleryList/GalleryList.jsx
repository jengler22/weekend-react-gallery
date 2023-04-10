import { useState, useEffect } from "react";
import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";



function GalleryList ({ galleryList, getItem}) {
    // const [list, setGalleryList] = useState([]);

    return(
        <div>
        {
            galleryList.map((item) => {
                <GalleryItem
                   key={item.id}
                   item={item}
                   getItem={getItem}
                 />  
            })
        }
        </div>
    )
}

export default GalleryList;