export default function middleware(request) {
    const basicAuth = request.headers.get('Authorization')
    if (!basicAuth) {
      return new Response('Access denied', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic' },
      })
    }
    const authValue = basicAuth.split(' ')[1]
    if (authValue !== 'username:password') {
      return new Response('Access denied', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic' },
      })
    }
  }
  