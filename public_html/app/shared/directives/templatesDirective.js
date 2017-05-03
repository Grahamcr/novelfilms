
(function () {
    'use strict';

    angular.module('novelfilms')
    
    
    
    
        /**********************************************************************
        * Header Directive 
        ***********************************************************************/
        .directive('header', function () {
            return {
                templateUrl: 'app/shared/templates/header.html'
            };
        })
    
         /**********************************************************************
        * Footer Directive
        ***********************************************************************/
        .directive('footer', function () {
            return {
                templateUrl: 'app/shared/templates/footer.html'
            };
        })
        
    
       
    
    
        ;
}());


