angular.module('app.alerts', ["app.services"])
    .config(['$stateProvider',
        function($stateProvider) {
            $stateProvider
                .state('tab.alerts', {
                    url: "/alerts",
                    views: {
                        'mainContent': {
                            templateUrl: "app/alerts/alerts.html"
                        }
                    }
                })
        }
    ]);