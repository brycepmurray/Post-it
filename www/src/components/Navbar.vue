<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-between navBar">
      <div class="col-lg-6 col-sm-12 logo">
        <img class="resizeLogo" src="../assets/images/IT-logo.png"> 
        <span class="title">Post-<b>IT</b></span>
      </div>
      <div class="col-lg-6 col-sm-12 profileInfo">
        <h3>user profile information</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navBar{
    max-height: 5rem;
    box-shadow: 6px 6px 8px 2px rgba(109, 106, 106, 0.993);
  }
  .logo{
    align-items: center;
    display: flex;
  }
  .resizeLogo {
    height: 100%;
    max-width: 5rem;
  }
  .profileInfo{
    justify-content: flex-end;
    display: flex;
    align-items: center
  }
  .title{
    font-size: 35px;
    align-self: center;
  }
  *{
    background: rgb(220, 236, 250)
  }
</style>