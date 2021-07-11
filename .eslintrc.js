module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'standard-jsx',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    curly: 2,
    'no-unused-vars': 'error',
    quotes: [2, 'single', { avoidEscape: true }],
    camelcase: [
      2,
      {
        properties: 'never',
      },
    ],
    'consistent-return': 0,
    'array-callback-return': 0,
    'no-return-assign': 0,
    'max-len': 0,
    'no-undef': 0,
    'no-param-reassign': 0,
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'no-underscore-dangle': 0,
    'prefer-destructuring': 0,
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'simple-import-sort/sort': [
      'error',
      {
        groups: [
          [
            // Packages. `react` related packages come first.
            '^react',
            '^@?\\w',
            // Side effect imports.
            '^\\u0000',
            // Internal packages.
            '^(api|components|constant|content|controller|pages|reduxStore|service|utils)(/.*|$)',
            // Internal packages.
            '^(fonts|images|styles)(/.*|$)',
            // Style imports.
            '^.+\\.s?css$',
            // Parent imports. Put `..` last.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            // Other relative imports. Put same-folder imports and `.` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
        ],
      },
    ],
    'sort-imports': 'off',
    'import/order': 'off',
  },
  parser: 'babel-eslint',
};
