/**
 * Created by charboubmustapha on 11/26/16.
 */
angular
  .module('company').controller('CompanyGridController',['$log','companyService',function($log,companyService){
  var cpg=this;
  cpg.listCompanies=[];
  cpg.getAllCompanies=function () {
    companyService.getAllCompanies()
                  .success(function(data){
                     angular.forEach(data,function(value,index){
                       if(value.logo !==undefined && value.logo.indexOf('http')!==-1){
                         cpg.listCompanies.push(value);
                       }

                     })
    })
      .error(function (error){
      $log.error(error);
    });
 }
  cpg.getAllCompanies();


}]);
