<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    this.$store.dispatch('getPosts')
    this.$store.dispatch('getComments')
  }
}
</script>

<style>
#app {

}
</style>
