
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// const PUBLIC_FILE = /\.(.*)$/; 

// export const getValidSubdomain = (host?: string | null) => {
//     let subdomain: string | null = null;
//     if (!host && typeof window !== 'undefined') {
//       host = window.location.host;
//     }
//     if(host === 'localhost:3000' || host === 'astralics.com') {
//         return;
//     }
//     if (host && host.includes('.')) {
//         const parts = host.split('.');
//         const candidate = parts[0];
//         if (candidate && parts.length > 1 && !['www', 'localhost'].includes(candidate)) {
//           subdomain = candidate;
//         }
//       }
//     return subdomain;
//   };
// export async function middleware(req: NextRequest) {
//   const url = req.nextUrl.clone();
//   if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return;
//   const host = req.headers.get('host');
//   const subdomain = getValidSubdomain(host);
//   if (subdomain) {
//     console.log(`>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`);
//     url.pathname = `/${subdomain}${url.pathname}`;
//   }
//   return NextResponse.rewrite(url);
// }

export default async function middleware() {
  return;
}