require.config({

    paths:{
        angular:'bower_components/angular/angular.min',
        angularRoute:'bower_components/angular-route/angular-route.min',
        angularMocks:'bower_components/angular-mocks/angular-mocks',
        angularUiRouter:'bower_components/angular-ui-router/release/angular-ui-router.min',
        ocLazyLoad:'bower_components/oclazyload/dist/ocLazyLoad.min',
        text:'bower_components/requirejs-text/text'
    },
    shim:{

        'angular':{
            'exports':'angular'
        },
        'angularRoute':['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        },
        'angularUiRouter':{
          deps:['angular']
        },
        'ocLazyLoad':{
          deps:['angular']
        },
        priority: [
            "angular"
        ]

    }


});

require(['angular','app'],function(angular,app){
    var $html=angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function(){
        //bootstrap the app manually
       angular.bootstrap(document,['myApp']);
    });

});