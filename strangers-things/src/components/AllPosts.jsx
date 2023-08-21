import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API";
import { Grid, Card } from '@mui/material';
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";

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
  <Grid>
    <Card variant="outlined">
   <h1>All of the Things:</h1>
   <ol className = "listed-items">
      {posts.map((posts) => {
        return(
          <div className="item" key={posts.id}> 
             <h3 key="{title}">{posts.title} </h3>
          <p key="description">{posts.description}</p>
          <p key="price">{posts.price}</p>
          <p key="location">{posts.location}</p>
          </div>
        )
      })}
   </ol>
   <div>
   <h1>Too much stuff? Post things here!</h1>
   <CreatePostForm />
   </div>
   </Card>
  </Grid>
        )
}