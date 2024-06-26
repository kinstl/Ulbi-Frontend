module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'react/function-component-definition': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': [2, 4, { indentLogicalExpressions: true }],
        'react/jsx-indent-props': [2, 4],
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }],
        indent: [2, 4],
        'no-unused-vars': 'warn',
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'max-len': 'off',
    },
    globals: {
        __IS_DEV__: true,
        React: 'readonly',
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
