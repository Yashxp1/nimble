import React from 'react';

const Features = () => {
  const items = [
    'ATS Compatibility Check',
    'Skills Gap Analysis',
    'Impact Score Analysis',
    'Instant Red Flags',
    'Industry Benchmarking',
    'Actionable Improvements',
  ];

  return (
    <div className="m-2 rounded-2xl min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold mb-8 text-center text-blue-500">
          Brutal Honesty About Your Resume
        </h1>
        <p className="mb-10 leading-relaxed text-xl max-w-3xl text-center text-gray-600">
          Our AI doesn't sugarcoat anything. Get the unfiltered truth about
          what's working, what's not, and exactly how to fix it before
          recruiters see it.
        </p>
      </div>
      <div className='flex justify-center items-center flex-col'>
        {items.map((item, index) => (
          <p className='border max-w-5xl w-full py-8 mb-4 rounded-3xl p-5 text-xl bg-white text-blue-950 hover:bg-blue-400 transition-all hover:text-white'  key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Features;
