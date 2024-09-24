import React from 'react';
import { useState } from 'react';
import Blogs from '../Components/Blogs';
import '../assets/CSS/style.css';


const Coding = ({mode}) => {

    const [blog, setblog] = useState([
        {
            id: 1,
            image: "/Blogs_Cover/Laptop.jpeg",
            title: "These 3 laptop are built Only for Coding",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem, amet vel enim id ex libero cumque vitae doloremque distinctio.",
            link: ""
        },
        {
            id: 2,
            image: "/Images/coding1.jpeg",
            title: "Top 5 Programming Language 2024",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem, amet vel enim id ex libero cumque vitae doloremque distinctio.",
            link: ""
        },
        {
            id: 3,
            image: "/Images/coding2.png",
            title: "Coding Languages",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem, amet vel enim id ex libero cumque vitae doloremque distinctio.",
            link: ""
        }
    ])


    return (

        // This Page is for catogory wise blogs 
        <div className={`${mode}`}>
            <div className="Catagory">
                {/* Page Title is Here  */}
                <h4 className='pageTitle'>Catagory
                    <b> Coding </b>
                </h4>

                {/* Main Container Class  */}
                <div className="container">
                    {
                        blog.map((blog_element) => {
                            console.log(blog_element)
                            return (

                                /* 
                                Rendering other component for multiple use
                                */
                                <Blogs
                                    Id={blog_element.id}
                                    Image={blog_element.image}
                                    Title={blog_element.title}
                                    Description={blog_element.description}
                                    Link={blog_element.link}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Coding;
