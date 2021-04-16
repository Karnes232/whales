import React from 'react'
import { useState } from 'react';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useEffect } from 'react';
import '../styles/contact.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(5),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },

    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      textAlign: 'center',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function Contact() {
    const [success, setSuccess] = useState(false);
    const classes = useStyles();
    useEffect(() => {
      if ( window.location.search.includes('success=true') ) {
        setSuccess(true);
      }
    }, []);
  
    return (
      <Container maxWidth="sm" className='contactContainer'>
        <h2>CONTACT</h2>
        {success && (
            <p style={{ color: "green" }}>Thanks for your message! </p>
          )}
        <Card className={classes.paper}>
          <form 
              name="contact" 
              method="POST" 
              action="/contact/?success=true"
              data-netlify="true" 
              className={classes.form}

              >
          <input type="hidden" name="form-name" value="contact" />
            <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="standard-basic" 
                label="Name" 
                name="name" 
                autoComplete="name"
            /> <br />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
            /> <br />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                multiline
                rows={4}
                id="standard-multiline-static"
                label="Message"
                name="message"
            />
            <br />

            <div>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="inherit"
                className={classes.submit}
            >
              Send
            </Button>
            </div>
          </form>
        </Card>
      </Container>
    );
  }
