/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.*'],
    theme: {
        extend: {
            rotate: {
                '270': '270deg',
            },
            margin: {
                '18': '4.5rem',
            }
        },        
        minHeight: {
            '120': '30rem',
        },
    },
    plugins: [],
};
