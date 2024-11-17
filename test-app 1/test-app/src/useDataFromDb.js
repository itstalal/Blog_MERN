import { useEffect, useState } from "react";
import BlogList from "./blogList";

const UseDataFromDb = () => {

    const [blogs,setBlogs]=useState();
    const [isPending , setIsPending]=useState(true);  // En attente


    useEffect(()=>{
        // fetch('http://localhost:8000/blogs')
        fetch('http://localhost:3016/showBlogs')
        .then(res=>{
            if(!res.ok ){

                throw new Error(" could not fetch data from blog resource ");
            }
            return res.json();
        })
        .then(data=>{

            setTimeout(()=>{
                setIsPending(false);
                setBlogs(data);
            },5000)
        },[])
        .catch((error)=>{
            console.log(" error from useDataFromDb page :",error);
        })
    })


        return ( 

        <div className="content">
            {isPending && <div> Loading... </div> }
               {blogs && <BlogList blogs={blogs} title="All blogs"   class= "blog"/>} 
        </div>
     );
}
 
export default UseDataFromDb;