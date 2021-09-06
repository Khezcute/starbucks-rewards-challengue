module.exports = {
    purge: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}"
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'sb-primary': '#008248',
                'sb-secondary': '#1e3932'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};