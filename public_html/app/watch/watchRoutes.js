
(function() {
  
  'use strict';

  angular.module('novelfilms.watch')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/watch', {
        controller: 'WatchController',
        templateUrl: 'app/watch/watch.html'
      });
  }

}());
