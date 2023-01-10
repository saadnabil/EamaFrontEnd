const path = require("path");
const allUrl = require("./settings/allUrl.json");
const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  reactStrictMode: false,

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  images: {
    domains: allUrl.imagesUrl,
  },

  rules: [
    {
      test: /\.less$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader", // translates CSS into CommonJS
        },
        {
          loader: "less-loader", // compiles Less to CSS
          options: {
            lessOptions: {
              // If you are using less-loader@5 please spread the lessOptions to options directly
              modifyVars: {
                "primary-color": "#ccc",
                "link-color": "#ccc",
                "border-radius-base": "2px",
              },
              javascriptEnabled: true,
            },
          },
        },
      ],
      // ...other rules
    },
  ],

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
