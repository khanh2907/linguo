(function () {
    'use strict';

    angular.module('starter')
        .constant('languages', {
            FRENCH: {code: 'fr', name: 'French', level: 'Fluent'},
            ENGLISH: {code: 'gb', name: 'English', level: 'Proficient'},
            CHINESE: {code: 'cn', name: 'Chinese', level: 'Newbie'},
            JAPANESE: {code: 'jp', name: 'Japanese', level: 'Intermediate'},
            RUSSIAN: {code: 'ru', name: 'Russian', level: 'Intermediate'},
            GERMAN: {code: 'de', name: 'German', level: 'Newbie'}
        })
})();
