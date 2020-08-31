/**
 * GZhang
 */

function currentDate(){
	var todaysDate = new Date();
document.getElementById("date").innerHTML = todaysDate;
}

function summarizeOrder() {
   
var price1 = 0.0;
var price2 = 0.0;
var price3 = 0.0;
var typeItem = "";
var specialItem = "";
var additionalItem = "";

var total = 0.0;

var type = "";
var special = "";
var additional = "";

type = document.getElementsByName("type");
for (var i = 0; i <type.length ; i++ ){
if (type[i].checked)
{
    price1 = parseFloat(type[i].value);
    typeItem = type[i].id;
}
}

special = document.getElementsByName("special");
for (var i = 0; i <special.length ; i++ ){
if (special[i].checked)
{
    price2 = parseFloat(special[i].value);
    specialItem = special[i].id;
}
}

additional = document.getElementsByName("additional");

if (additional.length == 0)
{
    additionalItem = "Nothing.";
}
else {
for (var i = 0; i < additional.length ; i++ ){
	if (additional[i].checked)
	{
        price3 = price3 + parseFloat(additional[i].value);
        additionalItem = additionalItem + additional[i].id + ". ";
	}
}
if (additionalItem == ""){
	additionalItem = "Nothing.";
}
}

total = price1 + price2 + price3;

    var contactFName = "";
    var contactLName = "";
	var contactAddress = "";
    var contactPhone = "";

		
		contactFName = document.getElementById("fname");
        contactLName = document.getElementById("lname");
        contactAddress = document.getElementById("address");
        contactPhone = document.getElementById("phone");
        
 var type = "";
 var special = "";
 var additional = "";
 type = document.getElementsByName("type");

	// variable to contain error message (if any exists)
	var message = "";

	
	// firstname check
	var boolFirstNameCheck = checkField(contactFName.value);
	if(!boolFirstNameCheck) {
		message += "'Firstname' must be supplied before an order can be completed\n";
		changeClass(contactFName, "error");
		
	} else {
		changeClass(contactFName, "");
    }
    
	// lastname check
	var boolLastNameCheck = checkField(contactLName.value);
	if(!boolLastNameCheck) {
		message += "'Lastname' must be supplied before an order can be completed\n";
		changeClass(contactLName, "error");
		
	} else {
		changeClass(contactLName, "");
	}
	
	// address check	
	var boolAddressCheck = checkField(contactAddress.value);
	if(!boolAddressCheck) {
		message += "'Address' must be supplied before an order can be completed\n";
		changeClass(contactAddress, "error");
	
	} else {
		changeClass(contactAddress, "");
	}

	
	// phone_number check
	var boolPhoneNumCheck = checkField(contactPhone.value);
	if(!boolPhoneNumCheck) {
		message += "'Phone Number' must be supplied before an order can be completed\n";
		changeClass(contactPhone, "error");
	
	} else {
		changeClass(contactPhone, "");
    }

    if(boolFirstNameCheck&&boolLastNameCheck&&
        boolAddressCheck&&boolPhoneNumCheck) {
		var confirmation = "<h3>Order Details</h3>";
        confirmation += "<p> <b>" + contactFName.value + " "; 
        confirmation +=   contactLName.value + "</b><br/>"; 
        confirmation +=  contactAddress.value + "<br/>";
        confirmation +=  contactPhone.value+ "</p>"; 
        confirmation += 
        "<p> " + typeItem + "<br>" +
        "Special: " + specialItem + "<br>" + "Extras: " + additionalItem + "<br>" +
       
         "<h3> Total cost: $" + total.toFixed(2) + "<h3>";
	
		document.getElementById("orderdetails").innerHTML = confirmation;	
 		
	} else {
		alert(message);
		document.getElementById("orderdetails").innerHTML = "<p></p>";
	}
	return false;
}

function changeClass(field, newValue) {
	field.setAttribute("class", newValue);
}

// function to validate content entered by the user
function checkField(fieldValue) {
	var check = true;
	
	fieldValue = fieldValue.trim();
	if(fieldValue.length == 0) {
		check = false;
		return check;	
	}

	return check;	
}

