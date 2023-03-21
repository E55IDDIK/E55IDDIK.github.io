!function(){"use strict";function t(t,e){e.interceptors.push("authHttpInterceptor"),e.defaults.headers.common.Accept="application/json",t.state("admin",{url:"/admin",abstract:!0,templateUrl:"src/admin/admin.html"}).state("admin.auth",{url:"",templateUrl:"src/admin/admin-auth/admin-auth.html",controller:"AdminAuthController",controllerAs:"adminAuth"}).state("admin.login",{url:"/login",templateUrl:"src/admin/login/login.html",controller:"LoginController",controllerAs:"loginCtrl",params:{toParams:null,toState:null}}).state("admin.auth.category",{url:"/category/{categoryId}",templateUrl:"src/admin/category/category-items.html",controller:"CategoryItemsController",controllerAs:"categoryItemsCtrl",resolve:{category:["$stateParams","MenuService",function(t,e){return e.getCategory(t.categoryId)}],menuItems:["$stateParams","MenuService",function(t,e){return e.getMenuItems(t.categoryId)}]}}).state("admin.auth.category.menuitem",{url:"/menuitem/{menuItemId}",templateUrl:"src/admin/menu-item/menu-item-edit.html",controller:"MenuItemEditController",controllerAs:"menuItemEditCtrl",resolve:{menuItem:["$stateParams","MenuService",function(t,e){return e.getMenuItem(t.menuItemId)}]}})}angular.module("admin").config(t),t.$inject=["$stateProvider","$httpProvider"]}();