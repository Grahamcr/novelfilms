
(function() {
  
  'use strict';

  angular.module('novelfilms.landing')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/', {
        controller: 'LandingController',
        templateUrl: 'app/landing/landing.html'
      });
  }

}());
