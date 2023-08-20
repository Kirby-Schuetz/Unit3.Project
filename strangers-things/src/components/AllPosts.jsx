import { useState, useEffect, Link } from "react";
import { fetchAllPosts } from "../API";
import NavBar from "./NavBar";
import CreatePostForm from "./CreatePostForm"


export default function AllPosts() {
const [posts, setPosts] = useState([]);
const [error, setError] = useState(null);
const [searchParam, setSearchParam] = useState("");
   
useEffect(() => {
  async function getAllPosts() {
    const APIResponse =  await fetchAllPosts();
    if (APIResponse.success) {
      setPosts(APIResponse.data.posts);
    } else {
    setError(APIResponse.error.message);
  }
}
 getAllPosts();
}, []);


// search bar?
// const postsToDisplay = searchParam
// ? posts.filter((post) =>
//       post.item.toLowerCase().includes(searchParam)
//       )
//       : posts;

return (

  
  // lists the things
  <div>
   <h1>All of the Things:</h1>
   <ol className = "listed-items">
      {posts.map((posts) => {
        return(
          <div className="item" key={posts.id}> 
             <h3>{posts.title} </h3>
          <p>{posts.description}</p>
          <p>{posts.price}</p>
          <p>{posts.location}</p>
          </div>
        )
      })}
   </ol>
   <div>
   <h3>Too much stuff? Post things here!</h3>
   <CreatePostForm />
   </div>
  </div>
        )
}