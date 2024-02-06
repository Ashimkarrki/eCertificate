import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex p-4  justify-end gap-5">
      <Link to={"/search"}>Search</Link>
      <Link to={"/request"}>Request</Link>
      <Link to={"/organizations"}>Organization</Link>
      <Link to={"/signup"} className="mr-12">
        Sign up
      </Link>
    </nav>
  );
};

export default Navbar;
