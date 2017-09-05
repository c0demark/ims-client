(function(angular) {
    "use strict";
    angular.module("imsApp")
        .controller("FooterController", [
            "$log",
            "$scope",
            "$rootScope",
            "$document",
            "$window",
            "$location",
            "$state",
            FooterController
        ]);

    function FooterController(
        $log,
        $scope,
        $rootScope,
        $document,
        $window,
        $location,
        $state
    ) {
        $log.info("Inside FooterController");
    }
})(window.angular);