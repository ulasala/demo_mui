import React from 'react';

import DropdownTailwind from '../Components/DropdownTailwind';

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-300 h-10 w-100 flex justify-center items-center mb-5 " />

        <div class="flex flex-col md:flex-row justify-center">
          <div class="flex flex-col md:flex-row">
            <div class=" p-4 mx-7">
              <p className="text-left align-left font-bold text-4xl ">
                MFG Ops UI
              </p>
              <p>Proof of Concept</p>
            </div>
            {/* <!-- Vertical Divider --> */}
            <div class="hidden md:block border-l border-gray-300 h-full"></div>
            {/* <!-- Horizontal Divider (for mobile screens) --> */}
            <div class="md:hidden border-t border-gray-300 w-full"></div>
            <div class=" p-4 mx-7">
              <p>Please Select a Location, Product Line,</p>
              <p>& Device Configuration from the options below.</p>
            </div>
          </div>
        </div>

        <div className="">
          {/* Vertical Divider */}
          <hr class="border-t-4 border-black-300 my-4" />
        </div>

        <div class="flex flex-wrap justify-between">
          <div class="w-full sm:w-auto sm:flex-1  p-4 mb-2 sm:mb-0 sm:mr-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="inputField"
            >
              Location
            </label>
            <DropdownTailwind />
          </div>
          <div class="w-full sm:w-auto sm:flex-1  p-4 mb-2 sm:mb-0 sm:mr-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="inputField"
            >
              Product Line
            </label>
            <DropdownTailwind />
          </div>
          <div class="w-full sm:w-auto sm:flex-1  p-4 mb-2 sm:mb-0">
            <label
              class="block  text-gray-700 text-sm font-bold mb-2"
              for="inputField"
            >
              PC Name
            </label>
            <DropdownTailwind />
          </div>
        </div>

        <div className="p-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="inputField"
          >
            Station Configuration
          </label>
          <DropdownTailwind />
        </div>

        <div className="flex flex-wrap justify-end my-10">
          <button class="inline-flex items-center space-x-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <span>Add Station</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
