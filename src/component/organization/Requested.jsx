import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Info from "../organization/Info";
export default function Requested() {
  return (
    <div>
      <div className="w-full  p-4  border-gray-200 rounded-lg ">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Latest Customers
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?w=1060&t=st=1713421555~exp=1713422155~hmac=7c25d78caf1ebd9f1a6fd9a0da661e85683755ea8a93a5f2d557c76dffaadd45"
                    alt="Neil image"
                  />
                </div>

                <div className="flex-1 min-w-0 ms-4">
                  {/* className="text-sm font-medium text-gray-900 truncate" */}

                  <Link to="/info">Neil Sims</Link>

                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    Request for +2 Certificate
                  </p>
                </div>

                <div className="inline-flex items-center text-sm  text-gray-900 ">
                  30 minutes ago
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg?size=626&ext=jpg&ga=GA1.1.1841504169.1713851711&semt=sph"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    Request for SEE Certificate{" "}
                  </p>
                </div>
                <div className="inline-flex items-center text-sm  text-gray-900 ">
                  4 hours ago
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?size=626&ext=jpg&ga=GA1.1.1841504169.1713851711&semt=sph"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Michael Gough
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    Request for Bachelor's Certificate{" "}
                  </p>
                </div>
                <div className="inline-flex items-center text-sm  text-gray-900 ">
                  6 hours ago
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1841504169.1713851711&semt=sph"
                    alt="Lana image"
                  />
                </div>

                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Lana Byrd
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    Request for completion of Basic React Certificate{" "}
                  </p>
                </div>
                <div className="inline-flex items-center text-sm  text-gray-900 ">
                  10 hours ago
                </div>
              </div>
            </li>

            {/* pt-3 pb-0 sm:pt-4 */}

            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://img.freepik.com/free-photo/lady-with-brown-eyes-is-smiling-red-wall_197531-16958.jpg?size=626&ext=jpg&ga=GA1.2.1841504169.1713851711&semt=sph"
                    alt="Thomas image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Thomes Lean
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    Request for Google Cloud Digital Leader Certificate{" "}
                  </p>
                </div>

                <div className="inline-flex items-center text-sm  text-gray-900 ">
                  15 hours ago{" "}
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg?size=626&ext=jpg&ga=GA1.2.1841504169.1713851711&semt=sph"
                    alt="Bonnie image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    Request for Completion of Ethical Hacking Training{" "}
                  </p>
                </div>
                <div className="inline-flex items-center text-sm  text-gray-900 ">
                  22 hours ago{" "}
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.1841504169.1713851711&semt=sph"
                    alt="Bonnie image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    Request for Completion of Machine Learning Training{" "}
                  </p>
                </div>
                <div className="inline-flex items-center text-sm  text-gray-900 ">
                  1 day ago
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&ga=GA1.2.1841504169.1713851711&semt=sph"
                    alt="Bonnie image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    Request for Completion of Software Development Certificate{" "}
                  </p>
                </div>
                <div className="inline-flex items-center text-sm  text-gray-900 ">
                  3 days ago
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
