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
  }
}
</script>

<style>
#app {

}
</style>
