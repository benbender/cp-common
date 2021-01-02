module.exports = {
    purge: {
        // enabled: true,
        content: [
            './src/**/*.tsx',
        ],
    },

    darkMode: 'class', // or 'media' or 'class'

    theme: {
        container: {
            center: true,
            // padding: {
            //   DEFAULT: '1rem',
            //   sm: '2rem',
            //   lg: '4rem',
            //   xl: '5rem',
            //   '2xl': '6rem',
            // },
        },

        extend: {
            colors: {
                primary: {
                    DEFAULT: 'var(--color-primary)',
                    text: {
                        DEFAULT: 'var(--color-primary-text)',
                    },
                    hover: {
                        DEFAULT: 'var(--color-primary-hover)',
                        text: {
                            DEFAULT: 'var(--color-primary-hover-text)',
                        }
                    }
                },
                secondary: {
                    DEFAULT: 'var(--color-secondary)',
                },
                accent: {
                    DEFAULT: 'var(--color-accent-1)',
                    1: 'var(--color-accent-1)',
                    2: 'var(--color-accent-2)',
                    3: 'var(--color-accent-3)',
                    4: 'var(--color-accent-4)',
                    5: 'var(--color-accent-5)',
                    6: 'var(--color-accent-6)',
                    7: 'var(--color-accent-7)',
                    8: 'var(--color-accent-8)',
                },
                selection: {
                    DEFAULT: 'var(--color-selection)'
                },
                border: {
                    DEFAULT: 'var(--color-border)'
                },
                link: {
                    DEFAULT: 'var(--color-link)'
                },
                code: {
                    DEFAULT: 'var(--color-code)'
                },
                success: {
                    DEFAULT: 'var(--color-success)',
                },
                warning: {
                    DEFAULT: 'var(--color-warnings)',
                },
                error: {
                    DEFAULT: 'var(--color-error)',
                },
                alert: {
                    DEFAULT: 'var(--color-alert)'
                }
            },

            minWidth: {
                'max-content': 'max-content',
            },

            screens: (theme) => ({
              '3xl': '1440px',
              '4xl': '1920px',
              'tablet': theme('screen.sm'),
              'laptop': theme('screen.lg'),
              'desktop': theme('screen.xl'),
              'print': { 'raw': 'print' },
            })
        }
    },

    variants: {
        extend: {},
    },

    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
};