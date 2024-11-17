// UseDBFromUseFetch.js
import BlogList from "./blogList";
import useFetch from "./useFetch";

const UseDBFromUseFetch = () => {
    // const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    const { data: blogs, isPending, error } = useFetch('http://localhost:3016/showblogs');


    return (
        <div className="content">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
};

export default UseDBFromUseFetch;
