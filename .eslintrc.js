module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['import', '@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:prettier/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    rules: {
        'no-debugger': 'off',
        'no-console': 'off',
        'class-methods-use-this': 'off',
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/no-var-requires': 0,
    },
};
