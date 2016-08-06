//alert("hello");
/*
Key:
ed9b81546ae1719f151466d99894d11b

Secret:
ee7fec9299168f7a

var params = {
    method: 'flickr.photos.search',
    api_key: api_key,
    tags: search_tag,
    format: 'json',
    nojsoncallback: 1
}

'https://farm{farm}.staticflickr.com/{server}/{id}_{secret}.jpg'

*/
(function () {
    angular.module('myApp', [])
        .controller('myController', myController);


    myController.$inject = ['$scope', '$http']

    function myController($scope, $http) {

        $scope.results = [];
        $scope.isSearching = false;

        $scope.search = function () {
            alert("hello");
            $scope.isSearching = true;
            $http({
                method: 'GET',
                url: 'https://api.flickr.com/services/rest',
                params: {
                    method: 'flickr.photos.search',
                    api_key: 'ed9b81546ae1719f151466d99894d11b',
                    text: $scope.searchTerm,
                    format: 'json',
                    nojsoncallback: 1
                }
            }).success(function (data) {

                $scope.results = data;
                $scope.isSearching = false;
            }).error(function (error) {

                console.error(error);
                $scope.isSearching = true;
            });
        };
    }
})();
