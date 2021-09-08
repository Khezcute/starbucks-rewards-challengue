export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Starbucks® Rewards – Order Ahead, Endless Extras, Free Coffee: Starbucks Coffee Company",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ["@nuxtjs/tailwindcss"],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios"
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCSS: true,
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        postcss: {
            // Add plugin names as key and arguments as value
            // Install them before as dependencies with npm or yarn
            plugins: {
                // Disable a plugin by passing false as value
                "postcss-nested": {},
                cssnano: { preset: "default" }
            },
            order: "presetEnvAndCssnanoLast",
            preset: {
                // Change the postcss-preset-env settings
                stage: 2,
                autoprefixer: {
                    grid: true
                }
            }
        },
        splitChunks: {
            layouts: false,
            pages: true,
            commons: true
        }
    }
};