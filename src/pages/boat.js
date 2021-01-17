import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
import '../styles/boat.css'
import BoatCarousel from '../components/BoatCarousel';

function boat() {
  return (
    <>
    <Layout>
    <SEO title="Our Boats" />
      <div className="container">
      <Grid container spacing={1}>
        <Grid item xs={12} className='title'>
          <h3><b>Our Boat</b></h3>
        </Grid>
        <Grid item xs={12} md={8} className='boatPhotos'>
          <BoatCarousel/>
        </Grid>
        <Grid item xs={12} md={4} className='boatSpecs'>
          <h4>Specs</h4>
          <table id='specs'>
            <tr>
              <td>Length Overall</td>
              <td>150'</td>
            </tr>
            <tr>
              <td>Maximum Capacity</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Horsepower</td>
              <td>250</td>
            </tr>
            <tr>
              <td>Bathroom</td>
              <td>&#10004;</td>
            </tr>
            <tr>
              <td>Shower</td>
              <td>&#10004;</td>
            </tr>
          </table>
        </Grid>
        <Grid item xs={12} className='boatDescription'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima deleniti eaque a assumenda reiciendis corporis nulla. Repudiandae nam earum aliquid eos, praesentium, esse, molestias dolor voluptas repellendus eaque aliquam ad a totam alias culpa optio odit soluta enim qui excepturi. Quo iste commodi aliquid sed voluptatem dolor fugit, maiores impedit ratione, velit repellendus eaque dolorem asperiores! Dolores alias placeat, dolor odit distinctio est, laboriosam cum consectetur maxime blanditiis</p>
        </Grid>
      </Grid>
      </div>
    </Layout>
    </>
  )
}

export default boat

