import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API";
import CreatePostForm from "./CreatePostForm"
import Item from "./Item"


export default function AllPosts() {
const [posts, setPosts] = useState([]);
const [error, setError] = useState(null);
let [searchParam, setSearchParam] = useState("");
   
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


const postsToDisplay = searchParam
? posts.filter((post) =>
      post.title.toLowerCase().includes(searchParam)
      )
      : posts;
return (

    <div>
    <label>
      Search for Things:{" "}
      <input
      type="text"
      placeholder="search"
      onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
      />
    </label>

    <div>
   <h1>All of the Things:</h1>
   <ol className = "listed-items">
    {postsToDisplay.map((post) => {
      return <Item key={post.id} post={post} />;
    })}
   </ol>
   <div>
   <h1>Too much stuff? Post things here!</h1>
   <CreatePostForm />
   </div>
   </div>
  </div>
)
}