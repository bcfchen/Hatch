angular.module("app.idea", ["app.services"])
    .config(["$stateProvider",
        function($stateProvider) {
            $stateProvider
                .state("tab.idea", {
                    cache: false,
                    url: '/idea',
                    params: {
                        "id": null
                    },
                    views: {
                        "mainContent": {
                            templateUrl: "app/idea/idea.html"
                        }
                    }
                })
        }
    ]);