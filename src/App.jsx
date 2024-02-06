import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Organization from "./pages/Organization";
import OrganizationItem from "./pages/OrganizationItem";
import Request from "./pages/Request";
import Signup from "./pages/Signup";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/organizations" element={<Organization />} />
        <Route path="/eachorg" element={<OrganizationItem />} />
        <Route path="/request" element={<Request />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
