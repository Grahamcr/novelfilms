
(function () {
    'use strict';

    angular.module('novelfilms.watch')
    
    
    
     /***************************************************************************************
    * Open the video in full screen
    ****************************************************************************************/ 
    .directive("openVideo", ['$location', function($location){
        return function(scope, element, attrs){
            element.bind("click", function(){

                $('#'+attrs.vname).css('display', 'flex');
                $('.header').hide();
                $('body').css("overflow", "hidden");
                $('html').css("overflow", "hidden");

            });
        };
    }])
    
    
     /***************************************************************************************
    * Close video overlay
    ****************************************************************************************/ 
    .directive("closeVideo", ['$location', function($location){
        return function(scope, element, attrs){
            element.bind("click", function(){

                $('.video-overlay').hide();
                $('.header').show();
                $('body').css("overflow-y", "auto");
                $('html').css("overflow-y", "auto");
                
            });
        };
    }])
    

    
        ;
}());


