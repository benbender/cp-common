module.exports = {
    "moduleNameMapper": {
        "\\.(css)$": "identity-obj-proxy"
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