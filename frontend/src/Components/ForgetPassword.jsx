import React from 'react'
import { Link } from "react-router-dom";
import '../assets/CSS/style.css';


const ForgetPassword = ({ mode }) => {
  return (
    <div className={`${mode}`}>

      <div id="accountBlock">
        <form className="container">
          <h1>forget passoword </h1>

          {/* Get Password from User HTML Forms */}
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Old Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Old Password' />
          </div>

          {/* Get Password from User HTML Forms */}
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">New Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='New Password' />
          </div>

          <div className="form-check  mb-3">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
              Remember Passoword
            </label>
          </div>

          <div className="ForgetPassword">
            <label className="form-label" for="exampleCheck1">
              <Link className='link' to="/account"> Login </Link> or <Link className='link' to='/account/signup'> Create New One! </Link>
            </label>
          </div>

          <button type="submit" className="forBtn"> Change Password </button>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword;
