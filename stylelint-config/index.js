module.exports = {
    extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
    plugins: ['stylelint-no-unsupported-browser-features'],
    rules: {
        'plugin/no-unsupported-browser-features': [
            true,
            {
                severity: 'warning',
            },
        ],
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'layer',
                    'variants',
                    'responsive',
                    'screen',
                ],
            },
        ],
        'block-no-empty': null,
        'unit-allowed-list': [
            'vh',
            'vw',
            'vmin',
            'vmax',
            'em',
            'rem',
            's',
            'fr',
            'deg',
            'ms',
        ],
    },
    ignoreFiles: ['node_modules', '.next', 'dist', 'data', 'out', 'public'],
};
