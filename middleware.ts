// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/; // Files

export const getValidSubdomain = (host?: string | null) => {
    let subdomain: string | null = null;
    if (!host && typeof window !== 'undefined') {
      // On client side, get the host from window
      host = window.location.host;
    }
    if (host && host.includes('.')) {
        const parts = host.split('.');
        const candidate = parts[0];
        console.log('HOST :', host);
        console.log('CANDIDATE :', candidate)
        // Check that the domain has more than one part and exclude common subdomains
        if (candidate && parts.length > 1 && !['www', 'localhost', 'astralics'].includes(candidate)) {
          subdomain = candidate;
        }
      }
    return subdomain;
  };
export async function middleware(req: NextRequest) {
  // Clone the URL
  const url = req.nextUrl.clone();
  // Skip public files
  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return;
  const host = req.headers.get('host');
  const subdomain = getValidSubdomain(host);
  if (subdomain) {
    // Subdomain available, rewriting
    console.log(`>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`);
    url.pathname = `/${subdomain}${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}