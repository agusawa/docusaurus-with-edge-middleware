import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET!;

export const config = {
  matcher: ['*'],
}

export default async function middleware(request: NextRequest) {
  const token = request.cookies.get(USER_TOKEN)?.value;

  try {
    const isVerified = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET)
    );
    if (isVerified) {
      return NextResponse.next();
    }
  } catch (err) {}

  const paramToken = request.nextUrl.searchParams.get('token');

  if (!paramToken) {
    return NextResponse.redirect(`https://app.carops.net/login?redirectTo=${request.nextUrl}`);
  }

  try {
    const isVerified = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET)
    );
    if (isVerified) {
      request.cookies.set(USER_TOKEN, paramToken);
      request.nextUrl.searchParams.delete('token');

      return NextResponse.next();
    }
  } catch (err) {}
}

const USER_TOKEN = 'user-token';
