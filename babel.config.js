module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // plugins: [
    //   ["module-resolver", {
    //     "alias": {
    //       "@Navigation": "./src/navigation",
    //       "@Components": "./src/components",
    //       "@Screens": "./src/screens",
    //       "@Stores": "./src/stores",
    //       "@Assets": "./src/assets"
    //     },
    //   }]
    // ]
  };
};
