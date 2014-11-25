angular.module('luisa-proyecto').controller('firstCtrl', firstCtrl);

firstCtrl.$inject = ['$scope', '$state', '$firebase', 'ngDialog'];

function firstCtrl($scope, $state, $firebase, ngDialog){

  $scope.newReleases = $firebase(new Firebase('https://cms-luisa.firebaseio.com/peliculas/New Releases')).$asArray();
  $scope.popular = $firebase(new Firebase('https://cms-luisa.firebaseio.com/peliculas/Popular')).$asArray();
  $scope.recentlyAdded = $firebase(new Firebase('https://cms-luisa.firebaseio.com/peliculas/Recently Added')).$asArray();
  $scope.tvShows = $firebase(new Firebase('https://cms-luisa.firebaseio.com/peliculas/TV Shows')).$asArray();

  $scope.selectedMovie = {};
  $scope.starsCounter = 0;
  $scope.numberOfStars = [];

  $scope.getInfo = function(index, category){
    $scope.numberOfStars = [];
    var surrogate = $scope.newReleases[index];
    console.log(surrogate);
    $scope.selectedMovie = surrogate;


    $scope.starsCounter = parseFloat($scope.selectedMovie.rating);
    for(var i = 1; i <= $scope.starsCounter; i++){
      $scope.numberOfStars.push({value: i});
    }
    ngDialog.open({
        template: 'movieTemplate',
        closeByDocument: true,
        closeByEscape: true,
        scope: $scope,
      });
  };

  $scope.printIndex = function(slide){
    console.log(slide);
  };
};
