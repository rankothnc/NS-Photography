import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If using Axios

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch images from backend
        axios.get('http://localhost:5000/api/images') // Or use fetch()
            .then((response) => {
                setImages(response.data); // Set images in state
            })
            .catch((error) => {
                console.error('Error fetching images:', error);
            });
    }, []);

    return (
        <div>
            <h1>Image Gallery</h1>
            <img src="https://drive.google.com/file/d/0B0Irz6b4DtszT2Joc05Oa0tlN0I5X1hOV0hBVGJzc25SNVhj/view?usp=sharing&resourcekey=0-BZIC-9NASdXXpxYJfC-tGQ" alt="image" />
           
        </div>
    );
};

export default Gallery; 