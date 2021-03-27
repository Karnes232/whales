import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LazyLoad from 'react-lazyload';

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
                        <img  src="https://i.ibb.co/xjkT6DG/image5-105.png" alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div>    
                <div className="carousel-wrapper-inner">
                    <LazyLoad height={200}>
                        <img  src="https://i.ibb.co/b2ZHwRv/image5-147.png" alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div>
                <div className="carousel-wrapper-inner">
                    <LazyLoad height={200}>
                        <img  src="https://i.ibb.co/zXFr453/image6-331.png" alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div>
                <div className="carousel-wrapper-inner">
                    <LazyLoad height={200}>
                        <img  src="https://i.ibb.co/JzYSvC3/image6-324.png" alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div>
                <div className="carousel-wrapper-inner">
                    <LazyLoad height={200}>
                        <img  src="https://i.ibb.co/8j1pYC7/image6-326.png" alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div>
                <div className="carousel-wrapper-inner">
                    <LazyLoad height={200}>
                        <img  src="https://i.ibb.co/yWSn5js/image5-148.png" alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div>
                <div className="carousel-wrapper-inner">
                    <LazyLoad height={200}>
                        <img  src="https://i.ibb.co/CnhtjgL/image6-328.png" alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div>
                <div className="carousel-wrapper-inner">
                    <LazyLoad height={200}>
                        <img  src="https://i.ibb.co/CwWGsXv/image5-151.png" alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div>         
            </Carousel>
        </div>
    
        </>
    )
}