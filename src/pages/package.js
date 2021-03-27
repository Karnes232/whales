import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
import '../styles/package.css'
import Jumbotron from 'react-bootstrap/Jumbotron'

function trip() {
    return (
        <Layout>
            <SEO title="Whale Watching Package" />
            <div className="container">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                    <Jumbotron fluid>
                        <img src="https://i.ibb.co/CH6t62q/banner2.png" srcset="https://i.ibb.co/CH6t62q/banner2.png 480w, https://i.ibb.co/vDXJT82/banner.png 1080w" alt=""/>
                    </Jumbotron>
                    </Grid>
                    <Grid item xs={12} className='title'>
                        <h3><b>Whale Encounters</b></h3>
                        <h4><b>Dominican Republic</b></h4>
                    </Grid>
                    <Grid item xs={12} className='daysPrice'>
                        <h6>3 Nights</h6>
                        <h6>$2,500 per Room</h6>
                    </Grid>
                    <Grid item xs={12} className='overview'>
                        <h6>Overview</h6>
                        <p>Each trip is an all-inclusive 3 night experience. You will board the boat in Sousa, Dominican Republic, late afternoon. We will depart the dock around 6pm and cruise throughout the night to the Silver Bank Sanctuary arriving early in the morning to maximize our days. Well we are out on the Silver Bank thoughout both full days we will have a smaller tender boat that will bring us up close and personal with the humpback whales.</p>
                    </Grid>
                    <Grid item xs={12} className='included'>
                        <h6>Included</h6>
                        <table id='included'>
                            <tr>
                                <td>&#10004;</td>
                                <td>All meals</td>
                            </tr>
                            <tr>
                                <td>&#10004;</td>
                                <td>Soft Drinks</td>
                            </tr>
                            <tr>
                                <td>&#10004;</td>
                                <td>Alcoholic Beverages</td>
                            </tr>
                            <tr>
                                <td>&#10004;</td>
                                <td>Accommodations</td>
                            </tr>
                        </table>
                    </Grid>
                    <Grid item xs={12} className='itinerary-title'>
                        <h6>Itinerary</h6>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='itinerary'>
                        <h6>Day 1</h6>
                        <p className='meals'>Meals: Dinner</p>
                        <p>We will board in the late afternoon, departing the dock around 6pm. Dinner will be provided on board, introductions to staff and other guests. Staff will provide a brief safety orientation.</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='itinerary'>
                        <h6>Day 2</h6>
                        <p className='meals'>Meals: Breakfast, Lunch, Dinner</p>
                        <p>Early in the morning we will be arriving at the Silver Bank in hopes to catch the sunrise with the humpback whales welcoming us. Breakfast will be provided, and then what everyone has been waiting for our first trip in the tender boat to be able to see the whales up close and personal. Lunch will be served on the boat, and again we will have the tender boat make another trip out to swim with the whales for the afternoon. </p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='itinerary'>
                        <h6>Day 3</h6>
                        <p className='meals'>Meals: Breakfast, Lunch, Dinner</p>
                        <p>After breakfast in the morning, the tender boat will be ready for everyone. Lunch will be served on the boat, and afterwards another trip on the tender boat to see the whales. After Dinner is served we will cruise throughout the night to arrive in the morning at Sousa.</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='itinerary'>
                        <h6>Day 4</h6>
                        <p className='meals'>Meals: Breakfast </p>
                        <p>We will arrive early in the morning to Sousa and provide a light breakfast before we depart the boat.</p>
                    </Grid>
                </Grid>    
            </div>
        </Layout>
    )
}

export default trip
