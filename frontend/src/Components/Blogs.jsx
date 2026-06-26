
// CSS 
import '../assets/CSS/responsive.css';
import '../Bootstarps/dist/css/bootstrap.min.css';
import '../assets/CSS/style.css';


// Blogs Images, Title, Description, Button
const Blogs = (props) => {
  return (
    <div className="Blogs">
      <div className="card" style={{ width: '18rem' }}>
        <img src={props.Image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {props.Title}
          </h5>
          <p className="card-text">
            {props.Description}
          </p>
          <a href="#" className="btn btn-primary">
            view
          </a>
        </div>
      </div>
    </div>
  )
}

export default Blogs
