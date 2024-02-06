import React from "react";

const SendStx = ({ setIsOpen }) => {
  return (
    <div
      className="fixed grid place-content-center	 top-0 left-0 w-full h-screen grid backdrop-blur cursor-pointer"
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <div
        className="w-80 min-h-32 border flex flex-col items-center justify-center"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p className="text-red-400">Certificate Already Created</p>
        <p>Send 400 stx To WRC First</p>
        <button className="px-2 py-1  rounded-md text-white my-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Transfer Stx
        </button>
      </div>
    </div>
  );
};

export default SendStx;
