import { useState } from "react";
import SendStx from "../component/SendStx";

const Request = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center my-8">
      {isOpen && <SendStx setIsOpen={setIsOpen} />}
      <div className="w-1/2">
        <p className="text-center font-medium text-xl my-4 ml-auto">
          Requesting Certificate To WRC
        </p>
        <form className="flex flex-col gap-4">
          <label htmlFor="name ">
            <p className="mb-2">Name</p>
            <input
              type="text"
              id="name"
              name="name"
              className=" block bg-slate-100 px-2 py-1"
              required
            />
          </label>
          <label htmlFor="post">
            <p className="mb-2">Course/Post</p>
            <input
              type="text"
              id="post"
              name="post"
              className="block bg-slate-100 px-2 py-1"
              required
            />
          </label>
          <div className="flex gap-4">
            <label htmlFor="from">
              <p className="mb-2">From</p>

              <input
                type="number"
                id="from"
                name="from"
                className=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block bg-slate-100 px-2 py-1"
                required
              />
            </label>{" "}
            <label htmlFor="to">
              <p className="mb-2">To</p>
              <input
                type="number"
                id="to"
                name="to"
                className=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block bg-slate-100 px-2 py-1"
                required
              />
            </label>
          </div>
          <label htmlFor="phone">
            <p className="mb-2"> Phone Number</p>

            <input
              type="number"
              id="phone"
              name="phone"
              className=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block bg-slate-100 px-2 py-1"
              required
            />
          </label>

          <label htmlFor="dob">
            <p className="mb-2"> Date of Birth</p>
            <input
              type="date"
              id="dob"
              name="dob"
              className=" block bg-slate-100 px-2 py-1"
              required
            />
          </label>

          <label htmlFor="address">
            <p className="mb-2"> Address</p>

            <input
              type="text"
              id="address"
              name="address"
              className=" block bg-slate-100 px-2 py-1"
              required
            />
          </label>
        </form>
        <div className="flex justify-end">
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="px-2 py-1  rounded-md text-white my-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            Request For Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Request;
