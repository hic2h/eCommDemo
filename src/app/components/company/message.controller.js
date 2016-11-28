/**
 * Created by charboubmustapha on 11/27/16.
 */
angular.module('company').controller('MessageController',['$uibModalInstance',function ($uibModalInstance){
    var msCtrl=this;
    msCtrl.title='Send Message '
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
}]);
