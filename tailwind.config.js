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
            },
            boxShadow: {
                'inner-x': 'inset -12px 0px 6px -8px rgba(0, 0, 0, 0.30), inset 12px 0px 6px -8px rgba(0, 0, 0, 0.30)',
                'inner-r': 'inset 12px 0px 6px -8px rgba(0, 0, 0, 0.30)',
                'inner-l': 'inset -12px 0px 6px -8px rgba(0, 0, 0, 0.30)',
                'outer': '-4px 5px 6px 0px rgba(0, 0, 0, 0.30), 4px 5px 6px 0px rgba(0, 0, 0, 0.30)',
                'outer-press': '-2px 3px 6px 0px rgba(0, 0, 0, 0.30), 2px 3px 6px 0px rgba(0, 0, 0, 0.30)',
                'outer-press-sib-r': '-4px 5px 6px 0px rgba(0, 0, 0, 0.30), 5px 6px 7px 1px rgba(0, 0, 0, 0.30)',
                'outer-press-sib-l': '-5px 6px 7px 1px rgba(0, 0, 0, 0.30), 4px 5px 6px 0px rgba(0, 0, 0, 0.30)',
            }
        },        
        minHeight: {
            '120': '30rem',
        },
    },
    plugins: [],
};
