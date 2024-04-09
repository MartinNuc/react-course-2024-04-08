import { Link } from "react-router-dom";

export function NavBar() {
  return <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/votes">Album voting</Link></li>
    <li><Link to="/categories">Categories</Link></li>
  </ul>
}