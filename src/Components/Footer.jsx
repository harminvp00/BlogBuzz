
// Importing the react Component
import React from 'react'
// CSS 
import '../assets/CSS/style.css';

// The Component Footer --> return Footer 
const Footer = ({ mode }) => {
    return (
        <div className={`${mode}`}>
            {/* Main Container Class for footer => Begin Here  */}
            <footer class="container-fluid">
                {/* Row Begin Here  */}
                <div class="row">
                    {/* Footer Column Number One  */}
                    <div class="col">
                        <h4 className="card-title"> Category </h4>
                        <a href="#" > Bussiness </a>
                        <a href="#" > Coding </a>
                        <a href="#" > Gaming </a>
                        <a href="#" > Stock Market </a>
                        <a href="#" > Video Editing </a>
                    </div>


                    {/* Footer Column Number Two  */}
                    <div class="col">
                        <h4 className="card-title"> For You </h4>
                        <a href="#"> About us </a>
                        <a href="#"> Contact us </a>
                        <a href="#"> Terms of Services </a>
                        <a href="#"> Privacy Policy </a>
                        <a href="#"> FAQ's </a>
                    </div>


                    {/* Footer Column Number Three  */}
                    <div class="col">
                        <h4 className="card-title"> Social Media </h4>
                        <a href="#"> Twitter </a>
                        <a href="#"> Facebook </a>
                        <a href="#"> Linkedin </a>
                        <a href="#"> Youtube </a>
                        <a href="#"> Discord </a>
                    </div>
                    {/* Row End Here */}
                </div>

                {/* Main Container Class for footer => End Here  */}
            </footer>
        </div>
    )
}
// Exporting the Component Footer 
export default Footer;
