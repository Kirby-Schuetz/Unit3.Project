import { useState } from "react";
import { createPost } from "../API";
import { fetchAllPosts } from "../API";


export default function CreatePostForm({ posts, setPosts }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [username, setUsername] = useState("");
    const [token, setToken] = useState("");
    const [error, setError] = useState(null);

    async function handlePost(e) {
        // prevents browser from reloading page
        e.preventDefault();
        const postData = {
            "title": title,
            "description": description,
            "price": price,
            "location": location
        }

        try {
            const APIData = await createPost(postData);
            console.log(APIData)
            // console.log("New Thing:", APIData.data.post.id);
            // const post = {
            //     "id": APIData.data.post.id,
            //     "title": APIData.data.post.title,
            //     "author": APIData.data.post.author.usename,
            //     "description": APIData.data.post.description,
            //     "price": APIData.data.post.price,
            //     "location": APIData.data.post.location,
            // };
            // const newPostsList = [...posts, post];
            // setPosts(newPostsList);
        } catch(e) {
            console.log(e);
            setError(e.message);
        }
        
    }

    return (
        <div>
            {token && {token}}
        <div className="form">
        <form onSubmit={handlePost}>
            {error && <p>{error}</p>}
            <input
        value={title}
        type="text"
        name="title"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
        />
        <input
        value={description}
        type="text"
        name="description"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
        />
        <input
        value={price}
        type="text"
        name="price"
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
        /> 
        <input
        value={location}
        type="text"
        name="location"
        placeholder="location"
        onChange={(e) => setLocation(e.target.value)}
        /> 
        <input
        value={username}
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        />
            <button>Submit</button>
        </form>
        </div>
        </div>
    );
}