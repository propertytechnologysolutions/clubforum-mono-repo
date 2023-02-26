const path = require('path');

module.exports = {
  watchFolders: [
    // watch for shared folder changes
    path.resolve(__dirname, '../../packages/ui-native'),
    path.resolve(__dirname, '../../packages/core-navigation'),
    path.resolve(__dirname, '../../node_modules'),
  ],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
