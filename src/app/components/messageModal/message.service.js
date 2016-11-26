/**
 * Created by charboubmustapha on 11/20/16.
 */
angular.module('messageModule',[])
  .factory('messageService',['$http','$log','URL_API','message',function($http,urlApi,message){
 return{
   sendMessage: sendMessage

 };

 function sendMessage($http){
 var messageEndPointUrl=urlApi+'messages'
   return $http.post(messageEndPointUrl,message);
 }
  }]);
