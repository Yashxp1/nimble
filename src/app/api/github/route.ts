import { auth } from '@/auth';
import { withApiHandler } from '@/lib/apiHandler';
import { IGithubUser } from '@/types/api';
import { NextRequest } from 'next/server';
import axios from 'axios';

const getGithubProfile = async (req: NextRequest): Promise<IGithubUser> => {

  const session = await auth();

  if (!session?.user?.id) {
    throw new Error('Unauthorized');
  }

  const { username } = await req.json();

  if (!username) {
    throw new Error('Username is required');
  }

  const { data } = await axios.get<IGithubUser>(
    ` https://api.github.com/users/${username}`
  );

  return data;
};

export const POST = withApiHandler(getGithubProfile);
