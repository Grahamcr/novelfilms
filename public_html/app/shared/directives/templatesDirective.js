
(function () {
    'use strict';

    angular.module('novelfilms')
    
    
    
    
        /**********************************************************************
        * Header Directive contains the HTML for the page header used on each
        * page of FooBar
        ***********************************************************************/
        .directive('header', function () {
            return {
                templateUrl: 'app/shared/templates/header.html'
            };
        })
    
        /**********************************************************************
        * Header Directive contains the HTML for the page header used on each
        * page of FooBar
        ***********************************************************************/
        .directive('belowFoldContent', function () {
            return {
                transclude: true,
                templateUrl: 'app/shared/templates/belowFoldContent.html'
            };
        })
    
       
    
    
        ;
}());


