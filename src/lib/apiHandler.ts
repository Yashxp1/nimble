import { NextRequest, NextResponse } from 'next/server';

type Handler<T> = (req: NextRequest, ctx?: any) => Promise<T>;

export function withApiHandler<T>(handler: Handler<T>) {
  return async (req: NextRequest, ctx?: any) => {
    try {
      const result = await handler(req, ctx);

      if (result instanceof NextResponse) return result;

      return NextResponse.json({ success: true, data: result });
      
    } catch (error) {
      console.error('API Error:', error);
      return NextResponse.json(
        { success: false, error: error || 'Internal Server Error' },
        { status: 500 }
      );
    }
  };
}
