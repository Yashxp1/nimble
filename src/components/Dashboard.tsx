import React from 'react';
import FileUpload from './FileUpload';

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      You are authorised
      <div>
        <FileUpload />
      </div>
    </div>
  );
};

export default Dashboard;
