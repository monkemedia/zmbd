<template>
  <div id="app">
    <header-default />

    <div class="container">
      <router-view />
    </div>
    
  </div>
</template>

<script>
import HeaderDefault from '@/components/HeaderDefault.vue'

export default {
  name: 'App',

  components: {
    HeaderDefault
  },

  mounted () {
    this.$store.dispatch('fetchGenres')
  }
  
}
</script>

<style>

</style>
