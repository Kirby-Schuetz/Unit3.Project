import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
    <div>
    <Link to="/">Home</Link>
    </div>
    <Link to="/AllPosts">View All the Things</Link>
    <div></div>
    <Link to="/LogIn">Already a Stranger? Log In!</Link>
    <div></div>
    <Link to="/SignUpForm">Stranger Sign Up!</Link>
    </nav>
      );
    }