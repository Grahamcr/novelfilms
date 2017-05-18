

(function() {

  'use strict';

  angular.module('novelfilms.home')
    .controller('HomeController', Home);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function Home($scope, $location, $window, $routeParams, ExampleService){
	  
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      
      $scope.home = "active";
      $scope.contact = false;
      $scope.about = false;
      $scope.partner = false;


      $scope.joinTeam = false;
      $scope.auditions = false;
      $scope.script = false;
      $scope.showForm = false;
      $scope.activeForm = 'none';
      
      
      $scope.formtoggle = function(form) {
          $scope.joinTeam = 
          $scope.auditions = 
          $scope.script = false;
          $scope.showForm = "active";
      
          if($scope.activeForm === form) {
              form = "close";
              $scope.activeForm = 'none';
          }else if(form != 'close' && $scope.activeForm != 'none') {
              $scope.formWrapper = 'active';
          }
          
          switch(form) {
              case "join":
                  $scope.joinTeam = "active";
                  $('#formArea').removeClass('in');
              break;
                  
              case "auditions":
                  $scope.auditions = "active";
                  $('#formArea').removeClass('in');
              break;
                  
              case "script":
                  $scope.script = "active";
                  $('#formArea').removeClass('in');
              break;
              
              case "close":
                $scope.showForm = false;
                $scope.formWrapper = false;
                form = 'none';
                setTimeout(function(){ $('#formArea').removeClass('in');  }, 1000);
                  
                  
              break;
          }
          $scope.activeForm = form;
      };


    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {
            
            
            $("#video-1").hover(function() {
              $(this).prop("controls", true);
            }, function() {
              $(this).prop("controls", false);

            });
            
            $("#video-2").hover(function() {
              $(this).prop("controls", true);
            }, function() {
              $(this).prop("controls", false);

            });

            
            
    });
      
};




}());
