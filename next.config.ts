// next.config.ts
import withPWA from 'next-pwa'

const nextConfig = {
  reactStrictMode: true,
}

// @ts-ignore – next-pwa types lag a little behind Next.js
export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
})(nextConfig)
