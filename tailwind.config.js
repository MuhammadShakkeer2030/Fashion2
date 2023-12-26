/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
    theme: {
        screens: {
            md: { max: '861px' },
            mob: { max: '27em' },
        },
        fontSize: {
            xx: '0.8125em',
            nav: '0.91875em',
            banner: '3.25em',
            40: '2.5em',
            1.25: '1.0625em',
        },
        letterSpacing: {
            xx: '0.065625em',
            nav: '0.039375em',
        },
        gridTemplateColumns: {
            top: '1.1fr 1.2fr 3em',
            nav: '1fr 1fr',
            xxfr: '1.1fr 1.7fr 3em',
        },
        height: {
            ban: '38em',
            2.5: '2.75em',
            full: '100%',
            37: '37rem',
            9: ' 22.5em',
            26: '26.875em',
            40: '30em',
        },
        maxHeight: {
            ban: '56em',
        },
        lineHeight: {
            ban: '4.25em',
            4: '1.1875em',
            17: '1.0625em',
            52: '3.25em',
            30: '1.875em',
        },
        fontFamily: {
            Lora: ['"Lora"', ' "serif"'],
            Cardo: ['"Cardo"', ' "serif"'],
        },

        extend: {
            spacing: {
                100: '25.7em',
                110: '33em',
            },
            colors: {
                'light-black': '#2e2a39',
                text: 'rgba(46, 42, 57, 0.75)',
            },
            boxShadow: {
                btn: '#888888 1px 1px 10px 0.1px',
            },
            backgroundImage: {
                'custom-gradient':
                    'linear-gradient(123deg, rgba(77,77,77,1) 0%, rgba(77,77,77,1) 54%, rgba(77,77,77,1) 100%)',
            },
            width: {
                9: ' 22.5em',
                115: '26em',
                36: '36%',
            },
            transitionDuration: {
                slow: '1s',
            },
            blur: {
                xx: '0.5px',
            },
            borderWidth: {
                xxs: '.7px',
            },
        },
    },
    plugins: [],
};
