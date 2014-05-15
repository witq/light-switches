'use strict';

angular.module('lightSwitchesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.switches = [
      {
        name: 'A',
        desc: 'Lampka na stole',
        id: 0
      },
      {
        name: 'B',
        desc: 'Lampa przy kanapie',
        id: 1
      },
      {
        name: 'C',
        desc: 'Czerwona lampka',
        id: 2
      },
      {
        name: 'D',
        desc: 'Nieużywany',
        id: 3
      },
      {
        name: 'Master',
        desc: 'Obsługuje wszystkie gniazdka',
        id: 4
      }
    ];
  });
