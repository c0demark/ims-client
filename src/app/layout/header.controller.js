(function(angular) {
    "use strict";
    angular.module("imsApp")
        .controller("HeaderController", [
            "$log",
            "$scope",
            "$rootScope",
            "$document",
            "$window",
            "$location",
            "$state",
            "$uibModal",
            HeaderController
        ]);

    function HeaderController(
        $log,
        $scope,
        $rootScope,
        $document,
        $window,
        $location,
        $state,
        $uibModal
    ) {
        $log.info("Inside HeaderController");
    }
})(window.angular);