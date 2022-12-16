function initMap(){
	//map options
	var options = {
		zoom: 11,
		center: {lat: 40.7128, lng: -74.0060} //nyc lat & lng
	}
	//new map
	var map = new 
	google.maps.Map(document.getElementById('map'), options);

	/*
	//add marker
	var marker = new google.maps.Marker({
		position: {lat: 40.714003, lng: -73.858929},
		map:map
	});

	//text popup info window
	var infoWindow =  new google.maps.InfoWindow({
		content: '<h1>HELPSY</h1>'
	})
	//on click - shows text popup info window
	marker.addListener('click', function(){
		infoWindow.open(map, marker);
	});
	*/

	//array of markers - add markers here
	var markers = [
		{
			coords:{lat: 40.714003, lng: -73.858929},
			content:'<h4>Vendor Name: Helpsy<br>Address: 75-41 Yellowstone Blvd<br>Phone: 718-275-3800<br>Email: Victor@helpsy.co<br>Website: https://www.helpsy.co<br>Accepting: Clothing, Shoes, Coats, Accessories, Bedding, Towels, Other</h4>'
		},
		{
			coords:{lat: 40.763755, lng: -73.961792},
			content:'<h4>Vendor Name: Housing Works<br>Address: 1222 2 Ave<br>Phone: 347-473-7400<br>Email: info@housingworks.org<br>Website: https://www1.nyc.gov/assets/donate/site/Directory/Details/29/74<br>Accepting: Clothing, Shoes, Coats, Accessories</h4>'
		},
		{
			coords:{lat: 40.613489, lng: -74.12241},
			content:'<h4>Vendor Name: Monkey Girlz Treasures Consignment Boutique<br>Address: 565 Manor Rd<br>Phone: 718-981-0706<br>Email: mkygirlz@gmail.com<br>Website: https://www1.nyc.gov/assets/donate/site/Directory/Details/77/123<br>Accepting: Contact store for details</h4>'
		}
	];

	//loop through markers
	for(var i = 0; i < markers.length; i++){
		//add marker
		addMarker(markers[i]);
	}

/*
	addMarker({
		coords:{lat: 40.714003, lng: -73.858929},
		content:'<h3>Helpsy</h3>'
	});
*/
	//add marker function
	function addMarker(props){
		var marker = new google.maps.Marker({
			position: props.coords,
			map:map,
			//icon:props.iconImage
		});

		//check for custom icon
		if(props.iconImage){
			//set icon image
			marker.setIcon(props.iconImage);
		}

		//check for content
		if(props.content){
			var infoWindow =  new google.maps.InfoWindow({
				content:props.content
			});
			//on click - shows text popup info window
			marker.addListener('click', function(){
				infoWindow.open(map, marker);
			});
		}
	}
}


