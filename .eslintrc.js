module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["@modulize/eslint-config/eslint-config-next"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
}
