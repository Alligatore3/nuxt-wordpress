export default {
  protocol: 'http',
  host: 'mattiazanella.it/develop/wordpress-nuxt/wordpress',
  port: false,
  basePath: '/',
  path_API: 'wp-json/wp/v2',
  /**
   * @description Thanks to IBM, defining URL structure by envs.
   * @see https://www.ibm.com/support/knowledgecenter/SSGMCP_5.2.0/com.ibm.cics.ts.internet.doc/topics/dfhtl_uricomp.html
   */
  getFullBasePath() {
    const port = this.port ? `:${this.port}` : ''
    return `${ this.protocol }://${ this.host }${ port }`
  },
  getFullAPIPath() {
    return `${ this.getFullBasePath() }${ this.basePath }${ this.path_API }`
  }
}
