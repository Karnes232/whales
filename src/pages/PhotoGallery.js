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
                    <div className='videos'>
                        <iframe  className="individual-video" src="https://player.vimeo.com/video/526565544" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='videos'>
                        <iframe className="individual-video" src="https://player.vimeo.com/video/526565001" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='videos'>
                        <iframe className="individual-video" src="https://player.vimeo.com/video/526564643" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='videos'>
                        <iframe className="individual-video" src="https://player.vimeo.com/video/526564486" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='videos'>
                        <iframe className="individual-video" src="https://player.vimeo.com/video/526563312" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='videos'>
                        <iframe className="individual-video" src="https://player.vimeo.com/video/526560863" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='videos'>
                        <iframe className="individual-video" src="https://player.vimeo.com/video/523031248" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="videos">
                        <iframe title="Whales in Silver Bank" className="individual-video" src="https://www.youtube.com/embed/uruIlZuTAkgA?playlist=uruIlZuTAkg&loop=1?autoplay=1&mute=0?controls=1" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="videos">
                        <iframe title="Whales in Silver Bank" className="individual-video" src="https://www.youtube.com/embed/yMAEKV5xcSE?playlist=yMAEKV5xcSE&loop=1?autoplay=1&mute=0?controls=1" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="videos">
                        <iframe title="Whales in Silver Bank" className="individual-video" src="https://www.youtube.com/embed/sksy3Sex0D4?playlist=sksy3Sex0D4&loop=1?autoplay=1&mute=0?controls=1" frameborder="0" allowfullscreen></iframe>
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
