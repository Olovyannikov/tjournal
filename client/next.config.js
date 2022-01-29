/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        prependData: `
      @import "./src/client/assets/styles/general/variables.scss";
      @import "./src/client/assets/styles/general/mixins.scss";
    `,
    },
    images: {
        domains: ['leonardo.osnova.io'],
    },
};

module.exports = nextConfig;
