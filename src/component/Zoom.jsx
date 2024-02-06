const Zoom = ({ url, setUrl }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen grid backdrop-blur cursor-pointer"
      onClick={() => {
        setUrl("");
      }}
    >
      <div className="w-[70%] place-self-center	 max-h-screen">
        <img
          onClick={(e) => {
            e.stopPropagation();
          }}
          src={url}
          className="w-full aspect-video  object-contain cursor-default"
          alt="certificate"
        />
      </div>
    </div>
  );
};

export default Zoom;
