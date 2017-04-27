
 (function () {
     'use strict';
     angular.module('novelfilms')
         /***************************************************************************************
          * Use Greensock to hide/show the global navigation menu
          ****************************************************************************************/
         .directive("toggleGlobalMenu", function () {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     //create a TimelineLite instance
                     var tl = new TimelineLite();
                     //Check Visibility and toggle
                     if ($('#header-menu').is(":visible")) {
                         tl.to("#header-menu", 1, {
                             ease: Power3.easeOut
                             , right: "-400px"
                         });
                         tl.to("#header-menu", .1, {
                             ease: Power3.easeOut
                             , display: "none"
                         }, "-=.8");
                     }
                     else {
                         tl.to("#header-menu", .5, {
                             ease: Power3.easeIn
                             , display: "inherit"
                         });
                         tl.to("#header-menu", .5, {
                             ease: Power3.easeIn
                             , right: "0px"
                         }, "-=.4");
                     }
                     tl.play();
                 });
             };
         })
         /**********************************************************************
          * Hide the header on scroll
          ***********************************************************************/
         .directive("hideOnScroll", function ($window) {
             return function (scope, element, attrs) {
                 angular.element($window).bind("scroll", function () {
                     var tl = new TimelineLite();
                     var clientHeight = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight;
                     if (this.pageYOffset > clientHeight && this.pageYOffset < (clientHeight + 200)) {
                         tl.to(".header", 1, {
                             ease: Power3.easeOut
                             , position: "fixed"
                             , backgroundColor: "#008FD0"
                         });
                     }
                     else if (this.pageYOffset < clientHeight) {
                         tl.to(".header", 1, {
                             ease: Power3.easeOut
                             , position: "absolute"
                             , backgroundColor: "rgba(0,0,0,.0)"
                         });
                     }
                     tl.play();
                     scope.$apply();
                 });
             };
         })
         /***************************************************************************************
          * Redirect the user to the homepage
          ****************************************************************************************/
         .directive("redirectHome", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     window.open("#/", "_self");
                 });
             };
        }])
         /***************************************************************************************
          * Redirect the user to the homepage
          ****************************************************************************************/
         .directive("redirectAbout", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     window.open("#/about", "_self");
                 });
             };
        }])
         /***************************************************************************************
          * Redirect the user to the contact page
          ****************************************************************************************/
         .directive("redirectContact", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     window.open("#/contact", "_self");
                 });
             };
        }])
     
        /***************************************************************************************
          * Redirect the user to the partner page
          ****************************************************************************************/
         .directive("redirectPartner", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     window.open("#/partner", "_self");
                 });
             };
        }])
         /***************************************************************************************
          * Scroll down when the user clicks the learn more link or down cheveron
          ****************************************************************************************/
         .directive("processScroll", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     var target = $("#process-spacer");
                     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                     if (target.length) {
                         $('html, body').animate({
                             scrollTop: target.offset().top
                         }, 1500);
                         return false;
                     }
                 });
             };
        }])
         /***************************************************************************************
          * Scroll down when the user clicks the learn more link or down cheveron
          ****************************************************************************************/
         .directive("workScroll", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     var target = $("#bestwork");
                     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                     if (target.length) {
                         $('html, body').animate({
                             scrollTop: target.offset().top
                         }, 1500);
                         return false;
                     }
                 });
             };
        }])
         /***************************************************************************************
          * Close the global menu
          ****************************************************************************************/
         .directive("closeMenu", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     var tl = new TimelineLite();
                     tl.to(".responsive-icon", 0, {
                         ease: Power3.easeOut
                         , display: "inherit"
                     });
                     tl.to(".close", 0, {
                         ease: Power3.easeOut
                         , display: "none"
                     });
                     tl.to(".responsive-menu", 0, {
                         ease: Power3.easeOut
                         , display: "none"
                     });
                     tl.play();
                 });
             };
        }])
         /***************************************************************************************
          * Open the global menu
          ****************************************************************************************/
         .directive("openMenu", ['$location', function ($location) {
             return function (scope, element, attrs) {
                 element.bind("click", function () {
                     var tl = new TimelineLite();
                     tl.to(".responsive-icon", .1, {
                         ease: Power3.easeIn
                         , display: "none"
                     });
                     tl.to(".close", .1, {
                         ease: Power3.easeIn
                         , display: "inherit"
                     });
                     tl.to(".responsive-menu", 1, {
                         ease: Power3.easeIn
                         , display: "inherit"
                     });
                     tl.play();
                 });
             };
        }]);
 }());