
import React from 'react'
import { Link } from "react-router-dom";
import '../assets/CSS/style.css';


const SignUp = ({ mode }) => {
  return (
    <div className={`${mode}`}>

      <div id="accountBlock">
        <form className="container">

          {/* Heading for SignUp Page */}
          <h1 className=''>Create New Account</h1>

          {/* First and Last Name Input  */}
          <div class="input-group mb-3">
            <span class="input-group-text">First and Last Name</span>
            <input type="text" aria-label="First name" class="form-control" />
            <input type="text" aria-label="Last name" class="form-control" />
          </div>

          {/* Get Email Address  */}
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="Email Address" />
          </div>

          {/* Set Password for new Account  */}
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Set Password" />
          </div>

          <div className="form-check mt-3">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
              Remember Passoword
            </label>
          </div>

          <div className="ForgetPassword mt-3">
            <label className="form-label" for="exampleCheck1">
              Already have an account <Link className="link" to="/account"> Login </Link>
            </label>
          </div>

          {/* Register Button  */}
          <button type="button" class="forBtn"> Register Now</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
