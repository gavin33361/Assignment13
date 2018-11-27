$(document).ready(function(){
	var x = 1;
	$("#myInput").on("click", function(){
		x++;
		if (x%2==0){
			$.ajax({
		//an ajax object - aka a collection of properties and values
		//everything after the ? is a query parameter
		'url': "http://worldclockapi.com/api/json/est/now",
		//different types of AJAX requests-POST, PUT, DELETE, and
		//POST you are updating something in the database
		//PUT you updating something in the database
		//DELETE request you delete from the database
		//Get request you access
		'type': "GET",
		//could be JSON or XML(most likely JSON)
		'dataType': "JSON",
		//break up query parameters
		'data': {
			//'api_key':
		},
		success: function(data){
			//call this function if request works
			console.log(data);
			$('body').append("<p>The current date is " + data.currentDateTime.slice(0,10) + " which is a " + data.dayOfTheWeek+ ".<br><br>" +
				"The utc offset is " + data.utcOffset + ".<br><br>" + "The exact time is " + data.currentDateTime.slice(11,16) + ".<br><br>" + 
				"The time zone is " + data.timeZoneName + ".<br><br>" + "The ordinal date is " + data.ordinalDate + ".<br><br>");
			if (data.isDayLightSavingsTime==true){
				$('p').append("It is daylight savings time.");
			}
			$('body').append('</p>');
			//give me an array of last 10 or less articles with my search
		},
		error: function(data, textStatus, errorThrown){
			//call this function if request throws an error
			console.log("whomp, whomp");
			console.log(errorThrown);
		},
	})}
			else 
			{
				$('p').remove();
			}}
			)})