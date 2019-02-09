(function(){
    'use strict';

    class UserService {
        constructor($http, BaseService){
            this.$http = $http;
            this._BaseService = BaseService;
            this._userInformation = '';
        };

        getInformation(userId) {
            return new Promise((resolve, reject) => {
                this.$http.get(`${this._BaseService.baseUrl}/user-data-${userId}.json`).then((response) => {
                    resolve(response);
                }, (error) => {
                    this._handleError("User information request error", error);
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

    UserService.$inject = ['$http', 'BaseService'];
    angular.module('app').service('UserService', UserService);
})();