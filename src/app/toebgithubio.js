'use strict';

angular.module('toebgithubio', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url:'/about',
        templateUrl:'app/about/about.html',
        controller:'AboutCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
