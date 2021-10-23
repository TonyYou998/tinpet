import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'


export default function LoginForm() {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = () => {
        setIsChecked(!isChecked);
      };    
    const handleSubmit = (event) => {
        alert("Submitted: ");
        event.preventDefault();
      }
    
    return (
        <div className="MainForm">
            <form onSubmit={handleSubmit}>
                <div className= "form-inner">
                    <h1>Sign In</h1>
                    <h4>Welcome, we missed you!</h4>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input class="btn-lg btn-block" type="email" placeholder="Enter your Email" name="email" id="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input class="btn-lg btn-block" type="password" placeholder="Enter your Password" name="password" id="password"/>
                    </div>
                    <div className="optional">
                        <div>
                        <input onClick={handleChange} type="checkbox" id="optional1" name="RememberMeCheckbox" value="Remember_me" />Remember me
                        </div>
                        <Link id="optional2" to="/"> Forgot Password?</Link>
                    </div>
                    <button className="btn btn-primary w-100 mt-2">Sign In</button>
                </div>
                
            </form>
        </div>
       
    )
}
