import { Link } from 'react-router-dom';
import React, { useState } from "react"
import { Login } from "../auth/login"
import { Register } from "../auth/register"


export default function Navigation(props) {
    const [currentForm, setCurrentForm] = useState('login');

    const toogleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className='navigation'>
            <nav>
                <button to="/">Dashboard</button>
                <Link to="/">Login/Register</Link>
            </nav>
            <div className='form-nav'>

        {
            currentForm === "login" ? <Login onFormSwitch={toogleForm} /> : <Register onFormSwitch={toogleForm}  />
        }
            </div>
        </div>
    
    )
}