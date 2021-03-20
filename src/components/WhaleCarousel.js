import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LazyLoad from 'react-lazyload';



import photo8 from '../images/whales/1X5A6425.jpeg'
import photo9 from '../images/whales/image-221.png'
import photo10 from '../images/whales/image6-147.png'
import photo1 from '../images/whales/IMG_7987.jpeg'
import photo2 from '../images/whales/IMG_8086.jpeg'
import photo7 from '../images/whales/IMG_8096.jpeg'
import photo3 from '../images/whales/IMG_8141.jpeg'
import photo4 from '../images/whales/IMG_8145.jpeg'
import photo5 from '../images/whales/IMG_8158.jpeg'
import photo6 from '../images/whales/IMG_8172.jpeg'



export default function WhaleCarousel() {

    return (
        <>
        <div className="carousel-wrapper-home">
            <Carousel
                showThumbs={false}
                showIndicators={false}
                autoPlay
                infiniteLoop
                stopOnHover={false}
                transitionTime={700}
                showStatus={false}
            >
                <div className="carousel-wrapper-inner">
                    <LazyLoad height={200}>
                        <img  src={photo1} alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src={photo2} alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src={photo3} alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src={photo4} alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src={photo5} alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src={photo6} alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src={photo7} alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src={photo8} alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src={photo9} alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src={photo10} alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 

                              
            </Carousel>
        </div>
    
        </>
    )
}