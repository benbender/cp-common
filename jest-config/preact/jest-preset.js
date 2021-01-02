module.exports = {
    "moduleNameMapper": {
        "\\.(css)$": "identity-obj-proxy",
        "^react$": "preact/compat",
        "^react-dom$": "preact/compat",
        "^react-dom/test-utils$": "preact/test-utils"
    },
    "moduleDirectories": [
        "node_modules",
        "src"
    ],
    "transform": {
        "\\.(tsx?)$": "babel-jest",
    },
    "setupFilesAfterEnv": [
        "@testing-library/jest-dom",
        "jest-axe/extend-expect",
        "@benbender/jest-config/jest-setup.js",
    ],
    "testPathIgnorePatterns": [
        "/dist/",
        "/.next/",
        "/out/",
        "/node_modules/"
    ],
    "watchPlugins": [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname"
    ]
}
