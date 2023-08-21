import { useNavigate } from "react-router-dom";

export default function Item({post}) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="item" key={post.id}> 
             <h3 key="{title}">{post.title} </h3>
          <p key="description">{post.description}</p>
          <p key="price">{post.price}</p>
          <p key="location">{post.location}</p>
          </div>
          </div>
          );
}