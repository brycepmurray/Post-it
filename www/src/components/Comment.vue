<template>
    <div>
        <p>{{comment.desc}}</p>
        <!-- Edit Description Tag -->
        <i class="far fa-edit" data-toggle="modal" data-target="#editCommentModal"></i>
        <!-- Add Reply Tag-->
        <i class="fas fa-plus" data-toggle="modal" data-target="#addReplyModal"></i>
        <!-- MIGHT NEED TO COME BACK AND ADD ICON IN AN ANCOR TAG -->
        <!-- Delete Comment Tag -->
        <!-- <i class="far fa-trash-alt" v-if="activeUserId === comment.userId" @click="deleteComment"></i> -->
        <i class="far fa-trash-alt" @click="deleteComment"></i>
              <!-- MIGHT NEED TO COME BACK AND ADD ICON IN AN ANCOR TAG -->
              
              <!--Edit Modal -->
              <div class="modal fade" id="editCommentModal" tabindex="-1" role="dialog" aria-labelledby="editCommentModal" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="editCommentModal"></h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                     <form action="submit">
                         <input type=“text” class="form-control" name=“description” v-model="activeComment" id=“”>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success">Edit</button>
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
              </div>
            </div>
            
            
            <!-- Reply Modal -->
            <div class="modal fade" id="addReplyModal" tabindex="-1" role="dialog" aria-labelledby="addReplyModalTitle" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="addReplyModalTitle"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                <div class="modal-body">
                    <form action="submit">
                        <!-- Need to make sure we wire this form up into the comment DB -->
                        <textarea name="comment" id="commentId" rows="3" v-model="newDescription"></textarea>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-success" @click="addReply">Add Reply</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                </div>
              </div>
            </div>
          </div>


    </div>
</template>

<script>
    export default {
        name: 'Comment',
        computed: {
            // activeUserId() {
            //     return this.$store.state.user._id
            // }
        },
        props: ["comment"],
        data() {
            return {
                activeComment: this.comment.description,
                showDeleteIcon: false,
                newDescription: ""
            }
        },
        methods: {
            updateComment() {
                this.$store.dispatch("updateComment", this.activeComment)
            },
            deleteComment() {
                this.$store.dispatch("deleteComment", this.comment_id)
            },
            addReply() {
                this.$store.dispatch("addReply", this.newDescription)
            }

        }
    }
</script>

<style>
    textarea {
        width: 100%;
    }
</style>