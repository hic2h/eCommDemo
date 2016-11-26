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
      hasToken : function () {
        return cookiesService.token() ? true : false;
      },
      isAnonymous : function() {
        return !this.isAuthenticated();
      },
      logout: function () {
        company = {};
        cookiesService.remove('token');
      },
      setCompany: function (newCompany) {
        company = newCompany;
      },
      getCompany: function () {
        return company;
      }
    }

  }])
