angular.module('api').factory('AuthApi', function($http, BASE_URL) {
  return{
      auth : function(login, pwd) {
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

    me : function(token){
      return $http({
        method  : 'GET',
        url     : BASE_URL + '/api/companies/me?access_token=' + token,
        headers : {'Content-Type': 'application/json'}
      });
    },

    signup : function(company) {
        return $http({
          method : 'POST',
          url : BASE_URL + '/api/companies',
          data : company,
          headers : {'Content-Type': 'application/json'}
        });
    }
  }
});
