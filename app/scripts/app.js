'use strict';

/**
 * @ngdoc overview
 * @name phonyApp
 * @description
 * # phonyApp
 *
 * Main module of the application.
 */
angular
  .module('phonyApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .value('contactsUrl', 'http://www.mocky.io/v2/583e0bc31200009214c045a8')
  .config(function($sceProvider) {
    // ngMaterial $mdIconProvider will be updated  to mark urls as         safe.
    // Meanwhile, disable $sce for ngMaterial CodePen Demos that           using external SVGs
    $sceProvider.enabled(false);
  })
  .config(function( $mdIconProvider ){
    var rootURL = "https://rawgit.com/angular/material-start/es5-tutorial/app/";

    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet(rootURL + "assets/svg/avatars.svg", 128)
      .icon("share"      , rootURL + "assets/svg/share.svg"       , 24)
      .icon("google_plus", rootURL + "assets/svg/google_plus.svg" , 512)
      .icon("hangouts"   , rootURL + "assets/svg/hangouts.svg"    , 512)
      .icon("twitter"    , rootURL + "assets/svg/twitter.svg"     , 512)
      .icon("phone"      , rootURL + "assets/svg/phone.svg"       , 512);
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
