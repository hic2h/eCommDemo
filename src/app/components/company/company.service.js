/**
 * Created by charboubmustapha on 11/24/16.
 */
angular.module('company').factory('companyService',['$http','$log','URL_API',function($http,$log,URL_APLI){
  var COMPANIES_URL='companies/';
  return {
    getCompany:getCompany,
    getAllCompanies:getAllCompanies

  }
  function getCompany(companyName){
    var companyUrl=URL_APLI+COMPANIES_URL+'u/'+companyName;
    return $http.get(companyUrl);
  }
  function getAllCompanies(){
  var companiesURL=URL_APLI+COMPANIES_URL;
  $log.debug(companiesURL);
  return $http.get(companiesURL);

  }
}]);
