'use strict';

/**
 * @ngdoc service
 * @name phonyApp.contacts
 * @description
 * # contacts
 * Service in the phonyApp.
 */
angular.module('phonyApp')
  .service('contacts', ['$http', '$q', 'contactsUrl',
    function ($http, $q, contactsUrl) {
      var vm = this;

      vm.getAll = function(){
        var deferred = $q.defer();

        $http.get(contactsUrl).then(function(response){
          deferred.resolve(response.data);
        }, function(e){
          deferred.reject(e);
        });
        return deferred.promise;
      };

  }]);
