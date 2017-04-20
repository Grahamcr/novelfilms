
(function() {
  
  'use strict';

  angular.module('novelfilms.contact')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/contact', {
        controller: 'ContactController',
        templateUrl: 'app/contact/contact.html'
      });
  }

}());
