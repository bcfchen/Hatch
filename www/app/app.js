angular.module("hatchApp", ["ionic",
    "app.alerts",
    "app.profile",
    "app.home",
    "app.idea",
    "app.profile",
    "angular-data.DSCacheFactory",
    "ionic.contrib.ui.tinderCards",
    "underscore"
])

.run(function($ionicPlatform, DSCacheFactory) {
    $ionicPlatform.ready(function() {

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $stateProvider
        .state("tab", {
            abstract: true,
            url: "/tab",
            templateUrl: "app/layout/layout.html"
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise("/tab/home/trending");

    //config nav tabs to be on bottom instead of top for android
    //$ionicConfigProvider.tabs.style("standard");
    $ionicConfigProvider.tabs.position("bottom");
    $ionicConfigProvider.navBar.alignTitle("center");
});