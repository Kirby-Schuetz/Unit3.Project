import { useState } from "react";
import { createPost } from "../API";
import { fetchAllPosts } from "../API";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUyNGQ1NDJjMjc1MDAwMTQ4YmZkNGYiLCJ1c2VybmFtZSI6Inl1cmkiLCJpYXQiOjE2OTI2Mzc3MTR9.RDeFQEPobSPHfCD-1k5cUzTMIVWhfs6X_D1Ph1ONHj4"


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
            "location": location,
        }

        try {
            const APIData = await createPost(postData);
            console.log(APIData)
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
            <button onClick={() => window.location.reload(true)}>Refresh</button>
        </form>
        </div>
        </div>
        
    );
}