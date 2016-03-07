/* Sample Controller */

app.controller('galleryCtrl', ['$scope','$http', function($scope, $http){
    $http.get('./data/imdb250.json').success(function(data) {
        $scope.movies = data;
    });
    $scope.genreOption = 'All';
    $scope.order = 'rank';
    $scope.genres = [
        { "name": 'All'},
        { "name": 'Action'},
        { "name": 'Adventure'},
        { "name": "Crime"},
        { "name": "Comedy"},
        { "name": "Drama"},
        { "name": "Musical"},
        { "name": "Mystery"},
        { "name": "Romance"},
        { "name": "Sci-Fi"},
        { "name": "Thriller"},
        { "name": "Western"}
    ];
    $scope.clic = function(genre_type) {
        $scope.genreOption = genre_type;
        console.log($scope.genreOption);
    }
    $scope.select = function(genreOption){
        var temp = [];
        if (genreOption == 'All') {
            return $scope.movies;
        }
        for(var entry in $scope.movies){
            for(var i=0; i<$scope.movies[entry].genre.length; i++){
                if(genreOption == $scope.movies[entry].genre[i]){
                    temp.push($scope.movies[entry]);
                    break;
                }
            }
        }
        return temp;
    };
}]);

app.controller('listCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('./data/imdb250.json').success(function(data) {
        $scope.movies = data;
    });
    $scope.order = 'rank';
    //$scope.fields = '$';
    $scope.query = '';
    $scope.reverse = false;
}]);

app.controller('detailCtrl', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams){
        $scope.rank = $routeParams.movieRank;
        if ($scope.rank < 1) {
            $scope.rank = 250;
        }
        if ($scope.rank > 250) {
            $scope.rank = 1;
        }
        $http.get('./data/imdb250.json').success(function(data){
            $scope.movies = data;
            for(var entry in $scope.movies){
                if($scope.movies[entry].rank == $scope.rank){
                    $scope.movie = $scope.movies[entry];
                    break;
                }
            }
        });
    }
]);





