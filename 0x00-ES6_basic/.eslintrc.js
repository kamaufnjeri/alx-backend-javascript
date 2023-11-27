module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        semi: ['error', 'always'],

    // Disallow space between function name and opening parenthesis
        'space-before-function-paren': ['error', 'never'],
  },
}
