// import { jwtVerify } from "jose";

import { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET!;

export const config = {
  matcher: ["/"],
};

export default async function middleware(request: NextRequest) {
  return new Response(`${typeof request} ${JSON.stringify(request)}`);

  // const paramToken = request.nextUrl.searchParams.get("token");

  // // request.

  // if (!paramToken) {
  //   return Response.redirect(
  //     `https://app.carops.net/login?redirectTo=${request.nextUrl}`
  //   );
  // }

  // if (paramToken !== "123") {
  //   return Response.redirect(
  //     `https://app.carops.net/login?redirectTo=${request.nextUrl}`
  //   );
  // }

  // const token = request.cookies.get(USER_TOKEN)?.value;

  // try {
  //   const isVerified = await jwtVerify(
  //     token,
  //     new TextEncoder().encode(JWT_SECRET)
  //   );
  //   if (isVerified) {
  //     return NextResponse.next();
  //   }
  // } catch (err) {}

  // const paramToken = request.nextUrl.searchParams.get('token');

  // if (!paramToken) {
  //   return NextResponse.redirect(`https://app.carops.net/login?redirectTo=${request.nextUrl}`);
  // }

  // try {
  //   const isVerified = await jwtVerify(
  //     token,
  //     new TextEncoder().encode(JWT_SECRET)
  //   );
  //   if (isVerified) {
  //     request.cookies.set(USER_TOKEN, paramToken);
  //     request.nextUrl.searchParams.delete('token');

  //     return NextResponse.next();
  //   }
  // } catch (err) {}

  // return NextResponse.redirect(`https://app.carops.net/login?redirectTo=${request.nextUrl}`);
}

// const USER_TOKEN = 'user-token';
