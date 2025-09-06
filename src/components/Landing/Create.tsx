import React from 'react';
import { FaArrowRight } from "react-icons/fa"

const Create = () => {
  return (
    <div className="text-white m-2 rounded-2xl border border-gray-200 bg-cover bg-center bg-no-repeat relative bg-blue-400">
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-semibold mb-6 text-center">
          Ready for the Truth?
        </h1>
        <p className="max-w-3xl mx-auto text-2xl mb-8 text-center leading-relaxed">
          Stop wondering why you're not getting interviews. Upload your resume
          and get the honest analysis you need to actually land your next job.
        </p>
        <button className="bg-white text-blue-500 px-8 py-4 rounded-full font-semibold flex justify-center items-center gap-4 transition-colors duration-200  text-lg">
          Start Analyzing arrow <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Create;
