// CSS Files 
import '../Bootstarps/dist/css/bootstrap.min.css';
import '../assets/CSS/responsive.css';
import '../assets/CSS/style.css';


// Component.jsx
import Blogs from '../Components/Blogs';
import { useState } from 'react';

/* Home Page Blogs Components */
const HomePageBlogs = ({ mode }) => {

    const [blog, setblog] = useState([
        {
            id: 1,
            image: "Blogs_Cover/Laptop.jpeg",
            title: "These 3 laptop are built Only for Coding",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem, amet vel enim id ex libero cumque vitae doloremque distinctio.",
            link: ""
        },
        {
            id: 2,
            image: "Blogs_Cover/videoEditor.jpeg",
            title: "Top 5 Video Editor",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem, amet vel enim id ex libero cumque vitae doloremque distinctio.",
            link: ""
        },
        {
            id: 3,
            image: "Blogs_Cover/Gamers.jpeg",
            title: "Gamer are Now On Fire",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem, amet vel enim id ex libero cumque vitae doloremque distinctio.",
            link: ""
        },
        {
            id: 4,
            image: "Blogs_Cover/StockMarket.jpeg",
            title: "Stock market Updates",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem, amet vel enim id ex libero cumque vitae doloremque distinctio.",
            link: ""
        },
        {
            id: 5,
            image: "Blogs_Cover/BillinersSecret.jpeg",
            title: "Billionaors Secrets",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem, amet vel enim id ex libero cumque vitae doloremque distinctio.",
            link: ""
        },
        {
            id: 6,
            image: "Blogs_Cover/FacebookValueDown.jpeg",
            title: "FaceBook value Down 50%",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem, amet vel enim id ex libero cumque vitae doloremque distinctio.",
            link: ""
        },
        {
            id: 7,
            image: "Blogs_Cover/indianNewRule.jpeg",
            title: "Indian Consitution",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem, amet vel enim id ex libero cumque vitae doloremque distinctio.",
            link: ""
        },
        {
            id: 8,
            image: "Blogs_Cover/Youtube.jpeg",
            title: "Youtube Updates 2024 Monetisiion Is Become Easy",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem, amet vel enim id ex libero cumque vitae doloremque distinctio.",
            link: ""
        },
        {
            id: 9,
            image: "Blogs_Cover/PrNewTricks.jpeg",
            title: "Premier Pro New Hack for Visuals",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem, amet vel enim id ex libero cumque vitae doloremque distinctio.",
            link: ""
        },
        {
            id: 10,
            image: "Blogs_Cover/Sea.jpeg",
            title: "indian sea in 2024",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem, amet vel enim id ex libero cumque vitae doloremque distinctio.",
            link: ""
        }
    ])

    return (
        <div className={`${mode}`}>

            <div id='Random_Blogs' className={`container-fluid`}>
                <div className="container-fluid">
                    {
                        blog.map((blog_element) => {
                            console.log(blog_element)
                            return (<Blogs
                                Id={blog_element.id}
                                Image={blog_element.image}
                                Title={blog_element.title}
                                Description={blog_element.description}
                                Link={blog_element.link}
                            />)
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePageBlogs;

