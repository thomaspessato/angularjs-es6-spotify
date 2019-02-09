(function() {
    class MusicService {
        constructor($http, BaseService){
            this.$http = $http;
            this._BaseService = BaseService;
        };

        getFeaturedMusic(userId) {
            return new Promise((resolve, reject) => {
                this.$http.get(`${this._BaseService.baseUrl}/music-data-${userId}.json`).then((response) => {
                    resolve(response)
                }, (error) => {
                    this._handleError('Could not retrieve featured music list', error);
                })
            })
            
        }
        
        _handleError(errorMessage, errorObject) {
            throw new Error(`${errorMessage}.
        The Url: ${errorObject.config.url}.
        The error: ${errorObject.statusText}
        `);
        }
    }

    MusicService.$inject = ['$http', 'BaseService'];
    angular.module('app').service('MusicService', MusicService);
}());