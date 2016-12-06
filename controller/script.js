function validateEmail(email) {
	   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	   return re.test(email);
	}
	   var app = angular.module('App',["ngRoute"]);
	   app.config(function($routeProvider) {
	   $routeProvider
	   .when("/", {
	       templateUrl : "view/mains.htm"
	   })
	   .when("/register", {
	       templateUrl : "view/register.htm",
	       controller : "registerCtrl"
	   })
	   .when("/login", {
	       templateUrl : "view/login.htm",
	       controller : "loginCtrl"
	   })
	   .when("/about", {
	       templateUrl : "view/about.htm"
	   })
	   .when("/contact", {
	       templateUrl : "view/contact.htm"
	   });
	   
	});
	   app.controller("PlansCtrl", function($scope, $http) {
	    $scope.plan = {"id":1};
	    $scope.user = {};
	    
	   });
	   app.controller("registerCtrl", function ($scope, $http) {
	   $scope.submitForm = function() {

	        if(!validateEmail($scope.user.email))
	           {
	               $scope.errorEmail = "Invalid Email";
	           }else{              
	               
	               // Posting data to php file
	               $http({
	                 method  : 'POST',
	                 url     : 'http://nuhman.com/test/model/clone.php',
	                 data    : $scope.user, //forms user object
	                 headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
	                })
	                 .success(function(data) {
	                   if (data.errors) {
	                     // Showing errors.
	                     alert("Errors! Please fill all fields");
	                     $scope.errorName = data.errors.name;
	                     $scope.errorEmail = data.errors.email;
	                     $scope.errorPassword = data.errors.password;
	                   } else {
	                     $('#res').html('<h2>Thank you for your registration! We will review your registration soon....<\/h2>');
	                   }
	                 });
	             
	           }
	   };
	});
	   app.controller("loginCtrl", function ($scope, $http) {
	   $scope.submitForm = function() {

	  

	        if(!validateEmail($scope.user.email))
	           {
	               $scope.errorEmail = "Invalid Email";
	           }else{              
	               
	               // Posting data to php file
	               $http({
	                 method  : 'POST',
	                 url     : 'http://nuhman.com/test/model/process.php',
	                 data    : $scope.user, //forms user object
	                 headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
	                })
	                 .success(function(data) {
	                   if (data.errors) {
	                     // Showing errors.
	                     alert("Errors! Please fill all fields");
	                     $scope.errorEmail = data.errors.email;
	                     $scope.errorPassword = data.errors.password;
	                   } else {
	                     $('#res').html("");
						 $('#log').html(data.message);
	                   }
	                 });
	             
	           }
	   };
	});