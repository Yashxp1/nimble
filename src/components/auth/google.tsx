import React from 'react';
import { Button } from '../ui/button';
import { signIn } from '@/auth';

const Google = () => {
  return (
    <div>
      <Button
        variant="secondary"
        onClick={async () => {
          'use server';
          await signIn('google');
        }}
      >
        Google Auth
      </Button>
    </div>
  );
};

export default Google;
