(function(angular) {
    "use strict";
    angular.module("imsApp")
        .controller("HomeController", [
            "$log",
            "$scope",
            "$rootScope",
            "$document",
            "$window",
            "$location",
            "$state",
            HomeController
        ]);

    function HomeController(
        $log,
        $scope,
        $rootScope,
        $document,
        $window,
        $location,
        $state
    ) {
        $log.info("Inside HomeController");
    }
})(window.angular);