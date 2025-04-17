import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect(new URL('/signin', 'http://localhost:3000'));
} 