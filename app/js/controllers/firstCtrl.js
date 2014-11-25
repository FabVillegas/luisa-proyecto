angular.module('luisa-proyecto').controller('firstCtrl', firstCtrl);

firstCtrl.$inject = ['$scope', '$state', '$firebase', 'ngDialog'];

function firstCtrl($scope, $state, $firebase, ngDialog){
  /* cateogiras */
  $scope.categories = [
    'Accion', /* 0 */
		'Aventura', /* 1 */
		'Fantasia', /* 2 */
		'Romance', /* 3 */
		'Comedia', /* 4 */
		'Animacion', /* 5 */
		'Thriller', /* 6 */
		'Drama', /* 7 */
		'Familia', /* 8 */
		'Crimen', /* 9 */
		'Ciencia Ficcion' /* 10 */
  ];

  console.log('https://cms-luisa.firebaseio.com/peliculas/' + $scope.categories[0]);
  $scope.actionMovies = $firebase(new Firebase('https://cms-luisa.firebaseio.com/peliculas/' + $scope.categories[0])).$asArray();
  $scope.animationMovies = $firebase(new Firebase('https://cms-luisa.firebaseio.com/peliculas/' + $scope.categories[5])).$asArray();
  $scope.adventureMovies = $firebase(new Firebase('https://cms-luisa.firebaseio.com/peliculas/' + $scope.categories[1])).$asArray();
  $scope.dramaMovies = $firebase(new Firebase('https://cms-luisa.firebaseio.com/peliculas/' + $scope.categories[7])).$asArray();

  $scope.selectedMovie = {};

  $scope.bechdelCounter = 0;
  $scope.bechdelTest = [];

  $scope.getInfo = function(index, category){
    $scope.bechdelTest = [];
    switch(category){
      case 'action':
        var surrogate = $scope.actionMovies[index];
        $scope.selectedMovie = surrogate;
        break;
      case 'animation':
        var surrogate = $scope.animationMovies[index];
        $scope.selectedMovie = surrogate;
        break;
      case 'adventure':
        var surrogate = $scope.adventureMovies[index];
        $scope.selectedMovie = surrogate;
        break;
      case 'drama':
        var surrogate = $scope.dramaMovies[index];
        $scope.selectedMovie = surrogate;
        break;
    }
    $scope.bechdelCounter = parseFloat($scope.selectedMovie.rating);
    for(var i = 1; i <= $scope.bechdelCounter; i++){
      $scope.bechdelTest.push({value: i});
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
