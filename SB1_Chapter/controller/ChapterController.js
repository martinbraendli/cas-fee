Guidebook.controller("ChapterController", function ($scope, ChapterModel, NoteModel, $location, $log) {

    var chapters;

    ChapterModel.getHTTPChapters({
        /* success callback */
        success: function (data) {
            $log.debug("getChapters success - start");
            chapters = data;

            for (var i in chapters) {
                var chapter = chapters[i];
                chapter.notes = NoteModel.getNotes(chapter.id);
            }
            $scope.chapters = chapters;
            $log.debug("getChapters success - done");
        },

        /* error callback */
        error: function (status) {
            $log.error("ERROR getHTTPChapters", status);
        }
    });


    /**
     * Delete Note
     */
    $scope.onDelete = function (chapterId, noteId) {
        var confirmDelete = confirm("Sicher???");
        if (confirmDelete) {
            $location.path("/deleteNote/" + chapterId + "/" + noteId);
        }
    };
});