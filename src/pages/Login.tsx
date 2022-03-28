import React from 'react';
import Header from '../parts/Header';

function Login():JSX.Element {
    return (
        <div className="Login">

            <Header/>

            <form>
                <input type="text" placeholder="Email" className="from-control"/>
                <input type="password" className="from-control"/>
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}

export default Login;