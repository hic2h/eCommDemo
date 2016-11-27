(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    var $timeout;
    var toastr;
    var $scope;
    var ProductsList;

    var products = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        }
    ];

    beforeEach(module('sliderDirective'));
    beforeEach(inject(function(_$controller_, _$timeout_, _ProductsList_) {
      //spyOn(_toastr_, 'info').and.callThrough();

      spyOn(_ProductsList_, 'get').and.returnValue(products);
      vm = _$controller_('MainController', {$scope: $scope});
      ProductsList = _ProductsList_;

    }));

    describe('getProducts()', function(){
      
        it('getProducts() should return products list', function() {

      var returnedProducts = vm.getProducts();
      expect(returnedProducts).toEqual(products);

      expect(ProductsList.get).toHaveBeenCalled();
    });
    })
  });
})();
