import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
import '../styles/package.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import whaleBanner from '../images/Humpback-Info-Banner.jpg'

function trip() {
    return (
        <Layout>
            <SEO title="Whale Watching Package" />
            <div className="container">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                    <Jumbotron fluid>
                        <img src={whaleBanner} alt=""/>
                    </Jumbotron>
                    </Grid>
                    <Grid item xs={12} className='title'>
                        <h3><b>Whale Encounters</b></h3>
                        <h4><b>Dominican Republic</b></h4>
                    </Grid>
                    <Grid item xs={12} className='daysPrice'>
                        <h6>3 Days</h6>
                        <h6>$1050</h6>
                    </Grid>
                    <Grid item xs={12} className='overview'>
                        <h6>Overview</h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dicta saepe officiis quod architecto officia rem dolores necessitatibus cum. Hic sunt excepturi laudantium repellendus porro id, recusandae, quidem suscipit error velit totam earum in, delectus corrupti veritatis facilis dolorum ipsa eos numquam. Iure, consectetur. Explicabo et tempora distinctio consequuntur adipisci, labore dolorem, laudantium totam a animi voluptatum, eaque officia doloribus. Quam similique, placeat reiciendis ut, soluta cumque, inventore quaerat nesciunt minima qui perspiciatis quos exercitationem expedita error modi veniam illo!</p>
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
                            <tr>
                                <td>&#10004;</td>
                                <td>Transportation</td>
                            </tr>
                        </table>
                    </Grid>
                    <Grid item xs={12} className='itinerary-title'>
                        <h6>Itinerary</h6>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='itinerary'>
                        <h6>Day 1</h6>
                        <p className='meals'>Meals: Dinner</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, molestiae temporibus saepe sint fuga ullam iste. A, similique unde. Vitae accusamus aspernatur aliquam voluptate cupiditate nobis architecto ipsam sint dicta</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='itinerary'>
                        <h6>Day 2</h6>
                        <p className='meals'>Meals: Breakfast, Lunch, Dinner</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, molestiae temporibus saepe sint fuga ullam iste. A, similique unde. Vitae accusamus aspernatur aliquam voluptate cupiditate nobis architecto ipsam sint dicta!</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='itinerary'>
                        <h6>Day 3</h6>
                        <p className='meals'>Meals: Breakfast</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, molestiae temporibus saepe sint fuga ullam iste. A, similique unde. Vitae accusamus aspernatur aliquam voluptate cupiditate nobis architecto ipsam sint dicta!</p>
                    </Grid>
                </Grid>    
            </div>
        </Layout>
    )
}

export default trip
