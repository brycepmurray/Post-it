<template>
    <div>
        <p>{{comment}}</p>
        <!-- Edit Description Tag -->
        <i class="far fa-edit" data-toggle="modal" data-target="#editCommentModal"></i>
        <!-- Add Reply Tag-->

        <!-- Delete Comment Tag -->
        <i class="far fa-trash-alt" v-if="getUser().id"  @click="deleteComment"></i>
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
                         <input type=“text” name=“description” v-model="activeComment" id=“”>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success">Edit</button>
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
              </div>
            </div>
            <i class="far fa-edit" data-toggle="modal" data-target="#editCommentModal"></i>
            <!-- MIGHT NEED TO COME BACK AND ADD ICON IN AN ANCOR TAG -->
            
            <!-- Modal -->
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
                       <input type=“text” name=“description” v-model="activeComment" id=“”>
                      </form>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-success">Edit</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
              </div>
            </div>
          </div>


    </div>
</template>

<script>
    export default {
        computed: {
            comments() {
                return this.$store.state.comments
            },
        },
        props: ["comment"],
        data() {
            return {
                activeComment = this.comment.description,
                showDeleteIcon = false
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
                this.$store.dispatch("addReply", formData)
            }

        }
    }
</script>

<style>

</style>