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
    this.$store.dispatch('authenticate')
    // this.$store.dispatch('getComments')
    // this.$store.dispatch('getUsers')
  }
}
</script>

<style>
i{
  user-select: none;
}
</style>
