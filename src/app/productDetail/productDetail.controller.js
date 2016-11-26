(function() {
  'use strict';

  angular
    .module('eCommDemo')
    .controller('DetailProductController',['$scope','$stateParams','ProductDetailService', DetailProductController]);

  /** @ngInject */
  function DetailProductController($scope,$stateParams,ProductDetailService) {
    var vm = this;
   
    var idProduct = $stateParams.id;
    ProductDetailService.getProduct(idProduct,function(pr){
    
    $scope.product = pr;

    //il faut entre a list rating en parametre

    var ratingArray = pr.rating;  
    $scope.reviewer = ratingArray.length;
     ProductDetailService.calculRating(ratingArray,function(nbre){
          $scope.ratenumber =  nbre;
      });
    ////////List color:
    var listColor = pr.colors;
    var newJson = [];
    for (var i=0; i<listColor.length ; i++) {
      var col = new Object();
       col.color = listColor[i];
       col.isSelected  = false;
       newJson.push(col);
    }
    $scope.listColors = newJson;
    ////////////////////////////

    });

   $scope.selectedColor = function(index){
    var newJson = [];
    for (var i=0; i<$scope.listColors.length ; i++) {
      $scope.listColors[i].isSelected = false;
    }
    $scope.listColors[index].isSelected = true;
   }

  }
})();
