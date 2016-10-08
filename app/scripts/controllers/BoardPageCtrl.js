angular.module('jrello').controller('BoardPageCtrl', function ($scope, $websocket, JrelloClient, $timeout) {
  $scope.lists = [
    {
      name: 'list 1',
      tickets: [
        {title: 'task 1'},
        {title: 'task 2'}
      ]
    },
    {
      name: 'list 2',
      tickets: [
        {title: 'task 3'},
        {title: 'task 4'}
      ]
    }
  ]

  $scope.$watch('lists', function () {
    JrelloClient.boards.update($scope.lists)
  }, true)

  $scope.addList = function () {
    $scope.lists.push({name: 'new list', tickets: []})
  }

  var ws = $websocket.$new(window.location.origin.replace('http:', 'ws:').replace('https:', 'wss:') + '/backend/websocket')

  ws.$on('$message', function (msg) {
    console.log('from $message', msg)
    $timeout(function () {
      if (msg.type === 'boardUpdate') {
        $scope.lists = msg.data
      }
    }, 0)
  })

  $scope.addTicket = function (list) {
    list.tickets.push({})
  }
})
