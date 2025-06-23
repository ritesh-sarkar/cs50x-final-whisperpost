/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://whisper-post.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      // You can add disallow rules here
    ],
  },
};
