module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks",
        "unused-imports"
    ],
    "rules": {
        "quotes": ["warn", "single"],
        "max-len": ["error", { "code": 100, ignorePattern: "(d='([\S\s]*?)')|(^import)" }],
        "prefer-promise-reject-errors": ["off"],
        "react/jsx-filename-extension": ["off"],
        "react/prop-types": ["off"],
        "no-return-assign": ["off"],
        "import/no-unresolved": "off",
        "react/destructuring-assignment": "off", // propsの分割代入,
        "no-use-before-define": "off",
        "no-param-reassign": ["error", { "props": false }], // ReduxToolkitでのstate更新
        "@typescript-eslint/no-use-before-define": ["error", { "variables": false }], // ReduxToolkit、slice内でのアクションの使用
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/ban-types": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-props-no-spreading": "off",
        "import/prefer-default-export": "off",
        "@typescript-eslint/no-unused-vars": "off",
        'import/extensions':
          [
            'error',
            'ignorePackages',
            {
              'js': 'never',
              'jsx': 'never',
              'ts': 'never',
              'tsx': 'never',
              'mjs': 'never',
              '': 'never',
            },
          ],
        '@typescript-eslint/ban-ts-comment': 'off',
        'no-restricted-imports': ['error', { 'patterns': ['./', '../'] }],
        '@typescript-eslint/array-type': ['error', { 'default': 'array' }],
        'react/jsx-wrap-multilines':
          [
            'error',
            {
              'declaration': 'parens-new-line',
              'assignment': 'parens-new-line',
              'return': 'parens-new-line',
              'arrow': 'parens-new-line',
              'condition': 'parens-new-line',
              'logical': 'parens-new-line',
              'prop': 'ignore',
            },
          ],
        'require-await': 'error',
        'no-restricted-syntax':
          [
            'error',
            {
              'selector': 'TSEnumDeclaration:not([const=true])',
              'message': "Don't declare non-const enums",
            },
          ],
        'react-hooks/rules-of-hooks': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'unused-imports/no-unused-imports-ts': 'warn',
    }
};