import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API";

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

// const postsToDisplay = searchParam
// ? posts.filter((post) =>
//       post.item.toLowerCase().includes(searchParam)
//       )
//       : posts;

//       console.log(posts)

return (
  <div>
   <h1>All of the Things:</h1>
   <ol className = "listed-items">
      {posts.map((posts) => {
        return(
          <li className="items" key={posts.id}> {posts.title}</li>
        )
      })}
   </ol>
  </div>
        )
}