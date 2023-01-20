// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
    matcher: '/api/:function*',
};

export async function middleware(request: NextRequest) {
    //If it's a GET request, don't check for token. All GET requests are public
    if (request.method == 'GET')
        return NextResponse.next()
    
    //If it's /api/user/verify or /api/user/login, don't check for token
    if (request.nextUrl.pathname.startsWith('/api/user'))
        return NextResponse.next()
    
    const res = await fetch('http://localhost:3000/api/user/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    //Invalid token, deny access
    if (res.status != 200)
        return new NextResponse(
            JSON.stringify({ success: false, message: 'authentication failed' }),
            { status: 401, headers: { 'content-type': 'application/json' } }
        )
}