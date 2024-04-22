import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Organization from "./pages/Organization";
import OrganizationItem from "./pages/OrganizationItem";
import Request from "./pages/Request";
import Signup from "./pages/Signup";
import Requested from "./component/organization/Requested";
import Minted from "./component/organization/Minted";
import Info from "./component/organization/Info";
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
        <Route path="/requested" element={<Requested />} />
        <Route path="/minted" element={<Minted />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
