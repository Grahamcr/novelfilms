
(function() {

  'use strict';

  angular.module('novelfilms.about')
    .controller('AboutController', About);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function About($scope, $location, $window){
      
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      $scope.home = false;
      $scope.contact = false;
      $scope.about = "active";
      $scope.partner = false;
           
     
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {
            
            $('.office-carousel').slick({
                infinite: true,
                dots: true
              });
            
            
            $("#video-preview").hover(function() {
              $(this).prop("controls", true);
            }, function() {
              $(this).prop("controls", false);

            });

    });
      
};




}());


    