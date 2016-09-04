angular.module('demo', ['ngRoute', 'dndLists']).config(function ($routeProvider) {
  console.log('configuring')

  $routeProvider
    .when('/board', {
      controller: 'BoardPageCtrl',
      templateUrl: '/app/views/board_page.html'
    })
    .otherwise({redirectTo: '/board'})
})
