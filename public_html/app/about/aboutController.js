
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
      /*******************************************************************************
      *  Close the given popup
      ********************************************************************************/
      $scope.close = function(id) {
          $('#'+id).hide();
          $('#contact-overlay').hide();
      };
      
      
      /*******************************************************************************
      *  Check that they filled out the form correctly and if you send it off
      ********************************************************************************/
     $scope.submit = function(cinfo) {
         var contact = cinfo;
        $('#loading').show();
        $('#contact-overlay').show();
        var message = "<p id='header'>Looks like something is missing?</p>";
        message = message + "<p id='sub-header'>Could We Have:</p>";
        var valid = true;
         
        if(contact == undefined || contact.type == undefined || contact.type == null || contact.type.length == 0) {
            valid = false;
            message = message + "<p class='item'>Request Type</p>";
        }
        if(contact == undefined || contact.name == undefined || contact.name == null || contact.name.length == 0) {
            valid = false;
            message = message + "<p class='item'>Your Name</p>";
        }
        if(contact == undefined || contact.info == undefined || contact.info == null || contact.info.length == 0) {
            valid = false;
            message = message + "<p class='item'>Your SSO or Email</p>";
        }
        if(contact == undefined || contact.message == undefined || contact.message == null || contact.message == 0) {
            valid = false;
            message = message + "<p class='item'>Your Feedback</p>";
        }
         
        if(valid) {
            send(contact);
        }else {
            $("#error #content")[0].innerHTML = message;
            $('#loading').hide();
            $('#error').show();
        }
     };
      
      
      /*******************************************************************************
      *  Send the feedback to MyApps Admin using ajax call
      ********************************************************************************/
      var send = function(contact) {
        
        var emailHTML = "<h3>New Contact Request from InnovationStudio.digital.ge.com:</h3>";
        emailHTML = emailHTML +"<p>Contact Request From: " + contact.name +"</p>";
        emailHTML = emailHTML +"<p>Contact Info Given: " + contact.info +"</p>";
        emailHTML = emailHTML +"<p>Category of request: " + contact.type +"</p>";
        emailHTML = emailHTML +"<h4>Message:</h4>";
        emailHTML = emailHTML +"<p>" + contact.message +"</p><br/>";


        $.ajax({
            type:'POST',
            url:'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
                "key": "IHczyffg9OYq_msYwVesAQ",
                "message": {
                    "html": emailHTML,
                    "text": "Something!",
                    "subject": "New Contact Request from InnovationStudio Web Form",
                    "from_email": "innovationStudio@ge.com",
                    "from_name": "GE Software Solutions",
                    "to": [
                        {
                            "email": "craig.graham@ge.com",
                            "name": "To Whom It Concerns",
                            "type": "to"
                        }
                    ],
                    "headers": {
                        "Reply-To": "craig.graham@ge.com"
                    }
                }
            }}).done(function(response) {
                   console.log(response); 
                   $('#loading').hide();
                   $('#thanks').show();
                   setTimeout(function() {
                       $('#thanks').hide();
                       $('#contact-overlay').hide();
                   },3000);
             });

       
         
        
    };
      
      
    
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


    