
// CSS
import '../assets/CSS/style.css';
import '../assets/CSS/responsive.css';
import '../Bootstarps/dist/css/bootstrap.min.css';
import '../Bootstarps/dist/js/bootstrap.bundle.min.js'

// ROUTER 
import { Link } from "react-router-dom";

// The Navbar Component This is a Common Navbar for all Users 
const NavBar = ({changeTheme, mode,Switch}) => {

 
  return (
    // This is class to seperate two diffrent theme like Light Mode or Dark Mode Feature 
    <div className={`${mode}`}>
      {/* Main Nav element root of this Component  */}
      <nav className={`navbar navbar-expand-lg`}>
        {/* This is a Sub root for this component which is displaying data  */}
        <div className="container-fluid">
          {/* Here is prop (property) which was website render Name  */}

          <Link className="navbar-brand" href="#"> Blog Buzz </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          {/* Navbar Items which are used for naviate into the Site  */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" aria-current="true" to="/" href="#">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about" href="#">About us</Link>
              </li>

              {/* Third itme : dropdown title Main li (drop-down items are Blogs catogory) */}
              <li className="nav-item">
                <a className={`nav-link dropdown-toggle`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                { /* dropdown items (Category)  */}
                <div className={`dropdown-menu`}>
                  {/* nav-items dropdown links */}
                  <Link to="/catagory/bussiness" href="#"> Bussiness </Link>
                  <Link to="/catagory/coding" href="#"> Coding </Link>
                  <Link to="/catagory/gaming" href="#"> Gaming </Link>
                  <Link to="/catagory/videoediting" href="#"> Video Editing </Link>
                </div>
              </li>

              <li className="nav-item">
                <Link to='/account' className="nav-link" href="#"> Account </Link>
              </li>


              {/* Switch of Theme */}
              <li className='nav-item'>
                <div className="form-check form-switch mt-2 ms-2">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                    onClick={changeTheme} checked={Switch} />
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="#">
                    {mode}
                </Link>
              </li>
            </ul>    {/* Here List Are End  */}

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary my-1" type="submit">Search</button>
            </form>


          </div> {/* NavBar Items List was end Here */}
        </div> {/* NavBar Container Class is end Here */}
      </nav>   {/* NavBar nav className is end here  */}
      {/* This is class for swaping the theme using the switch  */}
    </div>
  );
}

// exporting NavBar Component 
export default NavBar;
