angular.module('luisa-proyecto').controller('firstCtrl', firstCtrl);

firstCtrl.$inject = ['$scope', '$state', '$firebase'];

function firstCtrl($scope, $state, $firebase){

  $scope.moviesList = $firebase(new Firebase('https://cms-luisa.firebaseio.com/peliculas')).$asArray();

  $scope.printIndex = function(slide){
    console.log(slide);
  };
};
