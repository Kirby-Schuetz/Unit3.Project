import { useNavigate } from "react-router-dom";
import { deletePost } from "../API";
import { editPost } from "../API";

export default function Item({ post }) {
  const navigate = useNavigate();

  async function handleDelete() {
    event.preventDefault();
    // const isLoggedIn = this.state.isLoggedIn;
    try {
      const result = await deletePost(post.id);
      console.log(result);
      navigate("/AllPosts");
    } catch (error) {
      console.error(error);
    }
  }
  async function handleEdit() {
    event.preventDefault();
    // const isLoggedIn = this.state.isLoggedIn;
    try {
      const result = await editPost();
      console.log(result);
      navigate("/AllPosts");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <figure>
        <div className="item" key={post.id}>
          <h3>{post.title} </h3>
          <p>{post.description}</p>
          <p>{post.price}</p>
          <p>{post.location}</p>
        </div>
      </figure>
      <button onClick={handleDelete}>Delete Thing</button>
      <button onClick={handleEdit}>Edit Thing</button>
    </div>
  );
}
