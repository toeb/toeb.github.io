'use strict';

angular.module('toebgithubio')
  .controller('NavbarCtrl', ['$scope','appService', function ($scope, appService) {
    $scope.date = new Date();
    $scope.app = appService;
  }]);
