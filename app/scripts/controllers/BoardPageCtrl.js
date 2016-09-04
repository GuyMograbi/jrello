angular.module('demo').controller('BoardPageCtrl', function ($scope) {
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

  $scope.addList = function () {
    $scope.lists.push({name: 'new list', tickets: []})
  }

  $scope.addTicket = function (list) {
    list.tickets.push({})
  }
})
