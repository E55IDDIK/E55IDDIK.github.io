!function(){"use strict";function n(n){var o,t=this;function i(n,o){t.show=o.on}t.$onInit=function(){t.show=!1,o=n.$on("spinner:activate",i)},t.$onDestroy=function(){o()}}angular.module("common").component("loading",{template:'<img src="images/spinner.svg" ng-if="$ctrl.show">',controller:n}),n.$inject=["$rootScope"]}();