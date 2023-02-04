/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.*'],
    theme: {
        extend: {
            rotate: {
                '270': '270deg',
            }
        },        
        minHeight: {
            '120': '30rem',
        },
    },
    plugins: [],
};
