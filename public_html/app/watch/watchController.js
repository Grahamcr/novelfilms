
(function() {

  'use strict';

  angular.module('novelfilms.watch')
    .controller('WatchController', Watch);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function Watch($scope, $location, $window){
      
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      $scope.home = false;
      $scope.contact = false;
      $scope.about = false;
      $scope.partner = false;
      $scope.watch = "active";
     
      
      //video preview section variables 
      $scope.all = "active";
      $scope.mv = false;
      $scope.coms = false;
      $scope.promos = false;
      $scope.shorts = false;
      $scope.category = "ALL";
      /*******************************************************************************
      *  Change which set of videos is visible in the preview section
      ********************************************************************************/
      $scope.setpreview = function(id) {
          $scope.all = $scope.mv = $scope.coms = $scope.promos = $scope.shorts = false;
          switch(id) {
            case 'all':
              $scope.all = "active";
              $scope.category = "ALL";
            break;
            case "mv":
              $scope.mv = "active";
              $scope.category = "MUSIC-VIDEOS";
            break;
            case "coms":
              $scope.coms = "active";
              $scope.category = "COMMERIALS";
            break;
            case "promos":
               $scope.promos = "active";
               $scope.category = "PROMOS";
            break;
            case "shorts":
               $scope.shorts = "active";
               $scope.category = "SHORTS";
            break;
            }
      };
      
      
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {
            
            
            $(".preview-video").hover(function() {
              $(this).prop("controls", true);
            }, function() {
              $(this).prop("controls", false);

            });

    });
      
};




}());


    