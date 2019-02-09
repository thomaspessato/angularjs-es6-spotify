(function() {
    'use strict';
    angular.module('app', ['ui.router']).config(($stateProvider, $locationProvider) => {
        $locationProvider.hashPrefix('');
        var helloState = {
            name: 'hello',
            url: '/hello',
            template: '<h3>hello world!</h3>'
        }
        
        var aboutState = {
            name: 'home',
            url: '/home',
            templateUrl: './controllers/home/HomeController.html'
        }
        
        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);
    });
}());