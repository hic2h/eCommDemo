/**
 * Created by charboubmustapha on 11/20/16.
 */
angular
  .module('company',[]).
  directive('companyHeader',['$log','$uibModal','companyService',function ($log,$uibModal,companyService){
  var companyDirective={
    restrict:'E',
    templateUrl:'app/components/company/companyHeader.directive.html',
    scope :{
      company:'='
    },
    controller:companyController,
    controllerAs:'cp'
  }
  return companyDirective;

  function companyController($log,companyService,$uibModal,$document){
    var cp=this;
    companyService.getCompany().success(function (company){
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
        controller: MessageController,
        controllerAs :'msCtrl'
      });
    };
    function MessageController($uibModalInstance){
      var msCtrl=this;
      msCtrl.title='Send Message  '
      msCtrl.sendMessage = function () {
        // var message={
        //   body:msCtrl.body,
        //   to :cp.company._id,
        //   title :msCtrl.title
        //
        // }
        // messageService.sendMessage()
        $uibModalInstance.close('closed');
      };

      msCtrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }
  }




}]);


