<template>
  <div class="col-lg-3 col-sm-12 card p-2">
    <h4>{{post.title}}</h4>
    <!-- v-if="post.userId == user.id" NEED TO LINK POST USERID TO USER.NAME -->
    <p>By: INSERT AUTHOR NAME |
      <i>Date Posted: {{post.createdAt}}</i>
    </p>
    <img class="card-img-top" :src="post.imgUrl" alt="">
    <div class="card-footer d-flex justify-content-between align-items-center">
      <!-- Need to wire in like/dislike icons into server -->
      <div>
        <i class="like far fa-thumbs-up fa-2x" @click="addLike(post)">
          <span class="voteBtns">{{post.likes}}</span>
        </i>
        <i class="dislike far fa-thumbs-down fa-2x" @click="dislike(post)">
          <span class="voteBtns">{{post.dislikes}}</span>
        </i>
      </div>
      <i class="commentBtn far fa-comment-alt fa-2x" data-toggle="modal" data-target="#commentModal"></i>
      <!-- COMMENT MODAL -->
      <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Leave a Comment</h5>
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
      <!-- end comment modal -->
    </div>
    <div class="card-body">
      <p>{{post.desc}}</p>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-info" data-toggle="modal" data-target="#showCommentsModal">
        Show Comments
      </button>

      <!-- Show Comments Modal -->
      <div class="modal fade" id="showCommentsModal" tabindex="-1" role="dialog" aria-labelledby="showCommentsModalTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="showCommentsModalTitle">Comments</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <Comment v-for="comment in comments" :comment="comment" :key="comment._id"></Comment>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Need to wire delete button into server -->
      <!-- <i class="deletePost far fa-trash-alt fa-2x" @click="deletePost"></i> -->
    </div>
  </div>
</template>
<script>
  import Comment from './Comment.vue'
  export default {
    data(){
      return {

      }
    },
    components: {
      Comment
    },
    props: ["post"],
    methods: {
      addLike(post){
        this.$store.dispatch('addLike', post)
      },
      dislike(post){
        this.$store.dispatch('dislike', post)
      },
      getUsers(user){
        this.$store.dispatch('getUsers', user)
      }
    },
    computed: {
      users() {
        return this.$store.state.user
      },
      comments() {
        var allComments = this.$store.state.comments
        var postComments = allComments.filter(comment => comment.postId == this.post._id)
        return postComments
      }
    }
  }
</script>
<style>
  .card {
    margin-top: 2.5rem;
    margin-right: .5rem;
    margin-left: .5rem;
    box-shadow: 6px 6px 8px 2px rgba(109, 106, 106, 0.993);
    border-radius: 20px
  }

  .card-img-top {
    align-self: center;
    max-height: 300px;
    max-width: 300px;
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

  textarea {
    width: 100%
  }
</style>