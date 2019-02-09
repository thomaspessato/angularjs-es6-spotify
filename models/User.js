(function() {
    'use strict';

    class User {

        constructor(name, age, birthdate) {
            this._name = name;
            this._age = age;
            this._birthdate = birthdate;
        }

        get name() {
            return this._name;
        }

        get age() {
            return this._age;
        }

        get birthdate() {
            return this._birthdate;
        }
    
    }

    angular.module('app').service('User', User);

})();