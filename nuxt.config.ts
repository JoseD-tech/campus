// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    tailwindcss: {
        cssPath: '~/assets/css/main.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        exposeLevel: 2,
        config: {},
        injectPosition: 'first',
        viewer: true,
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ]
})
