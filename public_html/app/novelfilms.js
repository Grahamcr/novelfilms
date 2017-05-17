
'use strict';

angular.module('novelfilms', [
    'ngResource',
    'novelfilms.home',
    'novelfilms.contact',
    'novelfilms.about',
    'novelfilms.watch',
    'novelfilms.landing'
    
]).config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
}]);
