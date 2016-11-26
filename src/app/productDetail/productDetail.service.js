
(function() {
'use strict';

angular
.module('eCommDemo')
.factory('ProductDetailService',['ProductDetailApi',function(ProductDetailApi){

return {

  getProduct : function(id,cb){

  	ProductDetailApi.productById(id).success(function(productResponse){
  		console.log('prod=',productResponse);
      cb(productResponse);
  	});
  },
  calculRating : function(ratingArray,cb){
    //somme d array sur le nbre
    var som=0;

    for (var i = 0; i <ratingArray.length ; i++) {
    	som+=ratingArray[i];
    }
    var moy=som/ratingArray.length;
  	cb(moy);

  }
};

}]);


})();