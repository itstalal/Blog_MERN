import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title, handleDelete }) => {

    console.log("blogs :", blogs)
    // const BlogList = (props) => {
    // const blogs = props.blogsss;
    // const title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-review" key={blog._id}>
                    <Link to={`/blogs/${blog._id}`}>
                    {/* <div className="blog-review" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}> */}
                            <h2>{blog.title}</h2>
                            <p>{blog.body.substring(0, 150) + "..."}</p>
                            <p>{blog.author}</p><br></br>
                            {/* <button onClick={() => { handleDelete(blog.id) }}>Delete Blog</button>  for using useEffect */}
                        </Link>
                    </div>
            ))}
                </div>

            );
}

            export default BlogList;