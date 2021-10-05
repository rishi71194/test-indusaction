import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <div className="login__logo"> 
                <p>LOGO</p>
            </div>
            <div className="login__form"> 
                <input type="text" name="username" placeholder="Username"/>
                <input type="password" name="username" placeholder="Password"/>
            </div>
            <div className="login__btn">
                <button type="submit">Login</button>
            </div>
        </div>
    )
}

export default Login;
