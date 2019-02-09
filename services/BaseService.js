(function() {
    'use strict';

    class BaseService {
        constructor(){
            this._baseUrl = "./services/mock-data";
        }

        get baseUrl() {
            return this._baseUrl;
        }
    }

    angular.module('app').service('BaseService', BaseService);
})();