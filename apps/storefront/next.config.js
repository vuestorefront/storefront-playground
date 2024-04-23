/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "preview.redd.it",
        port: "",
      },
      {
        protocol: "https",
        hostname: "burst.shopifycdn.com",
        port: "",
      },
    ],
  },
};
