import React from 'react';
import { useState } from 'react';
import Blogs from '../Components/Blogs';
import '../assets/CSS/style.css';


const VideoEditing = ({ mode }) => {

    const [blog, setblog] = useState([
        {
            id: 3,
            image: "/Images/videoeditz1.jpeg",
            title: "Free video editing pack",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem, amet vel enim id ex libero cumque vitae doloremque distinctio.",
            link: ""
        },
        {
            id: 2,
            image: "/Blogs_Cover/PrNewTricks.jpeg",
            title: "Premier Pro New Hack on Visuals",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem, amet vel enim id ex libero cumque vitae doloremque distinctio.",
            link: ""
        },
        {
            id: 1,
            image: "/Blogs_Cover/videoEditor.jpeg",
            title: "Top 5 Video Editor",
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
                    <b> Video Editing </b>
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

export default VideoEditing;
