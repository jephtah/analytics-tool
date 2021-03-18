module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors:{
                'gray-700-spotify': '#282828',
                'gray-800-spotify': '#181818',
                'gray-900-spotify': '#121212',
                'white-300-mobicure': '#f5f4f9'
            },
            spacing:{
                '72':'18rem'
            },
            width: {
                '7/10': '70%',
                '3/10': '30%'
            },
            lineHeight:{
                'extra-loose':'2.5'
            },
            fontFamily: {
                'primary-font-family': "GoogleSans"
            }
        },
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'group-hover']
    },
    plugins: [],
}
