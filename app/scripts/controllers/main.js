'use strict';

/**
 * @ngdoc function
 * @name phonyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the phonyApp
 */
angular.module('phonyApp')
  .controller('MainCtrl', ['contacts', '$mdSidenav', '$mdBottomSheet',
    function (contacts, $mdSideNav, $mdBottomSheet ) {
      var vm = this;



      contacts.getAll().then(function(response){
        console.log(JSON.stringify(response));
        vm.contacts = response.contacts;
        vm.selected = vm.contacts[0];
        vm.selected.avatar = 'svg-1'
      }, function(e){
        console.log(e);
      });

      vm.selectContact = function ( contact , index) {
        vm.selected =  contact;
        vm.selected.avatar = 'svg-'+(index+1);
      };

      vm.share = function (selectedContact){
        var appRoot = 'https://rawgit.com/angular/material-start/es5-tutorial/app/';

        $mdBottomSheet.show({
          controllerAs     : "vm",
          controller       : [ '$mdBottomSheet', ContactSheetController],
          templateUrl      : 'views/bottomsheet.html',
          parent           : angular.element(document.getElementById('content'))
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function ContactSheetController( $mdBottomSheet ) {
          var rootURL = appRoot + "assets/svg/";

          this.user = selectedContact;
          this.items = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: rootURL + 'phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: rootURL + 'twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: rootURL + 'google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: rootURL + 'hangouts.svg'}
          ];
          this.doContact = function(action) {
            // The actually contact process has not been implemented...
            // so just hide the bottomSheet
            $mdBottomSheet.hide(action);
          };
        }

      };


  }]);
