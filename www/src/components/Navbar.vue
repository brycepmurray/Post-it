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
        <button type="button" class="btn btn-dark" data-container="body" data-toggle="popover" data-placement="bottom" data-html="true"
          title="Sign In" data-content='<form @submit="login">
            <input v-model="loginForm.email" type=“text” name=“email” placeholder=email id=“”>
            <input v-model="loginForm.password" type=“text” name=“password” placeholder=password id=“”> 
            <button class="btn btn-success" type="submit">
                Sign In
            </button>
            </form>'>Sign In</button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#registerModal">
                Register
            </button>
        </div>

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
              <form @submit="createUser">
                <input v-model="registerForm.name" type=“text” name=“name” placeholder=name id=“”>
                <input v-model="registerForm.email" type=“text” name=“email” placeholder=bob@bob.com id=“”>
                <input v-model="registerForm.password" type=“text” name=“password” placeholder=password id=“”>
                <input v-model="registerForm.photoUrl" type=“text” name=“photoUrl” placeholder=ImageURL id=“”>
                <div class="modal-footer">
                  <button type="submit" @submit="createUser" class="btn btn-success">Register</button>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </form>
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
      $(function () {
        $('[data-toggle="popover"]').popover()
      })
    },
    data() {
      return {
        loginForm: {
          email: "",
          password: "",
        },
        registerForm: {
          name: "",
          email: "",
          password: "",
          photoUrl: ""
        }
      }
    },
    methods: {
      createUser() {
        console.log("Am I Here?", this.registerForm)
        this.$store.dispatch('createUser', this.registerForm)
      },

      login() {
        this.$store.dispatch('login', this.loginForm)
      },
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

</style>
