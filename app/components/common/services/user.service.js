(function () {
    'use strict';

    angular.module('starter')
        .factory('UserService', function () {

            var user = {
                firstName: 'Quentin',
                lastName: 'Dejean',
                email: 'quentin.dejean34@gmail.com'
            };

            var getUser = function () {
                return user;
            };


            return {
                getUser: getUser
            }

        });

})();
