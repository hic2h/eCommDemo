angular.module('api').factory('AuthApi', function($http, BASE_URL) {
  return{
      authenticate : function(login, pwd) {
        return $http({
          method  : 'POST',
          url     : BASE_URL + '/auth/local',
          data    : {
            'email' : login,
            'password' : pwd
          },
          headers : {'Content-Type': 'application/json'}
        });
      },

    access : function(token){
      return $http({
        method  : 'GET',
        url     : BASE_URL + '/api/companies/me?access_token=' + token,
        headers : {'Content-Type': 'application/json'}
      });
    },

    signUp : function(newCompany) {
        return $http({
          method : 'POST',
          url : BASE_URL + '/api/companies',
          data : newCompany,
          headers : {'Content-Type': 'application/json'}
        });
    }
  }
});
