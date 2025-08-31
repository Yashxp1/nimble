import { auth } from '@/auth';

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id || !session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { username } = await req.json();

    const res = fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: 'application/vnd.github+json',
      },
    });

    if (!(await res).ok) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: (await res).status }
      );
    }

    const data = await (await res).json();

    // console.log(data)

    return NextResponse.json(data);
  } catch (error) {
    console.error('Server Error', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}
