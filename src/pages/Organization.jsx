import React, { useState } from "react";
import { Link } from "react-router-dom";
const Organization = () => {
  const [org, setOrg] = useState([
    {
      name: "WRC (Western Regional Collage)",
      addr: "Lamachaur , Pokhara",
      id: "0",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYGgZrhcldOa-CYA5tKKiamW-dnN8OayULmAdAWLmnqw&s",
    },
    {
      name: "Coursera",
      addr: "USA",
      id: "1",
      logo: "https://i.pcmag.com/imagery/reviews/06bnqFCCqMYNmhahHfpuUFs-13.fit_lim.size_1050x591.v1620226809.png",
    },
    {
      name: "Google",
      addr: "USA , Sillicon Valley",
      id: "2",
      logo: "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",
    },
  ]);

  return (
    <div>
      <div className="text-center">
        <input
          className="border border-slate rounded-md px-4 py-1"
          type="text"
          placeholder="Search Organization"
        />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col my-8 w-1/2 gap-8">
          {org.map((s) => {
            return (
              <Link
                to={"/eachorg"}
                key={s.id}
                className="flex gap-8 border p-4"
              >
                <img
                  className="w-20 aspect-square object-contain"
                  src={s.logo}
                  alt="logo"
                />
                <div className="flex flex-col gap-2 justify-center">
                  <p>{s.name}</p>
                  <p>{s.addr}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Organization;
