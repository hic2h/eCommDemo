/**
 * Created by charboubmustapha on 11/20/16.
 */
angular
  .module('company',[]).
  directive('companyHeader',function (){
  var companyDirective={
    restrict:'E',
    templateUrl:'app/components/company/companyHeader.directive.html',
    scope :{
      company:'='
    },
    controller:'CompanyController',
    controllerAs:'cp'
  }
  return companyDirective;
});


