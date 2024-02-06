import { useState } from "react";
import { Link } from "react-router-dom";

const OrganizationItem = () => {
  const [detail, setDetail] = useState({
    name: "WRC (Western Regional Collage)",
    addr: "Lamachaur , Pokhara",
    id: "0",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYGgZrhcldOa-CYA5tKKiamW-dnN8OayULmAdAWLmnqw&s",
  });

  return (
    <div className="mx-20">
      <div className="flex flex-col gap-4 ">
        <img
          className="w-40 aspect-square object-contain mx-auto"
          src={detail.logo}
          alt="logo"
        />
      </div>
      <div className="text-center my-8 flex flex-col gap-4">
        <p>{detail.name}</p>
        <p>
          Pashchimanchal Campus (Nepali: पश्चिमाञ्चल क्याम्पस) previously known
          as Western Regional Campus (WRC) is the third and one of the five
          constituent engineering campuses under Institute of Engineering of
          Tribhuvan University. Paschimanchal campus is specialized for
          geomatics engineering in context of Nepal and only campus under TU to
          have this program at bachelor and masters level. Located in Pokhara,
          the capital of Gandaki Province the campus was established in 1981
          A.D. to develop middle level manpower in the field in different fields
          engineering which upgraded its programs to bachelor and master level
          along the course of time
        </p>
      </div>
      <Link to={"/request"} className="flex justify-end">
        <button className="px-2 py-1  rounded-md text-white my-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Request Certificate
        </button>
      </Link>
    </div>
  );
};

export default OrganizationItem;
