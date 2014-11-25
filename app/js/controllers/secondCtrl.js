angular.module('luisa-proyecto').controller('secondCtrl', secondCtrl);

secondCtrl.$inject = ['$scope', '$state', '$firebase'];
function secondCtrl($scope, $state, $firebase){


  $scope.changeState = function(){
    $state.go('first');
  };
};
