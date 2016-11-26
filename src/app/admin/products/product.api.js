'use strict';

angular.module('sliderDirective.admin.product').factory('ProductApi', ['$http', 'BASE_URL', productApi]);

function productApi($http, BASE_URL){


	return{

		getAll: function(){
			//get products with $http and return the promise object
			return $http.get(BASE_URL + '/products');
		},

		getOne: function(id){
			return $http.get(BASE_URL + '/products/' + id);
		},

    addOne: function(product){
      console.log(product);
      return $http.post(BASE_URL + '/products', product);
    },

    saveOne: function(product){
      return $http.put(BASE_URL + '/products/' + product._id, product);
    },

		deleteOne: function(id){
			return $http.delete(BASE_URL + '/products/' + id);
		},

    getAllCategories: function(){
			return $http.get(BASE_URL + '/categories', {cache:true});
		}
	}
}
