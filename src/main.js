import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { useState, useEffect } from 'react';

const styles = {
  Screen: {
    backgroundColor: 'black',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    overflowY: 'scroll',
    //overflowL: 'hidden',
  },
  topCard: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100vw',
    height: '10vh',
    backgroundColor: 'black',
    opacity: 1,
  },
  companyName: {
    position: 'fixed',
    color: 'white',
    fontSize: '23px',
    fontFamily: 'Red Hat Display',
    fontWeight: 700,
    lineHeight: '33px',
    top: '5vh',
    left: '3vw',
  },
  Button: {
    cursor: 'pointer',
    width: '200px',
    height: '36px',
    padding: '8px 10px',
    border: '0',
    //boxSizing: 'border-box',
    borderRadius: '100px',
    backgroundColor: '#007aff',
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Red Hat Display',
    fontWeight: 600,
    lineHeight: '21px',
    outline: 'none',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8vh',
  },
  main: {
    //position: 'absolute',
    //flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'scroll',
    height: '100vh',
    width: '100vw',
  },
  title: {
    marginTop: '5vh',
    color: '#ffffff',
    fontSize: '45px',
    fontFamily: 'Red Hat Display',
    fontWeight: 700,
    lineHeight: '59px',
    textAlign: 'center',
    },
  Card:{
    display: 'flex',
    width: '100vw',
    height: '40vh',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    flexDirection: 'row',
    },
  Text_1:{
    color: 'white',
    fontSize: '105px',
    fontFamily: 'Red Hat Display',
    fontWeight: 800,
    lineHeight: '137px',
    textAlign: 'center',
    marginTop: '5vh',
    },
  Text2:{
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Red Hat Display',
    lineHeight: '31px',
    fontWeight: 40,
    textAlign: 'flex-start',
    },
  Box_1:{
    width: '50vw',
    height: '40vh',
    //backgroundColor: 'yellow',
    borderRadius: '16px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignText: 'center',
    },
  videoCard: {
    width: '35vw',
    height: '20vw',
    backgroundColor: '#b4b4b4',
    borderRadius: '26px',
    justifyContent: 'center',
    alignItems: 'center',
    },
  
};

const defaultProps = {
  companyName: 'Startr',
  aboustUs: 'About Us',
  features: 'Features',
  privacyPolicy: 'Privacy Policy',
  buttonText: 'Join the waitlist today',
  details: 'Saves hours of your time doing customer research. Saves you tons of money on subscriptions to websites you don\'t need.'
};

const handleClick = (scrollAmount) => {
    // Define the amount to scroll down by (in pixels)
    // Adjust this value as needed
    
    // Get a reference to the scrollable container
    const container = document.getElementById('main');

    // Scroll down by the specified amount
    container.scrollTo({
        top: container.scrollTop + scrollAmount,
        behavior: 'smooth'
      });

    // if scroll amount is 0, scroll to top
    if (scrollAmount === 0) {
        container.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }
};


const Main = () => {
    const navigate = useNavigate();

    const pageChange = () => {
        navigate('/registration');
    };

    const pageChange_2 = () => {
        navigate('/privacyPolicy');
    };

    const pageChange_3 =() =>{
      navigate('/about');
    }    

  return (
    <div style={styles.Screen}>

        <div style={styles.topCard}>
            <div style={{...styles.companyName, cursor:'pointer'}} onClick={() => handleClick(0)}>{defaultProps.companyName}</div>
            <div style={{...styles.companyName, left: '60vw', fontSize:21, cursor:'pointer'}} onClick={() => pageChange_3()}>{defaultProps.aboustUs}</div>
            <div style={{...styles.companyName, left: '67vw', fontSize:21, cursor:'pointer'}} onClick={() => handleClick(900)}>{defaultProps.features}</div>
            <div style={{...styles.companyName, left: '73.5vw', fontSize:21, cursor:'pointer'}} onClick={() => pageChange_2()}>{defaultProps.privacyPolicy}</div>
            <button style={{...styles.Button, position: 'fixed', top: '5vh', right: '4vw'}} onClick={() => pageChange()}>{defaultProps.buttonText}</button>
        </div>

        <div style={styles.main} id='main'>

            <div style={{...styles.title, marginTop:'20vh'}}>Tired of your <span style={{...styles.title, color:'red'}}>2%</span> conversion rate to the <br /> 
                100 companies you reach out to every day?
            </div>

            <div style={{...styles.Card, marginBottom:'10vh'}}>
            <div style={styles.Box_1}>
            <div style={{...styles.Text_1, marginRight:'-10vw'}}>Introducing <br /> <span style={{...styles.Text_1, color:'#007aff'}}>STARTR </span> </div>
            <div style={{...styles.Text_1, fontSize:'30px',fontWeight:500,lineHeight:'52px',textAlign:'center', marginTop:'0.15vh', marginRight:'-10vw'}}>AI powered marketplace for <span style={{color:'#aad3ff', fontWeight:700}}>B2B</span> startups</div>
            </div>

            <div style={{...styles.Box_1, marginTop:"5vh"}}>
            <div style={{...styles.videoCard}}>
            <iframe
          title='First-Video'
          width='100%'
          height='100%'
          src="https://www.youtube.com/embed/UZBww2xSaTc?autoplay=1&mute=0&loop=1&playlist=UZBww2xSaTc"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          
          />
            </div>

            </div>
            </div>
            <div style={styles.buttonContainer}>
            <button style={{...styles.Button, marginTop: '5vh', width:'250px', height:'50px', fontSize:'18px', fontWeight: 600}} onClick={() => pageChange()}>{defaultProps.buttonText}</button>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={{...styles.Text_1, fontSize:'42px', fontWeight:700}}><span style={{color:'#007aff'}}>Startr</span> helps B2B startups and companies to:</div>
            <div style={styles.Card}>
            <div style={styles.Box_1}>
            <div style={styles.videoCard}>
            <iframe
          title='First-Video'
          width='100%'
          height='100%'
          src="https://www.youtube.com/embed/CaJKEe2ZwQU?autoplay=1&mute=1&loop=1&playlist=CaJKEe2ZwQU"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
            </div>
            </div>
            <div style={styles.Box_1}>
            <div style={{...styles.Text_1, fontSize: '32px', fontWeight: 600, lineHeight:'42px', textAlign:'center', marginTop:'-5vh'}}>
            <span style={{color:'#ff9500'}}>Connect</span> with your potential customers,<br />explain what you offer and<br />get them signed up fast
            </div>
            </div>
            </div>

            <div style={styles.Card}>
            <div style={styles.Box_1}>
            <div style={{...styles.Text_1, fontSize: '32px', fontWeight: 600, lineHeight:'42px', textAlign:'center', marginTop:'-5vh'}}>
            <span style={{color:'#ff9500'}}>Search</span> with StartrAI,<br /> a personalized search tool suggesting<br /> startups offering the services your<br /> company requires.
            </div>
            </div>
            <div style={styles.Box_1}>
            <div style={styles.videoCard}>
            <iframe
          title='First-Video'
          width='100%'
          height='100%'
          src="https://www.youtube.com/embed/OlzU2eT45lw?autoplay=1&mute=1&loop=1&playlist=OlzU2eT45lw"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
            </div>
            </div>
            </div>

            <div style={styles.Card}>
            <div style={styles.Box_1}>
            <div style={styles.videoCard}>
            <iframe
          title='First-Video'
          width='100%'
          height='100%'
          src="https://www.youtube.com/embed/xGPxi5EtQoA?autoplay=1&mute=1&loop=1&playlist=xGPxi5EtQoA"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
            </div>
            </div>
            <div style={styles.Box_1}>
            <div style={{...styles.Text_1, fontSize: '32px', fontWeight: 600, lineHeight:'42px', textAlign:'center', marginTop:'-5vh'}}>
            <span style={{color:'#ff9500'}}>Post</span> about the features<br /> you recently added and let your existing<br /> as well as future customers know</div>
            </div>
            </div>

            <div style={styles.Card}>
            <div style={styles.Box_1}>
            <div style={{...styles.Text_1, fontSize: '32px', fontWeight: 600, lineHeight:'42px', textAlign:'center', marginTop:'-5vh'}}>
            <span style={{color:'#ff9500'}}>Get</span> AI powered notifications,<br /> showing you important updates/news<br /> within your industry.</div>
            </div>
            <div style={styles.Box_1}>
            <div style={styles.videoCard}>
            <iframe
          title='First-Video'
          width='100%'
          height='100%'
          src="https://www.youtube.com/embed/LqE5enkgZy0?autoplay=1&mute=1&loop=1&playlist=LqE5enkgZy0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
            </div>
            </div>
            </div>

            <div style={{...styles.Text_1, fontSize:'30px', fontWeight: 700, lineHeight: '52px',textAlign: 'center', marginTop:'5vh'}}>
            Launching soon, stay tuned :)
            </div>
            <div style={{...styles.Card, height:'8vh'}}> </div>
    
        </div>
    </div>
  );
};

export default Main;

























































