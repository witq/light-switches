'use strict';

angular.module('lightSwitchesApp')
  .directive('lightSwitch', function ($http) {
    return {
      template: [
        '<li class="list-group-item clearfix">',
        '<div class="btn-group pull-right">',
        '<button type="button" class="btn btn-success" ng-click="toggle(id, \'on\')">On</button>',
        '<button type="button" class="btn btn-danger" ng-click="toggle(id, \'off\')">Off</button>',
        '</div>',
        '<p><b>{{name}}</b></p>',
        '<p>{{desc}}</p>',
        '</li>'
      ].join(''),
      replace: 'true',
      restrict: 'E',
      scope: {
        'name': '@',
        'desc': '@',
        'id': '='
      },
      link: function link(scope) {
        scope.toggle = function (id, action) {
          $http
            .get('http://10.54.54.201/switch/' + id + '/' + action)
            .success(function () {
              console.log('ok');
            })
            .error(function () {
              console.log('not ok');
            });
        };
      }
    };
  });
