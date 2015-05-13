var Guidebook = angular.module("Guidebook", ['ngRoute', 'ngAnimate'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            controller: 'ChapterController',
            templateUrl: 'view/chapter.tpl.html'
        }).when('/addNote/:chapterId', {
            controller: 'AddNoteController',
            templateUrl: 'view/addNote.tpl.html'
        }).when('/deleteNote/:chapterId/:noteId', {
            controller: 'DeleteNoteController',
            templateUrl: 'view/empty.tpl.html'
        });
    });