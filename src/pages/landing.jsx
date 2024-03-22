import { Link } from 'react-router-dom';
import React, { useState } from "react"
import { Login } from "../auth/login"
import { Register } from "../auth/register"
import loadingLogo from "../components/card resources/logo.png"



export default function Landing() {
    const [currentForm, setCurrentForm] = useState('login');

    const toogleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="landing-container">
            <Link to="/" className="title">
                <img src={loadingLogo} alt="Logo" />
            </Link>
            <div>
                {
                    currentForm === "login" ? <Login onFormSwitch={toogleForm} /> : <Register onFormSwitch={toogleForm}  />
                }
            </div>
        </ div>
    )
}