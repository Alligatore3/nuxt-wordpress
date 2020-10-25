<template>
  <div class="container">
    <div v-if="spinner" class="spinner">
      <button class="mt-2 button is-fullwidth is-loading">LOADING</button>
    </div>
    <div v-else>
      <h1 class="title mt-2 is-2">Menu: </h1>
      <pre>{{ getMenu }}</pre>

      <h1 class="title mt-2 is-2">Pages: </h1>
      <pre>{{ getPages }}</pre>

      <h1 class="title mt-2 is-2">Posts: </h1>
      <pre>{{ getPosts }}</pre>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axiosManager from "@/mixins/axiosManager";

export default {
  mixins:[axiosManager],
  data: () => ({ spinner: true }),
  computed: {
    ...mapGetters('wordpress', ['getMenu', 'getPages', 'getPosts'])
  },
  mounted() {
    this.GET_PRIVATE_POSTS()
    Promise.all([
      this.MX_getMenuVoices(),
      this.MX_getPages(),
      this.MX_getPosts()
    ]).then( () => (this.spinner = false) )
  },
  methods: {
    async GET_PRIVATE_POSTS() {
      const response = await this.$WPAPI.posts().status('private')
      console.log('GET_PRIVATE_POSTS', response)
    }
  }
}
</script>

<style>
pre {
  max-width: 100%;
  padding: 2rem;
  background-color: aliceblue;
  white-space: pre-wrap;
}

.mt-2 {
  margin-top: 2rem;
}
</style>
