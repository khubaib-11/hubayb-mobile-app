module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['jsx-a11y'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/extensions': [0],
    'linebreak-style': 0,
    'object-curly-newline': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
