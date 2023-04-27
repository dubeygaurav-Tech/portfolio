module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  api: {
        invokeUrl: 'https://ekba9b2wfk.execute-api.us-east-1.amazonaws.com/PROD'
    }
}
