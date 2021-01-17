import React from "react"
import whaleBanner from '../images/Humpback-Info-Banner.jpg'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../styles/index.css'
import Grid from '@material-ui/core/Grid';
import WhaleCarousel from '../components/WhaleCarousel';


function IndexPage() {
  return (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Jumbotron fluid>
            <img src={whaleBanner} alt=""/>
          </Jumbotron>
        </Grid>
        <Grid item xs={12} className='title'>
          <h1><b>The Whales of Dominican Republic</b></h1>
        </Grid>
        <Grid item xs={12} className='description'>
          <h4><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero in iure aliquam voluptatum vitae eum odit. Cumque error blanditiis aspernatur maiores suscipit pariatur, asperiores molestias iusto perferendis eveniet aliquid quasi voluptatibus dolore minus quisquam nesciunt. Sit laudantium harum autem!</i></h4>
        </Grid>
        <Grid item xs={12} sm={7} md={8} lg={6} className='secondDescription centerDescription'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates molestias illum totam facere qui error aliquam, ipsam voluptatem, cum doloremque possimus, magni modi ad sint laboriosam eum inventore reiciendis tenetur praesentium assumenda officiis! A rem deleniti aspernatur qui, vel reiciendis nobis voluptatum necessitatibus delectus totam iusto, omnis error nulla, voluptates molestiae tempora. Culpa pariatur odio, voluptate necessitatibus aliquid cum, est laborum itaque doloremque quod tempore id aut sapiente, </p>
        </Grid>
        <Grid item xs={12} sm={5} md={4} lg={6} >
          <WhaleCarousel/>
        </Grid>
        <Grid item xs={12} className='secondDescription middleDescription'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed sapiente impedit culpa accusamus eos officiis commodi dolorem animi, nihil modi iusto ducimus numquam quod tempora. Deserunt dolorem animi amet at officiis impedit velit, nesciunt id soluta fugit ea labore cum vitae ipsam et, possimus iusto culpa nisi! Aut ratione ipsa, dolore veritatis voluptates modi deserunt rerum velit, obcaecati quis commodi pariatur neque aliquam ab et quidem fugit assumenda perferendis laudantium? Placeat cumque aliquid sequi quia ratione, eligendi totam ea, quisquam delectus ab harum velit. Aliquid totam obcaecati dolores minima! Minus veritatis optio itaque illum voluptatibus mollitia, culpa distinctio numquam.</p>
        </Grid>
        <Grid item xs={12} lg={8}>
          <div className="videoWrapper">
            <iframe title="PADI Scuba Diving Punta Cana" className="responsive-iframe" src="https://www.youtube.com/embed/qEzf4MjmowA?playlist=qEzf4MjmowA&loop=1?autoplay=1&mute=0?controls=1" frameborder="0" allowfullscreen></iframe>
          </div>
        </Grid>
        <Grid item xs={12} lg={4} className='secondDescription centerDescription'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed sapiente impedit culpa accusamus eos officiis commodi dolorem animi, nihil modi iusto ducimus numquam quod tempora. Deserunt dolorem animi amet at officiis impedit velit.</p>
        </Grid>
      </Grid>
      <div className="spaceFilller"></div>
    </div>
    
    
  </Layout>
  )}

export default IndexPage
