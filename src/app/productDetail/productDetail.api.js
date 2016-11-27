
'use strict';

angular
.module('sliderDirective')
.factory('ProductDetailApi',['$http','baseUrl',productDetailApi]);

function productDetailApi($http,baseUrl){

	return {

		productById :function(id){
			return $http.get(baseUrl+'/api/products/'+id);
		}


	}
}


