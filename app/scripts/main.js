console.log('Roscoe plays peekaboo');

(function(){

  angular.module('Committee', ['ngResource', 'ngRoute'])

  .config(function($routeProvider){

    $routeProvider.when('/', {
      templateUrl: 'templates/home.html',
      controller: 'MainController'
    });

    $routeProvider.when('/members', {
      templateUrl: 'templates/members.html',
      controller: 'PortfolioController'
    });

    $routeProvider.when('/resources', {
      templateUrl: 'templates/library.html',
      controller: 'MainController'
    });

    $routeProvider.when('/resources', {
      templateUrl: 'templates/about.html',
      controller: 'MainController'
    });


  })

}());
