import React, { useState, useCallback } from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../data/photos";
import '../styles/photogallery.css'
import LazyLoad from 'react-lazyload';
import { videos } from "../data/videos"

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
                    
                        {videos.map((video, index) => (
                        <LazyLoad>
                            <div className="videos">
                            <iframe title="Whales in Silver Bank" className="individual-video" src={video.src} frameborder="0" allowfullscreen></iframe>
                        </div>
                        </LazyLoad>
                        ))}
                    

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
