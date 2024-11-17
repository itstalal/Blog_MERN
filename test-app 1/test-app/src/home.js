import React, { useState } from "react";
import BlogList from "./blogList";
import UseDataFromDb from "./useDataFromDb";

const Home = () => {
    const handleClick = (event) => {
        console.log("Bonjour à PFC", event.target);
    };
    const handleClickAgain = (name, e) => {
        console.log("Bonjour à PFC" + name, e.target);
    };

    // // Declare a state variable called 'count', with an initial value of 0
    // const [count, setCount] = useState(0);

    // // Function to increment the count
    // const increment = () => {
    //     setCount(count + 1);  // Updates the state variable 'count'
    // };

    const [students, setStudents] = useState([
        { username: 'fkhajeh', password: 'abc123', id: 1 },
        { username: 'tBarati', password: '234asd', id: 2 },
        { username: 'bSabet', password: 'qwe345', id: 3 }
    ])

    const [blogs, setBlogs] = useState([
        { title: 'My new Website', body: 'Hi this is my new web blog', author: 'Fatemeh', id: 1 },
        { title: 'Welcome to canada', body: 'OOOO Canadaaa', author: 'Sara', id: 2 },
        { title: 'Data Manifest', body: 'React is amasing', author: 'Mina', id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlog)

    }

    return (
        <div className="home">

             <h1> Bienvenu chez WEBLOG de Fatemeh </h1>

            {/* an anonymous function. This is an immediate function call, meaning handleClickAgain('fatemeh') is executed as soon as the component renders, not when the button is clicked. */}
            {/* <button onClick={handleClick}>Cliquez-moi</button> */}
            {/* <button onClick={handleClickAgain('fatemeh')}>Cliquez-moi again</button> */}

            {/*  function anonyme */}
            {/* <button onClick={(e) => (handleClickAgain('fatemeh', e))}>Cliquez-moi again</button> */}






            {/* for using useState */}
            {/* <p>You clicked {count} times</p>
            <button onClick={increment}>Click me</button> */}





            {/* how to use props */}
            {/* <BlogList blogs={blogs}  title={"All blogs"}/> */}

            {/* use just for props explanation */}
            {/* <BlogList blogs={blogs.filter(blog=> blog.author==="Fatemeh")}  title="Blog de Fatemeh " /> */}



            {/* Example for useEffect */}
            {/* <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} /> */}



            {/*  how to display an object */}
            {/* {blogs.map(blog=>(
                <div className="blog-review" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p>{blog.author}</p><br></br>
                    </div>    
            ))} */}





            {/* <BlogList blogs={blogs} title="All Blogs" />

            <BlogList blogs={blogs.filter(blog => blog.author === 'Hanae')} title="Hanae's Blogs" />

            <BlogList blogs={blogs.filter(blog => blog.author === 'Matthieu')} title="Matthieu's Blogs" />
 */}

            {/* <br></br>

            
            **************************************************
                icic est UseDataFromDb :
                <UseDataFromDb /> */}

        </div>
    );
};

export default Home;
