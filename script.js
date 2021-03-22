var callBackGetSucces = function(data) {
	console.log("donnes api",data)
	text="";
	if (Array.isArray(data)){
		for (i = 0; i < data.length; i++){
			text += "<p> "+ data[i].country +" "+ data[i].active +"  <img src="+ data[i].countryInfo.flag +"> </p>";}
	}else{
		text += "<p>"+ data.continent +" "+ data.active +" </p>";
	}
		var element = document.getElementById("covid");
		element.innerHTML = "l etat actuel du covid :" + text; 

	}


	function ButtonClickGet() {

		var isPays = document.getElementById('pays').checked;
		var isContinent = document.getElementById('continent').checked;

		if ( isPays == true ){
			var url = "https://disease.sh/v3/covid-19/countries/"+ zone.value +"";
		} else {
			var url = "https://disease.sh/v3/covid-19/continents/"+ zone.value +"?yesterday=false&twoDaysAgo=false&strict=true&allowNull=false";
		}


		$.get(url, callBackGetSucces).done(function(){
			alert("second success");
		})
		.fail(function(){
			alert("error");
		})
		.always(function(){
			alert("finished");
		});
	}
