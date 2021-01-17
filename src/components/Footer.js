import React from 'react';
import { SiFacebook, SiInstagram, SiTwitter } from 'react-icons/si';
import { GrMail } from 'react-icons/gr';
import { RiWhatsappFill } from 'react-icons/ri';
import Grid from '@material-ui/core/Grid';
import '../styles/footer.css'

function Footer() {
    return (
        
        <>
    
        <footer className="page-footer p-1 bg-dark text-white mt-2">
            <Grid container spacing={0}>
                <Grid item xs={12} className="copyright-text">
                    <p>Copyright &copy; {new Date().getFullYear()} </p>
                </Grid>
                <Grid item xs={12} className='footer-icons'>
                    <a className='mx-2' href="https://www.facebook.com/grandbaydivecenter/" target="_blank" aria-label="Facebook" rel="noreferrer"><SiFacebook/></a>
                    <a className='mx-2' href="https://twitter.com/GrandBayOfTheS1" aria-label="Twitter" target="_blank" rel="noreferrer"><SiTwitter/></a>
                    <a className='mx-2' href="https://www.instagram.com/grandbayoftheseard/" target="_blank" aria-label="Instagram" rel="noreferrer"><SiInstagram/></a>
                    <a className='mx-2' href="mailto:grandbayofthesea@gmail.com" aria-label="Gmail"><GrMail/></a>
                    <a className='mx-2' href="https://api.whatsapp.com/send?phone=18297239338" target="_blank" aria-label="Whatsapp" rel="noreferrer"><RiWhatsappFill/></a>
                </Grid>
            </Grid>
        </footer>
        </>
    )
}

export default Footer
