module.exports = {
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    extends: "eslint:recommended",
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],

        "no-empty": "warn",
        "no-cond-assign": ["error", "always"],

        "for-direction": "off",
    },
};
