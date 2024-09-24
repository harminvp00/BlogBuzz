
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../assets/CSS/style.css';

const Login = ({ mode }) => {
    // to set email addresses or thier password while login


    const [user, Setuser] = useState({
        "email": "",
        "password": "",
        "remember_Password": ""
    })

    // checking email input is Valid or Proper
    const checkEmail = (e) => {
        console.log(user.email);
    };

    // checking Password is Unique and Valid 
    const checkPassword = (e) => {
        console.log(user.password);
    };

    // set the remember Password so if user forget it then He doesnt need to forget it 
    const handleRememberPasswordChange = (e) => {
        console.log(user.rememberPassword);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    };

    return (
        <div className={`${mode}`}>
            <div id="accountBlock">
                <form className="container" onSubmit={handleSubmit}>
                    <h1> Login Now </h1>

                    {/* Email address Input */}
                    <div className="mb-0">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address' value={user.email} onChange={checkEmail} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    {/* Password Input */}
                    <div className="mb-3 mt-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' value={user.password} onChange={checkPassword} />
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="rememberPassword" checked={user.rememberPassword} onChange={handleRememberPasswordChange} />
                        <label className="form-check-label" htmlFor="rememberPassword">Remember Password</label>
                    </div>


                    <div className="ForgetPassword">
                        <label className="form-label" for="exampleCheck1">
                            <Link className='link' to="/account/forgetPassword"> Forget Password? </Link>
                        </label>
                    </div>

                    <div className="SignUp">
                        <label className="form-label" for="exampleCheck2">I already have a Account
                            <Link className='link' to="/account/signup"> Sign Up </Link>
                        </label>
                    </div>


                    {/* Submit Button */}
                    <button type="submit" className='forBtn' onClick={handleSubmit}>     Login Now
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Login;
