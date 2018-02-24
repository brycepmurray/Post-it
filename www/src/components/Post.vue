<template>
    <div>
            <div class="col-lg-3 col-sm-12 card p-2">
                    <h4>Title:</h4>
                    <p>By: Insert Author | <i>Date Posted: </i></p>
                    <img class="card-img-top" src="http://placehold.it/200X200" alt="">
                    <div class="card-footer d-flex justify-content-between align-items-center">
                      <!-- Need to wire in like/dislike icons into server -->
                      <div>
                          <i class="like far fa-thumbs-up fa-2x"><span class="voteBtns">20</span></i>
                        <i class="dislike far fa-thumbs-down fa-2x"><span class="voteBtns">20</span></i>
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
                        <!-- end comment modal -->
                    </div>
                    <div class="card-body">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in adipisci illum incidunt perferendis voluptates
                        harum hic itaque ad. Expedita error ducimus cumque rerum soluta eligendi officia, provident aut delectus.</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                     <!-- Button trigger modal -->
<button type="button" class="btn btn-info" data-toggle="modal" data-target="#commentModal">
        Launch demo modal
      </button>
      
      <!-- Modal -->
      <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="commentModalTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="commentModalTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
                      <!-- Need to wire delete button into server -->
                      <i class="deletePost far fa-trash-alt fa-2x" @click="deletePost"></i>
                    </div>
                  </div>
    </div>
</template>
<script>
</script>
<style>

</style>