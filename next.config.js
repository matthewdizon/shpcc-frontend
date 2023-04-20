module.exports = {
  images: {
    domains: ["images.ctfassets.net", "res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/**",
      },
    ],
  },
};
