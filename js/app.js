angular.module('app', ['directives', 
						'myService'])

.controller('myAppController', function($scope, foo, bar){
		
	console.log(bar);
})