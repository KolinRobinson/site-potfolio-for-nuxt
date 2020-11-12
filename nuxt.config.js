const config = require('./.contentful.json')
const { createClient } = require('./plugins/contentful')


export default {
    ssr: true,
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'universal',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Global CSS
     */
    css: [
        '@/node_modules/modern-css-reset/dist/reset.min.css',
        '@/assets/css/main.scss'
    ],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        'nuxt-buefy'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {},
    generate: {
        routes() {
         return createClient(config).getEntries({
              'content_type': config.CTF_SINGLE_WORK_TYPE_ID,
              order: '-sys.createdAt'
            })
            .then(entries => {
                return [].concat({
                  ...entries.items.map(entry => `/portfolio/${entry.fields.titleWork}`)
                })
            })

            // return Promise.all([
            //         // get all blog posts
            //         createClient(config).getEntries({
            //           'content_type': config.CTF_SINGLE_WORK_TYPE_ID,
            //           order: '-sys.createdAt'
            //         }),
            //         // get the blog post content type
            //         // createClient(config).getSpace(config.CTF_SPACE_ID)
            //         // .then(space => space.getContentType(config.CTF_SINGLE_WORK_TYPE_ID))
            //     ])
            //     .then((entries) => {
            //         return [
            //             ...entries.items.map(entry => `/portfolio/${entry.fields.titleWork}`),
            //         ]
            //     })
        }
    },
    env: {
        CTF_SPACE_ID: config.CTF_SPACE_ID,
        CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
        CTF_PERSON_ID: config.CTF_PERSON_ID,
        CTF_SINGLE_WORK_TYPE_ID: config.CTF_SINGLE_WORK_TYPE_ID
    }
}
