//var contactApp = angular.module("contactApp",['ngRoute']);
// contactApp.controller("contactController",function($scope){
	
// 	

// 	$scope.saveContact = function(index){
// 		for (var i = 0; i < $scope.contact.length; i++) {
// 			if ($scope.contact[i].id === index + 1) {
// 				$scope.contact[i].firstName = $scope.editFirstName;
// 				$scope.contact[i].lastName = $scope.editLastName;
// 				$scope.contact[i].phoneNumber = $scope.editPhoneNumber;
// 				$scope.contact[i].email = $scope.editEmail;
// 				break;
// 			}
// 		}
// 	}
		
// });

contactApp.controller("addContactCntrl",function($scope, $rootScope){
	$scope.title = "Add Contact";
	$rootScope.contact = [
		// {
		// 	id : 1,
		// 	firstName : "Musa",
		// 	lastName : "Joshua",
		// 	phoneNumber : "09090512150",
		// 	email : "musa.joshua@lmu.edu.ng"
		// },
	]
	$rootScope.addContact = function(){
		$rootScope.contact.push(
			{
				id : $rootScope.contact.length + 1,
				firstName : $scope.firstName,
				lastName : $scope.lastName,
				phoneNumber : $scope.phoneNumber,
				email : $scope.email
			}
		)
		$scope.firstName = "";
		$scope.lastName = "";
		$scope.phoneNumber = "";
		$scope.email = "";
		swal("Added!","Contacts Successfully Added","success");
		console.log($rootScope.contact);
	}
});
contactApp.controller("viewContactCntrl",function($scope, $rootScope){
	$scope.title = "View Contact";
	// $scope.editContact = function(index){
	// 	for (var i = 0; i < $rootScope.contact.length; i++) {
	// 		if ($scope.contact[i].id === index + 1) {
	// 			$scope.editFirstName = $scope.contact[i].firstName;
	// 			$scope.editLastName = $scope.contact[i].lastName;
	// 			$scope.editPhoneNumber = $scope.contact[i].phoneNumber;
	// 			$scope.editEmail = $scope.contact[i].email;
	// 			break;
	// 		}
	// 	}
		
	// }
	$scope.delContact = function(index){
		swal({
			title : "Are you sure ?",
			text : "You will not be able to recover the contact",
			type : "warning",
			showCancelButton : true,
			confirmButtonColor : "#3085d6",
			confirmButtonText : "Yes I know",
			cancelButtonColor : "#d33"
		}).then(function(index){
			$rootScope.contact.splice(index, 1);
			swal("Deleted!", "The Contact Has been successfully removed", "success");
		},function(dismiss){
			if (dismiss === 'cancel') {
				swal('Cancelled','Your Contact is safe','error');
			}
		})
	}
});
contactApp.controller("editContactController",function($scope){
	$scope.title = "Edit Contact";
});