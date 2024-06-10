import ad1 from './images/ad.png'
import ad2 from './images/watch.png'
import ad3 from './images/ad3.png'
import ad4 from './images/w.png'
import { useEffect, useState } from 'react';


function ImagePub() {

    const images = [ad1, ad2, ad3, ad4];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="imgPub">
            <div className="img" >
                <img src={images[currentImageIndex]} alt="Advertisement" />
                
                <div className="desc">
                    <button><strong>WELCOME</strong></button>
                    <h2>Discover Timeless Elegance: Explore Our Collection of Exquisite Watches!</h2>
                    <p>From luxurious classics to rugged adventurers and cutting-edge smartwatches, find the perfect timepiece to match your personality and lifestyle. Explore now!</p>
                    <button>SHOP NOW</button>
                </div>

                <div className="nextPub">
                    {images.map((_, index) => (
                        <ion-icon
                            key={index}
                            name={index === currentImageIndex ? "ellipse" : "ellipse-outline"}
                        ></ion-icon>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImagePub;
