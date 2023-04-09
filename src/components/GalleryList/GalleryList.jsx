import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

//Bring array in here?

function GalleryList ({ GalleryList, getItem}) {

    return(
        <>
        {
            GalleryList.map((item) => {
                <GalleryItem
                   key={item.id}
                   item={item}
                   getItem={getItem}
                 />  
            })
        }
        </>
    )
}

export default GalleryList;