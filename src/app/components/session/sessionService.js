'use restrict'

angular
  .module('company')
  .factory('SessionService', ['cookiesService', function (cookiesService) {
    var company = {};
    return {
      isAuthenticated : function () {
        if (company.hasOwnProperty('_id')) {
          return true;
        } else {
          return false;
        }
      },
      isAnonymous : function() {
        return !isAuthenticated();
      },
      logout: function () {
        company = {};
        cookiesService.remove('token');
      },
      setCompany: function (newComapny) {
        company = newComapny;
      },
      getCompany: function () {
        return company;
      }
    }

  }])
