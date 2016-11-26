/**
 * Created by charboubmustapha on 11/24/16.
 */
angular.module('company').factory('companyService',['$http','$log','URL_API',function($http,$log,urlApi){
  return {
    getCompany:getCompany

  }
  function getCompany(){
    var companyUrl=urlApi+'companies/u/google';
    $log.debug(companyUrl);
    return $http.get(companyUrl);
  }
}]);
