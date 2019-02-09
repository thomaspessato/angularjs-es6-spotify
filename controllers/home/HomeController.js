(function() {
    'use strict';

    class HomeController {
        constructor(UserService, MusicService, $scope) {
            this.$scope = $scope;
            
            this._UserService = UserService;
            this._MusicService = MusicService;

            this._MusicService.getFeaturedMusic('thomas').then((res) => {
                this.setFeaturedMusic(res.data);
                this.$scope.$apply();
            })
        }

        setFeaturedMusic (featuredMusic) {
            this._featuredMusic = featuredMusic;
        }

        get featuredMusic() {
            return this._featuredMusic;
        }
    }

    HomeController.$inject = ['UserService', 'MusicService', '$scope'];
    angular.module('app').controller('HomeController', HomeController);
}());