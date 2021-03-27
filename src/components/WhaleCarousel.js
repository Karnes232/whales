import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LazyLoad from 'react-lazyload';


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
                        <img  src="https://i.ibb.co/7CdxDNs/image-217.png" alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src='https://i.ibb.co/0cWwS2V/1X5A6379.jpg' alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src='https://i.ibb.co/CbvYqRp/IMG-8145.jpg' alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src="https://i.ibb.co/17HB0Mf/IMG-7991.jpg" alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src="https://i.ibb.co/QY18cxX/IMG-8172.jpg" alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src="https://i.ibb.co/dMSNfMp/1X5A6445.jpg" alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src="https://i.ibb.co/bHQZsGW/IMG-8096.jpg" alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src="https://i.ibb.co/pL41K9P/IMG-8158.jpg" alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src="https://i.ibb.co/N7nnPW5/IMG-8124.jpg" alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 
                <div className="carousel-wrapper-inner">
                <LazyLoad height={200}>
                    <img  src="https://i.ibb.co/tbXw0N6/IMG-8187.jpg" alt="Scuba Diving Punta Cana"/>
                    </LazyLoad>
                </div> 

                              
            </Carousel>
        </div>
    
        </>
    )
}