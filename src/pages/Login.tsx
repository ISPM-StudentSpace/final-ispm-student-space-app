import React from 'react';
import '../assets/css/login.css';
import { useNavigate } from 'react-router-dom';

function Login():JSX.Element {

    //cette opération dépendra de l'api et utilisera useEffect
    const change = useNavigate();
    const login = () => {
        change("/student/profil");
    }

    return (
        <div className="Login">

            <form>
                <h3>Welcome Back !</h3>

                <label htmlFor='number'>Serial number</label>
                <input type="text" placeholder="number" id="number"/>
                
                <label htmlFor='password'>Serial number</label>
                <input type="password" className="from-control" id="password"/>

                <button onClick={login}>SIGN IN</button>
            </form>
            
        </div>
    );
}

export default Login;