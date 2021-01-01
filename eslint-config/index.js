module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        browser: true,
        jest: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                paths: [".", "src"],
            },
        },
    },
    plugins: [
        "@typescript-eslint",
        "prettier",
        "promise",
        "import",
        "react",
        "react-hooks",
        "jest-dom",
        "testing-library",
        "jsx-a11y",
        "@next/eslint-plugin-next",
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
        "plugin:promise/recommended",
        "prettier/@typescript-eslint",
        "prettier/react",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react",
        "plugin:jsx-a11y/recommended",
    ],
    rules: {
        "prettier/prettier": "error", // Let prettier rule our formatting
        "react/prop-types": "off", // Ignore prop-types as we are using typescript
        "react/react-in-jsx-scope": "off", // React is always in scope with Next.js
        "jsx-a11y/anchor-is-valid": "off", // Doesn't play well with next/link
    },
};
