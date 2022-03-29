import React from 'react';
import Header from '../parts/Header';
import '../assets/css/login.css';

function Login():JSX.Element {
    return (
        <div className="Login">

            <form>
                <h3>Welcome Back !</h3>

                <label htmlFor='number'>Serial number</label>
                <input type="text" placeholder="number" id="number"/>
                
                <label htmlFor='password'>Serial number</label>
                <input type="password" className="from-control" id="password"/>

                <button type="submit">SIGN IN</button>
            </form>
            
        </div>
    );
}

export default Login;