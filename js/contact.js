$(document).ready(function(){

	//creating customer object
	var customer = {
					lName   : '',
					phone   : '',
					email   : '', 
					message : ''
					};


	//creating variables
	var	custLastName     =  $('#lName'),
		custEmailAddress =  $('#emailAddress'),
		custPhoneNumber  =  $('#phoneNumber'),
		custMessage      =  $('#message'),
		custContactForm	 =  $('#contactForm');
			  
		
	//function to validate and add data once submit is clicked
	custContactForm.submit(function(){

			//setting variables
			var custLNameVal        = custLastName.val();
			var custEmailAddressVal = custEmailAddress.val();
			var custPhoneNumberVal  = custPhoneNumber.val();
			var custMessageVal      = custMessage.val();
			

			function validateLName(){

				if(custLNameVal.length < 2) {

					//set value to null so placeholder shows
				   $('#lName').val("");

				   //updating placeholder with error message
				   $('#lName').attr('placeholder', 'name must be at least 2 characters');

				   //adding red border for error
				   $('#lName').css('border', '2px solid red');
				   return false;
					}
				else {

					//removing border from error if it exists
					$('#lName').css('border', 'none');
					return true;
				}
	
			} //end function validate name

			function validatePhone(){
			
			    var p = /^[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[0-9]$/;
			
				if(p.test(custPhoneNumberVal)) {

				   //removing border from error if it exists
				   $('#phoneNumber').css('border', 'none');
			  	   return true;
					}
				else {

					//set value to null so placeholder shows
				   $('#phoneNumber').val("");

				    //updating placeholder with error message
				   $('#phoneNumber').attr('placeholder', 'phone must be in format (555-555-5555)');

				   //adding red border for error
				   $('#phoneNumber').css('border', '2px solid red');
					return false;
				}
	
			} //end validate phone function

			function validateEmail(){
			
			    var e = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
			
				if(e.test(custEmailAddressVal)) {

				   //removing border from error if it exists
				   $('#emailAddress').css('border', 'none');
				   return true;
					}
				else {
					//set value to null so placeholder shows
					$('#emailAddress').val("");

					//updating placeholder with error message
					$('#emailAddress').attr('placeholder', 'email must be valid');

					//adding red border for error
				    $('#emailAddress').css('border', '2px solid red');
					return false;
				}
	
			}//end validate email function

			function validateMessage(){
				if(custMessageVal.length < 3) {

				   //set value to null so placeholder shows
				   $('#message').val("");

				   //updating placeholder with error message
				   $('#message').attr('placeholder', 'message must be at least 2 characters');

				   //adding red border for error
				   $('#message').css('border', '2px solid red');
				   return false;
					}
				else {
					//removing border from error if it exists
					$('#message').css('border', 'none');
					return true;
				}
	
			} //end validate message function

			if (validateLName() & validatePhone() & validateEmail() & validateMessage()){

				customer.lName   = custLNameVal;
				customer.phone   = custPhoneNumberVal;
				customer.email   = custEmailAddressVal;
				customer.message = custMessageVal;
				
				//clears data
				customer.lName    = ''; 
				$('#lName').val() = $('#lName.placeholder');
				
				customer.phone          = '';
				$('#phoneNumber').val() = $('#phoneNumber.placeholder');
				
				customer.email           = '';
				$('#emailAddress').val() = $('#emailAddress.placeholder');

				customer.message    = '';
				$('#message').val() = $('#message.placeholder');
			 				
			} //end of IF statement
			
			return false;
			
	}); //end of submit function

}); //end of document ready function