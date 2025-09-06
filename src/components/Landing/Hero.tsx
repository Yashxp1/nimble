import React from 'react';
import Navbar from './Navbar';
import { Dot } from 'lucide-react';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <div className="bg-[#FDFAF5]  m-2 rounded-2xl min-h-screen border border-gray-200 bg-gradient-to-b from-blue-400 to-blue-200">
      <Navbar />
      <div className="flex flex-col justify-center items-center px-4 py-16 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center border my-4 px-4 py-2 rounded-full bg-blue-100 border-blue-200">
          <Dot className="text-blue-600 w-4 h-4" />
          <span className="text-sm font-medium text-blue-800">
            AI-Powered Resume Analysis
          </span>
        </div>

        <div className="space-y-6 flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl md:text-6xl leading-tight text-white max-w-3xl">
            Meet Nimble – AI That Reads Resumes for You.
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Nimbles AI instantly analyzes resumes and delivers ranked candidate
            summaries. Cut your screening time by 90% and never miss top talent
            again.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button variant="blue" className="px-8 py-3 w-40">
            Get Started
          </Button>
          <Button variant="blue" className="px-8 py-3 w-40">
            Watch Demo
          </Button>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Trusted by 500+ recruiting teams at top companies
        </p>
      </div>
    </div>
  );
};

export default Hero;
