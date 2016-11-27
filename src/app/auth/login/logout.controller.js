'use strict';

angular
.module('company').controller('LogoutController', ['SessionService', '$state', function (SessionService, $state) {
  SessionService.logout({});

  $state.go('home');
}])
