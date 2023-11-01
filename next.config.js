/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vuongquocanh.com',
        port: '',
        pathname: '/wp-content/uploads/2018/04/la-co-vuong-quoc-anh.jpg',
      },
      {
        protocol: 'https',
        hostname: 'investone-law.com',
        port: '',
        pathname: '/wp-content/uploads/2019/06/quoc-ky-viet-nam.jpg',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/225px-Flag_of_Japan.svg.png',
      },
      {
        protocol: 'https',
        hostname: 'i1.wp.com',
        port: '',
        pathname: '/www.digital38.com.vn/wp-content/uploads/2021/01/nhiep-anh-gia-chanh-nguyen.-1.jpg',
      },
    ],
  },
}

module.exports = nextConfig
