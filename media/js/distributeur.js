alert('OK');
// ETAPE 1: DECLARATION DES VARIABLES

var reterer = {};
reterer.some = 0;
// descending order
reterer.nbBillet = [500, 
					200, 
					100, 
					50, 
					20, 
					10, 
					5];
reterer.image = [
	'<img src="media/images/euros-500.jpg">  ',	
	'<img src="media/images/euros-200.jpg">  ',	
	'<img src="media/images/euros-100.jpg">  ',	
	'<img src="media/images/euros-50.jpg">  ',	
	'<img src="media/images/euros-20.jpg">  ',	
	'<img src="media/images/euros-10.jpg">  ',	
	'<img src="media/images/euros-5.jpg">  '

];

// ETAPE 2: DECLARATION DES FONCTIONS
reterer.demarrage = function ()
{
	//alert('demarrage');
	$("#boutonRet").on("click", reterer.retererBillet);
};

reterer.retererBillet = function ()
{
	
	// get the sum value asked for
	reterer.some = $("input#montant").val();
	
	alert("Vous avez reterez:" +  reterer.some);
	
	compteur = 0;

	//$("#result1").html("");

	while (compteur < reterer.nbBillet.length)
	{
		billetEncours = reterer.nbBillet[compteur];
		//alert("combien" + billetEncours);
		
		nbBillet = Math.floor(reterer.some / billetEncours);
		compteurBillet = 0;

		// show the money on screen
		while (compteurBillet < nbBillet)
		{
			$("#result1").append(reterer.image [compteur]);
			compteurBillet++; 
		}

		reterer.some = reterer.some % billetEncours;
		
		compteur++;
	}
	
};

// ETAPE 3: ACTIVATION DU CODE

//tell jquery to activate the function if the page is ready
$(reterer.demarrage);

