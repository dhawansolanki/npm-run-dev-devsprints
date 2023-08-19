import React from 'react';

const AddPost = () => {
  return (
    <div>
      <div className="flex justify-center h-screen items-center bg-gray-200 antialiased">
        <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
          <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
            <p className="font-semibold text-gray-800">Upload Post</p>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          
          <div className="flex flex-col px-6 py-5 bg-gray-50">

<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 

            <p className="mb-2 font-semibold text-gray-700">Caption</p>
            <textarea
              type="text"
              name=""
              placeholder="Type message..."
              className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
              id=""
            ></textarea>
            <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
              <div className="w-full sm:w-1/2">
                <p className="mb-2 font-semibold text-gray-700">Tags</p>
                <select
                  type="text"
                  name=""
                  className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                  id=""
                >
                  <option value="">Select Tags</option>
                  <option value="0">Reuse</option>
                  <option value="1">Recycle</option>
                  <option value="2">Regenrate</option>
                </select>
              </div>
              <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                <p className="mb-2 font-semibold text-gray-700">Next step</p>
                <select
                  type="text"
                  name=""
                  className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                  id=""
                >
                  <option value="0">Location</option>
                </select>
              </div>
            </div>
            <hr />

            {/* <div className="flex items-center mt-5 mb-3 space-x-4">
              <input
                className="inline-flex rounded-full"
                type="checkbox"
                id="check1"
                name="check1"
              />
              <label className="inline-flex font-semibold text-gray-400" htmlFor="check1">
                Add a crew
              </label>
              <br />
              <input
                className="inline-flex"
                type="checkbox"
                id="check2"
                name="check2"
                checked
              />
              <label className="inline-flex font-semibold text-blue-500" htmlFor="check2">
                Add a specific agent
              </label>
              <br />
            </div> */}
            <div className="flex flex-row items-center justify-between p-5 bg-white border border-gray-200 rounded shadow-sm">
              <div className="flex flex-row items-center">
                <img
                  className="w-10 h-10 mr-3 rounded-full"
                  src="https://randomuser.me/api/portraits/lego/7.jpg"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-800">Xu Lin Bashir</p>
                  <p className="text-gray-400">table.co</p>
                </div>
              </div>
              <h1 className="font-semibold text-red-400">Remove</h1>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
            <p className="font-semibold text-gray-600">Cancel</p>
            <button className="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
