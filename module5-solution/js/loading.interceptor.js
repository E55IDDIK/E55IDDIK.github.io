!function(){"use strict";function n(n,r){var t=0,o="spinner:activate";return{request:function(r){return 1==++t&&n.$broadcast(o,{on:!0}),r},response:function(r){return 0==--t&&n.$broadcast(o,{on:!1}),r},responseError:function(e){return 0==--t&&n.$broadcast(o,{on:!1}),r.reject(e)}}}angular.module("common").factory("loadingHttpInterceptor",n),n.$inject=["$rootScope","$q"]}();