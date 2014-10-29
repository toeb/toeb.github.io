'use strict';

angular.module('toebgithubio')
  .controller('PolymerCtrl', ['$scope','appService', function ($scope, appService) {
    $scope.date = new Date();
    $scope.app = appService;
    
  }]);
