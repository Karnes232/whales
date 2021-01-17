import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
import ContactComponent from '../components/ContactComponent'

function contact() {
    return (
        <>
        <Layout>
        <SEO title="Contact" />
            <div className="container">
                <Grid container spacing={1}>
                    <ContactComponent />
                </Grid>
            </div>
        </Layout>   
        </>
    )
}

export default contact
