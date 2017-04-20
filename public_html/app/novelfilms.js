
'use strict';

angular.module('novelfilms', [
    'ngResource',
    'novelfilms.home',
    'novelfilms.contact',
    'novelfilms.about'
    
]).config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
}]);

/*test*/

                
