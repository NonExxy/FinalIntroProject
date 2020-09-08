//need to append comment into comment section

$('#inputs').on('click', '#submit', function(e) {
    e.preventDefault();
    $('#commentSection').append('<div class="comment"> <img src="profilePic.png" alt="Default Picture"> <div class="commenterBar"> <h4>' + $("#displayName").val() + '</h4> <div class="userButtons"> <div class="editButton">Edit</div> <div class="deleteButton">Delete</div> </div> </div> <p class="content">' + $("#commentBox").val() + '</p> </div>');
});
//comments need one button to edit and one button to delete
$('#commentSection').on('click', '.editButton', function() {
    let commentContainer = $(this).parentsUntil('#commentSection');
    let content = $(commentContainer).children('.content');
    $(this).parent().parent().parent().append('<form class="editBar"><input type="text" class="editInput" maxlength="240" value="' + $(content).text() + '"> <input type="submit" class="editSubmit" value="Submit"> </form>');
});

$('#commentSection').on('click', '.editSubmit', function(e) {
    e.preventDefault();
    let comment = $(this).parentsUntil('#commentSection');
    let content = $(comment).children('.content');
    let editForm = $(this).parentsUntil('.comment');
    let editedComment = $(comment).children('.editInput').val();
    $(content).text(`${editedComment}`);
    $(editForm).remove();
});
//when edit button is hit, need a small text input and submit button in same div as comment, deletes self when submitted
$('#commentSection').on('click', '.deleteButton', function() {
    let commentContainer = $(this).parentsUntil('#commentSection');
    $(commentContainer).remove();
});