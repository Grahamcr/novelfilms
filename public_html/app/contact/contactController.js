
(function() {

  'use strict';

  angular.module('novelfilms.contact')
    .controller('ContactController', Contact);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function Contact($scope, $location, $window){
      
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      $scope.portfolio = false;
      $scope.contact = true;
      $scope.about = false;
      /*******************************************************************************
      *  Close the given popup
      ********************************************************************************/
      $scope.close = function(id) {
          $('#'+id).hide();
          $('#contact-overlay').hide();
      };
      
      
      ga('set', 'page', '/contact.html');
      ga('send', 'pageview');
      
      
      /*******************************************************************************
      *  Send the feedback to MyApps Admin using ajax call
      ********************************************************************************/
      $scope.send = function(cinfo) {
          if(cinfo && cinfo.subject.length > 1 && cinfo.body.length > 1) {
            window.open('mailto:grahamcr.gvsu@gmail.com?subject=Message From '+ cinfo.subject +'&body='+cinfo.body + '\n\r\n\r -- ' + cinfo.email);
          }
          else {
              alert("Looks like something is missing");
          }
      };
      
      
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {

    });
      
};




}());


    