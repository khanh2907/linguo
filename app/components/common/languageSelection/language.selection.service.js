(function () {
    'use strict';

    angular.module('starter')
        .factory('LanguageSelectionService', function (languages) {

            var languageList = {
                known: [

                ],
                interest: [

                ]
            };

            var getKnownLanguages = function () {
                return languageList.known;
            };

            var setKnownLanguages = function (languages) {
                languageList.known = languages;
            };



            var getInterestLanguages = function () {
                return languageList.interest;
            };

            var setInterestLanguages = function (languages) {
                languageList.interest = languages;
            };

            return {
                getKnownLanguages: getKnownLanguages,
                setKnownLanguages: setKnownLanguages,
                getInterestLanguages: getInterestLanguages,
                setInterestLanguages: setInterestLanguages
            }


        });

})();
