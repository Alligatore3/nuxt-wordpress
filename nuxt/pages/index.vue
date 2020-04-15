<template>
  <div class="container">

  </div>
</template>

<script>
import axiosManager from "@/mixins/axiosManager";

export default {
  mixins:[axiosManager],
  mounted() {
    this.AXIOS_getMenuVoices()
    this.AXIOS_getPages()
    this.AXIOS_getPosts()
  }
}
</script>
