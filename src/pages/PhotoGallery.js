import React, { useState, useCallback } from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../data/photos";
import '../styles/photogallery.css'
import LazyLoad from 'react-lazyload';

function PhotoGallery() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };


    return (
        <>
        <Layout>
            <SEO title="Gallery" />
            <div className="container gallery">
            
            <div id="photos">
            <LazyLoad>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
            </LazyLoad>
            </div>
            <div id="video">
                    <div className="videos">
                        <iframe title="Whales in Silver Bank" className="individual-video" src="https://www.youtube.com/embed/fXsGPduuCZk?playlist=fXsGPduuCZk&loop=1?autoplay=1&mute=0?controls=1" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="videos">
                        <iframe title="Whales in Silver Bank" className="individual-video" src="https://www.youtube.com/embed/_ESem264Kvc?playlist=_ESem264Kvc&loop=1?autoplay=1&mute=0?controls=1" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="videos">
                        <iframe title="Whales in Silver Bank" className="individual-video" src="https://www.youtube.com/embed/HdvAKKLjJXQ?playlist=HdvAKKLjJXQ&loop=1?autoplay=1&mute=0?controls=1" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="videos">
                        <iframe title="Whales in Silver Bank" className="individual-video" src="https://www.youtube.com/embed/jg8ikwYwqXQ?playlist=jg8ikwYwqXQ&loop=1?autoplay=1&mute=0?controls=1" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="videos">
                        <iframe title="Whales in Silver Bank" className="individual-video" src="https://www.youtube.com/embed/94bB0wCJ8k0?playlist=94bB0wCJ8k0&loop=1?autoplay=1&mute=0?controls=1" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="videos">
                        <iframe title="Whales in Silver Bank" className="individual-video" src="https://www.youtube.com/embed/uEQamFCNGEw?playlist=uEQamFCNGEw&loop=1?autoplay=1&mute=0?controls=1" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="videos">
                        <iframe title="Whales in Silver Bank" className="individual-video" src="https://www.youtube.com/embed/ud98x_3pgjg?playlist=ud98x_3pgjg&loop=1?autoplay=1&mute=0?controls=1" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="videos">
                        <iframe title="Whales in Silver Bank" className="individual-video" src="https://www.youtube.com/embed/lR_epk8RkkI?playlist=lR_epk8RkkI&loop=1?autoplay=1&mute=0?controls=1" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="videos">
                        <iframe title="Whales in Silver Bank" className="individual-video" src="https://www.youtube.com/embed/Gt8urmvwV9M?playlist=Gt8urmvwV9M&loop=1?autoplay=1&mute=0?controls=1" frameborder="0" allowfullscreen></iframe>
                    </div>
            </div>
            </div>
        </Layout>
        <div className="nav-gallery">
                <a href="#photos">Photos<img src="https://img.icons8.com/ios-filled/50/000000/stack-of-photos--v1.png"/></a>
                <a href="#video">Video<img src="https://img.icons8.com/ios-filled/50/000000/video-gallery.png"/></a>
        </div>
        </>
    )
}

export default PhotoGallery
