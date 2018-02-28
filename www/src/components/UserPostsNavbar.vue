<template>
  <div class="container-fluid body">
    <div class="row d-flex justify-content-between navBar">
      <div class="col-lg-3 col-sm-12 logo">
        <img class="resizeLogo" src="../assets/images/IT-logo.png">
        <span class="title">Post-
          <b>IT</b>
        </span>
      </div>
      <div class="col-lg-9 col-sm-12">
        <div class="row align-items-center back-btn">
          <div class="col text-center">
            <router-link :to="{name:'Main'}"><img src="http://www.clker.com/cliparts/p/m/J/i/r/a/back-arrow-hi.png" height="60px" width="60px">

            </router-link>
          </div>
          <div class="col userName d-block">
            <p>Hello {{user.name}} </p>
            <p>You currently have {{posts.length}} post{{posts.length > 1 ? "s" :""}}!</p>
          </div>
          
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    props: [
      "user",
      "posts"
    ],
    data() {
      return {

      }

    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navBar {
    max-height: 5rem;
    box-shadow: 0px 0px 3px 6px rgba(121, 119, 119, 0.363)
  }

  .logo {
    align-items: center;
    display: flex;
  }

  .resizeLogo {
    height: 100%;
    max-width: 5rem;
    height: 5rem;
    width: 5rem
  }

  .profileInfo {
    justify-content: flex-end;
    display: flex;
    align-items: center
  }

  .title {
    font-size: 35px;
    align-self: center;
  }

  .body {
    background: rgba(3, 3, 3, 0.85);
    color: aliceblue;
  }

  .modal-title {
    color: black;
  }

  .userName {
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .back-btn a {
    color: white;
  }
</style>