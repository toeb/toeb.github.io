"use strict";angular.module("toebgithubio",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(e,a){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("about",{url:"/about",templateUrl:"app/about/about.html",controller:"AboutCtrl"}).state("polymer",{url:"/polymer",templateUrl:"app/polymer/polymer.html",controller:"PolymerCtrl"}),a.otherwise("/")}]),angular.module("toebgithubio").service("appService",["$http",function(){var e={};return console.log("service instanciated"),e.name="toeb.github.io",e}]),angular.module("toebgithubio").controller("MainCtrl",["$scope",function(e){e.awesomeThings=[{key:"angular",title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{key:"browsersync",title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{key:"gulp",title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{key:"jasmine",title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{key:"karma",title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{key:"protractor",title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{key:"jquery",title:"jQuery",url:"http://jquery.com/",description:"jQuery is a fast, small, and feature-rich JavaScript library.",logo:"jquery.jpg"},{key:"bootstrap",title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{key:"less",title:"Less",url:"http://lesscss.org/",description:"Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.",logo:"less.png"}],angular.forEach(e.awesomeThings,function(e){e.rank=Math.random()})}]),angular.module("toebgithubio").controller("PolymerCtrl",["$scope","appService",function(e,a){e.date=new Date,e.app=a}]),angular.module("toebgithubio").controller("AboutCtrl",["$scope",function(e){e.awesomeThings=[{key:"lala",title:"UgaAga",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"}],angular.forEach(e.awesomeThings,function(e){e.rank=Math.random()})}]),angular.module("toebgithubio").controller("NavbarCtrl",["$scope","appService",function(e,a){e.date=new Date,e.app=a}]),function(e){try{e=angular.module("toebgithubio")}catch(a){e=angular.module("toebgithubio",[])}e.run(["$templateCache",function(e){e.put("app/about/about.html",'<div class="container"><div ng-include="\'components/navbar/navbar.html\'"></div><div class="jumbotron text-center"><h1>toeb.github.io</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>A site is being created!</p><p><a class="btn btn-lg btn-success" ng-href="#">Ausgezeichnet!</a></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{awesomeThing.logo}}" alt="{{awesomeThing.title}}"><div class="caption"><h3>{{awesomeThing.title}}</h3><p>{{awesomeThing.description}}</p><p><a ng-href="{{awesomeThing.url}}">{{awesomeThing.url}}</a></p></div></div></div></div><hr><div class="footer"><p>With ♥ from <a href="https://twitter.com/Swiip">@Swiip</a></p></div></div>')}])}(),function(e){try{e=angular.module("toebgithubio")}catch(a){e=angular.module("toebgithubio",[])}e.run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div ng-include="\'components/navbar/navbar.html\'"></div><div class="jumbotron text-center"><h1>toeb.github.io</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>A site is being created!</p><p><a class="btn btn-lg btn-success" ng-href="#">Ausgezeichnet!</a></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{awesomeThing.logo}}" alt="{{awesomeThing.title}}"><div class="caption"><h3>{{awesomeThing.title}}</h3><p>{{awesomeThing.description}}</p><p><a ng-href="{{awesomeThing.url}}">{{awesomeThing.url}}</a></p></div></div></div></div><hr><div class="footer"><p>With ♥ from <a href="https://twitter.com/Swiip">@Swiip</a></p></div></div>')}])}(),function(e){try{e=angular.module("toebgithubio")}catch(a){e=angular.module("toebgithubio",[])}e.run(["$templateCache",function(e){e.put("app/polymer/polymer.html",'<div class="container"><div ng-include="\'components/navbar/navbar.html\'"></div><h1>now to develop a web component</h1><paper-button>flat button {{date}}</paper-button><paper-button raised="">raised button {{date}}</paper-button><paper-dialog heading="Title" transition="paper-dialog-transition-bottom"></paper-dialog><paper-checkbox></paper-checkbox></div>')}])}(),function(e){try{e=angular.module("toebgithubio")}catch(a){e=angular.module("toebgithubio",[])}e.run(["$templateCache",function(e){e.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="navbar-header"><a class="navbar-brand" href="#/"><span class="glyphicon glyphicon-home"></span> {{app.name}}</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#/">Home</a></li><li><a ng-href="#/about">About</a></li><li><a ng-href="#/polymer">Polymer</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></nav>')}])}();