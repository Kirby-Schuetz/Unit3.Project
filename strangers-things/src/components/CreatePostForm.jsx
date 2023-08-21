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
        const APIData = await createPost(title, description, price, location, username, token);
        if (APIData.success) {
            console.log("New Thing:", APIData.data.newPost);
        const newPostsList = [...posts, APIData.data.newPost];
        setPosts(newPostsList);

        setTitle("");
        setDescription("");
        setPrice("");
        setLocation("");
        setUsername("");
        setToken("");
        } else {
            setError(APIData.error.message);
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