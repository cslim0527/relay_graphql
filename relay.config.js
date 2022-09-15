module.exports = {
  src: ".",
  schema: "./data/schema.docs.graphql",
  language: "typescript",
  exclude: [
    "**/node_modules/**",
    "**/__mocks__/**",
    "**/__generated__/**",
    "**/.next/**",
  ],
  artifactDirectory: "__generated__",
};
