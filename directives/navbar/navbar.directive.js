(function(){
    'use strict';

    class Navbar {
        constructor() {
            this.restrict = "E";
            this.templateUrl = "./directives/navbar/navbar.directive.html";
            this.scope = {};
        }

        link(scope, element, attrs) {
            console.log(scope);
        }
    }
    
    angular.module('app').directive('navbar', Navbar);
}())