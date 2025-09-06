import Dashboard from '@/components/Dashboard';
import { ModeToggle } from '@/components/theme/ModeToggle';
import React from 'react';

const page = () => {
  return (
    <div>
      <Dashboard />
      <ModeToggle/>
    </div>
  );
};

export default page;
