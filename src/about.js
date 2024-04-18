import { useNavigate } from "react-router-dom";
import aazar from './aazar.jpg';
import shahbaz from './shahbaz.jpg';

const styles = {
    Screen: {
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      alignText: 'center',
      display: 'flex',
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
    bottomCard:{
        position: 'fixed',
        bottom: '0px',
        top: '10vh',
        left: '0px',
        width: '100vw',
        height: '90vh',
        backgroundColor: 'black',
        opacity: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text: {
        position: 'fixed',
        color: 'white',
        fontSize: '23px',
        fontFamily: 'Red Hat Display',
        fontWeight: 700,
        lineHeight: '33px',
        top: '5vh',
        left: '3vw',
      },
    Text_2:{
        fontSize: '48px',
        lineHeight:'64px',
        textAlign:'center',
        fontFamily: 'Red Hat Display',
        fontWeight: 700,
        color: 'white',
    },
    TextBox:{
        color: 'white',
        width: '100vw',
        textAlign: 'center',
        alignItems: 'center',
    },
    Box:{
        width: '50vw',
        height: '50vh',
        backgroundColor: 'black',
        opacity: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    ImageContainer: {
        width: '270px',
        height: '270px',
        borderRadius: '100000px',
        border: '4px solid #ffffff',
        boxSizing: 'border-box',
        backgroundImage: 'url(./image.jpg)',
        //backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }
}

const About = () => {   

    const navigate = useNavigate();

    const pageChange = ()=>{
        navigate('/');
    }

    return (
        <div style={styles.Screen}>

            <div style={styles.topCard}>
                <div style={styles.Text} onClick={()=> pageChange()}>Startr</div>
            </div>

            <div style={styles.bottomCard}>

            <div style={{...styles.TextBox, marginTop:'3vh'}}>
                <div style={styles.Text_2}>About Us</div>
            </div>

            <div style={{...styles.TextBox, width:'60vw',  justifyContent:'space-between', flexDirection:'row', display:'flex', marginTop:'15vh',marginLeft:'20vw'}}>

                <div style={styles.Box}>
                <div style={{...styles.ImageContainer, marginTop:'-15vh',backgroundImage: `url(${shahbaz})`}} />
                <div style={{...styles.Text_2, fontSize:'32px', marginTop:'3vh'}}>Shahbaz Abdullah Magsi
                <br/>
                <span style={{display:'block', marginTop:'-2vh'}}>Co-Founder and CEO</span>
                <span style={{display:'block', marginTop:'-3vh', fontSize:'20px'}}>shahbazabdullahmagsi@startr.com</span>
                <span style={{display:'block', marginTop:'-3vh', fontSize:'20px'}}>
                832-511-4528
                </span>
                </div>
                </div>

                <div style={{...styles.Box}}>
                <div style={{...styles.ImageContainer, marginTop:'-15vh',backgroundImage: `url(${aazar})`}} />
                <div style={{...styles.Text_2, fontSize:'32px', marginTop:'3vh'}}>Aazar Jan
                <br/>
                <span style={{display:'block', marginTop:'-2vh'}}>Co-Founder and CTO</span>
                <span style={{display:'block', marginTop:'-3vh', fontSize:'20px'}}>aazarjan@startr.com</span>
                <span style={{display:'block', marginTop:'-3vh', fontSize:'20px'}}>
                346-391-5054
                </span>
                </div>
                </div>
                
            </div>

            </div>
        </div>
    );
}

export default About;











