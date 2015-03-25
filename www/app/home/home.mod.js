angular.module("app.home", ["app.services"])
    .directive("noScroll", function() {
        return {
            restrict:"A",
            link: function($scope, $element, $attr) {
                $element.on("touchmove", function(e) {
                    e.preventDefault();
                });
            }
        }
    })
    .config(["$stateProvider",
        function($stateProvider) {
            $stateProvider
                .state("tab.home", {
                    url: "/home",
                    abstract: true,
                    views: {
                        "mainContent": {
                            templateUrl: "app/home/home.html"
                        }
                    }
                })
                .state("tab.home.trending", {
                    url: "/trending",
                    views: {
                        "trendingPage": {
                            templateUrl: "app/home/trending/trending.html"
                        }
                    }
                })
                .state("tab.home.new", {
                    url: "/new",
                    views: {
                        "newPage": {
                            templateUrl: "app/home/new/new.html"
                        }
                    }
                });
        }
    ]);