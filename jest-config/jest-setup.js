const initTestHelpers = require("next-page-tester").initTestHelpers;
// import { loadEnvConfig } from "@next/env";

// loadEnvConfig(__dirname);

const { setup, teardown } = initTestHelpers();

beforeAll(() => {
    setup();
});

afterAll(() => {
    teardown();
});

afterEach(() => {
    // Clear all cookies
    if (document.cookie !== "") {
        document.cookie.split(";").forEach(function (v) {
            document.cookie = v
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
    }
});