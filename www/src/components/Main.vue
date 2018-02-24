<template>
  <div class="body">
    <Navbar></Navbar>
    <div class="container-fluid">
      <div class="row justify-content-around">
        <Post v-for="post in posts" :post="post"></Post>
      </div>
      <div class="row flex-row-reverse">
        <div class="col-lg-2 col-sm-2 addPostCol">
          <button class="btn btn-dark addPost" type="submit">
            <i class="fas fa-plus fa-4x"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Navbar from './Navbar.vue'
    import Post from './Post.vue'
    export default {
        components: {
            Navbar,
            Post
        },
        methods: {
            getPosts(user) {
                this.$store.dispatch('getPosts', user)
            },
            addPost() {
                this.$store.dispatch('addPost', this.newPostData)
            },
        },
        computed: {
            users() {
                return this.$store.state.users
            },
            posts() {
                return this.$store.state.posts
            },
            comments() {
                return this.$store.state.comments
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .body {
        background: linear-gradient(rgba(0, 255, 0, 0.5), rgba(0, 255, 0, 0.5)), url("../assets/images/numberbg.jpg");
        background-size: contain;
        background-attachment: fixed;
    }
    /* .card {
    margin-top: 2.5rem;
    box-shadow: 6px 6px 8px 2px rgba(109, 106, 106, 0.993);
    border-radius: 20px
  }

  .deletePost {
    color: red;
    opacity: .3;
    transition: all .3s linear;
  }

  .deletePost:hover {
    opacity: 1;
  }

  .like {
    color: grey;
    opacity: .5;
    transition: all .3s linear;
    margin-right: .5rem;
  }

  .like:hover {
    opacity: 1;
    color: royalblue;
  }

  .dislike {
    color: grey;
    opacity: .5;
    transition: all .3s linear;
    margin-left: .5rem;
  }

  .dislike:hover {
    opacity: 1;
    color: red;
  }

  .commentBtn {
    color: grey;
    opacity: .5;
    transition: all .3s linear;
    margin-left: .5rem;
  }

  .commentBtn:hover {
    opacity: 1;
    color: green;
  }

  .voteBtns {
    font-size: 24px;
  } */
    
    .addPost {
        color: aliceblue;
        opacity: .8;
        transition: all .3s linear;
        border-radius: 20px
    }
    
    .addPost:hover {
        opacity: 1;
        box-shadow: 6px 6px 8px 2px rgba(109, 106, 106, 0.993);
    }
    
    .addPostCol {
        margin-left: .5rem;
        text-align: end;
        padding-right: 4.4rem;
        padding-bottom: 1rem;
        padding-top: 1rem;
    }
    /* textarea {
    width: 100%
  } */
</style>