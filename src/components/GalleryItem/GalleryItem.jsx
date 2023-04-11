import axios from "axios";
import React from "react";
import {useState, useEffect} from "react";

 
function GalleryItem ({item, getItem}) {
     const[likeCount, setLikeCount] = useState(item.likes)
     const[toggleDescription, setDescription] = useState(false);

       const addlike = () => {
        axios.put(`/gallery/like/${item.id}`).then((response) => {
            setLikeCount(likeCount + 1);
        }).catch((error) => {
            console.log('error in post');
            alert('check client POST');
        });
       }
       
       const seeDescription = () => {
           if(toggleDescription === true) {
            return(
               <div onClick={() => setDescription(!toggleDescription)}>{'\"'+item.description+'\"'} </div>
            )
           } else {
            return (
                <img onClick={() => setDescription(!toggleDescription)} src={item.path} />
            )
           }
       }


    return(
        <>
        <p> 
            {
                seeDescription()
            }
        </p>
        <p>{likeCount} likes
        <div />
        <button onClick={addlike}>Like</button>
        <div />
        <button onClick={() => setDescription(!toggleDescription)}>
            {toggleDescription ? 'image' : 'Description'}
        </button>

        </p>
        
        
        </>
    )
}

export default GalleryItem;