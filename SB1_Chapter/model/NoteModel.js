Guidebook.service("NoteModel", function ($log) {

    this.getChapter = function (chapterId) {
        return JSON.parse(window.localStorage.getItem(chapterId)) || {id: chapterId, notes: []};
    };

    this.getNotes = function (chapterId) {
        var chapter = this.getChapter(chapterId);
        return chapter.notes;
    };

    this.addNote = function (chapterId, noteContent) {
        var note = {
            id: new Date(),
            content: noteContent
        };

        var chapter = this.getChapter(chapterId);
        chapter.notes.push(note);
        window.localStorage.setItem(chapterId, JSON.stringify(chapter));
    };

    this.deleteNote = function (chapterId, noteId) {
        $log.log("deleteNote: ", arguments);

        var chapter = this.getChapter(chapterId);
        if (!chapter || !chapter.notes) {
            $log.log("Chapter not found");
            return;
        }

        $log.log(chapter.notes.length);
        var deleteIndex;
        for (var i in chapter.notes) {
            if (chapter.notes[i].id === noteId) {
                deleteIndex = i;
            }
        }
        chapter.notes.splice(deleteIndex, 1);
        $log.log(chapter.notes.length);

        window.localStorage.setItem(chapterId, JSON.stringify(chapter));

    };
});