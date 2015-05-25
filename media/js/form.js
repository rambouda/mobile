//alert('OK');
// ETAPE 1: DECLARATION DES VARIABLES

// form is an empty object that will contain my code
var form = {};
form.text1 = "";

// ETAPE 2: DECLARATION DES FONCTIONS
form.demarrage = function ()
{
	alert('OK');
	// install the on click
	$("#bouton1").on("click", form.click1);
};

form.click1 = function ()
{
	// get what the visitor has input in the form
	form.text1 = $("input#nom").val();
	//sow the result in result div #result1
	$("#result1").html(form.text1);
};

// ETAPE 3: ACTIVATION DU CODE

//tell jquery to activate the function if the page is ready
$(form.demarrage);

