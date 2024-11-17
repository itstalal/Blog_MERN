import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import useFetch from './useFetch'
import { useNavigate } from 'react-router-dom';


const BlogDetails = () => {

    const [isDeleting, setIsDeleting] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const navigate = useNavigate(); // Initialize useNavigate

    const { id } = useParams();
    // const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs/'+id);
    const { data: blog, isPending, error } = useFetch(`http://localhost:3016/findBlog/${id}`);


    const handleDelete = (id) => {

        setIsDeleting(true);

        // fetch(`http://localhost:8000/blogs/${id}`, {
        fetch(`http://localhost:3016/deleteBlog/${blog._id}`, {
            method: 'DELETE'
        })
            .then(() => {
                console.log('Blog deleted');
                setIsDeleting(false);
                setShowPopup(true);
                setTimeout(() => {
                    navigate('/dataFromDb'); 
                }, 2000); 
            })
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        // <div className="content">
        //     <p>Blog number: {id} </p>
        // </div>
        <div className="content">
             <p>Blog number: {id} </p>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    {/* <p>ID : {blog.id}</p> */}
                    <p>ID : {blog._id}</p>
                    <p> Autheur : {blog.author}</p>
                    <p> Body : {blog.body}</p>
                    <img src={blog.image} alt="{blog.title}" width="300" height="200" title={blog.title}></img>
                    <p> Body : {blog.body}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                </article>
            )}

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <p>Blog deleted successfully!</p>
                        <button onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogDetails;