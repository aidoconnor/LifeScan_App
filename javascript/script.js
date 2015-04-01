var fullName = document.getElementById("fullName");
var date_of_birth = document.getElementById("date_of_birth");
var height = document.getElementById("height");
var weight= document.getElementById("weight");
var nationality = document.getElementById("nationality");
var address = document.getElementById("address");
var town = document.getElementById("town");
var county = document.getElementById("county");
var phone = document.getElementById("phone");
var allergy = "";
var reaction = "";
var allergy_array = document.getElementsByName("allergy");
var reaction_array = document.getElementsByName("reaction");
var condition = "";
var start_date= "";
var condition_array= document.getElementsByName("condition");
var start_date_array= document.getElementsByName("start_date");
var emergency_name = "";
var emergency_relationship = "";
var emergency_phone = "";
var emergency_names_array= document.getElementsByName("emergency_name");
var emergency_relationships_array= document.getElementsByName("emergency_relationship");
var emergency_phones_array= document.getElementsByName("emergency_phone");
var med_name = "";
var med_dose = "";
var med_frequency = "";
var med_quantity = "";
var med_name_array = document.getElementsByName("med_name");
var med_dose_array = document.getElementsByName("med_dose");
var med_frequency_array = document.getElementsByName("med_frequency");
var med_quantity_array= document.getElementsByName("med_quantity");
var physician_name= document.getElementById("physician_name");
var physician_address = document.getElementById("physician_address");
var physician_no= document.getElementById("physician_no");
var hospital_name= document.getElementById("hospital_name");
var hospital_phone_no= document.getElementById("hospital_phone_no");
var hospital_address= document.getElementById("hospital_address");
var pharmacy_name= document.getElementById("pharmacy_name");
var pharmacy_address= document.getElementById("pharmacy_address");
var pharmacy_phone_no= document.getElementById("pharmacy_phone_no");
var insurance_name= document.getElementById("insurance_name");
var insurance_holder_name= document.getElementById("insurance_holder_name");
var insurance_member_id= document.getElementById("insurance_member_id");
var insurance_phone_no= document.getElementById("insurance_phone_no");
var imgSize = document.getElementById("selectQrSize");

function getMedicationsList()
{
	med_name = "";
	med_dose = "";
	med_frequency="";
	med_quantity = "";
	for(i=0;i<med_name_array.length;i++)
	{
		var elem=med_name_array[i];
		med_name= med_name + " " + (i+1)  + ") " + elem.value + ".";		
	}

	for(i=0;i<med_dose_array.length;i++)
	{
		var elem=med_dose_array[i];
		med_dose= med_dose+ " " + "Dose for Med No "+ (i+1)  + ") " + elem.value + ".";		
	}

	for(i=0;i<med_frequency_array.length;i++)
	{
		var elem=med_frequency_array[i];
		med_frequency = med_frequency + " " + "Frequency for Med No "+ (i+1)  + ") " + elem.value + ".";		
	}

	for(i=0;i<med_quantity_array.length;i++)
	{
		var elem=med_quantity_array[i];
		med_quantity = med_quantity + " " + "Qty for Med No "+(i+1)  + ") " + elem.value + ".";		
	}

	return med_name + med_dose + med_frequency + med_quantity;
}

function getMedicalConditionList()
{
	condition = "";
	start_date="";

	for(i=0;i<condition_array.length;i++)
	{
		var elem=condition_array[i];
		condition= condition + " " + (i+1)  + ") " + elem.value + ".";		
	}

	for(i=0;i<start_date_array.length;i++)
	{
		var elem=start_date_array[i];
		start_date= start_date + " " + "Start Date for Condition No "+(i+1)  + ") " + elem.value + ".";		
	}

	return condition + start_date;
}

function getAllergyList()
{
	allergy="";
	reaction=""

	for(i=0;i<allergy_array.length;i++)
	{
		var elem=allergy_array[i];
		allergy= allergy + " " + (i+1)  + ") " + elem.value + ".";		
	}

	for(i=0;i<reaction_array.length;i++)
	{
		var elem=reaction_array[i];
		reaction= reaction + " " + "Reaction to Allergy No "+(i+1)  + ") " + elem.value + ".";		
	}
	return allergy + reaction;
}

function getEmergencyContactsList()
{
	emergency_name ="";
	emergency_relationship="";
	emergency_phone="";

for(i=0;i<emergency_names_array.length;i++)
	{
		var elem=emergency_names_array[i];
		emergency_name= emergency_name + " " + (i+1)  + ") " + elem.value + ".";		
	}

for(i=0;i<emergency_relationships_array.length;i++)
	{
		var elem=emergency_relationships_array[i];
		emergency_relationship= emergency_relationship + " " + "Relationship to Contact No "+(i+1)  + ") " + elem.value + ".";		
	}

for(i=0;i<emergency_phones_array.length;i++)
	{
		var elem=emergency_phones_array[i];
		emergency_phone= emergency_phone + " " + "Phone for Contact No "+(i+1)  + ") " + elem.value + ".";		
	}

	return emergency_name + emergency_relationship + emergency_phone;
}

function validateHealthInsurance()
{
	if(insurance_name.value=="")
	{
		alert("Please provide a valid name");
		return;	
	}

	if(insurance_holder_name.value=="")
	{
		alert("Please enter policy holder name");
		return;	
	}

	if(insurance_member_id.value=="")
	{
		alert("Please enter member id");
		return;	
	}

	if(insurance_phone_no.value=="")
	{
		alert("Please enter a phone number");
		return;	
	}

	goToQRScreen();
}

function validatePharmacyDetails()
{
	if(pharmacy_name.value=="")
	{
		alert("Please provide a valid name");
		return;	
	}

	if(pharmacy_address.value=="")
	{
		alert("Please enter a valid address");
		return;	
	}

	if(pharmacy_phone_no.value=="")
	{
		alert("Please enter a phone number");
		return;	
	}
	goToHealthInsurance();
}


function validateHospitalDetails()
{
	if(hospital_name.value=="")
	{
		alert("Please provide a valid name");
		return;	
	}

	if(hospital_address.value=="")
	{
		alert("Please enter a valid address");
		return;	
	}

	if(hospital_phone_no.value=="")
	{
		alert("Please enter a phone number");
		return;	
	}

	goToPharmacyDetails();
}

function validatePhysicianDetails()
{
	if(physician_name.value=="")
	{
		alert("Please provide a valid name");
		return;	
	}

	if(physician_address.value=="")
	{
		alert("Please enter a valid address");
		return;	
	}

	if(physician_no.value=="")
	{
		alert("Please enter a phone number");
		return;	
	}

	goToHospitalDetails();
}

function validateEmergencyContacts()
{
	if(emergency_name.value=="")
	{
		alert("Please provide a valid name");
		return;	
	}

	if(emergency_relationship.value=="")
	{
		alert("Please pick a relationship");
		return;	
	}

	if(emergency_phone.value=="")
	{
		alert("Please enter emergency contact phone number");
		return;	
	}

	getEmergencyContactsList();
	goToPhysicianDetails();
}

function backToPersonalDetails()
{
	document.getElementById('personalDetails').style.display = 'block';
	document.getElementById('contactDetails').style.display = 'none';
}

function goToContactDetails()
{
	document.getElementById('personalDetails').style.display = 'none';
	document.getElementById('contactDetails').style.display = 'block';
}

function backToContactDetails()
{
	document.getElementById('contactDetails').style.display = 'block';
	document.getElementById('medical_information').style.display = 'none';
}

function goToMedicalInformation()
{
	document.getElementById('contactDetails').style.display = 'none';
	document.getElementById('medical_information').style.display = 'block';
}

function backToMedicalInformation()
{
	document.getElementById('medical_information').style.display = 'block';
	document.getElementById('emergency_contacts').style.display = 'none';
}

function goToEmergencyContacts()
{
	document.getElementById('medical_information').style.display = 'none';
	document.getElementById('emergency_contacts').style.display = 'block';
}

function backToEmergencyContacts()
{
	document.getElementById('emergency_contacts').style.display = 'block';
	document.getElementById('physician_details').style.display = 'none';
}

function goToPhysicianDetails()
{
	document.getElementById('emergency_contacts').style.display = 'none';
	document.getElementById('physician_details').style.display = 'block';
}

function backToPhysicianDetails()
{
	document.getElementById('physician_details').style.display = 'block';
	document.getElementById('hospital_details').style.display = 'none';
}

function goToHospitalDetails()
{
	document.getElementById('physician_details').style.display = 'none';
	document.getElementById('hospital_details').style.display = 'block';
}

function backToHospitalDetails()
{
	document.getElementById('hospital_details').style.display = 'block';
	document.getElementById('pharmacy_details').style.display = 'none';
}

function goToPharmacyDetails()
{
	document.getElementById('hospital_details').style.display = 'none';
	document.getElementById('pharmacy_details').style.display = 'block';
}

function backToPharmacyDetails()
{
	document.getElementById('pharmacy_details').style.display = 'block';
	document.getElementById('health_insurance').style.display = 'none';
}

function goToHealthInsurance()
{
	document.getElementById('pharmacy_details').style.display = 'none';
	document.getElementById('health_insurance').style.display = 'block';
}

function backToHealthInsurance()
{
	document.getElementById('health_insurance').style.display = 'block';
	document.getElementById('qrScreen').style.display = 'none';
	
}

function goToQRScreen()
{
	document.getElementById('health_insurance').style.display = 'none';
	document.getElementById('qrScreen').style.display = 'block';
}

function validateMedicalInformation()
{
	getMedicationsList();
	getAllergyList();
	getMedicalConditionList();
	goToEmergencyContacts();
}

function validateContactDetails()
{
	if(address.value=="")
	{
		alert("Please provide your address");
		return;	
	}

	if(town.value=="")
	{
		alert("Please provide your town");
		return;	
	}

	if(county.value=="")
	{
		alert("Please provide your county");
		return;	
	}

	if(phone.value=="")
	{
		alert("Please provide your phone");
		return;	
	}

	goToMedicalInformation();
}


function validatePersonalDetails()
{
	if(fullName.value=="")
	{
		alert("Please provide your name");
		return;	
	}

	if(date_of_birth.value=="")
	{
		alert("Please provide your date of birth");
		return;	
	}
	
	if(height.value=="")
	{
		alert("Please provide your height");
		return;	
	}

	if(weight.value=="")
	{
		alert("Please provide your weight");
		return;	
	}

	if(nationality.value=="")
	{
		alert("Please provide your nationality");
		return;	
	}

	goToContactDetails();
}


function generateQRCode()
{

//URL encoding reference - adds a space between variables
var n = "%0D";

//returns values from arrays
var emergency_names = getEmergencyContactsList();
var allergies_list = getAllergyList();
var medications_list = getMedicationsList();
var medical_conditions = getMedicalConditionList();

//gets value for the width and height the user has selected
var userImgSize = imgSize.options[imgSize.selectedIndex].value;

//parameters passed to Google chart API
var QRText = "Name: " + fullName.value + n + "Date of Birth: " + date_of_birth.value + n + "Height:" + height.value + n +  "Weight: " + weight.value + n +  "Nationality: " + nationality.value + n + "Street Address: " + address.value + n + "Town: " + town.value + n + "County: " + county.value + n + "Phone: " + phone.value + n + "Medication Name: "  + medications_list+ n +  "Allergy: " + allergies_list + n +  "Medical Condition: " + medical_conditions + n + "Emergency Contact: " + emergency_names + n +  "Physician Name: " + physician_name.value + n +  "Physician Address: " + physician_address.value + n +  "Physician Phone No: " +physician_no.value + n + "Hospital Name: " + hospital_name.value + n + "Hospital Phone No: " +  hospital_phone_no.value + n + "Hospital Address: " + hospital_address.value + n + "Pharmacy Name: " + pharmacy_name.value + n +  "Pharmacy Address: " + pharmacy_address.value + n + "Pharmacy Phone No: " + pharmacy_phone_no.value + n +  "Insurance Company: " + insurance_name.value + n + "Policy Holder: "+ insurance_holder_name.value + n +  "Member ID: " + insurance_member_id.value + n + "Insurance Phone No: " +  insurance_phone_no.value;

//sets image to Generated QR code image
document.getElementById("QRImage").src = "http://chart.apis.google.com/chart?cht=qr&chs="+userImgSize+"&chl="+QRText;

//Add a button to download image when QR code is generated
document.getElementById("generated_image").innerHTML = '<a id="generated_image_link" href="http://chart.apis.google.com/chart?cht=qr&chs=150x150&chl="+QRText+".png"><button class="linktoQrCodeButton">QR Code URL</button></a>';

var linkToImage = document.getElementById("generated_image_link");
linkToImage.setAttribute("href", "http://chart.apis.google.com/chart?cht=qr&chs="+userImgSize+"&chl="+QRText+".png");

var qrCodeData = "http://chart.apis.google.com/chart?cht=qr&chs="+userImgSize+"&chl="+QRText;

return qrCodeData;

}

var urlToQrCode = document.getElementById("generated_image_link").href;


