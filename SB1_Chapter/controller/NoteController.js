Guidebook.controller("AddNoteController", function ($scope, $routeParams, NoteModel, $location) {
    var chapterId = $routeParams.chapterId;

    $scope.createNote = function () {
        NoteModel.addNote(chapterId, $scope.note.content);
        $location.path("/");
    }
});

Guidebook.controller("DeleteNoteController", function ($scope, $routeParams, NoteModel, $location) {
    var chapterId = $routeParams.chapterId;
    var noteId = $routeParams.noteId;

    NoteModel.deleteNote(chapterId, noteId);
    $location.path("/");
});