
(function() {
  
  'use strict';

  angular.module('novelfilms.about')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/about', {
        controller: 'AboutController',
        templateUrl: 'app/about/about.html'
      });
  }

}());
