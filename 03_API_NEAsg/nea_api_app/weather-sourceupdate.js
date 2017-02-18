$.ajax({
	url:"http://api.nea.gov.sg/api/WebAPI/?dataset=24hrs_forecast&keyref=781CF461BB6606AD814EFA58445F9F5FBEDF1BD98D74F1E9",
	dataType: 'xml',
	// what to do if successful
	// response is the XML sent to us
	success: function(response){

		var rainy = ["BR", "DR", "HG", "HR", "HS", "HT", "LR", "LS", "PS", "RA", "SH", "SN", "SR", "SS", "TL", "WR", "WS"];
		var cloudy = ["CL", "FG", "HZ", "LH", "OC", "PC", "PN", "SW", "WC", "WD", "WF"];
		var sunny = ["FA", "FN", "FW", "SU"];

		var rainyUrl = "url(http://sparklequotes.com/wp-content/uploads/2016/10/Rain-Status-2.jpg)";
		var sunnyUrl = "url(https://youtechassociates.com/wp-content/uploads/2016/03/amazing-sunny-day-wallpaper-1.jpg)";
		
		console.log(response);

		// convert xml to json format
		// so we can read it with javascript
		var json = $.xml2json(response);

		console.log(json);

		var forecast = json.main.forecast;
		console.log(forecast);

		// select the <h1> 
		$('#forecast-id').html(forecast);

		var weather = json.main.wxmain;
		console.log(weather);

		weather="FA";
	
		for (var i in rainy){

			if (rainy[i] == weather){
				console.log("its rainy");
				$('body').css('background-image', rainyUrl);

			}

		}

		for (var i in sunny){

			if (sunny[i]==weather){
				console.log("its sunny");
				$('body').css('background-image', sunnyUrl);
			}
		}



	}

});
