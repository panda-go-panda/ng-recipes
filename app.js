
'use strict';

var app = angular.module('cupcakeLand',['ngRoute']);
app.config(function($routeProvider) {
      $routeProvider
          /*.when('/',{
                templateUrl: 'base.html'
          }) */
          .when('/catalog', {
                templateUrl: 'pages/catalog.html'})
          .when('/about', {
                templateUrl: 'pages/about.html'})
          .when('/basket', {
                templateUrl: 'pages/basket.html'})
          .when('/contacts', {
                templateUrl: 'pages/contacts.html'})
          .when('/our-recipes', {
                templateUrl: 'pages/our-recipes.html'})
          .when('/', {
                templateUrl: 'pages/catalog.html'})
          .when('/delivery', {
                templateUrl: 'pages/delivery.html'})
          .otherwise({redirectTo: '/' })   
});

app.controller('NavCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
});

app.controller('catalogController', function ($scope) {
    $scope.cupcakes = [
        {
        id: 'cupcake1',
        title: 'Клубничное облако',
        image: 'http://www.cupcakeberlin.de/images/gfx_rasberry-barret.jpg',
        description: 'Капкейк с творожно-йогуртовым кремом и клубникой',
        price: '180'
        
    }, {
        id: 'cupcake2',
        title: 'Ванильное счастье',
        image: 'http://www.cupcakeberlin.de/images/gfx_fantasy-island.png',
        description: 'Сочный капкейк с нежным кремом из мягкого сливочного сыра с нотками ванили',
        price: '180'
    }, {
        id: 'cupcake3',
        title: 'Черничные грезы',
        image: 'http://www.cupcakeberlin.de/images/gfx_red-velvet.png',
        description: 'Нежный капкейк, украшенный воздушной шапочкой черничного пюре',
        price: '180'
    }, {
        id: 'cupcake3',
        title: 'Лимонная сладость',
        image: 'http://www.cupcakeberlin.de/images/gfx_lemon-drop.jpg',
        description: 'Неповторимый капкейк порадует вас лимонным вкусом',
        price: '180'
    }, {
        id: 'cupcake3',
        title: 'Шоколадный король',
        image: 'http://www.cupcakeberlin.de/images/gfx_hot-chocolate.jpg',
        description: 'Девиз этого капкейка: "Шоколада много не бывает!"',
        price: '180'
    }, {
        id: 'cupcake3',
        title: 'Морковная радость',
        image: 'http://www.cupcakeberlin.de/images/gfx_sugar-n-spice.jpg',
        description: 'Оригинальный капкейк с морковью, орехами и специями никого не оставит равнодушным',
        price: '180'
    }];
});









