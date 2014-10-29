'use strict';

angular.module('toebgithubio')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      {
        'key': 'lala',
        'title': 'UgaAga',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      }
    ];
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
