(function () {
    'use strict';

    angular.module('starter')
        .service('LanguageService', function (languages) {

            var getLanguages = function () {
                return languages;
            };

            var getLanguageByCode = function (code) {
                var language = null;
                angular.forEach(languages, function (value) {
                    if (value.code === code) {
                        language = value;
                    }
                });

                return language;
            };

            var getLanguageByCodeFromList = function (languageList, code) {
                for (var i = 0; i < languageList.length; i ++) {
                    if (languageList[i].code === code) {
                        return languageList[i];
                    }
                }

                return false;
            };


            var searchLanguageByNameFromList = function (languageList, name) {
                var matchingLanguages = [];

                for (var i = 0; i < languageList.length; i ++) {
                    if (languageList[i].name.toLowerCase().indexOf(name) !== -1) {
                        matchingLanguages.push(languageList[i]);
                    }
                }

                return matchingLanguages;
            };


            return {
                getLanguages: getLanguages,
                getLanguageByCode: getLanguageByCode,
                getLanguageByCodeFromList: getLanguageByCodeFromList,
                searchLanguageByNameFromList: searchLanguageByNameFromList
            }

        });

})();
