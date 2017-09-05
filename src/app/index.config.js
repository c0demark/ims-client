(function(angular) {
    "use strict";
    angular.module("imsApp")
        .config([
            "$httpProvider",
            "$locationProvider",
            "$routeProvider",
            "$urlRouterProvider",
            "$stateProvider",
            configFn
        ]);

    function configFn(
        $httpProvider,
        $locationProvider,
        $routeProvider,
        $urlRouterProvider,
        $stateProvider
    ) {
        $locationProvider.hashPrefix("");
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", {
                url: "/",
                views: {
                    "header": {
                        templateUrl: "/src/app/layout/header.view.html",
                        controller: "HeaderController"
                    },
                    "main": {
                        templateUrl: "/src/app/home/home.view.html",
                        controller: "HomeController"
                    },
                    "footer": {
                        templateUrl: "/src/app/layout/footer.view.html",
                        controller: "FooterController"
                    }
                }
            });
    }
})(window.angular);