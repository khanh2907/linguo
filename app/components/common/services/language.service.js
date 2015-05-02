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

            return {
                getLanguages: getLanguages,
                getLanguageByCode: getLanguageByCode,
                getLanguageByCodeFromList: getLanguageByCodeFromList
            }

        });

})();
