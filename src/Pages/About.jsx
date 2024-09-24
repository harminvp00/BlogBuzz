
import React from 'react';
// CSS 
import '../assets/CSS/style.css';
import '../assets/CSS/responsive.css';
import '../Bootstarps/dist/css/bootstrap.min.css';
// Component 
const About = ({mode}) => {
const Images = ['Images/feature.png']
  return (
    <div className={`${mode}`}>
      <div id='AboutUs' className="container-fluid">

        <div className="container">
          <h1 className='about-title'> Introduction to BlogBuzz </h1>
          <p className='about_text '>Welcome to our blog website, where authors can share their thoughts and ideas with the world. Our simple navbar allows easy navigation to our Home, About, Category, and Account pages. Users can log in or sign up to access exclusive content. Forgotten passwords can be easily recovered. Once logged in, users can view blogs uploaded by authorized authors. Our platform provides a clean and intuitive interface for reading and sharing blog posts. We prioritize user experience and simplicity. Explore our categories to discover new topics and interests. Join our community today and start engaging with our authors' content!</p>
        </div>

        {/* row  */}
        <div className="row">
          {/* first column  */}
          <div className="col-5">
            {/* first column image  */}
            <img src={Images} />
          </div>
          <div className="col-7">
            {/* Second column image  */}
            <ul className='align-middle'>
              <h1>Features</h1>
              <li> Best Navigation Bar </li>
              <li> Blog Page (10 blogs per Page)</li>
              <li> Catogory Feature to find best Blogs</li>
              <li> Login Funcnality </li>
            </ul>
          </div>
        </div>

        <div className="container mt-5">
          <h1 className='about-title text-center'> Upcoming Updates of BlogBuzz </h1>
          <p className='about_text'> Exciting updates are on the horizon! Soon, users will be able to elevate their blog posts with videos, and explore new categories that cater to diverse interests. Our platform will also introduce a follower system, enabling users to show their support for their favorite creators by liking, sharing, commenting, and following their accounts. Additionally, profile customization settings will be available, allowing users to personalize their online presence. A brand-new, changeable theme system will also be introduced, giving our website a fresh look and feel. But that's not all - we're also working on a monetization feature that will empower creators to earn money through their blog posts and other engaging content. Stay tuned for these game-changing updates, designed to take our community to the next level! </p>
        </div>

      </div>
    </div>
  )
}

export default About
