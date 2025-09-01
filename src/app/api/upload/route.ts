import { auth } from '@/auth';
import { withApiHandler } from '@/lib/apiHandler';
import { generateSummary } from '@/lib/gemini';
import { NextRequest } from 'next/server';

const getResumeData = async (req: NextRequest) => {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error('Unauthorized');
  }

  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    throw new Error('File not found!');
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const summary = await generateSummary(file);

  return summary;
};

export const POST = withApiHandler(getResumeData);
