<template>
  <div class="container-fluid body">
    <div class="row d-flex justify-content-between navBar">
      <div class="col-lg-6 col-sm-12 logo">
        <img class="resizeLogo" src="../assets/images/IT-logo.png">
        <span class="title">Post-
          <b>IT</b>
        </span>
      </div>
      <div class="col-lg-6 col-sm-12 profileInfo">
        <button type="button" class="btn btn-dark" data-container="body" data-toggle="popover" data-placement="bottom" data-html="true" title="Sign In" data-content='<form action="submit"><input type=“text” name=“email” placeholder=email id=“”><input type=“text” name=“password” placeholder=password id=“”> <button class="btn btn-success" type="submit">Submit</button></form>'>
  Sign In
</button>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#registerModal">
    Register
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="registerModal">Register</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
         <form @submit.prevent="registerUser">
             <input type=“text” name=“name” placeholder=name id=“”>
             <input type=“text” name=“email” placeholder=bob@bob.com id=“”>
             <input type=“text” name=“password” placeholder=password id=“”>
             <input type=“text” name=“photoUrl” placeholder=ImageURL id=“”>
            </form>
        </div>
        <div class="modal-footer">
            <button type="submit" class="btn btn-success">Register</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        mounted() {
            $(function() {
                $('[data-toggle="popover"]').popover()
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navBar {
        max-height: 5rem;
        box-shadow: 6px 6px 8px 2px rgba(109, 106, 106, 0.993);
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
        background: rgb(220, 236, 250)
    }
</style>