<template>
  <div class="body">
    <Navbar></Navbar>

    <h1>{{activeUser.name}}</h1>

    <div class="users">
      <div class="user" v-for="user in users" @click="setActiveUser(user)">
        <p>{{user.name}}</p>
      </div>
    </div>
    <div class="container-fluid fillPage">
      <div class="row justify-content-around">
        <Post v-for="post in orderedPosts" :post="post"></Post>
      </div>
      <div class="row flex-row-reverse">
        <div class="col-lg-2 col-sm-2 addPostCol">
          <button class="btn btn-dark addPost" data-toggle="modal" data-target="#addPost">
            <i class="fas fa-plus fa-4x"></i>
          </button>
          <!-- Modal -->
          <div class="modal fade" id="addPost" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Add a Post</h5>
                  <button type="button" class="close" data-dismiss="modal">
                    <span>&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="addPost">
                    <div class="form-row addPostForm">
                      <div class="form-group col">
                        <label for="postTitle">Title</label>
                        <input class="form-control" type="text" id="postTitle" placeholder="Post Title" v-model="newPostData.title">
                      </div>
                      <div class="form-group col">
                        <label for="image">URL</label>
                        <input class="form-control" type="text" id="image" placeholder="Image URL" v-model="newPostData.imgUrl">
                      </div>
                    </div>
                    <div class="form-row addPostForm">
                      <div class="form-group col">
                        <label for="postDesc">Description</label>
                        <textarea class="form-control" type="textarea" id="postDesc" placeholder="Post Description" rows="3" v-model="newPostData.desc"></textarea>
                      </div>
                    </div>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-success">Post</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>






  </div>
</template>

<script>
  import Navbar from './Navbar.vue'
  import Post from './Post.vue'
  import lodash from 'lodash'
  export default {
    mounted() {
      this.$store.dispatch('getUsers')
    },
    data() {
      return {
        newPostData: {
          userId: "5a90a16cc0112e197c234788",
          userName: ""
        }
      }
    },
    components: {
      Navbar,
      Post
    },
    methods: {
      getPosts(user) {
        this.$store.dispatch('getPosts', user)
      },
      addPost(newPostData) {
        newPostData.userId = this.activeUser._id
        newPostData.userName = this.activeUser.name
        this.$store.dispatch('addPost', this.newPostData)
        console.log("this is before the index:", this.newPostData)
      },
      setActiveUser(user) {
        this.$store.dispatch('setUser', user)
      }
    },
    computed: {
      activeUser() {
        return this.$store.state.user
      },
      users() {
        return this.$store.state.users
      },
      posts() {
        return this.$store.state.posts
      },
      comments() {
        return this.$store.state.comments
      },
      orderedPosts: function () {
        var orderPosts = _.orderBy(this.posts, ['likes', 'dislikes'], ['asc', 'desc'])
        return orderPosts.reverse()
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

  .fillPage {
    min-height: 100vh;
  }

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

  .addPostForm {
    text-align: left
  }
</style>