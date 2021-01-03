module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        browser: true,
        jest: true,
    },
    parser: "@typescript-eslint/parser",
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
        "prettier",
        "prettier/react",
        "prettier/prettier",
        "prettier/@typescript-eslint",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
        "plugin:promise/recommended",
        "plugin:@next/next/recommended",
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
        "import/no-anonymous-default-export": "error", // For named React components
    },
    "overrides": [
        {
            "files": ["*.js"],
            "rules": {
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "@typescript-eslint/no-var-requires": "off", // Allow CommonJS imports
                "global-require": "off" // Allow dynamic imports for Node
            }
        },
        {
            "files": ["*.tsx"],
            "rules": {
                "@typescript-eslint/consistent-type-definitions": ["error", "type"],
                "react/jsx-props-no-spreading": "off" // TypeScript makes this safe
            }
        },
        {
            "files": ["./src/pages/**"],
            "rules": {
                "import/no-default-export": "off",
                "import/prefer-default-export": "error"
            }
        },
        {
            "files": ["./src/pages/api/**"],
            "rules": {
                "import/no-anonymous-default-export": "off"
            }
        }
    ]
};
