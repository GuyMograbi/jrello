angular.module('jrello', ['ngRoute', 'dndLists', 'ngWebsocket']).config(function ($routeProvider) {
  console.log('configuring')

  $routeProvider
    .when('/board', {
      controller: 'BoardPageCtrl',
      templateUrl: '/app/views/board_page.html'
    })
    .otherwise({redirectTo: '/board'})
})
