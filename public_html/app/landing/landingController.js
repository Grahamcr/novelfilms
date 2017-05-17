
(function() {

  'use strict';

  angular.module('novelfilms.landing')
    .controller('LandingController', Landing);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function Landing($scope, $location, $window){
      
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      $scope.home = false;
      $scope.contact = false;
      $scope.about = false;
      $scope.partner = false;
     
      
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {
            


    });
      
};




}());


    