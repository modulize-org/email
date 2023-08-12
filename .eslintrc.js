module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["@modulize/config/eslint-preset"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
