module.exports = {
    "root": true,
    "env": {
        "node": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 11,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "no-console": "off",
        "no-debugger": "off",
        "camelcase": 0
    }
};
