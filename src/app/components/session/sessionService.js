'use restrict'

angular
  .module('company')
  .factory('SessionService', ['$cookies', function ($cookies) {
    var company = {};
    return {
        isAuthenticated : function() {
          if(company.hasOwnProperty('_id')){
            return true;
          }else{
            return false;
          }
        },
      logout : function () {
        company = {};
        $cookies.remove('token');
      },
      setCompany : function (newComapny) {
        company = newComapny;
      },
      getCompany : function () {
        return company;
      }
    }

}])
