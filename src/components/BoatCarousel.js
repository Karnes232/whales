import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LazyLoad from 'react-lazyload';

import photo1 from '../images/boat/image5-013.png'

export default function BoatCarousel() {
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
            </Carousel>
        </div>
    
        </>
    )
}