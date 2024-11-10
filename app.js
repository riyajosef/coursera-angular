(function () {
'use strict'
    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController); 

    LunchCheckController.$inject = ['$scope'];
       
    function LunchCheckController($scope) {
        $scope.items = "";
        $scope.message = "";
        $scope.alert = false;
        $scope.checkMenu = function () {

            const itemsArray = $scope.items.split(',').filter(item => item.trim() !== "");
            if (itemsArray.length === 0) {
                $scope.alert = true;
                $scope.message = "Please enter data first";
            } else {
                if (itemsArray.length <= 3) {
                    $scope.message = "Enjoy!";
                    $scope.checked = true;
                } else {
                    $scope.message = "Too much!";
                    $scope.checked = true;
                }
            }

        };
    }

})();