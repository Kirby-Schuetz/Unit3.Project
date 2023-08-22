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
      <div className="searchbar">
    <label>
      Search for the Thing:{" "}
      <input
      type="text"
      placeholder="Search"
      onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
      />
    </label>
  </div>
    <div className = "listed-items">
   <h2>All of the Things:</h2>
   <ol>
    {postsToDisplay.map((post) => {
      return <Item key={post.id} post={post} />;
    })}
   </ol>
   </div>
   <div>
   <h2>Too much stuff? Post things here!</h2>
   <CreatePostForm />
   </div>
   </div>
)
}