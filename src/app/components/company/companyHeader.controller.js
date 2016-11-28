/**
 * Created by charboubmustapha on 11/27/16.
 */
angular.module('company').controller('CompanyController',['$log','$uibModal','companyService','$stateParams',function($log,$uibModal,companyService,$stateParams){
  var cp=this;
  var companyName=$stateParams.companyName;

  companyService.getCompany(companyName).success(function (company){
    cp.company=company;
  }).error(function (error){
    $log.error(error);
  });

  cp.showMessageModal=function(){
    $uibModal.open({
      animation: true,
      templateUrl: 'app/components/messageModal/message.directive.html',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      size: 'lg',
      controller: 'MessageController',
      controllerAs :'msCtrl'
    });
  };

}]);
