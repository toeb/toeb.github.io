'use strict';
angular.module('toebgithubio')
.service('appService', ['$http', function($http){
  var result ={};
  console.log('service instanciated');
  result.name = 'toeb.github.io';


  return result;
}]);
