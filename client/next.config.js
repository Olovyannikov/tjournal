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
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                and: [/\.(js|ts)x?$/],
            },

            use: ['@svgr/webpack'],
        });

        config.module.rules.push({
            test: /\.(mp4)/,
            use: {
                loader: 'url-loader', // this need file-loader
                options: {
                    limit: 50000,
                },
            },
        });

        return config;
    },
};

module.exports = nextConfig;
