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
        fontSize: '75px',
        lineHeight:'98px',
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
}

const defaultProps = {
    policy_para_1: 'Startr is dedicated to safeguarding your privacy while you engage in B2B interactions on our ',
    policy_para_2: 'platform. By utilizing Startr, you agree to our Privacy Policy, effective as of 04/01/2024.',    
    policy_para_3: 'We collect personal information, user-generated content, and AI feature data to enhance our ',
    policy_para_4: 'services, facilitate B2B collaborations, and conduct research. Your data may be shared with other ',  
    policy_para_5: 'users, service providers, or when legally required, and we employ robust security measures to',
    policy_para_6: 'protect it. You have the right to manage your information and communication preferences. ',
    policy_para_7: 'Updates to this policy will be communicated, and for inquiries, contact us at contact@startr.com ',
    policy_para_8: 'Thank you for entrusting Startr as your platform for productive B2B engagements ',
    policy_para_9: 'while we prioritize your privacy :)'
}

const PrivacyPolicy = () => {
    const navigate = useNavigate();
    const pageChange = () => {
        navigate('/');
    }
    return (
        <div style={styles.Screen}>

            <div style={styles.topCard}>
            <div style={{...styles.Text, cursor:'pointer'}} onClick={() => pageChange()}>Startr</div>
            </div>

            <div style={styles.bottomCard}>
                <div style={styles.TextBox}>
                <div style={styles.Text_2}>Privacy Policy</div>
                </div>
                <div style={{...styles.TextBox, marginTop:'10vh', width:'80vw',marginLeft:'calc(10vw)'}}>
                <div style={{...styles.Text_2, fontSize:'24px', lineHeight:'31px', fontWeight:500}}>
                {defaultProps.policy_para_1}
                <br/>
                {defaultProps.policy_para_2}
                <br/><br/>
                {defaultProps.policy_para_3}
                <br/>
                {defaultProps.policy_para_4}
                <br/>
                {defaultProps.policy_para_5}
                <br/>
                {defaultProps.policy_para_6}
                <br/><br />
                {defaultProps.policy_para_7}
                <br/>
                {defaultProps.policy_para_8}
                <br/>
                {defaultProps.policy_para_9}
                </div>
                </div>
                       
            </div>

        </div>
    );
}

export default PrivacyPolicy;