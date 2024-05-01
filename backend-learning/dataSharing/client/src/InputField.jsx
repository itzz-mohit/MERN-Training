import React from "react";

const InputField = ({ sendData, textData }) => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Enter your text"
          className="form-input px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black-500 flex-1"
          onChange={(e) => textData(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-rose-500 text-white font-semibold rounded-md hover:bg-rose-600 focus:outline-none"
          onClick={sendData}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default InputField;
