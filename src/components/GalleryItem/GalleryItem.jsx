import axios from "axios";
import React from "react";
import {useState, useEffect} from "react";

 
function GalleryItem ({item, getItem}) {
     const[likeCount, setLikeCount] = useState(item.likes)
     const[toggleDescription, setDescription] = useState(false);

        // function to add likes to photos
       const addlike = () => {
        axios.put(`/gallery/like/${item.id}`).then((response) => {
            setLikeCount(likeCount + 1);
        }).catch((error) => {
            console.log('error in post');
            alert('check client POST');
        });
       }

    //    Code to toggle descripton of each photo
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
        <div> 
            {
                seeDescription()
            }

            {/* // created buttons for both like and toggle Description */}
        </div>
        <div>{likeCount} likes
        <div />
        <button onClick={addlike}>Like</button>
        <div />
        <button onClick={() => setDescription(!toggleDescription)}>
            {toggleDescription ? 'image' : 'Description'}
        </button>

        </div>
        
        
        </>
    )
}

export default GalleryItem;