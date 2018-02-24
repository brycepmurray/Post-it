<template>
  <div class="body">
    <Navbar></Navbar>
    <div class="container-fluid">
      <div v-for="post in posts" class="row card-deck justify-content-around">
        <div class="col-lg-3 col-sm-12 card p-2">
          <h4>{{post.title}}</h4>
          <p>By: INSERT AUTHOR NAME |
            <i>Date Posted: {{post.createdAt}}</i>
          </p>
          <img class="card-img-top" :src="post.imgUrl">
          <div class="card-footer d-flex justify-content-between align-items-center">
            <!-- Need to wire in like/dislike icons into server -->
            <div>
              <i class="like far fa-thumbs-up fa-2x">
                <span class="voteBtns">20</span>
              </i>
              <i class="dislike far fa-thumbs-down fa-2x">
                <span class="voteBtns">20</span>
              </i>
            </div>
            <i class="commentBtn far fa-comment-alt fa-2x" data-toggle="modal" data-target="#commentModal"></i>
            <!-- COMMENT MODAL -->
            <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Leave a Comment</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form action="submit">
                        <!-- Need to make sure we wire this form up into the comment DB -->
                        <textarea name="comment" id="commentId" rows="3"></textarea>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-success">Add Comment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end comment modal -->
          </div>
          <div class="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in adipisci illum incidunt perferendis voluptates
              harum hic itaque ad. Expedita error ducimus cumque rerum soluta eligendi officia, provident aut delectus.</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <button class="btn-warning" type="submit">Show Comments</button>
            <!-- Need to wire delete button into server -->
            <i class="deletePost far fa-trash-alt fa-2x" @click="deletePost"></i>
          </div>
        </div>
        <div class="col-lg-3 col-sm-12 card p-2 ">
          <h4>Title:</h4>
          <p>By: Insert Author |
            <i>Date Posted: </i>
          </p>
          <img class="card-img-top" src="http://placehold.it/200X200" alt="">
          <div class="card-footer d-flex justify-content-between align-items-center">
            <!-- Need to wire in like/dislike icons into server -->
            <div>
              <i class="like far fa-thumbs-up fa-2x">
                <span class="voteBtns">20</span>
              </i>
              <i class="dislike far fa-thumbs-down fa-2x">
                <span class="voteBtns">20</span>
              </i>
            </div>
            <i class="commentBtn far fa-comment-alt fa-2x" data-toggle="modal" data-target="#commentModal"></i>
            <!-- COMMENT MODAL -->
            <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Leave a Comment</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form action="submit">
                        <!-- Need to make sure we wire this form up into the comment DB -->
                        <textarea name="comment" id="commentId" rows="3"></textarea> 
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-success">Add Comment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end comment modal -->
          </div>
          <div class="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in adipisci illum incidunt perferendis voluptates
              harum hic itaque ad. Expedita error ducimus cumque rerum soluta eligendi officia, provident aut delectus.</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <button class="btn-warning" type="submit">Show Comments</button>
            <!-- Need to wire delete button into server -->
            <i class="deletePost far fa-trash-alt fa-2x" @click="deletePost"></i>
          </div>
        </div>
        <div class="col-lg-3 col-sm-12 card p-2 ">
          <h4>Title:</h4>
          <p>By: Insert Author |
            <i>Date Posted: </i>
          </p>
          <img class="card-img-top" src="http://placehold.it/200X200" alt="">
          <div class="card-footer d-flex justify-content-between align-items-center">
            <!-- Need to wire in like/dislike icons into server -->
            <div>
              <i class="like far fa-thumbs-up fa-2x">
                <span class="voteBtns">20</span>
              </i>
              <i class="dislike far fa-thumbs-down fa-2x">
                <span class="voteBtns">20</span>
              </i>
            </div>
            <i class="commentBtn far fa-comment-alt fa-2x" data-toggle="modal" data-target="#commentModal"></i>
            <!-- COMMENT MODAL -->
            <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Leave a Comment</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form action="submit">
                        <!-- Need to make sure we wire this form up into the comment DB -->
                        <textarea name="comment" id="commentId" rows="3"></textarea> 
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-success">Add Comment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end comment modal -->
          </div>
          <div class="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in adipisci illum incidunt perferendis voluptates
              harum hic itaque ad. Expedita error ducimus cumque rerum soluta eligendi officia, provident aut delectus.</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <button class="btn-warning" type="submit">Show Comments</button>
            <!-- Need to wire delete button into server -->
            <i class="deletePost far fa-trash-alt fa-2x" @click="deletePost"></i>
          </div>
        </div>
      </div>
      <div class="row card-deck justify-content-around">
        <div class="col-lg-3 col-sm-12 card p-2">
          <h4>Title:</h4>
          <p>By: Insert Author |
            <i>Date Posted: </i>
          </p>
          <img class="card-img-top" src="http://placehold.it/200X200" alt="">
          <div class="card-footer d-flex justify-content-between align-items-center">
            <!-- Need to wire in like/dislike icons into server -->
            <div>
              <i class="like far fa-thumbs-up fa-2x">
                <span class="voteBtns">20</span>
              </i>
              <i class="dislike far fa-thumbs-down fa-2x">
                <span class="voteBtns">20</span>
              </i>
            </div>
            <i class="commentBtn far fa-comment-alt fa-2x" data-toggle="modal" data-target="#commentModal"></i>
            <!-- COMMENT MODAL -->
            <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Leave a Comment</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form action="submit">
                        <!-- Need to make sure we wire this form up into the comment DB -->
                        <textarea name="comment" id="commentId" rows="3"></textarea> 
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-success">Add Comment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end comment modal -->
          </div>
          <div class="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in adipisci illum incidunt perferendis voluptates
              harum hic itaque ad. Expedita error ducimus cumque rerum soluta eligendi officia, provident aut delectus.</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <button class="btn-warning" type="submit">Show Comments</button>
            <!-- Need to wire delete button into server -->
            <i class="deletePost far fa-trash-alt fa-2x" @click="deletePost"></i>
          </div>
        </div>
        <div class="col-lg-3 col-sm-12 card p-2 ">
          <h4>Title:</h4>
          <p>By: Insert Author |
            <i>Date Posted: </i>
          </p>
          <img class="card-img-top" src="http://placehold.it/200X200" alt="">
          <div class="card-footer d-flex justify-content-between align-items-center">
            <!-- Need to wire in like/dislike icons into server -->
            <div>
              <i class="like far fa-thumbs-up fa-2x">
                <span class="voteBtns">20</span>
              </i>
              <i class="dislike far fa-thumbs-down fa-2x">
                <span class="voteBtns">20</span>
              </i>
            </div>
            <i class="commentBtn far fa-comment-alt fa-2x" data-toggle="modal" data-target="#commentModal"></i>
            <!-- COMMENT MODAL -->
            <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Leave a Comment</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form action="submit">
                        <!-- Need to make sure we wire this form up into the comment DB -->
                        <textarea name="comment" id="commentId" rows="3"></textarea> 
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-success">Add Comment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end comment modal -->
          </div>
          <div class="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in adipisci illum incidunt perferendis voluptates
              harum hic itaque ad. Expedita error ducimus cumque rerum soluta eligendi officia, provident aut delectus.</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <button class="btn-warning" type="submit">Show Comments</button>
            <!-- Need to wire delete button into server -->
            <i class="deletePost far fa-trash-alt fa-2x" @click="deletePost"></i>
          </div>
        </div>
        <div class="col-lg-3 col-sm-12 card p-2 ">
          <h4>Title:</h4>
          <p>By: Insert Author |
            <i>Date Posted: </i>
          </p>
          <img class="card-img-top" src="http://placehold.it/200X200" alt="">
          <div class="card-footer d-flex justify-content-between align-items-center">
            <!-- Need to wire in like/dislike icons into server -->
            <div>
              <i class="like far fa-thumbs-up fa-2x">
                <span class="voteBtns">20</span>
              </i>
              <i class="dislike far fa-thumbs-down fa-2x">
                <span class="voteBtns">20</span>
              </i>
            </div>
            <i class="commentBtn far fa-comment-alt fa-2x" data-toggle="modal" data-target="#commentModal"></i>
            <!-- COMMENT MODAL -->
            <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Leave a Comment</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form action="submit">
                        <!-- Need to make sure we wire this form up into the comment DB -->
                        <textarea name="comment" id="commentId" rows="3"></textarea> 
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-success">Add Comment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end comment modal -->
          </div>
          <div class="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in adipisci illum incidunt perferendis voluptates
              harum hic itaque ad. Expedita error ducimus cumque rerum soluta eligendi officia, provident aut delectus.</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <button class="btn-warning" type="submit">Show Comments</button>
            <!-- Need to wire delete button into server -->
            <i class="deletePost far fa-trash-alt fa-2x" @click="deletePost"></i>
          </div>
        </div>
      </div>
      <div class="row card-deck justify-content-around">
        <div class="col-lg-3 col-sm-12 card p-2">
          <h4>Title:</h4>
          <p>By: Insert Author |
            <i>Date Posted: </i>
          </p>
          <img class="card-img-top" src="http://placehold.it/200X200" alt="">
          <div class="card-footer d-flex justify-content-between align-items-center">
            <!-- Need to wire in like/dislike icons into server -->
            <div>
              <i class="like far fa-thumbs-up fa-2x">
                <span class="voteBtns">20</span>
              </i>
              <i class="dislike far fa-thumbs-down fa-2x">
                <span class="voteBtns">20</span>
              </i>
            </div>
            <i class="commentBtn far fa-comment-alt fa-2x" data-toggle="modal" data-target="#commentModal"></i>
            <!-- COMMENT MODAL -->
            <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Leave a Comment</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form action="submit">
                        <!-- Need to make sure we wire this form up into the comment DB -->
                        <textarea name="comment" id="commentId" rows="3"></textarea> 
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-success">Add Comment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end comment modal -->
          </div>
          <div class="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in adipisci illum incidunt perferendis voluptates
              harum hic itaque ad. Expedita error ducimus cumque rerum soluta eligendi officia, provident aut delectus.</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <button class="btn-warning" type="submit">Show Comments</button>
            <!-- Need to wire delete button into server -->
            <i class="deletePost far fa-trash-alt fa-2x" @click="deletePost"></i>
          </div>
        </div>
        <div class="col-lg-3 col-sm-12 card p-2 ">
          <h4>Title:</h4>
          <p>By: Insert Author |
            <i>Date Posted: </i>
          </p>
          <img class="card-img-top" src="http://placehold.it/200X200" alt="">
          <div class="card-footer d-flex justify-content-between align-items-center">
            <!-- Need to wire in like/dislike icons into server -->
            <div>
              <i class="like far fa-thumbs-up fa-2x">
                <span class="voteBtns">20</span>
              </i>
              <i class="dislike far fa-thumbs-down fa-2x">
                <span class="voteBtns">20</span>
              </i>
            </div>
            <i class="commentBtn far fa-comment-alt fa-2x" data-toggle="modal" data-target="#commentModal"></i>
            <!-- COMMENT MODAL -->
            <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Leave a Comment</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form action="submit">
                        <!-- Need to make sure we wire this form up into the comment DB -->
                        <textarea name="comment" id="commentId" rows="3"></textarea> 
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-success">Add Comment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end comment modal -->
          </div>
          <div class="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in adipisci illum incidunt perferendis voluptates
              harum hic itaque ad. Expedita error ducimus cumque rerum soluta eligendi officia, provident aut delectus.</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <button class="btn-warning" type="submit">Show Comments</button>
            <!-- Need to wire delete button into server -->
            <i class="deletePost far fa-trash-alt fa-2x" @click="deletePost"></i>
          </div>
        </div>
        <div class="col-lg-3 col-sm-12 card p-2 ">
          <h4>Title:</h4>
          <p>By: Insert Author |
            <i>Date Posted: </i>
          </p>
          <img class="card-img-top" src="http://placehold.it/200X200" alt="">
          <div class="card-footer d-flex justify-content-between align-items-center">
            <!-- Need to wire in like/dislike icons into server -->
            <div>
              <i class="like far fa-thumbs-up fa-2x">
                <span class="voteBtns">20</span>
              </i>
              <i class="dislike far fa-thumbs-down fa-2x">
                <span class="voteBtns">20</span>
              </i>
            </div>
            <i class="commentBtn far fa-comment-alt fa-2x" data-toggle="modal" data-target="#commentModal"></i>
            <!-- COMMENT MODAL -->
            <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Leave a Comment</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form action="submit">
                        <!-- Need to make sure we wire this form up into the comment DB -->
                        <textarea name="comment" id="commentId" rows="3"></textarea> 
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-success">Add Comment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end comment modal -->
          </div>
          <div class="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in adipisci illum incidunt perferendis voluptates
              harum hic itaque ad. Expedita error ducimus cumque rerum soluta eligendi officia, provident aut delectus.</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <button class="btn-warning" type="submit">Show Comments</button>
            <!-- Need to wire delete button into server -->
            <i class="deletePost far fa-trash-alt fa-2x" @click="deletePost"></i>
          </div>
        </div>
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
  export default {
    components: { Navbar },
    methods: {
    getPosts(user){
      this.$store.dispatch('getPosts', user)
    },
    addPost(){
      this.$store.dispatch('addPost', this.newPostData)
    },
    
    },
    computed: {
      users(){
        return this.$store.state.users
      },
      posts() {
        return this.$store.state.posts
      },
      comments(){
        return this.$store.state.comments
      }
    }
  }
    import Navbar from './Navbar.vue'
    import Post from './Post.vue'
    import Comment from './Comment.vue'
    export default {
        components: {
            Navbar,
            Post,
            Comment
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
    
    .card {
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
    
    textarea {
        width: 100%
    }
</style>