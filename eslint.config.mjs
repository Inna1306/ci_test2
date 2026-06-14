import globals from 'globals';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import pluginJest from 'eslint-plugin-jest';

export default [
    pluginJs.configs.recommended,
    {
        ignores: [
            'dist/', '*.json'
        ],
    },
    {
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: 'module',
            globals: globals.browser,
        },
    },
    {
        rules: {
            indent: [
                'error', 4
            ],
            semi: [
                'error', 'always'
            ],
            'no-unused-vars': 'off',
            'no-console': 'off',
            'no-var': 'error',
        },
    },
    {
        files: [ '*.config.*' ],
        rules: {
            'no-underscore-dangle': [ 'off' ],
            'import/no-extraneous-dependencies': 'off',
        },
    },
    {
        plugins: { stylistic },
        rules: {
            'stylistic/max-len': [
                'error', { code: 120 }
            ],
            'stylistic/quotes': [
                'error', 'single'
            ],
            'stylistic/array-bracket-spacing': [
                'error', 'always'
            ],
            'stylistic/array-bracket-newline': [
                'error', {
                    multiline: true, minItems: 2
                }
            ],
            'stylistic/object-curly-spacing': [
                'error', 'always'
            ],
            'stylistic/object-curly-newline': [
                'error', {
                    ObjectExpression: {
                        multiline: true, minProperties: 2
                    }
                }
            ],
            'stylistic/no-multi-spaces': [
                'error', {
                    exceptions: {
                        Property: false, BinaryExpression: true, VariableDeclarator: true, ImportDeclaration: true
                    }
                }
            ],
            'stylistic/key-spacing': [
                'error', { mode: 'strict' }
            ],
            'stylistic/no-trailing-spaces': 'error',
            'stylistic/no-multiple-empty-lines': [
                'error', {
                    max: 1, maxBOF: 1
                }
            ],
        },
    },

    {
        files: [
            '**/__tests__/**/*.js', '**/*.test.js'
        ],
        plugins: { jest: pluginJest, },
        languageOptions: { globals: { ...pluginJest.environments.globals.globals, }, },
        rules: {
            'jest/no-disabled-tests': 'warn',
            'jest/no-focused-tests': 'error',
            'jest/no-identical-title': 'error',
            'jest/prefer-to-have-length': 'warn',
            'jest/valid-expect': 'error',
        },
    },
];
