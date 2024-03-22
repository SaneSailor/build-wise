import React, { useState } from "react";
// import React, { useState, useEffect, useRef } from "react";

export const Register = (props) => {
    // const userRef = useRef();
    // const errRef = useRef();

    const [username, setUsername] = useState('');
    // const [validName, setValidName] = useState(false);
    // const [userFocus, setUserFocus] = useState(false);
    
    const [email, setEmail] = useState('');
    // const [validEmail, setValidEmail] = useState(false);
    // const [emailFocus, setEmailFocus] = useState(false);


    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
            <h3>Register</h3>
                <label htmlFor="username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" id="username" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" />
                <button>Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </ div>
    )
}