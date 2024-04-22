export default function Info() {
  return (
    <div className="mt-12 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700  ">
        <div className="flex flex-col items-center pb-10 ">
          <h5 className="mb-4 text-3xl font-medium text-gray-900  text-center">
            Requested Info
          </h5>

          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?w=1060&t=st=1713421555~exp=1713422155~hmac=7c25d78caf1ebd9f1a6fd9a0da661e85683755ea8a93a5f2d557c76dffaadd45"
            alt="Bonnie image"
          />

          <p className="text-left font-medium text-xl mr-96">
            STX sent (500 stx)
          </p>
          <p className="">Name:Binita Hamal</p>
          <p className="">Type:Qualification</p>
          <p>Course:+2</p>
          <p>Batch:2017-2022</p>
          <p>Phone no:9867877878</p>
          <p>DOB:2024-3-2</p>
          <p>Address:Palpa</p>

          <div className="flex mt-4 md:mt-6">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
