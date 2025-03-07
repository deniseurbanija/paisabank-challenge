// next.config.js
const withSvgr = require("next-svgr");

module.exports = withSvgr({
  webpack(config: any, options: any) {
    return config;
  },
});
