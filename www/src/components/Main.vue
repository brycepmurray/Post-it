<template>
  <div class="body">
    <Navbar></Navbar>
    <div class="container-fluid">
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
                  <form action="submit">
                    <div class="form-row addPostForm">
                      <div class="form-group col">
                        <label for="postTitle">Title</label>
                        <input class="form-control" type="text" id="postTitle" placeholder="Post Title">
                      </div>
                      <div class="form-group col">
                        <label for="image">URL</label>
                        <input class="form-control" type="text" id="image" placeholder="Image URL">
                      </div>
                    </div>
                    <div class="form-row addPostForm">
                      <div class="form-group col">
                        <label for="postDesc">Description</label>
                        <textarea class="form-control" type="textarea" id="postDesc" placeholder="Post Description" rows="3"></textarea>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-success">Post</button>
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
<<<<<<< HEAD
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
=======
  import Navbar from './Navbar.vue'
  import Post from './Post.vue'
  import Comment from './Comment.vue'
  import lodash from 'lodash'
  export default {
    components: {
      Navbar,
      Post,
      Comment
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
      },
      orderedPosts: function () {
        var orderPosts = _.orderBy(this.posts, 'likes')
        return orderPosts.reverse()
      }
>>>>>>> 470281f539282804bc40285b0c867267dd7a62bc
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