import Google from '@/components/auth/google';
import { ModeToggle } from '@/components/theme/ModeToggle';
import React from 'react';

const page = () => {
  return (
    <div>
      <ModeToggle />
      <Google/>
    </div>
  );
};

export default page;
