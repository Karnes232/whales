import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../styles/index.css'
import Grid from '@material-ui/core/Grid';
import WhaleCarousel from '../components/WhaleCarousel';
import LazyLoad from 'react-lazyload';
import Helment from 'react-helmet'
import { Link } from "gatsby"

function IndexPage() {
  return (
  <Layout>
    <Helment>
        <link rel="canonical" href="https://www.silverbankwhales.com/" />
        <meta name="google-site-verification" content="6C1VjAaC2hAZxjbi7ydNSMBeNrN1JlKtIcJDxum0jrs" />
    
    </Helment>
    <SEO title="Home" />
    <div className="container">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Jumbotron fluid>
            <img src="https://i.ibb.co/1QyZctL/banner2.webp" srcSet="https://i.ibb.co/1QyZctL/banner2.webp 480w, https://i.ibb.co/DbW1xbW/banner.webp 1080w" alt=""/>
          </Jumbotron>
        </Grid>
        <Grid item xs={12} className='title'>
          <h1><b>The Whales of Dominican Republic</b></h1>
        </Grid>
        <Grid item xs={12} className='description'>
          <h4><i>The chance of a lifetime to be able to swim in warm tropical waters and be face to face with these beautiful humpback whales. </i></h4>
          
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={6} className='secondDescription centerDescription'>
        <div className="button-div">
        <Link to="/contact">
              <button
              className="contact-button"
              type="button"
              >
                Contact Us
              </button>
          </Link>
          </div>
          <h2>The Silver Bank</h2>
          <p>Located approximately 90 kilometers north of the Dominican Republic is the Sanctuary for the Marine Mammals of the Dominican Republic. Every year between the months of January and April, the North Atlantic humpback whale comes to the waters of the Dominican Republic to court, mate and give birth. It has been estimated that over 3,000 pass through the Silver Bank each winter. </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={6} className='whale-carousel'>
        <LazyLoad height={200} className='inside-carousel'>
          <WhaleCarousel/>
        </LazyLoad>
        </Grid>
        <Grid item xs={12} className='secondDescription middleDescription'>
          <h2>Whale Watching</h2>
          <p>Well being able to see these beautiful mammals on the surface from the boat will thrill and excite every visitor, its the opportunity to swim next to them is such a rare chance that very few places in the world permit.</p>
          <p><i>Here is your chance to let your dreams come true and eye to eye with these magnificent mammal.</i></p>
          <p>During the months of January through April, we make two trips to the Silver Bank. This area is legendary for its close in water encounters with the humpback whales. Swimming with whales is an activity for the whole family, it's a trip that will leave you talking about it for years to come. </p>
         
        </Grid>
        <Grid item xs={12} lg={8}>
          <LazyLoad height={200}>
          <div className="videoWrapper">
          <iframe className='responsive-iframe' src="https://www.youtube.com/embed/Zm2PDuqZczI?playlist=Zm2PDuqZczI&loop=1?autoplay=1&mute=0?controls=1"  frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="DJI_0002 copy 2"></iframe>
          
          </div>
          </LazyLoad>
        </Grid>
        <Grid item xs={12} lg={4} className='secondDescription centerDescription'>
          <h2>Snorkel with Humpback Whales</h2>
          <p>The in water encounters with the humpback whales are always a passive approach. Well we are in the water we simply just float and watch, allowing the curiosity of the whale to bring them to us. We have to earn their trust and remember that we are just visitors. </p>
          <div className="button-div">
            <Link to="/package">
                  <button
                  className="contact-button"
                  type="button"
                  >
                    More Info
                  </button>
              </Link>
              </div>
        </Grid>
      </Grid>
      <div className="spaceFiller"></div>
    </div>
    
    
  </Layout>
  )}

export default IndexPage
