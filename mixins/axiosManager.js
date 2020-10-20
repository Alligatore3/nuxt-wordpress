import CONFIG from '@/wordpress.config'
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('wordpress', ['SET_MENU', 'SET_PAGES', 'SET_POSTS']),
    /**
     * @description This fetch from API the menu voices and sets in VUEX
     * We map the response to avoid 1 call for fetching HOMEPAGE ID
     * but at the same time we filter the menuvoice.
     */
    async MX_getMenuVoices() {
      let menuVoices = await this.$axios.$get(`${ CONFIG.getFullPath() }/menu`)
      menuVoices = menuVoices.map(voice => ({
        ...voice,
        showInMenu: voice.title !== 'HOMEPAGE'
      }))

      this.SET_MENU(menuVoices)
    },
    async MX_getPages() {
      const pages = await this.$axios.$get(`${ CONFIG.getFullPath() }/pages`)

      this.SET_PAGES(pages)
      return pages
    },
    async MX_getPosts() {
      const posts = await this.$axios.$get(`${ CONFIG.getFullPath() }/posts`)

      this.SET_POSTS(posts)
      return posts
    },
  }
}
