import { NextResponse } from "next/server";

export default function middleware(req) {
  // console.log('-------------------> ',req.nextUrl.pathname.startsWith('/dashboard'))
  // console.log('-------------------> ',req.nextUrl.pathname.startsWith('/ffff'))
  const token = req.cookies.get("AToken");
  const url = req.nextUrl.clone()
   console.log('--->', url.pathname )


  if (req.nextUrl.pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect("https://amininsure.bshopa.com/");
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
}