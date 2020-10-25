import CONFIG from '@/wordpress.config'

/**
 * @description Inject $WPAPI() in Vue, context and store.
 * @see https://nuxtjs.org/guide/plugins#inject-in-root--context
 */
export default (context, inject) => {
    const WP_API = require( 'wpapi' );
    const WPAPI = new WP_API({
        endpoint: `${ CONFIG.getFullBasePath() }/wp-json`,
        username: process.env.NUXT_WPAPI_USER,
        password: process.env.NUXT_WPAPI_PASS
    });

    inject('WPAPI', WPAPI)
}   