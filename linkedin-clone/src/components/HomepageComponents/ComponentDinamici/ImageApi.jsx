
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'; // Assuming you're using react-bootstrap

export default function ImageApi({ img }) {
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

    const keys = [
        'Client-ID 0hpMwkPbYqpo0BIjizdqa5np2IXG3888Cgm-rk6sD0c',
        'Client-ID d13giHzZ-CwkTke9lxyVGj_B471hMIHMmmxX9gSTIDo',
        'Client-ID ngik-lTsXKz188yAbtdkR9NQZIcvDyx252A6CXrMnUM',
        'Client-ID pI2WX63FKA2CC7Y5A7LQ468RCEr5DN0DGtoE7JPhhPk'
    ]


    useEffect(() => {
        const fetchImages = async () => {
            const query = img;
            const encodedQuery = encodeURIComponent(query);
            const url = `https://api.unsplash.com/search/photos?page=1&per_page=1&query=${encodedQuery}`;
        
            try {
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `${keys[Math.floor(Math.random() * 4)]}`
                    }
                });
                
                setImage(response.data.results[0].urls.regular);
            } catch (error) {
                console.error('Errore durante il recupero delle immagini:', error);
                setError('failed')
            }
        };

        if (img) {
            fetchImages();
        }
    }, []);

    return (
        <>
            {image ? (
                <Card.Img variant="top" className="rounded-0 imagesize" src={image} alt="Unsplash Image" />
            ) : (
                error && <Card.Img variant="top" className="rounded-0 imagesize" src='https://www.greatplacetowork.ca/images/Asset_3.webp' alt="Unsplash Image" />
            )}
        </>
    );
}
