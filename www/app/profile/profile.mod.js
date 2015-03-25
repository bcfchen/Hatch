angular.module("app.profile", ["app.services"])
    .config(["$stateProvider",
        function($stateProvider) {
            $stateProvider
                .state("tab.profile", {
                    url: "/profile",
                    views: {
                        "mainContent": {
                            templateUrl: "app/profile/profile.html"
                        }
                    }
                })
        }
    ]);