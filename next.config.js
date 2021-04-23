module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['www.google.co.uk']
  },
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    GOOGLE_CONTEXT_KEY: process.env.GOOGLE_CONTEXT_KEY
  }
}