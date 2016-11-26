
'use strict';

angular
.module('eCommDemo')
.factory('ProductDetailApi',['$http','baseUrl',productDetailApi]);

function productDetailApi($http,baseUrl){

	return {

		productById :function(id){
			return $http.get(baseUrl+'/products/'+id);
		}


	}
}


