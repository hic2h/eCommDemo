/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('sliderDirective')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('URL_API','https://ecommdemo.herokuapp.com/api/')
   ;


})();
