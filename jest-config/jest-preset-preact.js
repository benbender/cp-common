module.exports = {
    "preset": "@benbender/jest-config",
    "moduleNameMapper": {
        "^react$": "preact/compat",
        "^react-dom$": "preact/compat",
        "^react-dom/test-utils$": "preact/test-utils"
    }
}