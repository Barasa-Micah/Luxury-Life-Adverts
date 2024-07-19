import React from React;
import logo from '../assets/luxurylogo.jpeg'

const LoginPage = () => {
    return(
        <div className="wrapper">
            <div className="login-container">
                <img src={logo} alt="" className="logo"/>   
                <h1 className='title'>Luxury Life Adverts</h1>
                <form className='form'>
                    <input type='text' placeholder='Your Username' className='input'/>
                    <input type='password' placeholder='Your Password' className='input'/>
                    <button className='button'>Login Now</button>
                </form>
                <div className='Links'>
                    <a href='#' className='link'>Forgot Password</a>
                    <a href='#' className='link'>Create Account</a>
                </div> 
            </div>
        </div>
    );
};



export default LoginPage;