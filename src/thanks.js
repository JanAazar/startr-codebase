import { useNavigate } from "react-router-dom";

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
        justifyContent: 'center',
        alignText: 'center'
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
        cursor:'pointer'
      },
    Text_2:{
        color: 'white',
        fontSize: '24px',
        fontFamily: 'Red Hat Display',
        fontWeight: 700,
        lineHeight: '33px',
        cursor:'pointer',
        alignText: 'center'
    },
    text_container:{
        display:'flex',
        alignText:'center',
        alignItems:'center',
        justifyContent:'center',
        width: '100vw',
        height:'10vh',
        marginTop:'10vh',
    }
}

const Thanks = () => {

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
        
        <div style={styles.text_container}>
        <div style={styles.Text_2}> Thank you for joing the waitlist! We look forward to sending you updates regarding our launch.</div>
        </div>

        </div>

        </div>

    )

}

export default Thanks;



























