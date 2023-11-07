import { NextRequest, NextResponse } from "next/server";


const isLoggedIn = false

export function middleware(request: NextRequest) {

  // return NextResponse.json({
  //   hello: "middleware"
  // })

  let cookies = request.cookies.get('my-cookies')
  if(!isLoggedIn) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/profile']
}