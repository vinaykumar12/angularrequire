define([
    'angular',
    'angularUiRouter',
     'ocLazyLoad'
    ],
    function(angular,angularUiRouter,ocLazyLoad){

    return angular.module('route-config',['ui.router','oc.lazyLoad'])
        .config(['$stateProvider','$urlRouterProvider',
            function($stateProvider,$urlRouterProvider){

                $urlRouterProvider.otherwise('/home');

                $stateProvider

                    .state('home', {
                        url: '/home',
                        templateUrl: 'components/home/home.html',
                        controller:'homeController',
                        resolve:{
                            load:function($ocLazyLoad){
                                return $ocLazyLoad.load({
                                    files:['components/home/homeController.js']
                                })

                            }
                        }
                    })

                    .state('product', {
                        url: '/product',
                        templateUrl: ''

                    })
                    .state('services', {
                        url: '/services',
                        templateUrl: ''

                    })
                    .state('careers', {
                        url: '/careers',
                        templateUrl: ''

                    })
                    .state('contact', {
                        url: '/contact',
                        templateUrl: ''

                    });

        }]);

});