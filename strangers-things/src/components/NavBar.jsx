import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
    <div>
    <Link to="/">Home</Link>
    </div>
    <Link to="/AllPosts">View All the Things</Link>
        <div></div>
    <Link to="/SignUp">Not a Stranger? Sign up!</Link>
    </nav>
      );
    }