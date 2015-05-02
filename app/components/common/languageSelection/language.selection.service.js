(function () {
    'use strict';

    angular.module('starter')
        .factory('LanguageSelectionService', function (languages) {

            var languageList = {
                known: [
                    languages.FRENCH, languages.ENGLISH, languages.CHINESE
                ],
                interest: [
                    languages.JAPANESE, languages.RUSSIAN, languages.GERMAN
                ]
            };

            var getKnownLanguages = function () {
                return languageList.known;
            };

            var getInterestLanguages = function () {
                return languageList.interest;
            };

            var setInterestLanguages = function (languages) {
                languageList.interest = languages;
            };

            return {
                getKnownLanguages: getKnownLanguages,
                getInterestLanguages: getInterestLanguages,
                setInterestLanguages: setInterestLanguages
            }


        });

})();
