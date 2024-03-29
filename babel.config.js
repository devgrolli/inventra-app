module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      "module:react-native-dotenv",
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
          alias: {
            "@core": "./src/core",
            "@utils": "./src/utils",
            "@assets": "./src/assets",
            "@screens": "./src/screens",
            "@service": "./src/service",
            "@components": "./src/components",
          },
        },
      ],
    ],
  };
};
