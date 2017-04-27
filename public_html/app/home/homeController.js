

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


      
      
      
      
      $scope.send = function(cinfo) {
          if(cinfo && cinfo.subject.length > 1 && cinfo.body.length > 1) {
            window.open('mailto:grahamcr.gvsu@gmail.com?subject=Message From '+ cinfo.subject +'&body='+cinfo.body + '\n\r\n\r -- ' + cinfo.email);
          }
          else {
              alert("Looks like something is missing");
          }
      };

    /*****************************************************************************************
        * Mock Service to get Post Data 
    *****************************************************************************************/
    ExampleService.getTeamInfo($scope.query)
     .success(function (data) {
         $scope.examples = data;
        
         
    });
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
