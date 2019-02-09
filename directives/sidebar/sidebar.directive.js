(function() {
    'use strict';

    class Sidebar {
        constructor(MusicService, UserService) {
            this.restrict = 'E';
            this.templateUrl = './directives/sidebar/sidebar.directive.html';
            this._MusicService = MusicService;
            this._UserService = UserService;
        }

        link(scope, element, attrs) {
            this.scope = scope;
            this.scope.sidebarVisibility = "hidden";
            this._UserService.getInformation('thomas').then((res) => {
                this.setUserInfo(res.data);
                scope.$apply();
            })

            this.scope.hideSidebar = () => {
                this.scope.sidebarVisibility = "hidden";
            }

            this.scope.openSidebar = () => {
                this.scope.sidebarVisibility = "visible";
            }
        }

        setUserInfo (userInfo) {
            this.scope.userInfo = userInfo;
        }

    }

    Sidebar.$inject = ['MusicService', 'UserService'];
    angular.module('app').directive('sidebar', Sidebar);
})();