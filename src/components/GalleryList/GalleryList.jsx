import React, { useState, useEffect } from "react";
import GalleryItem from "../GalleryItem/GalleryItem.jsx";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';



function GalleryList ({ myGalleryList, getItem}) {
    // lopping over arrray of photos
    return (
        // xl = Max 3 images wide
        <Container maxWidth='xl'>
            <Grid container spacing={0} justifyContent='center'>
                {
                    myGalleryList.map((item) => (
                        <GalleryItem
                            key={item.id}
                            item={item}
                            getItem={getItem}
                        />
                    ))
                }
            </Grid>
        </Container>

    )
}

export default GalleryList;