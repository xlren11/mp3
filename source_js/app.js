var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/gallery', {
            templateUrl: './partials/gallery.html',
            controller: 'galleryCtrl'
        })
        .when('/list', {
            templateUrl: './partials/list.html',
            controller: 'listCtrl'
        })
        .when('/details/:movieRank', {
            templateUrl: './partials/details.html',
            controller: 'detailCtrl'
        })
        .otherwise ({
            redirectTo: '/gallery'
        });
});


