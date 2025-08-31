import { NextRequest, NextResponse } from 'next/server';

type Handler<T> = (req: NextRequest, ctx?: undefined) => Promise<T>;

export function withApiHandler<T>(handler: Handler<T>) {
  return async (req: NextRequest, ctx?: undefined) => {
    try {
      const result = await handler(req, ctx);

      return NextResponse.json(
        { success: true, data: result },
        { status: 200 }
      );
    } catch (error) {
      console.error('API Error:', error);
      return NextResponse.json(
        { success: false, error: error || 'Internal Server Error' },
        { status: 500 }
      );
    }
  };
}
