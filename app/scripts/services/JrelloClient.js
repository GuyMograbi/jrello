angular.module('jrello').service('JrelloClient', function ($http) {
  this.boards = {
    read: function () {
      return $http({
        method: 'GET',
        url: '/backend/boards'
      })
    },
    update: function (board) {
      return $http({
        method: 'POST',
        url: '/backend/boards',
        data: board
      })
    }
  }
})
