Guidebook.service("ChapterModel", function ($http, $log) {

    this.getHTTPChapters = function (callback) {

        return $http.get("data/chapters.json")
            /* success */
            .success(function (data) {
                callback.success(data);
            })
            /* error */
            .error(function (data, status) {
                callback.error(status);
            });


    };

});

 