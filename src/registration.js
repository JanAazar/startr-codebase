import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const styles = {
    Screen: {
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      alignText: 'center',
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
        left: '0px',
        width: '100vw',
        height: '90vh',
        backgroundColor: 'black',
        opacity: 1,
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
    Text_2: {
        fontSize: '75px',
        lineHeight:'98px',
        textAlign:'center',
        fontFamily: 'Red Hat Display',
        fontWeight: 700,
        color: 'white',
    },
    Input: {
        width: '424px',
        height: '39px',
        padding: '0px 8px',
        border: '1px solid #b4b4b4',
        boxSizing: 'border-box',
        borderRadius: '100000px',
        backgroundColor: '#ffffff',
        color: '#4f4f4f',
        fontSize: '16px',
        fontFamily: 'Red Hat Display',
        lineHeight: '21px',
        outline: 'none',
      },
    InputContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '8vh',
    },
    Button: {
        cursor: 'pointer',
        width: '200px',
        height: '36px',
        padding: '0px 8px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: '100000px',
        backgroundColor: '#007aff',
        color: '#ffffff',
        fontSize: '16px',
        fontFamily: 'Red Hat Display',
        fontWeight: 700,
        lineHeight: '21px',
        outline: 'none',
      },
    ButtonContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '8vh',
    },
    ErrorContainer: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'red',
        fontSize: '26px',
      },
}

const defaultProps = {
    companyName: 'Startr',  
    text: 'Enter your email address',
};

const Registration = () => {
    const [email, setEmail] = useState(""); // State to store email
    const [error, setError] = useState(""); // State to store error message
    const navigate = useNavigate();
  
    // Function to handle form submission
    const handleSubmit = () => {
      // Basic email validation using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address");
        //
      } else {
        setError(""); // Clear any previous error
        // Proceed with your submission logic
        // For now, let's just navigate to home page
        navigate("/Thanks");
      }
    };
  
    // Function to handle input change
    const handleInputChange = (e) => {
      setEmail(e.target.value);
    };
  
    return (
      <div style={styles.Screen}>
        <div style={styles.topCard}>
          <div style={{ ...styles.Text, cursor: "pointer" }} onClick={() => navigate("/")}>
            {defaultProps.companyName}
          </div>
        </div>
  
        <div style={styles.bottomCard}>
          <div style={{ ...styles.Text_2, marginTop: "20vh" }}>
            The future of <span style={{ color: "#007aff" }}>B2Bs</span> is here
          </div>
  
          <div style={{ ...styles.Text_2, fontSize: "48px", lineHeight: "62px", marginTop: "2vh" }}>
            Join the waitlist today
          </div>
  
          <div style={styles.InputContainer}>
            <input
              style={styles.Input}
              placeholder={defaultProps.text}
              value={email}
              onChange={handleInputChange}
            />
          </div>
        
          
          {error && <div style={styles.ErrorContainer}>{error}</div>}
  
          <div style={styles.ButtonContainer}>
            <button style={styles.Button} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };
  

export default Registration;


















