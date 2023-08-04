/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            primary: ['Montserrat', 'sans-serif'],
            secondary: ['Rajdhani', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#fff',
                secondary: '#000',
            },
        },
    },
    plugins: [],
}
