angular.module('sliderDirective.admin.product').factory('ProductService', ['ProductApi', function (ProductApi){

	return {

		getAll: function(callBack){
			//get products from api server with $http
			ProductApi.getAll().success(function(response){
				//custom, filter or make a specific mapping between response and UI
				var filteredResult = response && response != "" ? angular.fromJson(response) : null;
				console.log(filteredResult);

				//Delayed precessing when http request is completed
				callBack(filteredResult);
			})

			.error(function(response, status){
				console.log('Error with response: ' + response + ', status :' + status);
			});
		},

    add: function(product, callBack){
      ProductApi.addOne(product).success(function(response){
        var filteredResult = response && response != "" ? angular.fromJson(response) : null;
        //console.log(filteredResult);

        //Delayed precessing when http request is completed
        callBack(filteredResult);
      })

        .error(function(response, status){
          console.log('Error with response: ' + response + ', status :' + status);
        });
    },

    save: function(product, callBack){
      ProductApi.saveOne(product).success(function(response){
        var filteredResult = response && response != "" ? angular.fromJson(response) : null;
        //console.log(filteredResult);

        //Delayed precessing when http request is completed
        callBack(filteredResult);
      })

        .error(function(response, status){
          console.log('Error with response: ' + response + ', status :' + status);
        });
    },

    delete: function(productId, callBack){
      ProductApi.deleteOne(productId).success(function(response){
        var filteredResult = response && response != "" ? angular.fromJson(response) : null;
        //console.log(filteredResult);

        //Delayed precessing when http request is completed
        callBack(filteredResult);
      })

        .error(function(response, status){
          console.log('Error with response: ' + response + ', status :' + status);
        });
    },

    getAllCategories: function(callBack){
      //get users from http server with $http
      ProductApi.getAllCategories().success(function(response){
        //custom, filter or make a specific mapping between response and UI
        var filteredResult = response && response != "" ? angular.fromJson(response) : null;
        console.log(filteredResult);

        //Delayed precessing when http request is completed
        callBack(filteredResult);
      })

        .error(function(response, status){
          console.log('Error with response: ' + response + ', status :' + status);
        });
    },

		getOne: function(id, callBack){

			ProductApi.getOne(id).success(function(response){
				//custom, filter or make a specific mapping between response and UI
				var user = response && response != "" ? angular.fromJson(response) : null;
				console.log(user);

				//Delayed precessing when http request is completed
				callBack(user);
			})

			.error(function(response, status){
				console.log('Error with response: ' + response + ', status :' + status);
			});
		},

		removeUser: function(id, callBack){
			var users = ProductApi.deleteOne(id).success(function(response){
				//Delayed precessing when http request is completed
				callBack(users);
			})

			.error(function(response, status){
				console.log('Can not delete, error with response: ' + response + ', status :' + status);
				callBack(users);
			});
		}
	}
}]);
