import { useState } from "react";
import Zoom from "../component/Zoom";
const Search = () => {
  const [url, setUrl] = useState([
    "https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk=",
    "https://d2vyhi5ouo1we3.cloudfront.net/force_jpg/aHR0cHM6Ly9pbWFnZXMuYmFubmVyYmVhci5jb20vcmVxdWVzdHMvaW1hZ2VzLzAwOC85MjQvNTc5L29yaWdpbmFsL2VhYzQyY2FiZjM5YzIxY2Y4NThlNWY4NDRlZmM0YTA1MjJmOGUxNzkucG5nPzE2MzI4MDgzMDI=/image.jpg",
  ]);
  const [selectedUrl, setSelectedUrl] = useState("");
  return (
    <div className="text-center mb-8">
      <input
        className="border border-slate rounded-md px-4 py-1"
        type="text"
        placeholder="Search User"
      />
      <div>
        <h1 className="my-8">Ceritificates for (0xashimkarki) </h1>
        <div className="flex flex-col items-center gap-8">
          {url.map((s) => {
            return (
              <div
                onClick={() => {
                  setSelectedUrl(s);
                }}
                className="w-96"
                key={s}
              >
                <img src={s} className="object-cover" alt="certificate" />
              </div>
            );
          })}
        </div>
      </div>
      {selectedUrl && <Zoom url={selectedUrl} setUrl={setSelectedUrl} />}
    </div>
  );
};

export default Search;
