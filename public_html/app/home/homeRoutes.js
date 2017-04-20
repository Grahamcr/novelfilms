
(function() {
  
  'use strict';

  angular.module('novelfilms.home')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/', {
        controller: 'HomeController',
        templateUrl: 'app/home/home.html'
      });
  }

}());
